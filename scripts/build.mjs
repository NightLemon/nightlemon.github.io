import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { projects } from "../content/projects.mjs";

const root = fileURLToPath(new URL("../", import.meta.url));
const origin = "https://nightlemon.github.io";
const imageSizes = {
  "aircraft-finder": [676, 423],
  "nado-card": [430, 880],
  "fund-dashboard": [1000, 580],
  "personal-agent": [1000, 640],
  "flight-map": [1160, 760],
  "photo-backup": [1160, 760],
  "photo-map": [1160, 760],
};
const esc = (value = "") =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const icons = {
  arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
  external: '<path d="M7 17 17 7M6 7h11v11"/>',
  plane:
    '<path d="m3 10 7 2 6 8 2-1-3-8 5-5c2-2 0-4-2-2l-5 5-8-3-1 2 6 4-4 3-3-1-1 1 4 3 3-4"/>',
  card: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M3 10h18M7 15h4"/>',
  chart: '<path d="M4 4v16h17M8 14l4-5 4 3 5-7"/>',
  agent:
    '<path d="m12 3 2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z"/>',
  map: '<path d="m9 18-6 3V5l6-3 6 3 6-3v16l-6 3-6-3ZM9 2v16M15 5v16"/>',
  photo:
    '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8" cy="8" r="1.5"/><path d="m3 17 6-6 4 4 3-3 5 5"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m16 8-3 5-5 3 3-5Z"/>',
  github:
    '<path d="M9 19c-4 1-4-2-5-2m10 4v-3.5c.1-1-.3-1.5-.6-1.8 3.3-.4 6.8-1.6 6.8-7.3 0-1.6-.6-2.8-1.6-3.9.2-.4.7-1.9-.2-3.8 0 0-1.3-.4-4.2 1.5a14 14 0 0 0-7.6 0C4.7.3 3.4.7 3.4.7c-.9 1.9-.4 3.4-.2 3.8a5.7 5.7 0 0 0-1.6 3.9c0 5.7 3.5 6.9 6.8 7.3-.4.4-.7 1.1-.7 2.1V21" transform="translate(2 1) scale(.85)"/>',
};
const icon = (name, className = "icon") =>
  `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.arrow}</svg>`;
