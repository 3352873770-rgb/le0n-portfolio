import { useEffect, useRef, useState } from "react";
import le0nWordmark from "../assets/le0n-wordmark-transparent.png";
import profileAvatar from "../assets/profile-avatar.jpg";
import yueWelcome from "../assets/yueerting/01-welcome.png";
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
import teaProjectCover from "../assets/tea-ui/tea-project-cover.jpg";
import photoCampusAfternoon from "../assets/photography/01-campus-afternoon.jpg";
import photoCrosswalkMotion from "../assets/photography/02-crosswalk-motion.jpg";
import photoAmberStairway from "../assets/photography/03-amber-stairway.jpg";
import photoNightNoodleShop from "../assets/photography/04-night-noodle-shop.jpg";
import photoFloweringStreet from "../assets/photography/05-flowering-street.jpg";
import photoTwilightSilhouette from "../assets/photography/06-twilight-silhouette.jpg";
import photoRiverfrontGoldenHour from "../assets/photography/07-riverfront-golden-hour.jpg";
import photoSeasideLight from "../assets/photography/08-seaside-light.jpg";
import photoWallShadows from "../assets/photography/09-wall-shadows.jpg";
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
  { href: "#work", label: "作品集" },
  { href: "#about", label: "AI 观点" },
  { href: "#contact", label: "联系我" },
];

const appBasePath = import.meta.env.BASE_URL === "/"
  ? ""
  : import.meta.env.BASE_URL.replace(/\/$/, "");

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
    id: "frontend",
    title: "客官请喝茶",
    label: "React / Vite / Interaction",
    body: "游戏 UI 界面设计师",
    image: teaProjectCover,
    tone: "electric",
  },
  {
    id: "ui",
    title: "悦耳听",
    body: "音乐 App UI 界面设计",
    image: yueWelcome,
    tone: "soft",
  },
  {
    id: "brand",
    title: "品牌视觉设计",
    body: "品牌识别、视觉系统与延展设计。",
    image: qianshanCharacterHero,
    tone: "neutral",
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
    value: "访问宣传网站 ↗",
    href: "https://leonoonlin-pixel.github.io/ke-guan-qing-he-cha/",
  },
];

const teaProjectContributions = [
  {
    title: "界面视觉方向",
    body: "围绕游戏主题建立界面气质、字体层级、色彩氛围和基础视觉规范，让面试官能快速判断项目风格。",
  },
  {
    title: "信息层级整理",
    body: "把玩家需要看到的核心信息拆成主按钮、状态信息、任务入口和反馈区域，减少界面阅读压力。",
  },
  {
    title: "交互与落地表达",
    body: "后续会把关键页面、操作流程和设计原因放进案例页，说明我不仅做视觉，也关注真实使用路径。",
  },
];

const capabilities = [
  {
    title: "拥抱 AI 工具能力",
    body: [
      "毫无疑问，AIGC 的发展已经成指数性发展，近几年来的 AI 发展速度远远超过我们的想象，许多人都在担心自己会被 AI 代替，确实如此，AI 的能力确实很强大。",
      "与其担心被替代，不如抓住风口学习如何使用 AI。此时，你跟别人的差距就在于对 AI 的熟练度，它更像是对综合能力的考验，包括项目思考能力、问题拆分能力与管理能力。",
    ],
  },
  {
    title: "让 AI 成为设计伙伴",
    body: [
      "我始终保持对新技术的关注，尤其是 AI 在设计领域的应用。我更希望把它作为自己的设计伙伴，而不是简单的工具，让它参与创意、优化流程，把更多时间留给思考和设计本身。",
      "我喜欢研究新的工具和设计方法，也愿意花时间去探索更高效的工作流程。AI 对我来说不是用来替代设计，而是帮助我把重复性的工作做得更快，把更多精力放在创意、细节和用户体验上。我希望不断学习，把设计和技术结合起来，做出真正能够解决问题的作品。",
    ],
  },
];

const contactLinks = [
  { href: "mailto:hello@le0n.dev", label: "VX:-LiA_Ang" },
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
];

const experienceRoute = [
  { year: "2023", title: "数字媒体技术学习", body: "视觉基础 / 影像 / 交互" },
  { year: "2024", title: "开始个人设计项目", body: "海报 / UI / 品牌视觉" },
  { year: "2025", title: "参与多类型项目实践", body: "App / 小程序 / 游戏视觉" },
  { year: "2026", title: "拓展前端与AI工作流", body: "React + Vite / AIGC" },
  { year: "NOW", title: "寻找UI与视觉设计机会", body: "开放实习与工作机会" },
];

const posterWorks = [
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
      if (!(item instanceof Element) || item.dataset.revealObserved === "true") {
        return;
      }

      item.dataset.revealObserved = "true";
      revealObserver.observe(item);
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

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
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
            <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

function ProfileCard() {
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
        <a className="profile-action primary" href="#capabilities">查看简历</a>
        <a className="profile-action secondary" href="#contact">联系我 <span aria-hidden="true">↗</span></a>
      </div>
    </aside>
  );
}

