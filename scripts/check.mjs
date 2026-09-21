import { readFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import assert from "node:assert/strict";
import { projects } from "../content/projects.mjs";
const root = fileURLToPath(new URL("../", import.meta.url));
const pages = [
  "index.html",
  "directory/index.html",
  "404.html",
  ...projects.map((p) => `projects/${p.id}/index.html`),
];
const checked = new Set();
const problems = [];
assert.equal(projects.length, 7);
assert.equal(new Set(projects.map((p) => p.id)).size, 7);
assert.equal(projects.filter((p) => p.featured).length, 4);
assert.ok(projects.some((p) => p.id === "photo-map"));
assert.equal(
  projects.find((p) => p.id === "photo-map").repo,
  "https://github.com/NightLemon/photo-map-app",
);
assert.ok(!projects.some((p) => p.id === "us-trip"));
for (const removed of [
  "projects/us-trip/index.html",
  "assets/images/us-trip.png",
  "assets/images/us-trip.webp",
  "assets/illustrations/us-trip.svg",
]) {
  await assert.rejects(stat(path.join(root, removed)), { code: "ENOENT" });
}
for (const file of [...pages, "content/profile.md", "sitemap.xml"]) {
  assert.doesNotMatch(
    await readFile(path.join(root, file), "utf8"),
    /us[ -]trip/i,
    `${file}: removed personal project still referenced`,
  );
}
for (const p of projects.filter((p) =>
  ["nado-card", "personal-agent"].includes(p.id),
)) {
  assert.equal(p.repo, null);
  assert.equal(p.live, null);
}
for (const file of pages) {
  const html = await readFile(path.join(root, file), "utf8");
  assert.match(html, /<html lang="zh-CN">/);
  assert.equal(
    (html.match(/<h1[ >]/g) || []).length,
    1,
    `${file}: one h1 required`,
  );
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(ids.length, new Set(ids).size, `${file}: duplicate IDs`);
  for (const match of html.matchAll(
    /\b(?:href|src|data-lightbox-src)="([^"]+)"/g,
  )) {
    const url = match[1];
    if (url.startsWith("http")) continue;
    if (url.startsWith("#")) {
      if (!ids.includes(url.slice(1)))
        problems.push(`${file}: missing anchor ${url}`);
      continue;
    }
    const target = url.split("#")[0].split("?")[0];
    if (!target.startsWith("/")) continue;
    const normalized = target.endsWith("/") ? `${target}index.html` : target;
    if (!checked.has(normalized)) {
      checked.add(normalized);
      try {
        await stat(path.join(root, normalized));
      } catch {
        problems.push(`${file}: missing ${normalized}`);
      }
    }
  }
  for (const img of html.matchAll(/<img\b[^>]*>/g))
    assert.match(img[0], /\balt="[^"]*"/, `${file}: image alt missing`);
  assert.doesNotMatch(
    html,
    /github\.com\/NightLemon\/(?:nado-card|personal-agent)(?:["/#])/i,
    `${file}: private source link`,
  );
}
const feed = JSON.parse(
  await readFile(path.join(root, "nado-card/redemptions.json"), "utf8"),
);
assert.ok(
  feed && typeof feed === "object",
  "subscription feed remains valid JSON",
);
await stat(path.join(root, ".nojekyll"));
await stat(path.join(root, "assets/profile-banner.png"));
assert.deepEqual(problems, []);
console.log(
  `PASS: ${pages.length} pages, ${checked.size} local paths, 7 project records, accessible image labels, private project links and subscription JSON.`,
);
