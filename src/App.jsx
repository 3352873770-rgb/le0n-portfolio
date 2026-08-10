import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  BookOpen,
  Box,
  Code2,
  Download,
  GraduationCap,
  Link2,
  LoaderCircle,
  MapPin,
  MessageCircle,
  Palette,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
  UserRound,
  PenTool,
  Workflow,
  Wrench,
  X,
} from "lucide-react";
import le0nWordmark from "../assets/le0n-wordmark-transparent.png";
import profileAvatar from "../assets/profile-avatar-editorial.jpg";
import resumePortrait from "../assets/resume-portrait-yellow.png";
import yueWelcome from "../assets/yueerting/01-welcome.png";
import uiPortfolioCover from "../assets/yueerting/ui-portfolio-cover.png";
import yueStylePreference from "../assets/yueerting/02-style-preference.png";
import yueArtistPreference from "../assets/yueerting/03-artist-preference.png";
import yueExplore from "../assets/yueerting/05-explore.png";
import yueSearch from "../assets/yueerting/06-search.png";
import yueAlbum from "../assets/yueerting/07-album.png";
import yueSong from "../assets/yueerting/08-song.png";
import yuePlayer from "../assets/yueerting/09-player.png";
import yueRadar from "../assets/yueerting/10-radar.png";
import yueLibrary from "../assets/yueerting/11-library.png";
import yuePlaylist from "../assets/yueerting/12-playlist.png";
import yueLogin from "../assets/yueerting/13-login.png";
import yueArtistDiscovery from "../assets/yueerting/14-artist-discovery.png";
import yueArtistProfile from "../assets/yueerting/15-artist-profile.png";
import yueArtistWorks from "../assets/yueerting/16-artist-works.png";
import yueMv from "../assets/yueerting/17-mv.png";
import yueSearchLibrary from "../assets/yueerting/18-search-library.png";
import yueAlbumStory from "../assets/yueerting/19-album-story.png";
import yueLyrics from "../assets/yueerting/20-lyrics.png";
import yueDownloads from "../assets/yueerting/21-downloads.png";
import yuePurchasedAlbum from "../assets/yueerting/22-purchased-album.png";
import assetGuardAccountLogin from "../assets/assetguard/01-account-login.jpg";
import assetGuardQrLogin from "../assets/assetguard/02-qr-login.jpg";
import assetGuardProfessionSelect from "../assets/assetguard/03-profession-select.jpg";
import assetGuardQuickAccess from "../assets/assetguard/04-quick-access.jpg";
import assetGuardLibrary from "../assets/assetguard/05-asset-library.jpg";
import assetGuardAssetPreview from "../assets/assetguard/06-asset-preview.jpg";
import assetGuardInspiration from "../assets/assetguard/07-inspiration-board.jpg";
import assetGuardTagManagement from "../assets/assetguard/08-tag-management.jpg";
import assetGuardLibraryUpload from "../assets/assetguard/09-library-upload.jpg";
import assetGuardWorkflowUpload from "../assets/assetguard/10-workflow-upload.jpg";
import assetGuardPhotoshopWorkflow from "../assets/assetguard/11-photoshop-workflow.jpg";
import assetGuardAccountProfile from "../assets/assetguard/12-account-profile.jpg";
import emotionPetCreation from "../assets/emotion-pet/01-pet-creation.png";
import emotionPetHome from "../assets/emotion-pet/02-pet-home.png";
import emotionPetSelfieGuide from "../assets/emotion-pet/03-selfie-guide.png";
import emotionPetVideoCapture from "../assets/emotion-pet/04-video-capture.png";
import emotionPetAnalysisLoading from "../assets/emotion-pet/05-analysis-loading.png";
import emotionPetObservationResult from "../assets/emotion-pet/06-observation-result.png";
import redEnvelopeDailyCheckin from "../assets/red-envelope/01-daily-checkin.png";
import redEnvelopeGrab from "../assets/red-envelope/02-red-envelope-grab.png";
import redEnvelopeLuckyDraw from "../assets/red-envelope/03-lucky-draw.png";
import redEnvelopeWithdrawal from "../assets/red-envelope/04-cash-withdrawal.png";
import teaLobby from "../assets/tea-ui/01-lobby.png";
import teaServingComplete from "../assets/tea-ui/02-serving-complete.png";
import teaWarmCup from "../assets/tea-ui/03-warm-cup.png";
import teaWhiskTea from "../assets/tea-ui/04-whisk-tea.png";
import teaRinseTea from "../assets/tea-ui/05-rinse-tea.png";
import teaPlaceTea from "../assets/tea-ui/06-place-tea.png";
import teaHighPour from "../assets/tea-ui/07-high-pour.png";
import teaLedgerModal from "../assets/tea-ui/08-tea-ledger-modal.png";
import teaConcept01 from "../assets/tea-ui/09-concept-20260531-155137.png";
import teaConcept02 from "../assets/tea-ui/10-concept-20260531-160828.png";
import teaConcept03 from "../assets/tea-ui/11-concept-20260531-164304.png";
import teaConcept04 from "../assets/tea-ui/12-concept-20260531-220850.png";
import teaConcept05 from "../assets/tea-ui/13-concept-20260601-095020.png";
import teaConcept06 from "../assets/tea-ui/14-concept-20260602-175013.png";
import teaConcept07 from "../assets/tea-ui/15-concept-20260602-180156.png";
import teaConcept08 from "../assets/tea-ui/16-concept-20260603-163218.png";
import teaConcept09 from "../assets/tea-ui/17-concept-20260603-173256.png";
import teaProjectCover from "../assets/tea-ui/tea-project-cover-night.png";
import photoCampusAfternoon from "../assets/photography/01-campus-afternoon.jpg";
import photoCrosswalkMotion from "../assets/photography/02-crosswalk-motion.jpg";
import photoAmberStairway from "../assets/photography/03-amber-stairway.jpg";
import photoNightNoodleShop from "../assets/photography/04-night-noodle-shop.jpg";
import photoFloweringStreet from "../assets/photography/05-flowering-street.jpg";
import photoTwilightSilhouette from "../assets/photography/06-twilight-silhouette.jpg";
import photoRiverfrontGoldenHour from "../assets/photography/07-riverfront-golden-hour.jpg";
import photoSeasideLight from "../assets/photography/08-seaside-light.jpg";
import photoWallShadows from "../assets/photography/09-wall-shadows.jpg";
import posterIWatch from "../assets/posters/01-i-watch-smartwatch.png";
import posterSlowlyCoffeeBrandBoard from "../assets/posters/02-slowly-coffee-brand-board.png";
import posterSlowlyCoffeePackagingScene from "../assets/posters/03-slowly-coffee-packaging-scene.png";
import posterDaylightSlowWake from "../assets/posters/04-daylight-slow-wake-coconut-latte.png";
import qianshanCharacterHero from "../assets/qianshan-ip/character-hero.png";
import qianshanCharacterTurnaround from "../assets/qianshan-ip/character-turnaround.png";
import qianshanExpressionHappy from "../assets/qianshan-ip/expression-happy.png";
import qianshanExpressionSurprised from "../assets/qianshan-ip/expression-surprised.png";
import qianshanExpressionWink from "../assets/qianshan-ip/expression-wink.png";
import qianshanExpressionCool from "../assets/qianshan-ip/expression-cool.png";
import qianshanApplicationBag from "../assets/qianshan-ip/application-bag.png";
import qianshanApplicationNotebook from "../assets/qianshan-ip/application-notebook.png";
import qianshanApplicationMug from "../assets/qianshan-ip/application-mug.png";

const navItems = [
  { href: "#profile", label: "关于我" },
  { href: "#work", label: "作品集" },
  { href: "#experience", label: "经历" },
  { href: "#capabilities", label: "我的能力" },
  { href: "#contact", label: "联系我" },
];

const appBasePath = import.meta.env.BASE_URL === "/"
  ? ""
  : import.meta.env.BASE_URL.replace(/\/$/, "");

const portfolioUrl = "https://3352873770-rgb.github.io/le0n-portfolio/#profile";

function getCurrentPagePath() {
  const { pathname } = window.location;

  if (!appBasePath) {
    return pathname;
  }

  if (pathname === appBasePath || pathname === `${appBasePath}/`) {
    return "/";
  }

  return pathname.startsWith(`${appBasePath}/`)
    ? pathname.slice(appBasePath.length)
    : pathname;
}

function getAppPath(path) {
  return path === "/" ? `${appBasePath}/` : `${appBasePath}${path}`;
}

const workCategories = [
  {
    id: "ui",
    title: "UI界面作品集",
    body: "展示UI设计作品",
    image: uiPortfolioCover,
    tone: "soft",
  },
  {
    id: "frontend",
    title: "客官请喝茶",
    label: "React / Vite / Interaction",
    body: "游戏 UI 界面设计师",
    image: teaProjectCover,
    tone: "electric",
  },
  {
    id: "brand",
    title: "品牌视觉设计",
    body: "品牌识别、视觉系统与延展设计。",
    image: qianshanCharacterHero,
    tone: "neutral",
  },
  {
    id: "posterDesign",
    title: "海报作品",
    body: "产品视觉与商业信息长图设计",
    image: posterIWatch,
    tone: "soft",
  },
  {
    id: "poster",
    title: "摄影作品",
    label: "Poster / Layout / Visual",
    body: "用于放置我的摄影作品",
    image: photoCampusAfternoon,
    tone: "warm",
  },
];

