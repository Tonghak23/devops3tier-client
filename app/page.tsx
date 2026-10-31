import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "tonghak23 | DevOps & Backend Engineer",
  description:
    "DevOps and backend engineer building CI/CD pipelines, containerized platforms, Kubernetes clusters and Spring Boot microservices.",
};

const stats = [
  { value: "4+", label: "Years experience" },
  { value: "Container", label: "Containerization" },
  { value: "CI/CD", label: "Pipelines shipped" },
  { value: "Monitoring", label: "Monitoring services" },
];

const skills = [
  {
    icon: "🐳",
    title: "Containers & Docker",
    text: "Docker and Docker Compose stacks for local, staging and production-oriented environments, including offline registries and proxies.",
    tags: ["Docker", "Compose", "Nexus", "WSL2"],
  },
  {
    icon: "⚙️",
    title: "CI/CD Automation",
    text: "Jenkins and GitLab pipelines covering build, test, artifact and deploy stages, plus fixing stuck manual deployments.",
    tags: ["Jenkins", "GitLab CE", "Pipelines", "Nexus"],
  },
  {
    icon: "☸️",
    title: "Kubernetes",
    text: "Self-managed kubeadm clusters on bare metal running Spring Boot microservices with load balancing.",
    tags: ["kubeadm", "Ingress", "Load balancing", "Helm"],
  },
  {
    icon: "🍃",
    title: "Spring Boot Backend",
    text: "Secure REST APIs, gateways and microservices, with OAuth2 / multi-provider sign-in designs.",
    tags: ["Java", "Spring Boot", "OAuth2", "REST"],
  },
  {
    icon: "📨",
    title: "Distributed Systems",
    text: "Multi-node RabbitMQ and Redis clusters designed for high availability and resilience.",
    tags: ["RabbitMQ", "Redis", "HA", "Clustering"],
  },
  {
    icon: "📊",
    title: "Monitoring & Logging",
    text: "Centralized log search and monitoring with Elasticsearch to track service health, trace issues fast and keep systems reliable.",
    tags: ["Elasticsearch", "Log analysis", "Dashboards", "Alerting"],
  }
];

const experience = [
  {
    period: "Jun 2023 – Present",
    role: "Senior Backend & Middleware Development Officer",
    org: "Banking sector",
    points: [
      "Build backend APIs and system integrations for business-team enhancements and external regulatory requirements.",
      "Support Jenkins pipelines and resolve manual deployment issues for operations teams.",
      "Design middleware and high-availability infrastructure for critical services.",
    ],
  },
  {
    period: "Jun 2022 – May 2023",
    role: "Backend API Engineer",
    org: "Early career",
    points: [
      "Built a strong NodeJs and NestJs API foundation.",
      "Started hands-on work with infrastructure setup, containers and automation.",
    ],
  },
];

const pipeline = ["Commit", "Build", "Test", "Image", "Deploy", "Monitor"];

// Logos come from Simple Icons CDN: https://cdn.simpleicons.org/<slug>/<hex>
type Tech = { name: string; slug: string; color: string };

const rowInfra: Tech[] = [
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "Kubernetes", slug: "kubernetes", color: "326CE5" },
  { name: "Jenkins", slug: "jenkins", color: "D24939" },
  { name: "GitLab", slug: "gitlab", color: "FC6D26" },
  { name: "Git", slug: "git", color: "F05032" },
  { name: "Linux", slug: "linux", color: "FCC624" },
  { name: "Nginx", slug: "nginx", color: "009639" },
  { name: "Cloudflare", slug: "cloudflare", color: "F38020" },
  { name: "Elasticsearch", slug: "elasticsearch", color: "005571" }
];

