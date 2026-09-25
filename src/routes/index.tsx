import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownToLine,
  ArrowUpRight,
  BadgeCheck,
  ChevronDown,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import heroImage from "../assets/data-network-hero.jpg";
import aiResumeAsset from "../assets/Yogita_Bisht_Resume_AI.pdf.asset.json";
import dsResumeAsset from "../assets/Yogita_Bisht_Resume_DS.pdf.asset.json";
import anthropicApiCertificate from "../assets/Yogita_Bisht_Claude_Anthropic_API.pdf.asset.json";
import claudeCodeCertificate from "../assets/Yogita_Bisht_Claude_Code_101.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yogita Bisht — Data Scientist & Software Engineer" },
      { name: "description", content: "Portfolio of Yogita Bisht — machine learning projects, RAG applications, and data pipelines, alongside a background in software engineering." },
      { property: "og:title", content: "Yogita Bisht — Data Scientist & Software Engineer" },
      { property: "og:description", content: "Yogita Bisht works on machine learning models and the data pipelines behind them. See projects, skills, and credentials." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    number: "01",
    title: "AskNEU — RAG Assistant",
    description: "A question-answering assistant built over 500+ university web pages, so students can ask in plain language and trace an answer back to its source.",
    impact: "95% retrieval accuracy",
    tags: ["LangChain", "Hugging Face", "Pinecone", "Airflow", "GCP"],
  },
  {
    number: "02",
    title: "Personalized Financial Recommendation System",
    description: "A Streamlit app that matches user profiles against 26K+ financial products and generates personalized explanations through a RAG pipeline.",
    impact: "0.94 F1-score",
    tags: ["Python", "XGBoost", "MLflow", "RAG", "Streamlit"],
  },
  {
    number: "03",
    title: "Banking Audit Extraction via LoRA",
    description: "Llama-3.2-3B fine-tuned with LoRA on 300 domain-specific audit records to extract structured JSON metadata from unstructured banking logs.",
    impact: "54% → 94% JSON pass rate",
    tags: ["Llama 3.2", "LoRA", "Fine-tuning", "JSON", "GGUF"],
  },
  {
    number: "04",
    title: "Melanoma Detection Research",
    description: "Four hybrid CNN–Vision Transformer architectures benchmarked for melanoma detection on a severely imbalanced medical image dataset.",
    impact: "95% sensitivity · 0.96 AUC-ROC",
    tags: ["PyTorch", "ViT", "CNN", "Computer Vision", "400K+ images"],
  },
];

const skills = [
  { label: "Languages & frameworks", values: ["Python", "Pandas", "NumPy", "Scikit-learn", "SQL", "PyTorch", "FastAPI", "Streamlit"] },
  { label: "Machine learning & AI", values: ["LLMs", "Fine-tuning", "RAG", "LangChain", "Vector DB", "MLflow"] },
  { label: "Cloud, big data & DevOps", values: ["AWS", "GCP", "Airflow", "PySpark", "Docker", "CI/CD", "Git", "Power BI", "Bash / Linux"] },
];

