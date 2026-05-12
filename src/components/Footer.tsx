import { Link } from "@tanstack/react-router";
import { Facebook, Twitter, Instagram, Github } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-[var(--bg-soft)]">
      <div className="blob -left-20 top-0 h-72 w-72 bg-primary/20" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="PDF Reader" className="h-10 w-10 rounded-xl shadow-soft" />
            <span className="font-display text-lg font-bold">
              PDF <span className="text-gradient">Reader</span>
            </span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Your all-in-one offline PDF companion. Read, edit, merge, scan and protect documents
            securely on your device.
          </p>
          {/* <div className="mt-5 flex gap-2">
            {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full bg-white text-primary shadow-soft transition hover:-translate-y-0.5 hover:bg-gradient-primary hover:text-primary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div> */}
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold">Product</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="hover:text-primary">
                Features
              </Link>
            </li>
            <li>
              <a href="#download" className="hover:text-primary">
                Download
              </a>
            </li>
            {/* <li><a href="#how" className="hover:text-primary">How it works</a></li> */}
          </ul>
        </div>

        {/* <div>
          <h4 className="mb-4 text-sm font-semibold">Tools</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Image to PDF</li>
            <li>Merge & Split</li>
            <li>Compress PDF</li>
            <li>Lock PDF</li>
          </ul>
        </div> */}

        <div>
          <h4 className="mb-4 text-sm font-semibold">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} PDF Reader. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