const qianshanExpressions = [
  { id: "happy", src: qianshanExpressionHappy, alt: "千山农场 IP 开心表情" },
  { id: "surprised", src: qianshanExpressionSurprised, alt: "千山农场 IP 惊讶表情" },
  { id: "wink", src: qianshanExpressionWink, alt: "千山农场 IP 眨眼表情" },
  { id: "cool", src: qianshanExpressionCool, alt: "千山农场 IP 墨镜表情" },
];

const yueErTingScreens = [
  { id: "login", src: yueLogin, alt: "悦耳听手机号登录界面" },
  { id: "welcome", src: yueWelcome, alt: "悦耳听欢迎与首次进入界面" },
  { id: "style", src: yueStylePreference, alt: "悦耳听音乐风格偏好选择界面" },
  { id: "artist", src: yueArtistPreference, alt: "悦耳听歌手偏好选择界面" },
  { id: "explore", src: yueExplore, alt: "悦耳听探索音乐界面" },
  { id: "artist-discovery", src: yueArtistDiscovery, alt: "悦耳听歌手发现与榜单界面" },
  { id: "artist-profile", src: yueArtistProfile, alt: "悦耳听歌手详情与 MV 界面" },
  { id: "artist-works", src: yueArtistWorks, alt: "悦耳听歌手代表作品界面" },
  { id: "mv", src: yueMv, alt: "悦耳听 MV 专区界面" },
  { id: "search-library", src: yueSearchLibrary, alt: "悦耳听音乐分类搜索界面" },
  { id: "search", src: yueSearch, alt: "悦耳听搜索界面" },
  { id: "radar", src: yueRadar, alt: "悦耳听音乐雷达界面" },
  { id: "album", src: yueAlbum, alt: "悦耳听专辑详情界面" },
  { id: "album-story", src: yueAlbumStory, alt: "悦耳听专辑介绍界面" },
  { id: "purchased-album", src: yuePurchasedAlbum, alt: "悦耳听已购专辑界面" },
  { id: "song", src: yueSong, alt: "悦耳听歌曲列表界面" },
  { id: "player", src: yuePlayer, alt: "悦耳听歌曲播放界面" },
  { id: "lyrics", src: yueLyrics, alt: "悦耳听歌词播放界面" },
  { id: "library", src: yueLibrary, alt: "悦耳听音乐库界面" },
  { id: "downloads", src: yueDownloads, alt: "悦耳听已下载歌曲界面" },
  { id: "playlist", src: yuePlaylist, alt: "悦耳听自建歌单界面" },
];

const assetGuardScreens = [
  { id: "account-login", src: assetGuardAccountLogin, alt: "AssetGuard 账户登录界面" },
  { id: "qr-login", src: assetGuardQrLogin, alt: "AssetGuard 扫码登录界面" },
  { id: "profession-select", src: assetGuardProfessionSelect, alt: "AssetGuard 职业工作台选择界面" },
  { id: "quick-access", src: assetGuardQuickAccess, alt: "AssetGuard 素材浏览器快速访问界面" },
  { id: "asset-library", src: assetGuardLibrary, alt: "AssetGuard 素材库文件管理界面" },
  { id: "asset-preview", src: assetGuardAssetPreview, alt: "AssetGuard 素材快速预览界面" },
  { id: "inspiration", src: assetGuardInspiration, alt: "AssetGuard 灵感素材发现界面" },
  { id: "tag-management", src: assetGuardTagManagement, alt: "AssetGuard 标签管理界面" },
  { id: "library-upload", src: assetGuardLibraryUpload, alt: "AssetGuard 素材库上传文件界面" },
  { id: "workflow-upload", src: assetGuardWorkflowUpload, alt: "AssetGuard 项目工作流上传文件界面" },
  { id: "photoshop-workflow", src: assetGuardPhotoshopWorkflow, alt: "AssetGuard Photoshop 项目工作空间界面" },
  { id: "account-profile", src: assetGuardAccountProfile, alt: "AssetGuard 账户与存储管理界面" },
];

const emotionPetScreens = [
  { id: "pet-creation", src: emotionPetCreation, alt: "情绪宠物初始宠物创建界面" },
  { id: "pet-home", src: emotionPetHome, alt: "情绪宠物家园与今日状态界面" },
  { id: "selfie-guide", src: emotionPetSelfieGuide, alt: "情绪宠物自拍观察引导界面" },
  { id: "video-capture", src: emotionPetVideoCapture, alt: "情绪宠物五秒状态视频录制界面" },
  { id: "analysis-loading", src: emotionPetAnalysisLoading, alt: "情绪宠物状态分析加载界面" },
  { id: "observation-result", src: emotionPetObservationResult, alt: "情绪宠物今日状态观察结果界面" },
];

const redEnvelopeScreens = [
  { id: "daily-checkin", src: redEnvelopeDailyCheckin, alt: "红包活动每日签到与奖励进度界面" },
  { id: "red-envelope-grab", src: redEnvelopeGrab, alt: "红包活动限时抢红包与发放规则界面" },
  { id: "lucky-draw", src: redEnvelopeLuckyDraw, alt: "红包活动转盘抽取机会界面" },
  { id: "cash-withdrawal", src: redEnvelopeWithdrawal, alt: "红包活动支付宝提现界面" },
];

const teaProjectScreens = [
  { id: "lobby", src: teaLobby, alt: "客官请喝茶茶馆大厅界面" },
  { id: "serving-complete", src: teaServingComplete, alt: "客官请喝茶奉茶完成反馈界面" },
  { id: "warm-cup", src: teaWarmCup, alt: "客官请喝茶制茶流程温杯界面" },
  { id: "whisk-tea", src: teaWhiskTea, alt: "客官请喝茶制茶流程点茶界面" },
  { id: "rinse-tea", src: teaRinseTea, alt: "客官请喝茶制茶流程洗茶界面" },
  { id: "place-tea", src: teaPlaceTea, alt: "客官请喝茶制茶流程置茶界面" },
  { id: "high-pour", src: teaHighPour, alt: "客官请喝茶制茶流程高冲界面" },
  { id: "tea-ledger", src: teaLedgerModal, alt: "客官请喝茶今日茶簿弹窗界面" },
  { id: "concept-01", src: teaConcept01, alt: "客官请喝茶游戏界面视觉探索稿一" },
  { id: "concept-02", src: teaConcept02, alt: "客官请喝茶游戏界面视觉探索稿二" },
  { id: "concept-03", src: teaConcept03, alt: "客官请喝茶游戏界面视觉探索稿三" },
  { id: "concept-04", src: teaConcept04, alt: "客官请喝茶游戏界面视觉探索稿四" },
  { id: "concept-05", src: teaConcept05, alt: "客官请喝茶游戏界面视觉探索稿五" },
  { id: "concept-06", src: teaConcept06, alt: "客官请喝茶游戏界面视觉探索稿六" },
  { id: "concept-07", src: teaConcept07, alt: "客官请喝茶游戏界面视觉探索稿七" },
  { id: "concept-08", src: teaConcept08, alt: "客官请喝茶游戏界面视觉探索稿八" },
  { id: "concept-09", src: teaConcept09, alt: "客官请喝茶游戏界面视觉探索稿九" },
];

const teaProjectFacts = [
  { label: "项目名称", value: "客官请喝茶" },
  { label: "项目类型", value: "游戏 UI 界面设计" },
  { label: "我的角色", value: "游戏 UI 界面设计师" },
  {
    label: "宣传网站",
    value: "客官请喝茶 ↗",
    href: "https://leonoonlin-pixel.github.io/ke-guan-qing-he-cha/",
  },
];

const teaProjectProcess = [
  {
    title: "需求分析",
    body: "从目标用户、游戏主题与核心体验出发，明确项目需要解决的问题和设计边界。",
  },
  {
    title: "玩法确定",
    body: "围绕茶馆经营建立核心循环，梳理接待顾客、获取材料、制茶与奉茶的体验路径。",
  },
  {
    title: "信息架构",
    body: "整理大厅、备茶、茶铺、制茶流程与反馈状态之间的层级和跳转关系。",
  },
  {
    title: "创新机制",
    body: "将消消乐玩法融入材料获取环节，让资源收集与制茶过程形成更有趣的节奏。",
  },
  {
    title: "UI 设计交付",
    body: "完成高保真界面、关键交互状态与统一视觉语言，并整理为可持续迭代的设计稿。",
  },
];

const teaProjectLearnings = [
  {
    label: "项目挑战",
    title: "把不稳定的生成结果转化为可控的设计系统",
    body: "项目初期，角色、色彩、材质与构图在多轮生成中持续漂移，直接影响界面统一性和后续迭代效率。我将问题从“提示词不够详细”重新判断为“缺少可复用的视觉约束”。",
  },
  {
    label: "解决方法",
    title: "建立参考图驱动的视觉基线与迭代规范",
    body: "我选定基准参考图，拆解角色比例、色彩、材质、构图与组件规则；每轮只调整一个关键变量，再通过局部重绘完成精确修正，让设计过程可追踪、可复现。",
  },
  {
    label: "项目收获",
    title: "沉淀可复用的 AIGC + UI 设计工作流",
    body: "最终稳定完成 17 个核心界面，并能在不破坏整体视觉语言的前提下快速修改局部内容。这套方法也可以迁移到其他 UI 项目，提升概念探索、交付与迭代效率。",
  },
];

