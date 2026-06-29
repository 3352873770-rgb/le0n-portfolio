import { useEffect, useState } from "react";
import le0nWordmark from "../assets/le0n-wordmark-transparent.png";
import profileAvatar from "../assets/profile-avatar.jpg";

const navItems = [
  { href: "/#work", label: "Works" },
  { href: "/#about", label: "About" },
  { href: "/#process", label: "Process" },
  { href: "/#contact", label: "Contact" },
];

const workCategories = [
  {
    id: "frontend",
    title: "Frontend Website",
    label: "React / Vite / Interaction",
    body: "响应式网站、交互动效、组件化页面和前端作品案例。",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    tone: "electric",
  },
  {
    id: "ui",
    title: "UI Design",
    label: "Interface / App / System",
    body: "移动端界面、视觉规范、信息架构和产品界面设计。",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
    tone: "soft",
  },
  {
    id: "poster",
    title: "Poster Design",
    label: "Poster / Layout / Visual",
    body: "海报、版式、图形实验和视觉传达作品。",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80",
    tone: "warm",
  },
  {
    id: "motion",
    title: "Motion Study",
    label: "Hover / Scroll / Prototype",
    body: "保留给后续动效实验和交互原型展示。",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=900&q=80",
    tone: "dark",
  },
  {
    id: "brand",
    title: "Brand System",
    label: "Identity / 3D / Material",
    body: "品牌视觉、材质字母和统一视觉资产。",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=80",
    tone: "neutral",
  },
];

const workCarouselSize = 3;

const capabilities = [
  {
    number: "01",
    title: "拥抱 AI 工具能力",
    body: "毫无疑问，AIGC的发展已经成指数性发展，近几年来的AI发展速度远远超过我们的想象，许多人都在担心自己会被AI代替，确实如此，AI的能力确实很强大，与其担心被替代，不如抓住风口学习如何使用AI，此时，你跟别人的差距就在于对AI的熟练度，它更像是对你综合能力的考验，对于你的项目思考能力，问题拆分能力与管理能力。",
  },
  {
    number: "02",
    title: "UI system",
    body: "移动端界面、组件规范、信息层级和产品视觉系统。",
  },
  {
    number: "03",
    title: "Frontend build",
    body: "用 React 和 CSS 把视觉稿转成可浏览、可交互的网页。",
  },
];

const contactLinks = [
  { href: "mailto:hello@le0n.dev", label: "hello@le0n.dev" },
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
  { label: "方向", value: "UI设计 · 网页设计 · 视觉设计" },
  { label: "所在地", value: "Guangzhou, China" },
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
    id: "poster-2026-vision",
    year: "2026",
    time: "2026.06.18",
    title: "视觉观察者",
    description: "以人物面部局部和纸张纹理为主体，尝试把观察、情绪和版式节奏放进同一张海报。",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "poster-2026-type",
    year: "2026",
    time: "2026.04.22",
    title: "文字结构实验",
    description: "围绕粗体标题、留白和图像裁切建立视觉层级，适合作为活动主视觉方向。",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "poster-2025-light",
    year: "2025",
    time: "2025.11.06",
    title: "光影展览海报",
    description: "使用低饱和色彩和柔和光影，练习展览信息与画面气氛之间的平衡。",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "poster-2025-collage",
    year: "2025",
    time: "2025.08.14",
    title: "拼贴叙事",
    description: "通过照片、色块和层叠图形组合，测试更自由的海报叙事方式。",
    image: "https://images.unsplash.com/photo-1520453803296-c39eabe2dab4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "poster-2024-blue",
    year: "2024",
    time: "2024.12.03",
    title: "蓝色植物标本",
    description: "以蓝晒质感作为视觉参考，探索自然纹理在平面设计中的装饰性。",
    image: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&w=900&q=80",
  },
];

const posterYears = Array.from(new Set(posterWorks.map((work) => work.year)))
  .sort((current, next) => Number(next) - Number(current));
const posterAllFilter = { type: "all", value: "all", label: "全部" };
const posterYearFilters = [
  posterAllFilter,
  ...posterYears.map((year) => ({ type: "year", value: year, label: year })),
];

function getPosterMonths(year) {
  return Array.from(new Set(
    posterWorks
      .filter((work) => work.year === year)
      .map((work) => work.time.slice(0, 7)),
  )).sort((current, next) => next.localeCompare(current));
}

