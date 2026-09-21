# NightLemon Portfolio

NightLemon 的个人作品集：航空、生活工具与 Agent 实验。项目内容集中在 [`content/projects.mjs`](content/projects.mjs)，项目卡片与详情页共用同一份数据；用于 GitHub Profile 的待发布文案在 [`content/profile.md`](content/profile.md)。

## Local development

需要 Node.js。安装依赖后可使用以下命令：

```powershell
npm install
npm run build
npm run preview
npm run check
```

`build` 生成静态站点，`preview` 用于本地查看构建结果，`check` 负责内容与静态输出的检查。可在修改项目文案或链接后依次运行 `npm run build` 与 `npm run check`。

本地预览地址为 `http://127.0.0.1:4310/`。执行 `node scripts/preview-profile.mjs` 后，可在 `http://127.0.0.1:4310/__profile-preview/` 查看 GitHub README 的本地排版；该临时页面位于忽略提交的 `.preview/`，不随个人站发布。使用 Node.js 22 或更高版本。

生产页面为零运行时依赖的 HTML、CSS 和少量原生 JavaScript，无需启动 Node 服务。Playwright、Markdown 渲染和格式化工具仅供开发预览与验收。

## Content and deployment

作品数据是唯一内容来源：新增或调整项目时维护 `content/projects.mjs`，不要在页面组件中复制项目文案。公开项目可以给出工具和源码入口；私人项目只展示案例说明，不添加私有源码、个人后端或设备配对链接。

站点作为静态文件部署。保留现有应用路径及其数据契约，尤其不要改动 `/nado-card/redemptions.json` 订阅源；作品详情使用 `/projects/<id>/`，与已有应用地址分开。发布前需完成构建和检查，并确认公开入口、图片和案例链接可用。

`content/profile.md` 中的 Profile 文案引用计划中的 `/assets/profile-banner.png` 和 `/projects/` 详情页。只有这些页面及资源已上线后，才将它发布到公开 GitHub Profile。