const contactLinks = [
  { type: "wechat", label: "VX:-LiA_Ang", value: "-LiA_Ang" },
  { href: "https://github.com/", label: "GitHub" },
  { href: "https://www.linkedin.com/", label: "LinkedIn" },
];

const profile = {
  avatar: profileAvatar,
  label: "Profile / 01",
  name: "何臻亮",
  romanName: "He Zhenliang",
  role: "UI设计师 / 视觉设计师",
  bio: "数字媒体技术专业，专注于 UI设计、网页视觉与商业视觉。尝试将设计表达、交互体验、前端实现与 AI 工具整合，打造从概念到落地的完整数字作品。",
};

const profileInfo = [
  { label: "学校", value: "广州南方学院" },
  { label: "状态", value: "开放实习与工作机会" },
  { label: "专业", value: "数字媒体技术" },
  { label: "技能", value: ["Figma", "Photoshop", "After Effects", "React + Vite", "AIGC Workflow"] },
  { label: "AI工具", value: ["Codex", "Stitch", "HappyHorus", "Vizcom"] },
  { label: "所在地", value: "Guangzhou, China" },
];

const resumeDetails = [
  { icon: GraduationCap, label: "学校", value: "中山大学南方学院" },
  { icon: BookOpen, label: "专业", value: "数字媒体技术" },
  { icon: MapPin, label: "所在地", value: "Guangzhou, China" },
  { icon: MessageCircle, label: "微信", value: "-LiA_Ang" },
  { icon: Phone, label: "tel", value: "17820304443" },
  { icon: Link2, label: "作品集", value: "3352873770-rgb.github.io/le0n-portfolio/#profile", href: portfolioUrl },
];

const resumeSkills = [
  { icon: Box, label: "UI / UX 设计", value: "信息架构、高保真界面、交互原型" },
  { icon: Palette, label: "视觉设计", value: "海报、品牌视觉、商业视觉" },
  { icon: Code2, label: "网页前端", value: "React、Vite、HTML / CSS、响应式页面" },
  { icon: Sparkles, label: "AI 协作工作流", value: "需求分析、方案探索、视觉生成、组件规范、前端落地" },
  { icon: Wrench, label: "工具", value: "Figma、Photoshop、Codex、Stitch、HappyHorus、Vizcom" },
];

const capabilityCards = [
  {
    number: "01",
    title: "UI / UX 设计",
    tools: ["Figma", "Canva"],
    result: "信息架构 · 高保真界面 · 交互原型",
  },
  {
    number: "02",
    title: "网页前端",
    tools: ["React", "Vite", "HTML / CSS"],
    result: "响应式页面 · 交互动效 · 作品落地",
  },
  {
    number: "03",
    title: "AI 协作工作流",
    tools: ["ChatGPT", "Codex", "Stitch", "图像生成"],
    result: "需求梳理 · 快速原型 · 内容与素材生产",
  },
  {
    number: "04",
    title: "海报 / 文创产品设计",
    tools: ["Photoshop (PS)", "Illustrator (AI)"],
    result: "海报设计 · 文创产品设计 · 商业视觉",
  },
];

const capabilityHighlights = [
  "各类任务的工作流设计",
  "UI设计稿-Figma",
  "设计稿转 HTML",
  "海报设计",
  "AIGC 视频制作",
  "熟练掌握Photoshop",
];

const experienceRoute = [
  { year: "2023", title: "数字媒体技术学习", body: "视觉基础 / 影像 / 交互" },
  { year: "2024", title: "开始个人设计项目", body: "海报 / UI / 品牌视觉" },
  { year: "2025", title: "参与多类型项目实践", body: "App / 小程序 / 游戏视觉" },
  { year: "2026", title: "拓展前端与AI工作流", body: "React + Vite / AIGC" },
  { year: "NOW", title: "寻找UI与视觉设计机会", body: "开放实习与工作机会" },
];

const photographyWorks = [
  {
    id: "photo-campus-afternoon",
    title: "校园午后",
    description: "树影、暖光与停靠的电动车，记录校园里安静的日常片段。",
    image: photoCampusAfternoon,
    aspectRatio: "3 / 2",
  },
  {
    id: "photo-crosswalk-motion",
    title: "斑马线上的速度",
    description: "用黑白画面和运动模糊捕捉骑行者穿过街道的瞬间。",
    image: photoCrosswalkMotion,
    aspectRatio: "3 / 4",
  },
  {
    id: "photo-amber-stairway",
    title: "暖色阶梯",
    description: "夜间商业空间中的人物、灯光与几何结构。",
    image: photoAmberStairway,
    aspectRatio: "2 / 3",
  },
  {
    id: "photo-night-noodle-shop",
    title: "深夜面馆",
    description: "暖色招牌与街边人群构成的夜间生活切片。",
    image: photoNightNoodleShop,
    aspectRatio: "3 / 2",
  },
  {
    id: "photo-flowering-street",
    title: "花树下的街角",
    description: "花树、行人和黄色车辆共同形成的校园街景。",
    image: photoFloweringStreet,
    aspectRatio: "3 / 2",
  },
  {
    id: "photo-twilight-silhouette",
    title: "黄昏剪影",
    description: "枝叶、玻璃灯与远处人物叠合出的暮色层次。",
    image: photoTwilightSilhouette,
    aspectRatio: "2 / 3",
  },
  {
    id: "photo-riverfront-golden-hour",
    title: "江岸金色时刻",
    description: "落日为城市天际线和水面染上一层金色。",
    image: photoRiverfrontGoldenHour,
    aspectRatio: "1928 / 815",
  },
  {
    id: "photo-seaside-light",
    title: "海边拾光",
    description: "逆光中的人物与海面反光，保留黄昏的温度。",
    image: photoSeasideLight,
    aspectRatio: "2 / 3",
  },
  {
    id: "photo-wall-shadows",
    title: "墙影之间",
    description: "人物、树影与砖墙在黑白关系中形成安静的画面。",
    image: photoWallShadows,
    aspectRatio: "2 / 3",
  },
];

const posterDesignWorks = [
  {
    id: "poster-i-watch-smartwatch",
    title: "I WATCH 智能手表产品宣传海报",
    description: "以暖白配色、产品渲染与信息分区呈现智能手表的功能卖点。",
    image: posterIWatch,
    aspectRatio: "941 / 1672",
  },
  {
    id: "poster-slowly-coffee-brand-board",
    title: "SLOWLY COFFEE 品牌包装设计",
    description: "以低饱和奶油色和咖啡棕建立品牌视觉，并展示包装、杯套与系列贴纸的应用系统。",
    image: posterSlowlyCoffeeBrandBoard,
    aspectRatio: "1536 / 1024",
  },
  {
    id: "poster-slowly-coffee-packaging-scene",
    title: "SLOWLY COFFEE 包装应用视觉",
    description: "通过纸袋与饮品杯的暖调场景渲染，呈现品牌包装在真实消费环境中的视觉效果。",
    image: posterSlowlyCoffeePackagingScene,
    aspectRatio: "1402 / 1122",
  },
  {
    id: "poster-daylight-slow-wake",
    title: "白日慢醒 · 生椰拿铁产品海报",
    description: "用柔和奶油色调、流动奶泡和产品特写表达生椰拿铁轻盈顺滑的口感。",
    image: posterDaylightSlowWake,
    aspectRatio: "1024 / 1536",
  },
];