function useScrollReveal() {
  useEffect(() => {
    const revealItems = document.querySelectorAll(".section-reveal");

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

    revealItems.forEach((item) => revealObserver.observe(item));
    return () => revealObserver.disconnect();
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
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">打开导航</span>
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
    <aside className="profile-card" aria-label="Personal profile card">
      <div className="profile-card-head">
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

      <p className="profile-bio">{profile.bio}</p>
      <div className="profile-divider" aria-hidden="true" />

      <div className="profile-info-grid">
        {profileInfo.map((item) => (
          <div className="profile-info-item" key={item.label}>
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

      <div className="profile-actions">
        <a className="profile-action primary" href="#about">查看简历</a>
        <a className="profile-action secondary" href="#contact">联系我 <span aria-hidden="true">↗</span></a>
      </div>
    </aside>
  );
}

function ExperienceRoute() {
  return (
    <div className="experience-route" aria-label="Experience route">
      <div className="experience-heading">
        <p>Experience route</p>
        <span>2023 - Now</span>
      </div>

      <div className="experience-track">
        {experienceRoute.map((item, index) => (
          <article className="experience-card" key={item.year}>
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
        <div className="hero-copy">
          <p className="hero-intro">Hi I'm</p>
          <p className="eyebrow">Personal portfolio</p>
          <h1 className="hero-title" id="hero-title">
            <span className="sr-only">Le0n</span>
            <img className="hero-wordmark" src={le0nWordmark} alt="" aria-hidden="true" />
          </h1>
          <p className="hero-text">数字媒体技术 · 视觉设计方向</p>
          <p className="hero-specialty">我把 UI、海报、品牌视觉和前端实现整理成可浏览的作品系统，让设计从图像延展到真实页面。</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">View works</a>
            <a className="button secondary" href="#contact">Contact</a>
          </div>
        </div>

        <ProfileCard />
      </div>

      <ExperienceRoute />
    </section>
  );
}

function usePagePath() {
  const [pagePath, setPagePath] = useState(() => window.location.pathname);

  useEffect(() => {
    function handlePopState() {
      setPagePath(window.location.pathname);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigate(path) {
    if (window.location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.history.pushState({}, "", path);
    setPagePath(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return { pagePath, navigate };
}

function WorkStrip({ work, active, onPreview, onOpen }) {
  return (
    <button
      className={`work-strip is-${work.tone}${active ? " is-active" : ""}`}
      type="button"
      aria-pressed={active}
      onClick={onOpen}
      onMouseEnter={onPreview}
      onFocus={onPreview}
    >
      <img src={work.image} alt="" aria-hidden="true" />
      <span className="work-strip-shade" aria-hidden="true" />
      <span className="work-strip-content">
        <span className="work-strip-label">{work.label}</span>
        <strong>{work.title}</strong>
        <span className="work-strip-body">{work.body}</span>
      </span>
      <span className="work-strip-vertical">{work.title}</span>
    </button>
  );
}

function WorkSection({ onOpenPoster }) {
  const [activeWork, setActiveWork] = useState(workCategories[0].id);
  const [carouselStart, setCarouselStart] = useState(0);
  const visibleWorks = Array.from({ length: workCarouselSize }, (_, index) => (
    workCategories[(carouselStart + index) % workCategories.length]
  ));

  function moveCarousel(direction) {
    const nextStart = (carouselStart + direction + workCategories.length) % workCategories.length;
    setCarouselStart(nextStart);
    setActiveWork(workCategories[nextStart].id);
  }

  return (
    <section className="section work-section section-reveal" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <h2 id="work-title">Selected works</h2>
        <p>作品先按方向进入：前端网站、UI 设计、海报设计。每个分类后续都会延展成独立页面和完整项目详情。</p>
      </div>

      <div className="work-carousel">
        <div className="work-showcase" aria-label="Work categories">
          {visibleWorks.map((work) => (
            <WorkStrip
              key={work.id}
              work={work}
              active={activeWork === work.id}
              onPreview={() => setActiveWork(work.id)}
              onOpen={() => {
                setActiveWork(work.id);
                if (work.id === "poster") {
                  onOpenPoster();
                }
              }}
            />
          ))}
        </div>

        <div className="work-carousel-controls" aria-label="Work carousel controls">
          <button type="button" onClick={() => moveCarousel(-1)} aria-label="上一组作品">‹</button>
          <span>{String(carouselStart + 1).padStart(2, "0")} / {String(workCategories.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => moveCarousel(1)} aria-label="下一组作品">›</button>
        </div>
      </div>
    </section>
  );
}

function PosterTimeNav({ activeFilter, onChange }) {
  const selectedYear = activeFilter.type === "month"
    ? activeFilter.value.slice(0, 4)
    : activeFilter.type === "year"
      ? activeFilter.value
      : null;
  const monthFilters = selectedYear
    ? getPosterMonths(selectedYear).map((month) => ({ type: "month", value: month, label: month }))
    : [];

  return (
    <header className="poster-time-header">
      <nav className="poster-time-shell" aria-label="Time filter">
        <div className="poster-time-links">
          {posterYearFilters.map((filter) => {
            const count = filter.type === "all"
              ? posterWorks.length
              : posterWorks.filter((work) => work.year === filter.value).length;
            const isActive = filter.type === "all"
              ? activeFilter.type === "all"
              : selectedYear === filter.value;

            return (
              <button
                key={`${filter.type}-${filter.value}`}
                className={`poster-year-button${filter.type === "all" ? " is-all" : ""}${isActive ? " is-active" : ""}`}
                type="button"
                onClick={() => onChange(filter)}
                aria-label={filter.type === "all" ? "显示全部作品" : `显示 ${filter.label} 年作品`}
              >
                {filter.type === "all" ? (
                  <span className="filter-all-icon" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                    <span />
                  </span>
                ) : (
                  <span>{filter.label}</span>
                )}
                <small>{count}</small>
              </button>
            );
          })}
        </div>

        {monthFilters.length > 0 ? (
          <div className="poster-month-links" aria-label={`${selectedYear} month filter`}>
            {monthFilters.map((filter) => {
              const count = posterWorks.filter((work) => work.time.startsWith(filter.value)).length;

              return (
                <button
                  key={filter.value}
                  className={activeFilter.type === "month" && activeFilter.value === filter.value ? "is-active" : ""}
                  type="button"
                  onClick={() => onChange(filter)}
                >
                  <span>{filter.label.slice(5)}月</span>
                  <small>{count}</small>
                </button>
              );
            })}
          </div>
        ) : null}
      </nav>
    </header>
  );
}

function PosterArchivePage({ onBackHome }) {
  const [activeFilter, setActiveFilter] = useState(posterAllFilter);
  const filteredWorks = activeFilter.type === "all"
    ? posterWorks
    : posterWorks.filter((work) => (
      activeFilter.type === "year"
        ? work.year === activeFilter.value
        : work.time.startsWith(activeFilter.value)
    ));

  return (
    <main className="poster-page" id="top">
      <button className="back-link" type="button" onClick={onBackHome}>返回主页</button>
      <section className="poster-hero section-reveal is-visible" aria-labelledby="poster-title">
        <p className="eyebrow">Poster archive</p>
        <h1 id="poster-title">Poster Design</h1>
        <p>按时间筛选海报作品。每张图片下方保留作品名称、时间和创作简述，方便后续替换成真实上传作品。</p>
      </section>

      <section className="poster-archive" aria-label="Poster works archive">
        <PosterTimeNav activeFilter={activeFilter} onChange={setActiveFilter} />
        <div className="poster-gallery">
          {filteredWorks.map((work) => (
            <article className="poster-work-card" key={work.id}>
              <div className="poster-image-wrap">
                <img src={work.image} alt={work.title} />
              </div>
              <div className="poster-work-info">
                <p><strong>作品名称：</strong>{work.title}</p>
                <p><strong>时间：</strong>{work.time}</p>
                <p><strong>创作简述：</strong>{work.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function AboutSection() {
  return (
    <section className="section about-section section-reveal" id="about" aria-labelledby="about-title">
      <div className="about-intro">
        <h2 id="about-title">对 AI 时代的看法</h2>
        <p>个人对未来趋势的看法</p>
      </div>

      <div className="capability-grid" aria-label="Capabilities">
        {capabilities.map((capability) => (
          <div className="capability" key={`${capability.number}-${capability.body}`}>
            <span>{capability.number}</span>
            {capability.title ? <h3>{capability.title}</h3> : null}
            <p>{capability.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="section testimonial-section section-reveal" id="process" aria-labelledby="process-title">
      <div className="testimonial-panel">
        <p className="eyebrow">Process</p>
        <h2 id="process-title">From visual idea to working interface.</h2>
        <p>我会把每个作品补全为案例：目标、过程、视觉系统、最终效果和实现方式。这样浏览者不仅能看到结果，也能判断设计思路。</p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <footer className="contact-section section-reveal" id="contact">
      <div className="contact-copy">
        <p className="eyebrow">Contact</p>
        <h2>Let's build the next visual story.</h2>
        <p>欢迎联系我讨论视觉设计、UI 页面、前端作品实现或项目合作。这里会放真实邮箱、社媒和作品入口。</p>
      </div>

      <div className="contact-actions" aria-label="Contact links">
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

      <p className="copyright">© 2026 Le0n Portfolio</p>
    </footer>
  );
}

export default function App() {
  useScrollReveal();
  const { pagePath, navigate } = usePagePath();
  const isPosterPage = pagePath === "/works/poster";

  return (
    <>
      {!isPosterPage ? <Header /> : null}
      {isPosterPage ? (
        <PosterArchivePage onBackHome={() => navigate("/")} />
      ) : (
        <main id="top">
          <Hero />
          <WorkSection onOpenPoster={() => navigate("/works/poster")} />
          <AboutSection />
          <ProcessSection />
        </main>
      )}
      {!isPosterPage ? <ContactSection /> : null}
    </>
  );
}
