import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/features", label: "Features" },
  { to: "/privacy", label: "Privacy" },
  { to: "/terms", label: "Terms" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className={`flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all ${scrolled ? "glass shadow-soft" : "bg-transparent"}`}>
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="PDF Reader logo" className="h-9 w-9 rounded-xl shadow-soft" />
            <span className="font-display text-lg font-bold tracking-tight">
              PDF <span className="text-gradient">Reader</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="rounded-lg px-4 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-accent hover:text-primary"
                activeProps={{ className: "rounded-lg px-4 py-2 text-sm font-semibold text-primary bg-accent" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <a href="#download" className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 hover:shadow-glow">
              <Download className="h-4 w-4" /> Download
            </a>
          </div>

          <button className="md:hidden rounded-lg p-2 text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="mt-2 glass rounded-2xl p-3 md:hidden shadow-soft">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}
                className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-accent">
                {l.label}
              </Link>
            ))}
            <a href="#download" onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-4 py-3 text-sm font-semibold text-primary-foreground">
              <Download className="h-4 w-4" /> Download App
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