function CapabilitiesPanel() {
  return (
    <section className="capabilities-panel reveal-item" id="capabilities" aria-labelledby="capabilities-title">
      <div className="capabilities-copy">
        <p className="capabilities-kicker">Capabilities / 02</p>
        <h2 id="capabilities-title">我的能力</h2>
        <p>相比单纯使用 AI 出图，我更关注如何把 AI 变成设计生产力。我会根据项目需求设计工作流，让 AI 参与需求分析、方案探索、视觉设计、组件规范、前端开发等多个环节，而设计判断、用户体验和最终质量由我把控。因此，我不仅能够提高设计效率，也能保证作品具有一致性和可落地性。</p>
        <span aria-hidden="true" />
        <p>AI 是提高效率的工具，设计判断与最终品质由我负责。</p>
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
    <div className="experience-route reveal-item" aria-label="Experience route">
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

function Hero() {
  return (
    <section className="hero section-reveal" aria-labelledby="hero-title">
      <div className="hero-content">
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

        <ProfileCard />
      </div>

      <CapabilitiesPanel />
      <ExperienceRoute />
    </section>
  );
}

function usePagePath() {
  const [pagePath, setPagePath] = useState(getCurrentPagePath);

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
    setPagePath(path);

    if (targetId) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => {
          document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return { pagePath, navigate };
}

function WorkStrip({ work, onOpen, style }) {
  const Element = onOpen ? "button" : "article";

  return (
    <Element
      className={`work-strip reveal-item is-${work.tone}${onOpen ? "" : " is-static"}`}
      style={style}
      {...(onOpen ? { type: "button", onClick: onOpen } : {})}
    >
      <img src={work.image} alt="" aria-hidden="true" />
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

function WorkSection({ onOpenPoster, onOpenTeaProject, onOpenUiProject, onOpenBrandProject }) {
  const workTrackRef = useRef(null);
  const scrollFrameRef = useRef(null);
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

  useEffect(() => {
    const track = workTrackRef.current;

    if (!track) {
      return undefined;
    }

    const resizeObserver = new ResizeObserver(syncWorkScroll);
    resizeObserver.observe(track);
    window.addEventListener("resize", syncWorkScroll);
    syncWorkScroll();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", syncWorkScroll);

      if (scrollFrameRef.current) {
        window.cancelAnimationFrame(scrollFrameRef.current);
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
    track.scrollTo({ left: scrollRange * (progress / 100), behavior: "auto" });
    setScrollMetrics((current) => ({ ...current, progress }));
  }

  return (
    <section className="section work-section section-reveal" id="work" aria-labelledby="work-title">
      <div className="section-heading reveal-item">
        <h2 id="work-title">个人作品集</h2>
        <p>作品先按方向进入：游戏 UI、App UI、摄影作品、品牌视觉设计。每个分类后续都会延展成独立页面和完整项目详情。</p>
      </div>

      <div className="work-carousel reveal-item">
        <div
          className="work-showcase"
          ref={workTrackRef}
          onScroll={syncWorkScroll}
          tabIndex="0"
          aria-label="可横向浏览的作品模块"
        >
          {workCategories.map((work, index) => (
            <WorkStrip
              key={work.id}
              work={work}
              style={{ "--reveal-delay": `${index * 90}ms` }}
              onOpen={work.id === "frontend"
                ? onOpenTeaProject
                : work.id === "ui"
                  ? onOpenUiProject
                  : work.id === "poster"
                    ? onOpenPoster
                    : work.id === "brand"
                      ? onOpenBrandProject
                      : undefined}
            />
          ))}
        </div>

        <div className={`work-scroll-control${scrollMetrics.hasOverflow ? " is-active" : ""}`}>
          <div className="work-scroll-meta" aria-hidden="true">
            <span>{scrollMetrics.hasOverflow ? "拖动浏览更多作品" : "当前展示全部作品"}</span>
            <span>{String(workCategories.length).padStart(2, "0")} PROJECTS</span>
          </div>
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
    </section>
  );
}

function PosterArchivePage({ onBackToWork }) {
  return (
    <main className="poster-page" id="top">
      <button className="back-link reveal-item" type="button" onClick={onBackToWork}>返回作品集</button>
      <section className="poster-hero section-reveal is-visible" aria-labelledby="poster-title">
        <p className="eyebrow">Photography archive</p>
        <h1 id="poster-title">我的摄影作品</h1>
      </section>

      <section className="poster-archive" aria-label="Photography works archive">
        <div className="poster-gallery">
          {posterWorks.map((work, index) => (
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
      </section>
    </main>
  );
}

function UiScreenGallery({ screens, label, progressId, aspectRatio }) {
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
      className="ui-screen-showcase"
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
            className="ui-screen-card reveal-item"
            key={screen.id}
            style={{ "--reveal-delay": `${Math.min(index * 55, 330)}ms` }}
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
    <main className="case-page" id="top">
      <button className="back-link reveal-item" type="button" onClick={onBackToWork}>返回作品集</button>

      <section className="case-hero section-reveal is-visible" aria-labelledby="tea-project-title">
        <div className="case-hero-copy reveal-item">
          <p className="eyebrow">Game UI case / 01</p>
          <h1 id="tea-project-title">客官请喝茶</h1>
          <p>这是一个用于展示游戏 UI 界面设计能力的项目页。后续会补充真实项目图、页面流程和关键设计说明，让面试官能快速理解我做了什么、为什么这样做，以及最终呈现的效果。</p>
        </div>

        <div className="case-hero-panel reveal-item" aria-label="Project summary">
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

      <section className="case-section" aria-labelledby="tea-contribution-title">
        <div className="case-section-head reveal-item">
          <p className="eyebrow">My work</p>
          <h2 id="tea-contribution-title">我在项目中负责的部分</h2>
        </div>

        <div className="case-card-grid">
          {teaProjectContributions.map((item, index) => (
            <article
              className="case-card reveal-item"
              key={item.title}
              style={{ "--reveal-delay": `${index * 90}ms` }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-screen-section reveal-item" aria-labelledby="tea-screens-title">
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
    </main>
  );
}

function YueErTingProjectPage({ onBackToWork }) {
  return (
    <main className="ui-case-page" id="top">
      <button className="back-link ui-case-back-link reveal-item" type="button" onClick={onBackToWork}>
        返回作品集
      </button>

      <section className="ui-case-intro section-reveal is-visible" aria-labelledby="yueerting-title">
        <h1 id="yueerting-title" className="reveal-item is-visible">悦耳听</h1>
        <p className="reveal-item is-visible">
          以轻社交和个性化推荐为核心，为年轻用户打造纯净、沉浸的音乐 App 体验。
        </p>
      </section>

      <UiScreenGallery
        screens={yueErTingScreens}
        label="悦耳听 UI 界面展示"
        progressId="yueerting-gallery-progress"
        aspectRatio="804 / 1748"
      />
    </main>
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

function AboutSection() {
  return (
    <section className="section about-section section-reveal" id="about" aria-labelledby="about-title">
      <div className="about-intro reveal-item">
        <h2 id="about-title">对 AI 时代的看法</h2>
        <p>个人对未来趋势的看法</p>
      </div>

      <div className="capability-grid" aria-label="Capabilities">
        {capabilities.map((capability, index) => (
          <div
            className="capability reveal-item"
            key={capability.title || `capability-${index}`}
            style={{ "--reveal-delay": `${index * 100}ms` }}
          >
            {capability.title ? <h3>{capability.title}</h3> : null}
            {capability.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section testimonial-section section-reveal" id="process" aria-labelledby="process-title">
      <div className="testimonial-panel reveal-item">
        <p className="eyebrow">Process</p>
        <h2 id="process-title">From visual idea to working interface.</h2>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer className="contact-section section-reveal" id="contact">
      <div className="contact-copy reveal-item">
        <p className="eyebrow">Contact</p>
        <h2>Let's build the next visual story.</h2>
        <p>欢迎联系我讨论视觉设计、UI 页面、前端作品实现或项目合作。这里会放真实邮箱、社媒和作品入口。</p>
      </div>

      <div className="contact-actions reveal-item" aria-label="Contact links">
        {contactLinks.map((link) => (
          <a
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
  const isPosterPage = pagePath === "/works/poster";
  const isTeaProjectPage = pagePath === "/works/tea-ui";
  const isYueErTingPage = pagePath === "/works/yueerting-ui";
  const isQianshanPage = pagePath === "/works/qianshan-farm";
  const isDetailPage = isPosterPage || isTeaProjectPage || isYueErTingPage || isQianshanPage;

  function returnToWorkSection() {
    navigate("/", "work");
  }

  return (
    <>
      {!isDetailPage ? <Header /> : null}
      {isPosterPage ? (
        <PosterArchivePage onBackToWork={returnToWorkSection} />
      ) : isTeaProjectPage ? (
        <TeaProjectPage onBackToWork={returnToWorkSection} />
      ) : isYueErTingPage ? (
        <YueErTingProjectPage onBackToWork={returnToWorkSection} />
      ) : isQianshanPage ? (
        <QianshanProjectPage onBackToWork={returnToWorkSection} />
      ) : (
        <main id="top">
          <Hero />
          <WorkSection
            onOpenPoster={() => navigate("/works/poster")}
            onOpenTeaProject={() => navigate("/works/tea-ui")}
            onOpenUiProject={() => navigate("/works/yueerting-ui")}
            onOpenBrandProject={() => navigate("/works/qianshan-farm")}
          />
          <AboutSection />
          <ProcessSection />
        </main>
      )}
      {!isDetailPage ? <ContactSection /> : null}
    </>
  );
}
