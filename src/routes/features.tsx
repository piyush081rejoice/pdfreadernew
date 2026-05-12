import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Camera, Combine, Scissors, Minimize2, Lock, PenLine, Image as ImageIcon,
  FolderTree, WifiOff, Copy, Download, ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";
import { PhoneFrame } from "@/components/PhoneFrame";
import screenHome from "@/assets/screen-home.jpg";
import screenTools from "@/assets/screen-tools.jpg";
import screenManage from "@/assets/screen-manage.jpg";
import screenFavorites from "@/assets/screen-favorites.jpg";
import screenRecents from "@/assets/screen-recents.jpg";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — PDF Reader" },
      { name: "description", content: "Explore every PDF Reader feature: scan, convert, merge, split, compress, lock, annotate and more — all 100% offline." },
      { property: "og:title", content: "Features — PDF Reader" },
      { property: "og:description", content: "A complete offline PDF toolkit for mobile." },
    ],
  }),
  component: FeaturesPage,
});

const detailed = [
  { icon: ImageIcon, title: "Photos to PDF Converter", desc: "Pick multiple images from your gallery and merge them into a single, high-quality A4 PDF in seconds. Reorder, rotate and crop before exporting.", img: screenTools },
  { icon: Camera, title: "High-Quality Document Scanner", desc: "Use your camera to scan receipts, IDs, notes and contracts. Smart edge detection and color enhancement give you crisp, professional output.", img: screenHome },
  { icon: FolderTree, title: "Smart Folder Isolation", desc: "Organize your workspace with custom folders, favorites and color tags. Find any document instantly with intelligent search.", img: screenFavorites },
  { icon: Lock, title: "PDF Lock & Password Protection", desc: "Encrypt sensitive documents with industry-grade passwords. Lock and unlock files entirely on-device — no servers involved.", img: screenManage },
  { icon: Combine, title: "Merge & Split PDFs", desc: "Combine related PDFs into one or split large reports into smaller files. Drag and drop to reorder pages with full control.", img: screenRecents },
];

const grid = [
  { icon: Minimize2, title: "Compress PDF", desc: "Shrink file size without losing quality." },
  { icon: PenLine, title: "Add Text & Notes", desc: "Annotate, sign and highlight any page." },
  { icon: Scissors, title: "Split PDF", desc: "Extract specific pages into new files." },
  { icon: Copy, title: "Duplicate Detection", desc: "Smart cleanup of duplicate documents." },
  { icon: WifiOff, title: "100% Offline", desc: "Everything runs locally for full privacy." },
  { icon: FolderTree, title: "Workspace Folders", desc: "Custom folders with favorites & tags." },
];

function FeaturesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="blob -left-20 top-10 h-80 w-80 bg-primary/25" />
        <div className="relative mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">All Features</p>
          <h1 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
            One app. <span className="text-gradient">Every PDF tool</span> you need.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground sm:text-lg">
            Built for speed, privacy and clarity. Discover the complete PDF Reader toolkit designed to make working with documents truly effortless.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#download" className="inline-flex items-center gap-2 rounded-2xl bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow">
              <Download className="h-4 w-4" /> Download App
            </a>
          </div>
        </div>
      </section>

      {/* Alternating sections */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="space-y-24">
          {detailed.map((f, i) => (
            <div key={f.title} className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="inline-grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <f.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">{f.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{f.desc}</p>
                <a href="#download" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
                  Try it now <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
              <div className="flex justify-center">
                <PhoneFrame src={f.img} alt={f.title} rotate={i % 2 === 0 ? -4 : 4} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[var(--bg-soft)] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold sm:text-4xl">And so much more</h2>
            <p className="mt-3 text-muted-foreground">A pro-grade toolkit at your fingertips.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((g, i) => (
              <motion.div key={g.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="rounded-3xl border border-border bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-glow">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-primary">
                  <g.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="download" className="mx-auto max-w-7xl px-4 py-20">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-cta px-6 py-14 text-center text-primary-foreground shadow-glow">
          <h3 className="font-display text-2xl font-bold sm:text-4xl">Ready to experience PDF Reader?</h3>
          <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3.5 text-sm font-bold text-primary">
            <Download className="h-4 w-4" /> Download for Android
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
