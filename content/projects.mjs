/**
 * Portfolio copy lives here so project cards and detail pages describe the
 * same work. Keep public links and visitor-facing boundaries up to date.
 */
export const projects = [
  {
    id: "aircraft-finder",
    name: "查机 · Aircraft Finder",
    enName: "Aircraft Finder",
    category: "航空与出行",
    eyebrow: "Aviation reference tool",
    headline: "按注册号查找飞机资料。",
    summary: "查询机型、航司、联盟和典型客舱布局。",
    description:
      "按注册号或关键词查找飞机资料，查看机型、航司、联盟和典型客舱布局，并按航司、机型或联盟继续浏览。",
    status: "公开页面",
    access: "网页工具",
    featured: true,
    theme: "sky",
    icon: "plane",
    image: "/assets/images/aircraft-finder.webp",
    imageAlt: "Aircraft Finder 的飞机查询结果界面",
    imageCaption: "示例：从注册号查看飞机与典型客舱资料。",
    repo: "https://github.com/NightLemon/cn-aircraft-finder",
    live: "https://nightlemon.github.io/cn-aircraft-finder/",
    facts: [
      { label: "使用方式", value: "输入注册号或关键词查询" },
      { label: "内容", value: "机型、航司、联盟与典型客舱" },
      { label: "形态", value: "纯静态网页" },
    ],
    sections: [
      {
        title: "查询资料",
        body: "输入注册号或关键词，查看对应飞机的机型、航司和典型客舱。",
      },
      {
        title: "筛选浏览",
        body: "按航司、机型、地区或联盟筛选，打开相关资料。",
      },
      {
        title: "显示来源",
        body: "页面保留来源与外部查询入口；典型客舱使用比例条和图例。",
      },
    ],
    boundary:
      "资料来自公开数据快照；典型客舱不等同于每架飞机的实际配置，页面也不提供实时飞行位置。",
    nextId: "nado-card",
  },
  {
    id: "nado-card",
    name: "Nado Card",
    enName: "Nado Card",
    category: "生活工具",
    eyebrow: "Private card companion",
    headline: "管理信用卡账单、积分和权益。",
    summary: "记录信用卡、账单、年费、积分和活动事项。",
    description:
      "记录信用卡、账单日、还款日、年费条件、积分和活动，将需要处理的事项集中在一个本地工具中。",
    status: "私人应用",
    access: "项目介绍",
    featured: true,
    theme: "sand",
    icon: "card",
    image: "/assets/images/nado-card.webp",
    imageAlt: "Nado Card 中两张虚构卡片的总览界面",
    imageCaption: "真实网页界面；卡片名称、额度与日期均为专门创建的演示数据。",
    repo: null,
    live: null,
    facts: [
      { label: "保存方式", value: "当前设备本地保存" },
      { label: "整理对象", value: "账单、积分、年费与活动" },
      { label: "开放方式", value: "私人应用" },
    ],
    sections: [
      {
        title: "记录卡片事项",
        body: "记录信用卡、年费任务、积分和活动进度。",
      },
      {
        title: "本地保存与提醒",
        body: "核心记录保存在当前设备；设备本地生成提醒。",
      },
      {
        title: "可选连接",
        body: "活动订阅和 AI 图片识别需由用户主动开启，并分别说明用途与数据流向。",
      },
    ],
    boundary:
      "这是私人应用，页面使用演示数据；可选 AI 图片识别会发送用户主动选择的内容到其配置的服务。",
    nextId: "fund-dashboard",
  },
  {
    id: "fund-dashboard",
    name: "基金看板 · Fund Dashboard",
    enName: "Fund Dashboard",
    category: "生活工具",
    eyebrow: "Personal finance dashboard",
    headline: "查看基金净值、估值和个人组合。",
    summary: "搜索基金、加入关注并区分公布净值与模型估值。",
    description:
      "搜索基金、查看净值和日期、加入关注并管理本地组合。页面分开展示已公布净值与模型估值，并显示数据过期、缺失或上游不可用状态。",
    status: "公开页面",
    access: "网页工具",
    featured: true,
    theme: "mint",
    icon: "chart",
    image: "/assets/images/fund-dashboard.webp",
    imageAlt: "Fund Dashboard 的基金与组合看板界面",
    imageCaption: "示例组合使用演示金额。",
    repo: "https://github.com/NightLemon/fund-dashboard",
    live: "https://nightlemon.github.io/fund-dashboard/",
    facts: [
      { label: "数据口径", value: "公布净值与估值分开展示" },
      { label: "记录位置", value: "浏览器本地保存" },
      { label: "使用方式", value: "搜索、关注与组合查看" },
    ],
    sections: [
      {
        title: "区分数据口径",
        body: "已公布净值和模型估值分开显示，保留日期、来源和说明。",
      },
      {
        title: "管理关注与组合",
        body: "搜索基金、加入关注并使用本地记录管理组合；示例页面使用虚构金额。",
      },
      {
        title: "显示异常状态",
        body: "数据过期、缺失或上游不可用时显示对应状态。",
      },
    ],
    boundary:
      "估值不是基金公司公布的官方净值，且行情来源可用性会变化；页面内容不构成收益承诺。",
    nextId: "personal-agent",
  },
  {
    id: "personal-agent",
    name: "Personal Agent",
    enName: "Personal Agent",
    category: "Agent 与自动化",
    eyebrow: "Private AI workspace",
    headline: "管理对话、任务和运行状态。",
    summary: "个人 AI 工作台，包含对话、任务和运行状态。",
    description:
      "Personal Agent 记录对话、任务和运行状态，展示执行进度、结果和失败状态。刷新或连接变化后的恢复流程仍在开发中。",
    status: "开发中",
    access: "私人实例",
    featured: true,
    theme: "night",
    icon: "agent",
    image: "/assets/images/personal-agent.webp",
    imageAlt: "Personal Agent 的设备连接与配对界面",
    imageCaption:
      "真实设备连接界面。个人实例通过后端配置与设备配对访问，图中未填写连接信息。",
    repo: null,
    live: null,
    facts: [
      { label: "关注点", value: "对话、任务与运行状态" },
      { label: "访问方式", value: "私人实例与设备配对" },
      { label: "当前阶段", value: "持续开发中" },
    ],
    sections: [
      {
        title: "查看运行过程",
        body: "显示任务进展、结果和失败状态，区分模型输出与执行过程。",
      },
      {
        title: "会话与任务恢复",
        body: "会话与任务的状态保存和恢复流程仍在开发中。",
      },
      {
        title: "管理访问权限",
        body: "通过设备配对和权限边界管理访问；页面只展示样例，不提供个人后端或配对入口。",
      },
    ],
    boundary:
      "私人实例，持续开发中，暂未提供公开试用。页面展示的是未填写连接信息的设备配对界面。",
    nextId: "flight-map",
  },
  {
    id: "flight-map",
    name: "Flight Map",
    enName: "Flight Map",
    category: "航空与出行",
    eyebrow: "Aviation reference map",
    headline: "在地图上查找机场和航空资料。",
    summary: "浏览机场、跑道、频率和导航台，并查看资料来源。",
    description:
      "在地图上浏览机场、跑道、频率和导航台，按区域查看资料。这里展示的公开版使用 OurAirports 社区数据，按视野加载，并标注资料来源。",
    status: "公开参考版",
    access: "网页地图",
    featured: false,
    theme: "blue",
    icon: "map",
    image: "/assets/images/flight-map.webp",
    imageAlt: "Flight Map 公开参考版的 KJFK 机场资料与地图界面",
    imageCaption: "真实公开参考版：选择 KJFK 机场查看社区资料。数据来自 OurAirports，底图署名见下方。",
    repo: "https://github.com/NightLemon/flight-map",
    live: "https://nightlemon.github.io/flight-map/",
    facts: [
      { label: "公开资料", value: "OurAirports 社区参考数据" },
      { label: "浏览内容", value: "机场、跑道、频率与导航台" },
      { label: "加载方式", value: "按当前地图视野加载" },
    ],
    sections: [
      {
        title: "浏览地图资料",
        body: "缩放地图查看机场与设施，选择机场查看资料、频率和跑道细节。",
      },
      {
        title: "查看来源",
        body: "页面显示公开版资料来源与快照信息。",
      },
    ],
    boundary:
      "公开版是 OurAirports 社区参考层，不是 FAA 全覆盖或航空运行资料，不能用于导航、签派或飞行前简报。",
    nextId: "photo-backup",
  },
  {
    id: "photo-backup",
    name: "Home Photo Backup",
    enName: "Home Photo Backup",
    category: "生活工具",
    eyebrow: "Home media backup",
    headline: "在家庭局域网备份手机照片和视频。",
    summary: "从 Android 选择内容，分块上传到 Windows，并校验结果。",
    description:
      "在 Android 与 Windows 之间通过家庭局域网备份照片和视频，包含选择内容、分块上传和校验结果。",
    status: "开源项目",
    access: "本地部署",
    featured: false,
    theme: "rose",
    icon: "photo",
    image: "/assets/images/photo-backup.webp",
    imageAlt: "Home Photo Backup 手机到家庭存储的流程示意图",
    imageCaption:
      "原创流程示意：选择、传输与校验。这是项目说明插画，不是应用截图。",
    repo: "https://github.com/NightLemon/photo-backup",
    live: null,
    facts: [
      { label: "设备", value: "Android 与 Windows" },
      { label: "网络范围", value: "家庭局域网" },
      { label: "过程", value: "分块上传与校验" },
    ],
    sections: [
      {
        title: "本地备份",
        body: "将手机中的照片和视频备份到家中设备。",
      },
      {
        title: "上传与校验",
        body: "备份流程包含分块上传和文件校验。",
      },
    ],
    boundary:
      "需在家庭局域网自行部署。此处仅展示流程示意，未提供在线试用。",
    nextId: "photo-map",
  },
  {
    id: "photo-map",
    name: "Photo Map · 旅行纳豆",
    enName: "Photo Map",
    category: "照片与地图",
    eyebrow: "Photo map tool",
    headline: "按地点、时间和相册浏览照片。",
    summary: "通过地图和相册浏览照片，在地图上叠加行程路线。",
    description:
      "Photo Map 提供地图、画廊和相册视图，支持照片、行程和聚类轨迹图层。演示模式使用内置 Unsplash 样图、公开地标与虚构路线，不代表个人照片或轨迹。",
    status: "开发中",
    access: "本地部署",
    featured: false,
    theme: "sage",
    icon: "photo",
    image: "/assets/images/photo-map.webp",
    imageAlt: "Photo Map 演示模式中的世界地图、样例照片点与行程路线",
    imageCaption:
      "真实前端的演示模式：使用项目内置的 Unsplash 样图、地标坐标与虚构路线，不代表个人旅行记录。底图为 OpenStreetMap。",
    repo: "https://github.com/NightLemon/photo-map-app",
    live: null,
    facts: [
      { label: "浏览方式", value: "地图、画廊与相册" },
      { label: "地图图层", value: "照片、行程与聚类轨迹" },
      { label: "当前阶段", value: "持续开发，可本地运行演示" },
    ],
    sections: [
      {
        title: "查看照片",
        body: "带有位置的照片以缩略图出现在地图上，点击后查看图片信息；没有位置的内容也可以通过画廊浏览。",
      },
      {
        title: "切换图层",
        body: "在地图上分别开关照片、行程和聚类轨迹图层。",
      },
      {
        title: "浏览演示",
        body: "前端提供独立演示模式，不连接个人后端即可浏览内置样例。实际使用需要配置自己的后端和存储。",
      },
    ],
    boundary:
      "页面展示的是本机演示模式，没有开放公共照片库。上传、登录和云端部署未在此次展示中验证。",
    nextId: null,
  },
];