const certificates = [
  {
    name: "Claude with the Anthropic API",
    issuer: "Anthropic",
    date: "August 2026",
    fileUrl: anthropicApiCertificate.url,
    downloadName: "Yogita_Bisht_Claude_Anthropic_API.pdf",
  },
  {
    name: "Claude Code 101",
    issuer: "Anthropic",
    date: "July 2026",
    fileUrl: claudeCodeCertificate.url,
    downloadName: "Yogita_Bisht_Claude_Code_101.pdf",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="font-display text-base font-semibold text-foreground">YB<span className="text-primary">.</span></a>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a className="transition-colors hover:text-foreground" href="#about">About</a>
            <a className="transition-colors hover:text-foreground" href="#projects">Projects</a>
            <a className="transition-colors hover:text-foreground" href="#skills">Expertise</a>
            <a className="transition-colors hover:text-foreground" href="#credentials">Credentials</a>
          </div>
          <a href="mailto:me@yogitabisht.com" className="inline-flex h-9 items-center gap-2 rounded-md border border-border px-3 text-xs font-semibold uppercase tracking-wider transition-colors hover:border-primary hover:text-primary">
            <Mail size={14} /> Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-24">
          <img src={heroImage} width={1600} height={1008} alt="Abstract network of connected data points" className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_94%,transparent)_48%,color-mix(in_oklab,var(--background)_30%,transparent)_100%)]" />
          <div className="relative mx-auto w-full max-w-7xl px-5 pb-16 lg:px-8 lg:pb-20">
            <div className="max-w-4xl">
              <div className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                <span className="h-px w-8 bg-secondary" /> Data Scientist · Software Engineer
              </div>
              <h1 className="font-display text-5xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
                Hi, I’m Yogita Bisht.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                I work on machine learning models and the data pipelines behind them, and I pay attention to how they behave once people actually start using them.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#projects" className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">View projects <ArrowUpRight size={17} /></a>
                <ResumeDownload />
              </div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-5 border-t border-border/70 pt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><MapPin size={15} className="text-secondary" /> New York City, NY</span>
              <SocialLink href="https://github.com/YoBee22" label="GitHub"><Github size={17} /></SocialLink>
              <SocialLink href="https://www.linkedin.com/in/yogita-bisht/" label="LinkedIn"><Linkedin size={17} /></SocialLink>
              <SocialLink href="mailto:me@yogitabisht.com" label="Email"><Mail size={17} /></SocialLink>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-border bg-card/40 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
            <SectionLabel number="01" label="Transition story" />
            <div>
              <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl">From vehicle diagnostics to data science.</h2>
              <div className="mt-8 grid gap-8 text-muted-foreground md:grid-cols-2">
                <p className="leading-7">At Mercedes-Benz R&amp;D I worked on AWS Glue ETL jobs parsing 500GB+ of vehicle ECU fault logs, and on test automation for diagnostic feature releases.</p>
                <p className="leading-7">I’m now studying data science at Northeastern and doing research alongside it — recommendation systems that explain their suggestions, and medical vision models trained to catch rare cases.</p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">
                <Metric value="500GB+" label="ECU fault logs parsed" />
                <Metric value="20%" label="Fewer undetected diagnostic errors" />
                <Metric value="95%" label="Test coverage" />
                <Metric value="25%" label="Faster field issue resolution" />
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <SectionLabel number="02" label="Selected work" />
              <h2 className="font-display text-3xl font-semibold sm:text-4xl">A few projects I’ve worked on.</h2>
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-2">
              {projects.map((project) => <ProjectCard key={project.number} {...project} />)}
            </div>
          </div>
        </section>

        <section id="skills" className="border-y border-border bg-card/40 py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
              <SectionLabel number="03" label="Technical expertise" />
              <div>
                <h2 className="font-display text-3xl font-semibold sm:text-4xl">Tools I work with.</h2>
                <div className="mt-12 divide-y divide-border border-y border-border">
                  {skills.map((skill) => (
                    <div key={skill.label} className="grid gap-4 py-7 md:grid-cols-[12rem_1fr]">
                      <h3 className="text-sm font-semibold text-secondary">{skill.label}</h3>
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-lg text-foreground">{skill.values.map((value) => <span key={value}>{value}</span>)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="credentials" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <SectionLabel number="04" label="Credentials" />
              <div className="space-y-10">
                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Education</h3>
                  <div className="space-y-4">
                    <Credential degree="Master of Science in Data Science" school="Northeastern University" detail="2024–2026 · GPA 3.6/4.0" />
                    <Credential degree="Bachelor of Engineering in Computer Science" school="Visvesvaraya Technological University" detail="2017–2021 · CGPA 8.5/10" />
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">Certificates</h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {certificates.map((cert) => (
                      <CertificateCard key={cert.name} {...cert} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/60">
        <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
          <p className="max-w-3xl font-display text-2xl font-semibold leading-snug sm:text-3xl">Get in touch.</p>
          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-border pt-7 md:flex-row md:items-end">
            <div className="space-y-2 text-sm text-muted-foreground">
              <a className="flex items-center gap-2 hover:text-primary" href="mailto:me@yogitabisht.com"><Mail size={15} /> me@yogitabisht.com</a>
              <a className="flex items-center gap-2 hover:text-primary" href="tel:+18578321780"><Phone size={15} /> +1 (857) 832-1780</a>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
              <a href="#top" className="hover:text-foreground">Top</a><a href="#projects" className="hover:text-foreground">Projects</a><a href="https://github.com/YoBee22" className="hover:text-foreground">GitHub</a><a href="https://www.linkedin.com/in/yogita-bisht/" className="hover:text-foreground">LinkedIn</a>
            </div>
          </div>
          <p className="mt-10 text-xs text-muted-foreground">© 2026 Yogita Bisht.</p>
        </div>
      </footer>
    </div>
  );
}

function ResumeDownload() {
  return (
    <details className="group relative">
      <summary className="flex h-12 cursor-pointer list-none items-center gap-2 rounded-md border border-border bg-background/50 px-5 text-sm font-semibold transition-colors hover:border-foreground/50 hover:bg-muted/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
        <ArrowDownToLine size={17} /> Download resume
        <ChevronDown size={15} className="transition-transform group-open:rotate-180" />
      </summary>
      <div className="absolute left-0 z-20 mt-2 w-64 overflow-hidden rounded-md border border-border bg-card shadow-xl">
        <ResumeOption href={dsResumeAsset.url} download="Yogita_Bisht_Resume_DS.pdf" title="Data Science resume" detail="Data science and ML roles" />
        <ResumeOption href={aiResumeAsset.url} download="Yogita_Bisht_Resume_AI.pdf" title="AI resume" detail="AI and GenAI roles" />
      </div>
    </details>
  );
}

function ResumeOption({ href, download, title, detail }: { href: string; download: string; title: string; detail: string }) {
  return (
    <a href={href} download={download} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 border-b border-border/70 px-4 py-3 last:border-b-0 hover:bg-muted/60">
      <span><span className="block text-sm font-semibold">{title}</span><span className="mt-0.5 block text-xs text-muted-foreground">{detail}</span></span>
      <ArrowDownToLine size={15} className="shrink-0 text-primary" />
    </a>
  );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={label} className="flex items-center gap-2 transition-colors hover:text-primary">{children}<span>{label}</span></a>;
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return <div className="flex h-fit items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground"><span className="font-display text-primary">{number}</span><span className="h-px w-8 bg-border" />{label}</div>;
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="bg-background p-5"><strong className="font-display text-2xl text-primary">{value}</strong><span className="mt-1 block text-xs text-muted-foreground">{label}</span></div>;
}

function ProjectCard({ number, title, description, impact, tags }: (typeof projects)[number]) {
  return (
    <article className="group flex flex-col rounded-md border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_14px_40px_color-mix(in_oklab,var(--primary)_10%,transparent)]">
      <div className="flex items-start justify-between"><span className="font-display text-xs text-primary">{number}</span><Github size={16} className="text-muted-foreground transition-colors group-hover:text-foreground" /></div>
      <div className="mt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-secondary">{impact}</p>
        <h3 className="mt-2 font-display text-lg font-semibold leading-snug">{title}</h3>
        <p className="mt-2.5 text-[13px] leading-5 text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">{tags.map((tag) => <span key={tag} className="rounded-sm border border-border bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">{tag}</span>)}</div>
      </div>
    </article>
  );
}

function Credential({ degree, school, detail }: { degree: string; school: string; detail: string }) {
  return <article className="grid gap-4 rounded-md border border-border bg-card p-6 transition-colors hover:border-primary/50 sm:grid-cols-[1fr_auto] sm:items-center"><div><p className="text-sm font-semibold text-secondary">{school}</p><h3 className="mt-2 font-display text-xl font-semibold">{degree}</h3></div><p className="text-sm text-muted-foreground sm:text-right">{detail}</p></article>;
}

function CertificateCard({
  name,
  issuer,
  date,
  fileUrl,
  downloadName,
}: (typeof certificates)[number]) {
  return (
    <article className="group flex flex-col justify-between rounded-md border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-[0_12px_30px_color-mix(in_oklab,var(--primary)_8%,transparent)]">
      <div>
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-sm border border-secondary/30 bg-secondary/10 px-2 py-0.5 text-[11px] font-semibold tracking-wide text-secondary">
            <BadgeCheck size={13} /> {issuer}
          </span>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
        <h4 className="mt-3 font-display text-base font-semibold leading-snug text-foreground">
          {name}
        </h4>
      </div>

      <div className="mt-5 flex items-center gap-3 border-t border-border/70 pt-3.5 text-xs">
        <a
          href={fileUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-primary transition-colors hover:text-primary/80 hover:underline"
        >
          <ExternalLink size={13} /> View
        </a>
        <span className="text-border">·</span>
        <a
          href={fileUrl}
          download={downloadName}
          className="inline-flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-foreground hover:underline"
        >
          <ArrowDownToLine size={13} /> Download
        </a>
      </div>
    </article>
  );
}