function useScrollReveal() {
  useEffect(() => {
    const revealSelector = ".section-reveal, .reveal-item";

    document.querySelectorAll(".stagger-children").forEach((parent) => {
      Array.from(parent.children).forEach((child, index) => {
        child.classList.add("reveal-item");
        child.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
      });
    });

    const revealItems = document.querySelectorAll(revealSelector);
    const observedItems = new WeakSet();

    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.16 });

    function observeRevealItem(item) {
      if (!(item instanceof Element) || observedItems.has(item)) {
        return;
      }

      observedItems.add(item);
      revealObserver.observe(item);

      const rect = item.getBoundingClientRect();
      const isInInitialViewport = rect.top < window.innerHeight && rect.bottom > 0;

      if (isInInitialViewport) {
        item.classList.add("is-visible");
        revealObserver.unobserve(item);
      }
    }

    revealItems.forEach(observeRevealItem);

    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (!(node instanceof Element)) {
            return;
          }

          if (node.matches(revealSelector)) {
            observeRevealItem(node);
          }

          node.querySelectorAll(revealSelector).forEach(observeRevealItem);
        });
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#profile");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || !sections.length) {
      return undefined;
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHref(`#${entry.target.id}`);
        }
      });
    }, { rootMargin: "-24% 0px -62%", threshold: 0 });

    sections.forEach((section) => sectionObserver.observe(section));

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <header className="site-header">
      <nav className={`nav-shell${menuOpen ? " is-open" : ""}`} aria-label="Primary navigation">
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          aria-label={menuOpen ? "关闭导航" : "打开导航"}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className="menu-icon" aria-hidden="true">
            <span className="menu-icon-line" />
            <span className="menu-icon-line" />
          </span>
          <span className="sr-only">{menuOpen ? "关闭导航" : "打开导航"}</span>
        </button>

        <div className={`nav-links${menuOpen ? " is-open" : ""}`} id="site-menu">
          {navItems.map((item) => (
            <a
              className={activeHref === item.href ? "is-active" : ""}
              key={item.href}
              href={item.href}
              aria-current={activeHref === item.href ? "location" : undefined}
              onClick={() => {
                setActiveHref(item.href);
                setMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

const designPrinciples = [
  { className: "is-experience", label: "用户体验", english: "User experience", icon: UserRound },
  { className: "is-business", label: "商业价值", english: "Business value", icon: TrendingUp },
  { className: "is-visual", label: "美术设计", english: "Visual design", icon: PenTool },
];

function DesignPhilosophy() {
  return (
    <section className="design-philosophy reveal-item" aria-labelledby="design-philosophy-title">
      <p className="design-philosophy-label" id="design-philosophy-title">设计理念</p>

      <div className="design-philosophy-visual" aria-label="用户体验、商业价值与美术设计相互平衡">
        <svg className="design-philosophy-lines" viewBox="0 0 420 360" aria-hidden="true">
          <path className="design-philosophy-triangle" d="M210 76 L88 278 L332 278 Z" />
          <path className="design-philosophy-orbit" d="M70 226 C36 92 142 24 210 24 C306 24 382 104 362 228 C344 326 250 344 210 344 C132 344 62 310 58 250" />
          <circle cx="210" cy="190" r="53" />
        </svg>

        {designPrinciples.map((principle) => {
          const Icon = principle.icon;

          return (
            <article className={`design-principle-node ${principle.className}`} key={principle.label}>
              <Icon aria-hidden="true" />
              <strong>{principle.label}</strong>
              <span>{principle.english}</span>
            </article>
          );
        })}

        <span className="design-philosophy-center" aria-hidden="true">
          <Target />
        </span>
      </div>
    </section>
  );
}

function ProfileCard({ onOpenResume, resumeTriggerRef }) {
  return (
    <aside className="profile-card reveal-item" aria-label="Personal profile card">
      <div className="profile-card-head stagger-children">
        <div>
          <p className="profile-label">{profile.label}</p>
          <h2>{profile.name}</h2>
          <p className="profile-roman">{profile.romanName}</p>
          <p className="profile-role">{profile.role}</p>
        </div>

        <div className="profile-avatar-wrap">
          <img className="profile-avatar" src={profile.avatar} alt={`${profile.name}头像`} />
        </div>
      </div>

      <p className="profile-bio reveal-item">{profile.bio}</p>
      <div className="profile-divider" aria-hidden="true" />

      <div className="profile-info-grid">
        {profileInfo.map((item) => (
          <div className="profile-info-item reveal-item" key={item.label}>
            <span className="profile-info-marker" aria-hidden="true" />
            <div>
              <p className="profile-info-label">{item.label}</p>
              {Array.isArray(item.value) ? (
                <div className="profile-skill-list">
                  {item.value.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              ) : (
                <p className="profile-info-value">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="profile-actions reveal-item">
        <button
          className="profile-action primary"
          type="button"
          ref={resumeTriggerRef}
          onClick={onOpenResume}
        >
          查看简历
        </button>
        <a className="profile-action secondary" href="#contact">联系我 <span aria-hidden="true">↗</span></a>
      </div>
    </aside>
  );
}

function ResumeModal({ isOpen, onClose, onViewWorkflow }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="resume-modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <article
        className="resume-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-title"
        aria-describedby="resume-about-copy"
        ref={dialogRef}
      >
        <button
          className="resume-close-button"
          type="button"
          aria-label="关闭简历"
          onClick={onClose}
          ref={closeButtonRef}
        >
          <X aria-hidden="true" />
        </button>

        <section className="resume-identity" aria-labelledby="resume-title">
          <h2 className="resume-title" id="resume-title">
            <span>UI /</span>
            <span>VISUAL</span>
            <span>DESIGNER</span>
          </h2>

          <div className="resume-name-block">
            <p><strong>何臻亮</strong> / He Zhenliang</p>
            <span>UI设计师 / 视觉设计师</span>
          </div>

          <div className="resume-details" aria-label="基础信息与联系方式">
            {resumeDetails.map((item) => {
              const Icon = item.icon;

              return (
                <div className="resume-detail" key={item.label}>
                  <Icon aria-hidden="true" />
                  <p>
                    <span>{item.label}：</span>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">{item.value}</a>
                    ) : item.value}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="resume-portrait-wrap">
            <img src={resumePortrait} alt="何臻亮黄色背景个人照片" />
          </div>
        </section>

        <div className="resume-content">
          <section className="resume-section resume-about" aria-labelledby="resume-about-title">
            <div className="resume-section-heading">
              <h3 id="resume-about-title">About Me</h3>
              <span>/ 关于我</span>
            </div>
            <p id="resume-about-copy">
              你好，我是数字媒体技术专业准大四生，专注于 UI 设计、网页视觉与商业视觉。我尝试把设计表达、交互体验、前端实现与 AI 工具整合，让 AI 参与需求分析、方案探索、视觉设计和组件规范，并由我把控设计判断、用户体验与最终质量。
            </p>
          </section>

          <section className="resume-section resume-skills" aria-labelledby="resume-skills-title">
            <div className="resume-section-heading">
              <h3 id="resume-skills-title">Skills</h3>
              <span>/ 技能掌握</span>
            </div>

            <div className="resume-skill-list">
              {resumeSkills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div className="resume-skill" key={skill.label}>
                    <span className="resume-skill-icon" aria-hidden="true"><Icon /></span>
                    <p><strong>{skill.label}：</strong>{skill.value}</p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="resume-section resume-experience" aria-labelledby="resume-experience-title">
            <div className="resume-section-heading">
              <h3 id="resume-experience-title">Experience</h3>
              <span>/ 工作经历</span>
            </div>

            <div className="resume-experience-loader" role="status" aria-live="polite">
              <span className="resume-loader-icon" aria-hidden="true">
                <LoaderCircle />
              </span>
              <div className="resume-loader-copy">
                <strong>正在加载工作经历</strong>
                <span>EXPERIENCE LOG · 持续更新中</span>
              </div>
              <span className="resume-loader-track" aria-hidden="true"><i /></span>
            </div>
          </section>

          <div className="resume-actions">
            <a className="resume-action resume-action-primary" href={getAppPath("/he-zhenliang-resume.pdf")} download="何臻亮-UI视觉设计师-简历.pdf">
              <Download aria-hidden="true" />
              下载简历 PDF
            </a>
            <button className="resume-action resume-action-secondary" type="button" onClick={onViewWorkflow}>
              <Workflow aria-hidden="true" />
              查看工作流
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

function CapabilitiesPanel() {
  return (
    <section className="capabilities-panel reveal-item" id="capabilities" aria-labelledby="capabilities-title">
      <div className="capabilities-copy">
        <p className="capabilities-kicker">Capabilities / 02</p>
        <h2 id="capabilities-title">我的能力</h2>
        <ul className="capabilities-highlights" aria-label="核心能力">
          {capabilityHighlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <span aria-hidden="true" />
        <p>不同任务使用不同工作流，设计判断与最终品质始终由我负责。</p>
      </div>

      <div className="capabilities-card-grid">
        {capabilityCards.map((card, index) => (
          <article
            className="capability-card reveal-item"
            key={card.number}
            style={{ "--reveal-delay": `${index * 80}ms` }}
          >
            <div className="capability-card-head">
              <span>{card.number}</span>
              <i aria-hidden="true" />
              <h3>{card.title}</h3>
            </div>

            <div className="capability-card-row">
              <p>主要工具</p>
              <div className="capability-tool-list">
                {card.tools.map((tool) => (
                  <span key={tool}>{tool}</span>
                ))}
              </div>
            </div>

            <div className="capability-card-rule" aria-hidden="true" />

            <div className="capability-card-row">
              <p>能够完成</p>
              <strong>{card.result}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ExperienceRoute() {
  return (
    <div className="experience-route reveal-item" id="experience" aria-label="Experience route">
      <div className="experience-heading reveal-item">
        <p>Experience route</p>
        <span>2023 - Now</span>
      </div>

      <div className="experience-track">
        {experienceRoute.map((item, index) => (
          <article
            className="experience-card reveal-item"
            key={item.year}
            style={{ "--reveal-delay": `${index * 90}ms` }}
          >
            <span className={`experience-dot${index === experienceRoute.length - 1 ? " is-current" : ""}`} aria-hidden="true" />
            <div>
              <p>{item.year}</p>
              <h3>{item.title}</h3>
              <span>{item.body}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function Hero({ onOpenResume, resumeTriggerRef }) {
  return (
    <section className="hero section-reveal" aria-labelledby="hero-title">
      <div className="hero-content" id="profile">
        <div className="hero-copy stagger-children">
          <p className="hero-intro">Hi I'm</p>
          <p className="eyebrow">Personal portfolio</p>
          <h1 className="hero-title" id="hero-title">
            <span className="sr-only">Le0n</span>
            <img className="hero-wordmark" src={le0nWordmark} alt="" aria-hidden="true" />
          </h1>
          <p className="hero-text">数字媒体技术 · 视觉设计方向</p>
          <p className="hero-specialty">我把 UI、海报、品牌视觉和前端实现整理成可浏览的作品系统，让设计从图像延展到真实页面。</p>
        </div>

        <div className="hero-profile-grid">
          <DesignPhilosophy />
          <ProfileCard onOpenResume={onOpenResume} resumeTriggerRef={resumeTriggerRef} />
        </div>
      </div>
    </section>
  );
}

function usePagePath() {
  const [pagePath, setPagePath] = useState(getCurrentPagePath);

  function scrollToTopImmediately() {
    const rootElement = document.documentElement;
    const previousScrollBehavior = rootElement.style.scrollBehavior;
    rootElement.style.scrollBehavior = "auto";
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    rootElement.style.scrollBehavior = previousScrollBehavior;
  }

  useEffect(() => {
    function handlePopState() {
      setPagePath(getCurrentPagePath());
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(path, targetId) {
    const hash = targetId ? `#${targetId}` : "";

    if (getCurrentPagePath() === path) {
      window.history.pushState({}, "", `${getAppPath(path)}${hash}`);

      if (targetId) {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      return;
    }

    window.history.pushState({}, "", `${getAppPath(path)}${hash}`);

    if (!targetId) {
      scrollToTopImmediately();
    }

    setPagePath(path);

    if (targetId) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    }
  }

  return { pagePath, navigate };
}

function WorkStrip({ work, onOpen, style }) {
  const Element = onOpen ? "button" : "article";

  return (
    <Element
      className={`work-strip reveal-item is-${work.tone}${work.image ? "" : " is-placeholder"}${onOpen ? "" : " is-static"}`}
      style={style}
      {...(onOpen ? { type: "button", onClick: onOpen } : {})}
    >
      {work.image ? (
        <img src={work.image} alt="" aria-hidden="true" />
      ) : (
        <span className="work-card-placeholder-art" aria-hidden="true">
          <span>UPLOAD</span>
        </span>
      )}
      <span className="work-strip-shade" aria-hidden="true" />
      {onOpen ? (
        <span className="work-card-icon" aria-hidden="true">↗</span>
      ) : (
        <span className="work-card-status" aria-hidden="true">NEW</span>
      )}
      <span className="work-strip-content">
        <strong>{work.title}</strong>
        <span className="work-strip-body">{work.body}</span>
      </span>
    </Element>
  );
}

function WorkSection({
  onOpenPhotography,
  onOpenPosterDesign,
  onOpenTeaProject,
  onOpenUiProject,
  onOpenBrandProject,
}) {
  const workTrackRef = useRef(null);
  const workSceneRef = useRef(null);
  const scrollFrameRef = useRef(null);
  const sceneFrameRef = useRef(null);
  const reducedMotionRef = useRef(false);
  const [scrollMetrics, setScrollMetrics] = useState({
    progress: 0,
    thumbSize: 100,
    hasOverflow: false,
  });

  function syncWorkScroll() {
    if (scrollFrameRef.current) {
      return;
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const track = workTrackRef.current;

      if (track) {
        const scrollRange = Math.max(track.scrollWidth - track.clientWidth, 0);
        const progress = scrollRange > 0 ? (track.scrollLeft / scrollRange) * 100 : 0;
        const thumbSize = track.scrollWidth > 0
          ? Math.min((track.clientWidth / track.scrollWidth) * 100, 100)
          : 100;

        setScrollMetrics((current) => {
          const next = {
            progress,
            thumbSize,
            hasOverflow: scrollRange > 1,
          };

          return Math.abs(current.progress - next.progress) < 0.1
            && Math.abs(current.thumbSize - next.thumbSize) < 0.1
            && current.hasOverflow === next.hasOverflow
            ? current
            : next;
        });
      }

      scrollFrameRef.current = null;
    });
  }

  function syncWorkScene() {
    if (sceneFrameRef.current) {
      return;
    }

    sceneFrameRef.current = window.requestAnimationFrame(() => {
      const scene = workSceneRef.current;
      const track = workTrackRef.current;

      if (scene && track && !reducedMotionRef.current) {
        const scrollRange = Math.max(track.scrollWidth - track.clientWidth, 0);
        const sceneRect = scene.getBoundingClientRect();
        const sceneTop = window.scrollY + sceneRect.top;
        const scrollDistance = Math.max(scene.offsetHeight - window.innerHeight, 1);
        const progress = Math.min(Math.max((window.scrollY - sceneTop) / scrollDistance, 0), 1);

        track.scrollLeft = scrollRange * progress;
      }

      sceneFrameRef.current = null;
    });
  }

  useEffect(() => {
    const track = workTrackRef.current;
    const scene = workSceneRef.current;

    if (!track || !scene) {
      return undefined;
    }

    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = motionPreference.matches;
    const updateWorkScene = () => {
      const scrollRange = Math.max(track.scrollWidth - track.clientWidth, 0);
      scene.style.setProperty("--work-scroll-distance", `${scrollRange}px`);
      syncWorkScroll();
      syncWorkScene();
    };
    const handleMotionPreference = () => {
      reducedMotionRef.current = motionPreference.matches;
      updateWorkScene();
    };
    const resizeObserver = new ResizeObserver(updateWorkScene);
    resizeObserver.observe(track);
    window.addEventListener("resize", updateWorkScene);
    window.addEventListener("scroll", syncWorkScene, { passive: true });
    motionPreference.addEventListener("change", handleMotionPreference);
    updateWorkScene();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWorkScene);
      window.removeEventListener("scroll", syncWorkScene);
      motionPreference.removeEventListener("change", handleMotionPreference);

      if (scrollFrameRef.current) {
        window.cancelAnimationFrame(scrollFrameRef.current);
        scrollFrameRef.current = null;
      }

      if (sceneFrameRef.current) {
        window.cancelAnimationFrame(sceneFrameRef.current);
        sceneFrameRef.current = null;
      }
    };
  }, []);

  function handleWorkProgress(event) {
    const progress = Number(event.target.value);
    const track = workTrackRef.current;

    if (!track) {
      return;
    }

    const scrollRange = Math.max(track.scrollWidth - track.clientWidth, 0);
    const scene = workSceneRef.current;

    if (scene && !reducedMotionRef.current) {
      const sceneTop = window.scrollY + scene.getBoundingClientRect().top;
      const scrollDistance = Math.max(scene.offsetHeight - window.innerHeight, 0);
      window.scrollTo({ top: sceneTop + scrollDistance * (progress / 100), behavior: "auto" });
    }

    track.scrollTo({ left: scrollRange * (progress / 100), behavior: "auto" });
    setScrollMetrics((current) => ({ ...current, progress }));
  }

  return (
    <section className="section work-section section-reveal" id="work" aria-labelledby="work-title">
      <div className="section-heading reveal-item">
        <h2 id="work-title">个人作品集</h2>
      </div>

      <div className="work-scroll-scene" ref={workSceneRef}>
        <div className="work-scroll-sticky">
          <div className="work-carousel reveal-item">
            <div
              className="work-showcase"
              ref={workTrackRef}
              onScroll={syncWorkScroll}
              tabIndex="0"
              aria-label="向下滚动或横向滑动浏览作品分类"
            >
              {workCategories.map((work, index) => (
                <WorkStrip
                  key={work.id}
                  work={work}
                  style={{ "--reveal-delay": `${index * 90}ms`, zIndex: index + 1 }}
                  onOpen={work.id === "frontend"
                    ? onOpenTeaProject
                    : work.id === "ui"
                      ? onOpenUiProject
                      : work.id === "posterDesign"
                        ? onOpenPosterDesign
                        : work.id === "poster"
                          ? onOpenPhotography
                          : work.id === "brand"
                            ? onOpenBrandProject
                            : undefined}
                />
              ))}
            </div>

            <div className={`work-scroll-control${scrollMetrics.hasOverflow ? " is-active" : ""}`}>
              <label className="sr-only" htmlFor="work-scroll-progress">作品模块浏览进度</label>
              <input
                id="work-scroll-progress"
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={scrollMetrics.progress}
                disabled={!scrollMetrics.hasOverflow}
                onInput={handleWorkProgress}
                style={{ "--work-thumb-size": `${scrollMetrics.thumbSize}%` }}
                aria-valuetext={`已浏览 ${Math.round(scrollMetrics.progress)}%`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function VisualArchivePage({ onBackToWork, eyebrow, title, ariaLabel, works, pageClassName = "" }) {
  return (
    <main className={`poster-page${pageClassName ? ` ${pageClassName}` : ""}`} id="top">
      <button className="back-link reveal-item" type="button" onClick={onBackToWork}>返回作品集</button>
      <section className="poster-hero section-reveal is-visible" aria-labelledby="poster-title">
        <p className="eyebrow">{eyebrow}</p>
        <h1 id="poster-title">{title}</h1>
      </section>

      <section className="poster-archive" aria-label={ariaLabel}>
        {works.length > 0 ? (
          <div className="poster-gallery">
            {works.map((work, index) => (
              <article
                className="poster-work-card reveal-item"
                key={work.id}
                style={{ "--reveal-delay": `${Math.min(index * 80, 320)}ms` }}
              >
                <div className="poster-image-wrap" style={{ "--photo-ratio": work.aspectRatio }}>
                  <img src={work.image} alt={work.title} loading={index > 2 ? "lazy" : "eager"} />
                </div>
                <div className="poster-work-info">
                  <h2>{work.title}</h2>
                  <p>{work.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="archive-empty reveal-item is-visible" role="status">
            <span>Poster files pending</span>
            <h2>等待上传海报作品</h2>
            <p>后续添加图片后，作品会自动按照真实尺寸进入瀑布流展示。</p>
          </div>
        )}
      </section>
    </main>
  );
}

function UiScreenGallery({ screens, label, progressId, aspectRatio, displayMode = "mobile", revealItems = true }) {
  const galleryRef = useRef(null);
  const animationFrameRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => () => {
    if (animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  function syncProgress() {
    if (animationFrameRef.current) {
      return;
    }

    animationFrameRef.current = window.requestAnimationFrame(() => {
      const gallery = galleryRef.current;
      if (gallery) {
        const scrollRange = gallery.scrollWidth - gallery.clientWidth;
        setProgress(scrollRange > 0 ? (gallery.scrollLeft / scrollRange) * 100 : 0);
      }
      animationFrameRef.current = null;
    });
  }

  function handleProgressChange(event) {
    const nextProgress = Number(event.target.value);
    const gallery = galleryRef.current;
    setProgress(nextProgress);

    if (gallery) {
      const scrollRange = gallery.scrollWidth - gallery.clientWidth;
      gallery.scrollTo({ left: scrollRange * (nextProgress / 100), behavior: "auto" });
    }
  }

  return (
    <div
      className={`ui-screen-showcase is-${displayMode}`}
      aria-label={label}
      style={{ "--ui-screen-ratio": aspectRatio }}
    >
      <div
        className="ui-screen-track"
        ref={galleryRef}
        onScroll={syncProgress}
        tabIndex="0"
        aria-label={`可横向滚动浏览${label}`}
      >
        {screens.map((screen, index) => (
          <figure
            className={`ui-screen-card${revealItems ? " reveal-item" : ""}`}
            key={screen.id}
            style={revealItems ? { "--reveal-delay": `${Math.min(index * 55, 330)}ms` } : undefined}
          >
            <img src={screen.src} alt={screen.alt} loading={index > 4 ? "lazy" : "eager"} />
          </figure>
        ))}
      </div>

      <div className="ui-gallery-progress">
        <label className="sr-only" htmlFor={progressId}>界面浏览进度</label>
        <input
          id={progressId}
          type="range"
          min="0"
          max="100"
          step="0.1"
          value={progress}
          onInput={handleProgressChange}
          aria-valuetext={`已浏览 ${Math.round(progress)}%`}
        />
      </div>
    </div>
  );
}

function TeaProjectPage({ onBackToWork }) {
  return (
    <main className="case-page tea-case-page" id="top">
      <button className="back-link tea-case-back-link reveal-item" type="button" onClick={onBackToWork}>返回作品集</button>

      <section className="case-hero tea-case-hero section-reveal is-visible" aria-labelledby="tea-project-title">
        <div className="case-hero-copy reveal-item">
          <p className="eyebrow">Game UI case / 01</p>
          <h1 id="tea-project-title">客官请喝茶</h1>
          <p>从游戏 GDD、玩法与信息架构出发，完成一套可持续迭代的东方茶馆经营游戏 UI。</p>
        </div>

        <div className="case-hero-panel tea-case-summary reveal-item" aria-label="Project summary">
          {teaProjectFacts.map((fact) => (
            <div className="case-fact" key={fact.label}>
              <span>{fact.label}</span>
              {fact.href ? (
                <a href={fact.href} target="_blank" rel="noreferrer">
                  {fact.value}
                </a>
              ) : (
                <strong>{fact.value}</strong>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="tea-reflection-section reveal-item" aria-labelledby="tea-reflection-title">
        <div className="tea-reflection-heading">
          <p className="eyebrow">Project reflection</p>
          <h2 id="tea-reflection-title">从 GDD 到一致的游戏 UI</h2>
          <p>
            本项目完整经历需求分析、玩法确定、信息架构、创新机制与 UI 设计交付。我不仅完成了界面产出，也通过解决 AIGC 风格一致性问题，建立了一套更稳定、可控制的设计工作流。
          </p>
        </div>

        <ol className="tea-process-list" aria-label="项目设计流程">
          {teaProjectProcess.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.title}</strong>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

      </section>

      <section className="case-screen-section tea-screen-section reveal-item" aria-labelledby="tea-screens-title">
        <div className="case-section-head">
          <p className="eyebrow">Game UI screens</p>
          <h2 id="tea-screens-title">项目界面展示</h2>
          <p>从茶馆大厅、奉茶反馈到完整制茶步骤，集中呈现项目的界面语言、操作反馈与视觉探索。</p>
        </div>

        <UiScreenGallery
          screens={teaProjectScreens}
          label="客官请喝茶 UI 界面展示"
          progressId="tea-gallery-progress"
          aspectRatio="941 / 1672"
        />
      </section>

      <section className="tea-outcomes-section reveal-item" aria-labelledby="tea-outcomes-title">
        <div className="tea-outcomes-heading">
          <p className="eyebrow">Problem solving</p>
          <h2 id="tea-outcomes-title">我如何把 AI 产出变成可交付的设计</h2>
          <p>比最终画面更重要的是，我在项目中完成了问题判断、方法验证与工作流沉淀。</p>
        </div>

        <div className="tea-learning-grid">
          {teaProjectLearnings.map((learning, index) => (
            <article key={learning.label}>
              <div className="tea-learning-meta">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{learning.label}</p>
              </div>
              <h3>{learning.title}</h3>
              <div className="tea-learning-body">{learning.body}</div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function YueErTingLetterInteraction() {
  const triggerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const closeTimerRef = useRef(null);
  const attentionStartTimerRef = useRef(null);
  const attentionEndTimerRef = useRef(null);
  const hasPlayedAttentionRef = useRef(false);
  const [isAttentionActive, setIsAttentionActive] = useState(false);
  const [letterState, setLetterState] = useState({
    isOpen: false,
    isClosing: false,
    envelopeLeft: 0,
    envelopeTop: 0,
    envelopeWidth: 0,
    envelopeHeight: 0,
    paperLeft: 0,
    paperTop: 0,
    paperWidth: 0,
    paperHeight: 0,
    flightExitY: 0,
  });

  const openLetter = useCallback(() => {
    setIsAttentionActive(false);
    const triggerBounds = triggerRef.current?.getBoundingClientRect();
    const envelopeLeft = triggerBounds?.left ?? 0;
    const envelopeTop = triggerBounds?.top ?? 0;
    const envelopeWidth = triggerBounds?.width ?? 0;
    const envelopeHeight = triggerBounds?.height ?? 0;
    const paperLeft = envelopeLeft + (envelopeWidth * (5 / 140));
    const paperTop = envelopeTop + (envelopeHeight * (3 / 136));
    const paperWidth = envelopeWidth * (130 / 140);
    const paperHeight = envelopeHeight * (103 / 136);

    setLetterState({
      isOpen: true,
      isClosing: false,
      envelopeLeft,
      envelopeTop,
      envelopeWidth,
      envelopeHeight,
      paperLeft,
      paperTop,
      paperWidth,
      paperHeight,
      flightExitY: -(paperTop + paperHeight + 28),
    });
  }, []);

  useEffect(() => {
    const triggerElement = triggerRef.current;

    if (!triggerElement || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const playAttention = () => {
      if (hasPlayedAttentionRef.current) {
        return;
      }

      hasPlayedAttentionRef.current = true;
      attentionStartTimerRef.current = window.setTimeout(() => {
        setIsAttentionActive(true);
        attentionEndTimerRef.current = window.setTimeout(() => {
          setIsAttentionActive(false);
        }, 740);
      }, 220);
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.65) {
        playAttention();
        observer.disconnect();
      }
    }, { threshold: [0.65] });

    observer.observe(triggerElement);

    return () => {
      observer.disconnect();
      window.clearTimeout(attentionStartTimerRef.current);
      window.clearTimeout(attentionEndTimerRef.current);
      hasPlayedAttentionRef.current = false;
    };
  }, []);

  const closeLetter = useCallback(() => {
    setLetterState((currentState) => ({ ...currentState, isClosing: true }));
    window.clearTimeout(closeTimerRef.current);
    const closeDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 600;
    closeTimerRef.current = window.setTimeout(() => {
      setLetterState((currentState) => ({ ...currentState, isOpen: false, isClosing: false }));
      triggerRef.current?.focus();
    }, closeDuration);
  }, []);

  useEffect(() => {
    if (!letterState.isOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape" && !letterState.isClosing) {
        event.preventDefault();
        closeLetter();
        return;
      }

      if (event.key === "Tab") {
        event.preventDefault();
        closeButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closeLetter, letterState.isClosing, letterState.isOpen]);

  useEffect(() => () => {
    window.clearTimeout(closeTimerRef.current);
    window.clearTimeout(attentionStartTimerRef.current);
    window.clearTimeout(attentionEndTimerRef.current);
  }, []);

  return (
    <>
      <button
        className={`yue-letter-trigger${isAttentionActive ? " is-attention" : ""}${letterState.isOpen ? " is-open" : ""}`}
        type="button"
        aria-label="打开悦耳听设计札记"
        aria-expanded={letterState.isOpen}
        onClick={openLetter}
        ref={triggerRef}
      >
        <svg className="yue-envelope" viewBox="0 0 140 136" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <filter id="yue-paper-shadow" x="-20%" y="-20%" width="140%" height="160%">
              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#6f7280" floodOpacity="0.11" />
            </filter>
            <filter id="yue-envelope-shadow" x="-20%" y="-20%" width="140%" height="160%">
              <feDropShadow dx="0" dy="4" stdDeviation="3" floodColor="#747782" floodOpacity="0.14" />
            </filter>
          </defs>

          <g className="yue-envelope-paper" filter="url(#yue-paper-shadow)">
            <path d="M5 3h130v103H5z" fill="#fffdfd" />
            <path d="M20 25h100" stroke="#ddd5e0" strokeWidth="4" strokeLinecap="round" />
            <path d="M32 42h76" stroke="#ddd5e0" strokeWidth="4" strokeLinecap="round" />
          </g>

          <g className="yue-envelope-body" filter="url(#yue-envelope-shadow)">
            <path d="M4 62 68 92l64-30v68H4z" fill="#e9e3ef" />
            <path d="m4 62 64 30-64 38z" fill="#dcd8e9" />
            <path d="m132 62-64 30 64 38z" fill="#eee5ec" />
            <path d="m4 130 64-42 64 42z" fill="#f6eff3" />
          </g>

          <g className="yue-envelope-cues" fill="none" stroke="#9f96ff" strokeWidth="4" strokeLinecap="round">
            <path d="M114 1v9" />
            <path d="m133 8-7 7" />
            <path d="M130 26h8" />
          </g>
        </svg>
      </button>

      {letterState.isOpen ? createPortal((
        <div
          className={`yue-letter-overlay${letterState.isClosing ? " is-closing" : ""}`}
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !letterState.isClosing) {
              closeLetter();
            }
          }}
        >
          <svg
            className="yue-letter-origin-envelope"
            viewBox="0 0 140 136"
            preserveAspectRatio="none"
            aria-hidden="true"
            style={{
              "--envelope-left": `${letterState.envelopeLeft}px`,
              "--envelope-top": `${letterState.envelopeTop}px`,
              "--envelope-width": `${letterState.envelopeWidth}px`,
              "--envelope-height": `${letterState.envelopeHeight}px`,
            }}
          >
            <g>
              <path d="M4 62 68 92l64-30v68H4z" fill="#e9e3ef" />
              <path d="m4 62 64 30-64 38z" fill="#dcd8e9" />
              <path d="m132 62-64 30 64 38z" fill="#eee5ec" />
              <path d="m4 130 64-42 64 42z" fill="#f6eff3" />
            </g>
            <g fill="none" stroke="#9f96ff" strokeWidth="4" strokeLinecap="round">
              <path d="M114 1v9" />
              <path d="m133 8-7 7" />
              <path d="M130 26h8" />
            </g>
          </svg>

          <span
            className="yue-letter-flight-sheet"
            aria-hidden="true"
            style={{
              "--paper-left": `${letterState.paperLeft}px`,
              "--paper-top": `${letterState.paperTop}px`,
              "--paper-width": `${letterState.paperWidth}px`,
              "--paper-height": `${letterState.paperHeight}px`,
              "--paper-exit-y": `${letterState.flightExitY}px`,
            }}
          >
            <i />
            <i />
          </span>

          <article
            className="yue-reading-letter"
            role="dialog"
            aria-modal="true"
            aria-labelledby="yue-letter-title"
            onClick={(event) => {
              if (event.target === event.currentTarget && !letterState.isClosing) {
                closeLetter();
              }
            }}
          >
            <button
              className="yue-letter-close"
              type="button"
              aria-label="收起设计札记"
              onClick={closeLetter}
              ref={closeButtonRef}
            >
              <X aria-hidden="true" />
            </button>
            <h2 id="yue-letter-title">我的设计思路</h2>
            <div className="yue-letter-rule" aria-hidden="true" />
            <div className="yue-thinking-outline">
              <section>
                <p className="yue-thinking-label"><span>01</span> 项目背景</p>
                <p>
                  我希望为国内年轻用户设计一款音乐移动应用，在满足基础浏览与播放需求的同时，通过更简洁的交互和更有情绪感的视觉，建立轻松、沉浸的听觉体验。
                </p>
                <ul className="yue-thinking-points">
                  <li>面向国内年轻用户的使用习惯</li>
                  <li>围绕音乐浏览与播放建立核心体验</li>
                  <li>用视觉情绪塑造轻松的产品气质</li>
                </ul>
              </section>
              <section>
                <p className="yue-thinking-label"><span>02</span> 我发现的问题</p>
                <p>
                  在观察 QQ 音乐、酷狗音乐与网易云音乐时，我发现成熟产品通常承载了大量分类、社区与服务入口。它们丰富了产品生态，也让部分低频功能持续占用注意力，增加了寻找内容与理解页面的成本。
                </p>
                <ul className="yue-thinking-points">
                  <li>入口过多，播放场景不够聚焦</li>
                  <li>信息层级复杂，内容路径偏深</li>
                  <li>社交信息持续争夺用户注意力</li>
                </ul>
              </section>
              <section>
                <p className="yue-thinking-label"><span>03</span> 设计目标</p>
                <p>
                  我反复研究并打磨 Apple Music 与 Spotify 的界面，从视觉秩序、沉浸体验和推荐方式中提取有效方法，再结合国内用户习惯重新组织信息，而不是停留在表面模仿。
                </p>
                <ul className="yue-thinking-points">
                  <li>Apple Music：视觉统一与沉浸体验</li>
                  <li>Spotify：推荐效率与内容发现</li>
                  <li>我的方向：参考成熟经验，再完成本地化重组</li>
                </ul>
              </section>
              <section>
                <p className="yue-thinking-label"><span>04</span> 核心决策</p>
                <p>
                  Apple Music 的视觉统一与沉浸感值得借鉴，但部分信息层级和操作路径对首次使用者存在学习成本。因此，我将热门与高频功能放到更容易被看见、被触达的位置。
                </p>
                <ul className="yue-thinking-points">
                  <li>高频功能前置，降低首次查找成本</li>
                  <li>缩短播放、搜索与内容发现路径</li>
                  <li>保留视觉统一，不牺牲导航效率</li>
                </ul>
              </section>
              <section>
                <p className="yue-thinking-label"><span>05</span> 反思与思考</p>
                <p>
                  这是我第一次完整完成一套 UI 项目。我从字体层级、安全区域、图标尺寸和间距规范开始，经历参考、优化与反复打磨，也逐渐理解老师所说的“设计不只是好看”。
                </p>
                <ul className="yue-thinking-points">
                  <li>视觉表达：建立产品气质与视觉秩序</li>
                  <li>用户体验：让信息与操作更容易理解</li>
                  <li>商业价值：让设计回应真实产品目标</li>
                </ul>
                <p className="yue-thinking-next">
                  这次实践让我开始理解三者之间相互牵制、持续平衡的关系，也推动我从制作界面走向更深入的设计思考。
                </p>
              </section>
            </div>
            <footer>
              <span>LE0N</span>
              <span>YUEERTING / DESIGN NOTE</span>
            </footer>
          </article>
        </div>
      ), document.body) : null}
    </>
  );
}

function YueErTingProjectPage({ onBackToWork }) {
  return (
    <main className="ui-case-page" id="top">
      <button className="back-link ui-case-back-link" type="button" onClick={onBackToWork}>
        返回作品集
      </button>

      <section className="ui-case-intro yue-case-intro" aria-labelledby="yueerting-title">
        <div className="yue-case-title-row">
          <h1 id="yueerting-title">悦耳听</h1>
          <YueErTingLetterInteraction />
        </div>
        <p>
          以轻社交和个性化推荐为核心，为年轻用户打造纯净、沉浸的音乐 App 体验。
        </p>
      </section>

      <UiScreenGallery
        screens={yueErTingScreens}
        label="悦耳听 UI 界面展示"
        progressId="yueerting-gallery-progress"
        aspectRatio="804 / 1748"
        revealItems={false}
      />

      <AssetGuardProjectSection />
      <EmotionPetProjectSection />
      <RedEnvelopeProjectSection />
    </main>
  );
}

function AssetGuardProjectSection() {
  return (
    <section className="assetguard-project-section section-reveal" aria-labelledby="assetguard-title">
      <div className="ui-case-intro assetguard-case-intro section-reveal is-visible">
        <h1 id="assetguard-title" className="reveal-item is-visible">AssetGuard</h1>
        <p className="reveal-item is-visible">
          面向设计与内容团队的桌面端数字资产管理工具，将素材分类、标签、上传、检索与项目工作流整合到统一界面。
        </p>
      </div>

      <UiScreenGallery
        screens={assetGuardScreens}
        label="AssetGuard 桌面端 UI 界面展示"
        progressId="assetguard-gallery-progress"
        aspectRatio="1280 / 1024"
        displayMode="desktop"
      />
    </section>
  );
}

function EmotionPetProjectSection() {
  return (
    <section className="emotion-pet-project-section section-reveal" aria-labelledby="emotion-pet-title">
      <div className="ui-case-intro emotion-pet-case-intro section-reveal is-visible">
        <h1 id="emotion-pet-title" className="reveal-item is-visible">情绪宠物</h1>
        <p className="reveal-item is-visible">
          通过影像观察与情绪分析生成专属数字宠物，把日常状态记录转化为温和、可持续的陪伴体验。
        </p>
      </div>

      <UiScreenGallery
        screens={emotionPetScreens}
        label="情绪宠物 UI 界面展示"
        progressId="emotion-pet-gallery-progress"
        aspectRatio="390 / 932"
      />
    </section>
  );
}

function RedEnvelopeProjectSection() {
  return (
    <section className="red-envelope-project-section section-reveal" aria-labelledby="red-envelope-title">
      <div className="ui-case-intro red-envelope-case-intro section-reveal is-visible">
        <h1 id="red-envelope-title" className="reveal-item is-visible">红包活动界面</h1>
        <p className="reveal-item is-visible">
          围绕每日签到、限时抢红包、抽取机会与提现流程，设计一套清晰、有节奏的活动激励体验。
        </p>
      </div>

      <UiScreenGallery
        screens={redEnvelopeScreens}
        label="红包活动 UI 界面展示"
        progressId="red-envelope-gallery-progress"
        aspectRatio="390 / 1057"
        displayMode="compact-mobile"
      />
    </section>
  );
}

function QianshanProjectPage({ onBackToWork }) {
  return (
    <main className="qianshan-page" id="top">
      <button className="back-link qianshan-back-link reveal-item" type="button" onClick={onBackToWork}>
        返回作品集
      </button>

      <section className="qianshan-hero section-reveal is-visible" aria-labelledby="qianshan-title">
        <div className="qianshan-hero-copy reveal-item is-visible">
          <h1 id="qianshan-title">千山农场</h1>
          <p className="qianshan-project-type"><span aria-hidden="true">—</span> IP 形象设计</p>
          <p className="qianshan-intro">农业品牌 IP 形象与衍生应用</p>
          <ul className="qianshan-tags" aria-label="项目能力范围">
            <li>角色设计</li>
            <li>品牌视觉</li>
            <li>衍生应用</li>
          </ul>
        </div>

        <div className="qianshan-hero-visual reveal-item is-visible">
          <img
            src={qianshanCharacterHero}
            alt="千山农场鸡形 IP 角色完整形象"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="qianshan-section" aria-labelledby="qianshan-character-title">
        <h2 id="qianshan-character-title" className="reveal-item">角色设定</h2>
        <figure className="qianshan-turnaround reveal-item">
          <img
            src={qianshanCharacterTurnaround}
            alt="千山农场 IP 角色正面、侧面与背面三视图"
          />
        </figure>
      </section>

      <section className="qianshan-section" aria-labelledby="qianshan-expression-title">
        <h2 id="qianshan-expression-title" className="reveal-item">表情系统</h2>
        <div className="qianshan-expression-grid">
          {qianshanExpressions.map((expression, index) => (
            <figure
              className="qianshan-expression reveal-item"
              key={expression.id}
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <img src={expression.src} alt={expression.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="qianshan-section" aria-labelledby="qianshan-application-title">
        <h2 id="qianshan-application-title" className="reveal-item">应用延展</h2>
        <div className="qianshan-application-grid">
          <figure className="qianshan-application qianshan-application-featured reveal-item">
            <img src={qianshanApplicationBag} alt="千山农场 IP 品牌手提袋应用" loading="lazy" />
          </figure>
          <div className="qianshan-application-stack">
            <figure className="qianshan-application reveal-item">
              <img src={qianshanApplicationNotebook} alt="千山农场 IP 品牌笔记本应用" loading="lazy" />
            </figure>
            <figure className="qianshan-application reveal-item">
              <img src={qianshanApplicationMug} alt="千山农场 IP 品牌马克杯应用" loading="lazy" />
            </figure>
          </div>
        </div>
      </section>

      <footer className="qianshan-signoff reveal-item">
        <p>QIANSHAN FARM</p>
        <span aria-hidden="true" />
      </footer>
    </main>
  );
}

async function copyTextToClipboard(value) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();

  if (!copied) {
    throw new Error("Clipboard copy failed");
  }
}

function ContactSection() {
  const [wechatCopyStatus, setWechatCopyStatus] = useState("idle");
  const copyResetTimerRef = useRef(null);

  useEffect(() => () => {
    if (copyResetTimerRef.current) {
      window.clearTimeout(copyResetTimerRef.current);
    }
  }, []);

  async function handleWechatCopy(value) {
    try {
      await copyTextToClipboard(value);
      setWechatCopyStatus("copied");
    } catch {
      setWechatCopyStatus("failed");
    }

    if (copyResetTimerRef.current) {
      window.clearTimeout(copyResetTimerRef.current);
    }

    copyResetTimerRef.current = window.setTimeout(() => {
      setWechatCopyStatus("idle");
    }, 2200);
  }

  return (
    <footer className="contact-section section-reveal" id="contact">
      <div className="contact-copy reveal-item">
        <p className="eyebrow">Contact</p>
        <h2>Let's build the next visual story.</h2>
        <p>欢迎联系我讨论视觉设计、UI 页面、前端作品实现或项目合作。这里会放真实邮箱、社媒和作品入口。</p>
      </div>

      <div className="contact-actions reveal-item" aria-label="Contact links">
        {contactLinks.map((link) => link.type === "wechat" ? (
          <button
            className={wechatCopyStatus === "copied" ? "contact-link is-copied" : "contact-link"}
            key={link.label}
            type="button"
            onClick={() => handleWechatCopy(link.value)}
            aria-label={`复制微信号 ${link.value}`}
          >
            {wechatCopyStatus === "copied"
              ? "已复制微信号 ✓"
              : wechatCopyStatus === "failed"
                ? `复制失败，请手动复制 ${link.value}`
                : link.label}
          </button>
        ) : (
          <a
            className="contact-link"
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>

      <p className="copyright reveal-item">© 2026 Le0n Portfolio</p>
    </footer>
  );
}

export default function App() {
  useScrollReveal();
  const { pagePath, navigate } = usePagePath();
  const [resumeOpen, setResumeOpen] = useState(false);
  const resumeTriggerRef = useRef(null);
  const isPhotographyPage = pagePath === "/works/poster";
  const isPosterDesignPage = pagePath === "/works/poster-design";
  const isTeaProjectPage = pagePath === "/works/tea-ui";
  const isYueErTingPage = pagePath === "/works/yueerting-ui";
  const isQianshanPage = pagePath === "/works/qianshan-farm";
  const isDetailPage = isPhotographyPage
    || isPosterDesignPage
    || isTeaProjectPage
    || isYueErTingPage
    || isQianshanPage;

  function returnToWorkSection() {
    navigate("/", "work");
  }

  const openResume = useCallback(() => {
    setResumeOpen(true);
  }, []);

  const closeResume = useCallback(() => {
    setResumeOpen(false);
    requestAnimationFrame(() => resumeTriggerRef.current?.focus());
  }, []);

  const viewWorkflow = useCallback(() => {
    setResumeOpen(false);
    window.history.pushState({}, "", `${getAppPath("/")}#capabilities`);
    requestAnimationFrame(() => {
      document.getElementById("capabilities")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <>
      {!isDetailPage ? <Header /> : null}
      {isPhotographyPage ? (
        <VisualArchivePage
          onBackToWork={returnToWorkSection}
          eyebrow="Photography archive"
          title="我的摄影作品"
          ariaLabel="Photography works archive"
          works={photographyWorks}
        />
      ) : isPosterDesignPage ? (
        <VisualArchivePage
          onBackToWork={returnToWorkSection}
          eyebrow="Poster archive"
          title="我的海报作品"
          ariaLabel="Poster design works archive"
          works={posterDesignWorks}
          pageClassName="poster-design-page"
        />
      ) : isTeaProjectPage ? (
        <TeaProjectPage onBackToWork={returnToWorkSection} />
      ) : isYueErTingPage ? (
        <YueErTingProjectPage onBackToWork={returnToWorkSection} />
      ) : isQianshanPage ? (
        <QianshanProjectPage onBackToWork={returnToWorkSection} />
      ) : (
        <main className="home-page" id="top">
          <Hero onOpenResume={openResume} resumeTriggerRef={resumeTriggerRef} />
          <WorkSection
            onOpenPhotography={() => navigate("/works/poster")}
            onOpenPosterDesign={() => navigate("/works/poster-design")}
            onOpenTeaProject={() => navigate("/works/tea-ui")}
            onOpenUiProject={() => navigate("/works/yueerting-ui")}
            onOpenBrandProject={() => navigate("/works/qianshan-farm")}
          />
          <ExperienceRoute />
          <CapabilitiesPanel />
        </main>
      )}
      {!isDetailPage ? <ContactSection /> : null}
      <ResumeModal isOpen={resumeOpen} onClose={closeResume} onViewWorkflow={viewWorkflow} />
    </>
  );
}
