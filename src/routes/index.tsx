import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Download, Sparkles, ShieldCheck, Zap, Lock, FileText, Camera, FolderTree,
  Combine, Scissors, Minimize2, PenLine, Copy, WifiOff, Image as ImageIcon,
  ArrowRight, CheckCircle2, Smartphone, Layers, Gauge,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PhoneFrame } from "@/components/PhoneFrame";
import logo from "@/assets/logo.png";
import screenHome from "@/assets/screen-home.jpg";
import screenRecents from "@/assets/screen-recents.jpg";
import screenTools from "@/assets/screen-tools.jpg";
import screenManage from "@/assets/screen-manage.jpg";
import screenFavorites from "@/assets/screen-favorites.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PDF Reader — Read, Edit, Merge & Convert PDFs Effortlessly" },
      { name: "description", content: "PDF Reader is your all-in-one offline PDF companion for viewing, editing, scanning, compressing, merging, splitting and protecting documents securely." },
      { property: "og:title", content: "PDF Reader — Premium Offline PDF Toolkit" },
      { property: "og:description", content: "All-in-one offline PDF reader & tools: scan, merge, split, compress, lock, and convert documents on your device." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});

const stats = [
  { icon: WifiOff, label: "100% Offline Processing" },
  { icon: ShieldCheck, label: "Secure PDF Protection" },
  { icon: Zap, label: "Fast PDF Conversion" },
  { icon: Sparkles, label: "Clean & Modern Experience" },
];

const features = [
  { icon: ImageIcon, title: "Photos to PDF Converter", desc: "Convert multiple gallery images into high-quality A4 PDF documents instantly." },
  { icon: Camera, title: "High-Quality Document Scanner", desc: "Scan invoices, receipts, notes, and documents directly using your camera." },
  { icon: FolderTree, title: "Smart Folder Isolation", desc: "Create custom folders and organize your workspace effortlessly." },
  { icon: Lock, title: "PDF Lock & Password Protection", desc: "Secure sensitive documents with strong password encryption." },
  { icon: Combine, title: "Merge PDF", desc: "Combine multiple PDFs into a single document." },
  { icon: Scissors, title: "Split PDF", desc: "Split large PDF documents into separate pages." },
  { icon: Minimize2, title: "Compress PDF", desc: "Reduce PDF size while maintaining quality." },
  { icon: PenLine, title: "Add Text & Notes", desc: "Overlay custom notes, signatures, and annotations." },
  { icon: Copy, title: "Duplicate Detection", desc: "Automatically detect duplicate files and keep storage organized." },
  { icon: WifiOff, title: "100% Offline Processing", desc: "All operations happen locally on the device for complete privacy." },
];

const why = [
  { icon: Gauge, title: "Fast Performance", desc: "Optimized engine handles large PDFs without lag." },
  { icon: ShieldCheck, title: "Offline Security", desc: "Your files never leave the device. Ever." },
  { icon: Sparkles, title: "Modern User Experience", desc: "Crafted with care for clarity and speed." },
  { icon: Layers, title: "Easy PDF Management", desc: "Folders, favorites and quick search built-in." },
  { icon: Zap, title: "Lightweight & Powerful", desc: "Tiny footprint, packed with pro tools." },
  { icon: Smartphone, title: "Clean Workspace", desc: "Distraction-free reader designed for focus." },
];

const steps = [
  { n: "01", title: "Upload or Scan", desc: "Import files from storage or scan with your camera." },
  { n: "02", title: "Edit or Organize", desc: "Merge, split, compress, lock or annotate in seconds." },
  { n: "03", title: "Export & Share", desc: "Save securely on device or share with one tap." },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="blob -left-20 top-10 h-80 w-80 bg-primary/30" />
        <div className="blob right-0 top-40 h-96 w-96 bg-primary/20" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> New • Built for privacy-first PDF workflows
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Read, Edit, Merge & <span className="text-gradient">Convert PDFs</span> Effortlessly
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              PDF Reader is your all-in-one offline PDF companion for viewing, editing, scanning, compressing,
              merging, splitting, and protecting documents securely.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#download" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5">
                <Download className="h-4 w-4" /> Download App
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-soft transition-colors hover:border-primary hover:text-primary">
                Explore Features <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> No ads</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Offline</div>
              <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Free</div>
            </div>
          </motion.div>

          <div className="relative h-[640px]">
            <img src={logo} alt="" className="absolute right-6 top-0 h-16 w-16 rounded-2xl shadow-glow animate-float-slow" />
            <div className="absolute left-0 top-6 z-10">
              <PhoneFrame src={screenHome} alt="PDF Reader home" rotate={-6} />
            </div>
            <div className="absolute right-0 top-24 z-20">
              <PhoneFrame src={screenTools} alt="PDF Reader tools" delay={0.15} rotate={6} />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST / STATS */}
      <section className="relative -mt-6 mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-3 rounded-3xl glass p-4 shadow-soft sm:grid-cols-4 sm:gap-4 sm:p-6">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex items-center gap-3 rounded-2xl bg-white/70 p-4 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold leading-tight">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Features</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Everything you need for PDFs</h2>
          <p className="mt-3 text-muted-foreground">A premium toolkit that lives entirely on your device.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: (i % 5) * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow">
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* APP SHOWCASE */}
      <section className="relative overflow-hidden bg-[var(--bg-soft)] py-24">
        <div className="blob left-1/4 top-10 h-96 w-96 bg-primary/25" />
        <div className="blob right-10 bottom-0 h-80 w-80 bg-primary/15" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">App Preview</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Designed for clarity & speed</h2>
            <p className="mt-3 text-muted-foreground">A thoughtful interface that makes powerful tools feel effortless.</p>
          </div>
          <div className="mt-16 grid items-center gap-8 lg:grid-cols-3">
            <PhoneFrame src={screenRecents} alt="Recents" rotate={-8} />
            <PhoneFrame src={screenManage} alt="Manage tools" delay={0.15} />
            <PhoneFrame src={screenFavorites} alt="Favorites" delay={0.3} rotate={8} />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Why PDF Reader</p>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Built different. Built better.</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className="rounded-3xl border border-border bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary">
                <w.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative overflow-hidden bg-[var(--bg-soft)] py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">Three steps to PDF zen</h2>
          </div>
          <div className="relative mt-16 grid gap-8 md:grid-cols-3">
            <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
            {steps.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative rounded-3xl bg-white p-8 text-center shadow-card">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <span className="font-display text-lg font-bold">{s.n}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download" className="mx-auto max-w-7xl px-4 py-24">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-cta px-6 py-16 text-center text-primary-foreground shadow-glow sm:px-12 sm:py-20">
          <div className="blob -left-20 top-0 h-72 w-72 bg-white/20" />
          <div className="blob -right-10 -bottom-10 h-80 w-80 bg-white/10" />
          <div className="relative">
            <img src={logo} alt="" className="mx-auto h-16 w-16 rounded-2xl shadow-glow animate-float" />
            <h2 className="mt-6 font-display text-3xl font-bold sm:text-5xl">Your Ultimate Offline PDF Toolkit</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base opacity-90 sm:text-lg">
              Join thousands using PDF Reader every day to read, organize, and protect their documents.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-4 text-sm font-bold text-primary shadow-soft transition hover:-translate-y-0.5">
                <Download className="h-5 w-5" /> Download for Android
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/10 px-7 py-4 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20">
                Explore Features <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