const rowBackend: Tech[] = [
  { name: "Spring Boot", slug: "springboot", color: "6DB33F" },
  { name: "Java", slug: "openjdk", color: "ED8B00" },
  { name: "RabbitMQ", slug: "rabbitmq", color: "FF6600" },
  { name: "Redis", slug: "redis", color: "FF4438" },
  { name: "Nexus", slug: "sonatype", color: "1B1C30" },
  { name: "Next.js", slug: "nextdotjs", color: "000000" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
];

function Marquee({ items, speed }: { items: Tech[]; speed: "fast" | "slow" }) {
  // Duplicate the list so the loop is seamless
  const loop = [...items, ...items];
  return (
    <div className={styles.marquee}>
      <div
        className={`${styles.track} ${
          speed === "slow" ? styles.trackSlow : styles.trackFast
        }`}
      >
        {loop.map((t, i) => (
          <div
            key={`${t.name}-${i}`}
            className={styles.chip}
            aria-hidden={i >= items.length}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://cdn.simpleicons.org/${t.slug}/${t.color}`}
              alt={i < items.length ? t.name : ""}
              width={28}
              height={28}
              loading="lazy"
            />
            <span>{t.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.glow} aria-hidden />

      <header className={styles.nav}>
        <a href="#top" className={styles.logo}>
          <span className={styles.logoMark}>&gt;_</span> tonghak23
        </a>
        <nav className={styles.links}>
          <a href="#stack">Stack</a>
          <a href="#skills">Skills</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#experience">Experience</a>
          <a href="#contact" className={styles.navCta}>
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.badge}>
              <span className={styles.dot} /> Open to interesting problems
            </span>
            <h1>
              I build <span className={styles.gradient}>reliable systems</span>
              <br />
              from commit to production.
            </h1>
            <p className={styles.lead}>
              DevOps and backend engineer. I ship Spring Boot microservices,
              automate CI/CD with Jenkins and GitLab, and run Docker and
              Kubernetes infrastructure that stays up.
            </p>
            <div className={styles.actions}>
              <a href="#contact" className={styles.primary}>
                Get in touch
              </a>
              <a href="#skills" className={styles.secondary}>
                See what I work with
              </a>
            </div>
          </div>

          <div className={styles.terminal} aria-hidden>
            <div className={styles.termBar}>
              <i /> <i /> <i />
              <span>deploy.sh</span>
            </div>
            <pre>
              <code>
                <span className={styles.c}># ship it</span>
                {"\n"}
                <span className={styles.p}>$</span> docker build -t api:1.0 .
                {"\n"}
                <span className={styles.ok}>✔</span> image built
                {"\n"}
                <span className={styles.p}>$</span> jenkins run pipeline
                {"\n"}
                <span className={styles.ok}>✔</span> build · test · scan
                {"\n"}
                <span className={styles.p}>$</span> kubectl rollout status
                {"\n"}
                <span className={styles.ok}>✔</span> deployment ready
                {"\n"}
                <span className={styles.p}>$</span> <span className={styles.cursor} />
              </code>
            </pre>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </section>

        {/* Tech stack marquee */}
        <section id="stack" className={styles.section}>
          <p className={styles.eyebrow}>Tech stack</p>
          <h2>Tools I ship with</h2>
          <Marquee items={rowInfra} speed="fast" />
          <Marquee items={rowBackend} speed="slow" />
        </section>

        {/* Skills */}
        <section id="skills" className={styles.section}>
          <p className={styles.eyebrow}>What I do</p>
          <h2>Tech I work with every day</h2>
          <div className={styles.grid}>
            {skills.map((s) => (
              <article key={s.title} className={styles.card}>
                <div className={styles.icon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Pipeline */}
        <section id="pipeline" className={styles.section}>
          <p className={styles.eyebrow}>How I ship</p>
          <h2>A CI/CD flow I trust</h2>
          <ol className={styles.pipeline}>
            {pipeline.map((step, i) => (
              <li key={step}>
                <span className={styles.stepNum}>{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
        </section>

        {/* Experience */}
        <section id="experience" className={styles.section}>
          <p className={styles.eyebrow}>Experience</p>
          <h2>Where I&apos;ve been</h2>
          <div className={styles.timeline}>
            {experience.map((e) => (
              <article key={e.role} className={styles.item}>
                <span className={styles.period}>{e.period}</span>
                <h3>{e.role}</h3>
                <span className={styles.org}>{e.org}</span>
                <ul>
                  {e.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={styles.cta}>
          <h2>Let&apos;s build something solid.</h2>
          <p>Have a pipeline to fix, a cluster to design, or an API to ship?</p>
          <a href="mailto:tonghakhoun9@gmail.com" className={styles.primary}>
            tonghakhoun9@gmail.com
          </a>
        </section>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 tonghak23</span>
        <span>Built with Next.js · Hosted on Cloudflare</span>
      </footer>
    </div>
  );
}