const logo = `<a class="wordmark" href="/" aria-label="NightLemon 首页"><img src="/assets/lemon.svg" width="34" height="34" alt=""/><span>nightlemon<span class="wordmark-dot">.</span></span></a>`;
function header(isHome = false) {
  return `<a class="skip-link" href="#main">跳到主要内容</a><header class="site-header"><div class="header-inner">${logo}<nav aria-label="主导航"><a href="${isHome ? "" : "/"}#work">作品</a><a href="${isHome ? "" : "/"}#about">关于</a><a class="nav-github" href="https://github.com/NightLemon" target="_blank" rel="noopener noreferrer">GitHub ${icon("external")}</a></nav></div></header>`;
}
function footer() {
  return `<footer class="site-footer"><div><a class="footer-name" href="/">NightLemon</a><p>Personal projects</p></div><div class="footer-links"><a href="/directory/">项目索引</a><a href="/nado-card/redemptions.json">活动订阅源</a><a href="https://github.com/NightLemon" target="_blank" rel="noopener noreferrer">GitHub ${icon("external")}</a></div><span class="copyright">© ${new Date().getUTCFullYear()} NightLemon</span></footer>`;
}
function document(title, description, route, body, bodyClass = "") {
  return `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="color-scheme" content="light"/><meta name="theme-color" content="#f7f7f2"/><meta name="description" content="${esc(description)}"/><meta name="referrer" content="strict-origin-when-cross-origin"/><title>${esc(title)}</title><link rel="canonical" href="${origin}${route}"/><link rel="icon" type="image/svg+xml" href="/assets/lemon.svg"/><meta property="og:type" content="website"/><meta property="og:locale" content="zh_CN"/><meta property="og:title" content="${esc(title)}"/><meta property="og:description" content="${esc(description)}"/><meta property="og:url" content="${origin}${route}"/><meta property="og:image" content="${origin}/assets/profile-banner.png"/><meta name="twitter:card" content="summary_large_image"/><link rel="stylesheet" href="/assets/site.css"/><script defer src="/assets/site.js"></script></head><body class="${bodyClass}">${body}</body></html>`;
}
function cover(p, index, small = false) {
  const isPhone = p.id === "nado-card";
  const [width, height] = imageSizes[p.id];
  const note = ["nado-card", "fund-dashboard"].includes(p.id)
    ? "真实界面 · 演示数据"
    : p.id === "photo-map"
      ? "演示数据 · © OpenStreetMap"
    : p.id === "personal-agent"
      ? "连接界面 · 私人实例"
      : p.id === "photo-backup"
        ? "项目示意"
        : p.id === "flight-map"
          ? "© OpenStreetMap contributors"
          : "真实界面";
  return `<div class="project-cover theme-${p.theme}${isPhone ? " phone-cover" : ""}${small ? " small-cover" : ""}"><span class="cover-code">${esc(p.enName)} <span>/ ${String(index + 1).padStart(2, "0")}</span></span><span class="cover-symbol">${icon(p.icon)}</span><div class="preview-window ${isPhone ? "phone-window" : ""}">${!isPhone ? '<div class="window-chrome"><i></i><i></i><i></i><span>' + esc(p.enName) + "</span></div>" : ""}<img src="${esc(p.image)}" alt="${esc(p.imageAlt)}" width="${width}" height="${height}" loading="${index < 4 ? "eager" : "lazy"}" decoding="async"/></div><span class="cover-note">${note}</span></div>`;
}
function projectCard(p, index) {
  return `<a class="project-card" href="/projects/${p.id}/" aria-labelledby="name-${p.id}">${cover(p, index)}<div class="card-topline"><span class="project-category">${esc(p.category)}</span><span class="project-status"><i class="status-dot ${p.repo ? "" : "status-private"}"></i>${esc(p.status)}</span></div><div class="card-title"><h3 id="name-${p.id}">${esc(p.name)}</h3><span class="round-arrow">${icon("external")}</span></div><p class="card-headline">${esc(p.headline)}</p><p class="card-summary">${esc(p.summary)}</p></a>`;
}
function home() {
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);
  return document(
    "NightLemon — 个人项目与工具",
    "航空、生活工具与个人 Agent。NightLemon 的个人作品集。",
    "/",
    `${header(true)}<main id="main"><section class="hero wrap" aria-labelledby="hero-title"><div class="hero-copy"><p class="eyebrow"><span class="little-spark">✳</span> PERSONAL PROJECTS</p><h1 id="hero-title">个人项目，<br/><span class="lemon-underline">工具与实验。</span></h1><p class="hero-description">航空查询、信用卡管理、基金看板、照片工具和个人 Agent。<br class="desktop-break"/>这里整理了项目介绍、演示截图和公开源码。</p><a class="text-button" href="#work">浏览项目 ${icon("arrow")}</a></div><div class="hero-art" aria-hidden="true"><div class="orbit orbit-one"></div><div class="orbit orbit-two"></div><span class="orbit-dot"></span><img src="/assets/lemon.svg" width="172" height="172" alt=""/><span class="hero-art-caption">PERSONAL<br/><span>PROJECTS.</span></span><span class="art-note">AVIATION / TOOLS / AGENTS</span></div></section><section class="work-section wrap" id="work" aria-labelledby="work-title"><div class="section-heading"><div><p class="eyebrow">SELECTED WORK / 01—04</p><h2 id="work-title">主要项目<span class="accent-dot">.</span></h2></div><p>包含公开网页和私人应用。<br/>当前状态和使用方式见项目介绍。</p></div><div class="project-grid">${featured.map(projectCard).join("")}</div></section><section class="more-section wrap" aria-labelledby="more-title"><div class="section-heading compact-heading"><div><p class="eyebrow">MORE PROJECTS</p><h2 id="more-title">更多项目<span class="accent-dot">.</span></h2></div><span class="section-note">航空 / 照片 / 备份</span></div><div class="more-grid">${more.map((p, i) => `<a class="small-project" href="/projects/${p.id}/">${cover(p, i + 4, true)}<div class="small-project-title"><h3>${esc(p.name)}</h3>${icon("external")}</div><p>${esc(p.summary)}</p></a>`).join("")}</div></section><section class="about-section wrap" id="about" aria-labelledby="about-title"><div class="about-mark" aria-hidden="true"><img src="/assets/lemon.svg" width="86" height="86" alt=""/><span>NIGHTLEMON</span></div><div class="about-copy"><p class="eyebrow">ABOUT</p><h2 id="about-title">关于这些项目</h2><p>这些是我开发的个人项目，涵盖航空资料查询、生活管理、照片处理和 AI 工具。</p><p>公开项目提供使用或源码入口，私人应用提供功能说明和演示截图。</p><a class="text-button" href="https://github.com/NightLemon" target="_blank" rel="noopener noreferrer">GitHub 主页 ${icon("external")}</a></div></section></main>${footer()}`,
    "home",
  );
}
function detail(p) {
  const index = projects.indexOf(p);
  const next =
    projects.find((q) => q.id === p.nextId) ||
    projects[(index + 1) % projects.length];
  return document(
    `${p.name} — NightLemon`,
    p.summary,
    `/projects/${p.id}/`,
    `${header()}<main id="main" class="case-main wrap"><a class="back-link" href="/#work">${icon("arrow")} 返回作品集</a><section class="case-intro"><div><p class="eyebrow">${esc(p.eyebrow)} / ${String(index + 1).padStart(2, "0")}</p><h1>${esc(p.name)}</h1><p class="case-headline">${esc(p.headline)}</p></div><div class="case-actions"><span class="status-label"><i class="status-dot ${p.repo ? "" : "status-private"}"></i>${esc(p.status)} · ${esc(p.access)}</span><div class="action-row">${p.live ? `<a class="button button-dark" href="${esc(p.live)}" target="_blank" rel="noopener noreferrer">打开${p.id === "fund-dashboard" ? "看板" : p.id === "aircraft-finder" ? "查机" : "工具"} ${icon("external")}</a>` : ""}${p.repo ? `<a class="button button-outline" href="${esc(p.repo)}" target="_blank" rel="noopener noreferrer">查看源码 ${icon("github")}</a>` : '<span class="private-note">暂未提供公开试用</span>'}</div></div></section><figure class="case-figure"><a class="case-image-button" href="${esc(p.image)}" data-lightbox-src="${esc(p.image)}" data-caption="${esc(p.imageCaption)}" aria-label="放大${esc(p.name)}的展示图">${cover(p, index)}<span class="zoom-label">查看大图 ${icon("external")}</span></a><figcaption>${esc(p.imageCaption)}${["flight-map", "photo-map"].includes(p.id) ? ' <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">© OpenStreetMap contributors</a>' : ""}</figcaption></figure><section class="case-story" aria-labelledby="story-title"><div class="story-main"><p class="eyebrow">OVERVIEW</p><h2 id="story-title">项目介绍</h2><p class="story-lead">${esc(p.description)}</p>${p.sections.map((s, i) => `<section class="story-section"><span class="story-number">0${i + 1}</span><div><h3>${esc(s.title)}</h3><p>${esc(s.body)}</p></div></section>`).join("")}</div><aside class="case-facts" aria-label="项目资料"><p class="eyebrow">PROJECT NOTES</p><dl>${p.facts.map((f) => `<div><dt>${esc(f.label)}</dt><dd>${esc(f.value)}</dd></div>`).join("")}<div><dt>代码</dt><dd>${p.repo ? "公开源码" : "私人项目"}</dd></div></dl><div class="boundary"><h3>使用说明</h3><p>${esc(p.boundary)}</p></div></aside></section><a class="next-project" href="/projects/${next.id}/"><div><p class="eyebrow">NEXT PROJECT</p><h2>${esc(next.name)}</h2><p>${esc(next.headline)}</p></div><span class="next-arrow">${icon("arrow")}</span></a></main>${footer()}<dialog class="image-dialog" aria-label="项目展示图"><button class="dialog-close" type="button" aria-label="关闭大图">×</button><figure><img alt=""/><figcaption></figcaption></figure></dialog>`,
    "case-page",
  );
}
function directory() {
  const resources = [
    ["About LLM", "大模型原理、应用、系统与评测", "about-llm"],
    ["About Harness", "Agent 工作环境、工具、权限与评测", "about-harness"],
    [
      "GPU & AI Systems",
      "GPU、CUDA、训练与推理系统",
      "gpu-ai-systems-learning",
    ],
    [
      "LLM Serving Deep Dive",
      "KV Cache、调度与生产部署",
      "llm-serving-deep-dive",
    ],
    ["Paper Reading", "论文精读与笔记", "paper-reading"],
    ["算法训练", "算法课程与进度追踪", "acm"],
    ["Study Deck", "可导入题库的学习工具", "study-deck"],
  ];
  return document(
    "项目索引 — NightLemon",
    "NightLemon 的作品、文档与数据服务入口。",
    "/directory/",
    `${header()}<main id="main" class="directory wrap"><a class="back-link" href="/">${icon("arrow")} 返回首页</a><p class="eyebrow">THE COMPLETE INDEX</p><h1>项目索引<span class="accent-dot">.</span></h1><p class="directory-intro">项目、文档和数据服务入口。</p><h2>作品</h2><div class="directory-list">${projects.map((p) => `<a href="/projects/${p.id}/"><strong>${esc(p.name)}</strong><span>${esc(p.summary)}</span>${icon("external")}</a>`).join("")}</div><h2>文档与学习</h2><div class="directory-list">${resources.map(([n, d, u]) => `<a href="${origin}/${u}/"><strong>${esc(n)}</strong><span>${esc(d)}</span>${icon("external")}</a>`).join("")}</div><h2>数据服务</h2><div class="directory-list"><a href="/nado-card/redemptions.json"><strong>Nado Card 活动订阅源</strong><span>信用卡权益与活动订阅数据</span>${icon("external")}</a></div></main>${footer()}`,
  );
}
const routes = [
  ["index.html", home()],
  ...projects.map((p) => [`projects/${p.id}/index.html`, detail(p)]),
  ["directory/index.html", directory()],
  [
    "404.html",
    document(
      "没有找到这一页 — NightLemon",
      "返回 NightLemon 的个人作品集。",
      "/404.html",
      `${header()}<main id="main" class="not-found wrap"><p class="eyebrow">404 / NOT FOUND</p><h1>页面不存在。</h1><p>请检查地址，或返回作品集。</p><a class="button button-dark" href="/">回到首页 ${icon("arrow")}</a></main>${footer()}`,
    ),
  ],
];
for (const [file, html] of routes) {
  await mkdir(path.dirname(path.join(root, file)), { recursive: true });
  await writeFile(path.join(root, file), html + "\n");
}
await writeFile(
  path.join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${["/", "/directory/", ...projects.map((p) => `/projects/${p.id}/`)].map((route) => `<url><loc>${origin}${route}</loc></url>`).join("")}</urlset>\n`,
);
await writeFile(
  path.join(root, "robots.txt"),
  `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`,
);
console.log(
  `Built ${routes.length} static pages. Existing application paths and subscription feed preserved.`,
);
