import { readFile, writeFile, mkdir } from "node:fs/promises";
import { marked } from "marked";
const root = new URL("../", import.meta.url);
const markdown = await readFile(new URL("content/profile.md", root), "utf8");
const styles = await readFile(
  new URL("node_modules/github-markdown-css/github-markdown-light.css", root),
  "utf8",
);
const html = marked
  .parse(markdown)
  .replaceAll(
    "https://nightlemon.github.io/assets/profile-banner.png",
    "/assets/profile-banner.png",
  );
await mkdir(new URL(".preview/", root), { recursive: true });
await writeFile(
  new URL(".preview/profile.html", root),
  `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NightLemon · GitHub README 本地预览</title><style>${styles}
body{margin:0;background:#f6f8fa;color:#1f2328;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Microsoft YaHei",sans-serif}.preview-toolbar{padding:18px 32px;border-bottom:1px solid #d1d9e0;display:flex;align-items:center;justify-content:space-between;font-size:13px;background:white}.preview-toolbar span{font-size:11px;color:#59636e}.readme-box{max-width:980px;margin:32px auto 50px;border:1px solid #d1d9e0;border-radius:6px;background:white;overflow:hidden}.file-title{padding:14px 24px;font-family:monospace;font-size:12px;border-bottom:1px solid #d1d9e0}.markdown-body{box-sizing:border-box;padding:32px;max-width:980px;font-size:14px}.markdown-body h1{font-size:27px}.markdown-body h2{font-size:21px}.markdown-body table{font-size:12px}.markdown-body img{border-radius:3px}.preview-toolbar a{color:inherit;text-decoration:none}@media(max-width:700px){.preview-toolbar{padding:14px 18px}.readme-box{margin:16px 10px}.markdown-body{padding:18px}.preview-toolbar span{max-width:140px;text-align:right;font-size:10px}}</style></head><body><header class="preview-toolbar"><a href="/">← 返回作品集</a><span>GitHub Profile · 本地排版预览，尚未发布</span></header><main class="readme-box"><div class="file-title">NightLemon / README.md</div><article class="markdown-body">${html}</article></main></body></html>`,
);
console.log(
  "Profile preview prepared at /__profile-preview/ (local server only).",
);
