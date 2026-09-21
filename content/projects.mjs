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
    headline: "从一个注册号，认识一架飞机。",
    summary: "查询机型、航司与典型客舱布局，也可以继续探索航司、机型和联盟。",
    description:
      "看到机身上的注册号，想知道它属于哪家航司、是什么机型、可能有怎样的客舱？查机把注册号、机型、航司、联盟和典型客舱布局整理在一个手机友好的查询结果里。它也支持从航司、机型或联盟反向浏览，让一次查询成为继续认识航空资料的起点。",
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
        title: "它解决什么",
        body: "把原本分散在不同资料里的飞机信息放进同一页，方便从一架具体飞机开始认识机型与运营背景。",
      },
      {
        title: "怎样使用",
        body: "输入注册号查看结果，或按航司、机型、地区和联盟筛选，再沿着相关信息继续浏览。",
      },
      {
        title: "为什么这样呈现",
        body: "典型客舱用比例条和图例表达，配合来源与外部查询入口，让信息可以快速阅读，也方便继续核对。",
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
    headline: "让账单、积分和权益，都有着落。",
    summary: "把信用卡、年费任务、积分和活动放在一起，整理下一步要处理的事。",
    description:
      "不同信用卡有各自的账单日、还款日、年费条件和活动规则。Nado Card 将这些零散事项放在一起，帮助整理卡片、积分、活动与待办。它把“我有哪些卡”延伸为“接下来该处理什么”，用本地记录和提醒减少来回核对的成本。",
    status: "私人应用",
    access: "案例与演示",
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
        title: "从卡片到事项",
        body: "除了记录卡片本身，也将年费任务、活动进度和待处理事项放在一起，减少遗漏。",
      },
      {
        title: "把数据留在手边",
        body: "核心记录保存在当前设备，不要求注册账号；提醒由设备本地生成。",
      },
      {
        title: "明确可选连接",
        body: "活动订阅和 AI 图片识别是用户主动开启的能力，分别说明用途与数据流向。",
      },
    ],
    boundary:
      "这是私人应用，案例使用演示数据；可选 AI 图片识别会发送用户主动选择的内容到其配置的服务。",
    nextId: "fund-dashboard",
  },
  {
    id: "fund-dashboard",
    name: "基金看板 · Fund Dashboard",
    enName: "Fund Dashboard",
    category: "生活工具",
    eyebrow: "Personal finance dashboard",
    headline: "把关注的基金，放进一张清楚的看板。",
    summary: "查看基金与个人组合，并区分已公布净值和仍在变化的估算。",
    description:
      "查看基金时，净值、日期、涨跌和个人组合需要放在一起理解。基金看板将这些信息整理成一个轻量的浏览器工具，清楚区分已经公布的净值与根据指数计算的估算，并让数据过期、缺失或上游不可用的状态留在界面上。",
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
        title: "先分清数字的含义",
        body: "已公布净值和模型估值不会混成一个数字，页面保留日期、来源和说明，帮助判断正在看的数据。",
      },
      {
        title: "从搜索到看板",
        body: "可以搜索基金、加入关注，并用自己的本地记录管理组合；示例页面不使用真实个人金额。",
      },
      {
        title: "让异常也可见",
        body: "数据过期、缺失或上游不可用时，界面显示相应状态，而不是以看似准确的数字补上空白。",
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
    headline: "一个逐步长成的个人 AI 工作台。",
    summary:
      "围绕对话、任务与运行状态，探索一个本地优先、可恢复过程的个人 Agent。",
    description:
      "当个人 Agent 从聊天走向任务执行，过程、权限和结果都需要看得清楚。Personal Agent 围绕对话、任务与运行状态持续搭建个人工作台，关注刷新或连接变化后的恢复、访问边界，以及让使用者能分辨模型输出、执行过程和最终状态。",
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
        title: "把过程也交代清楚",
        body: "项目不只显示一段回答，也保留任务的进展、结果和失败状态，让运行过程能够被理解与追踪。",
      },
      {
        title: "为恢复留出依据",
        body: "设计围绕会话和任务的持久状态展开，持续验证刷新或连接变化后继续工作的方式，为恢复过程保留明确依据。",
      },
      {
        title: "访问边界先于扩展",
        body: "通过设备配对和权限边界管理访问；公开案例只展示样例内容，不提供个人后端或配对入口。",
      },
    ],
    boundary:
      "这是持续开发中的私人实例，普通访客不能直接试用；公开案例只展示经整理的样例内容。",
    nextId: "flight-map",
  },
  {
    id: "flight-map",
    name: "Flight Map",
    enName: "Flight Map",
    category: "航空与出行",
    eyebrow: "Aviation reference map",
    headline: "在地图上探索机场、跑道和航空资料。",
    summary: "公开地图以 OurAirports 社区资料为参考，并保留来源与版本说明。",
    description:
      "Flight Map 将机场、跑道、频率和导航台放进可探索的地图中，方便从地理位置出发查看航空资料。公开版采用有来源标注的 OurAirports 社区数据，按视野加载并展示资料细节；本机研究工作流与公开参考地图分开，避免把不同用途和来源混为一谈。",
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
        title: "从地图开始探索",
        body: "缩放到感兴趣的区域后查看机场与设施，选择机场可继续阅读资料、频率和跑道细节。",
      },
      {
        title: "让来源留在页面上",
        body: "公开版展示社区资料的来源和快照信息，帮助使用者理解这张地图来自哪里、适合怎样阅读。",
      },
      {
        title: "分开不同的工作流",
        body: "公开参考层专注于可分享的地图资料；本机研究所用资料与流程独立保存，不混入网页说明。",
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
    headline: "把手机里的照片和视频，备份回家。",
    summary:
      "面向家庭局域网的 Android 照片与视频备份工具，关注上传与校验过程。",
    description:
      "照片和视频往往散落在手机里，也需要一条能回到家中设备的备份路径。Home Photo Backup 探索 Android 与 Windows 之间的家庭局域网备份流程，围绕选择内容、分块上传和校验完成组织体验，让备份过程不只停留在“已开始”的提示上。",
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
        title: "给家庭资料一条回家路线",
        body: "项目关注把手机中的照片和视频备份到家中设备，并让操作步骤能够被普通使用者理解。",
      },
      {
        title: "不只显示上传开始",
        body: "备份流程包含分块上传和校验，让使用者知道内容是否真正完成了传输。",
      },
      {
        title: "演示也保护隐私",
        body: "案例只使用无私人内容的样例素材，避免把照片、设备地址或其他个人信息带进展示页面。",
      },
    ],
    boundary:
      "这是面向本地环境的开源项目；案例不展示真实家庭照片、设备地址或账号信息。",
    nextId: "photo-map",
  },
  {
    id: "photo-map",
    name: "Photo Map · 旅行纳豆",
    enName: "Photo Map",
    category: "照片与记忆",
    eyebrow: "A map of memories",
    headline: "让照片回到拍下它的地方。",
    summary: "用地图、时间与相册重新浏览照片，把分散的影像串成可探索的足迹。",
    description:
      "相册里的照片按时间排列，却常常少了一层地点的线索。Photo Map 把带有位置的影像放回地图，也保留画廊和相册的浏览方式。照片点、行程路线与聚类轨迹可以叠加查看，让一次旅行不只是一组文件，而是一段可以重新走近的记忆。",
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
        title: "从地点找回照片",
        body: "带有位置的照片以缩略图出现在地图上，点击后查看图片信息；没有位置的内容也可以通过画廊浏览。",
      },
      {
        title: "把照片和路线连起来",
        body: "地图可以分别开关照片、行程和聚类轨迹图层，从单张照片走向一段旅程，也能回到相册整理内容。",
      },
      {
        title: "先用样例探索",
        body: "前端提供独立演示模式，不连接个人后端即可浏览内置样例。公开案例使用这些演示内容，实际照片与行程由使用者在自己的环境中管理。",
      },
    ],
    boundary:
      "当前展示的是本机演示模式，没有开放公共照片库。实际使用需要自行配置后端与存储；上传、登录和云端部署未在本案例中验证。",
    nextId: null,
  },
];
