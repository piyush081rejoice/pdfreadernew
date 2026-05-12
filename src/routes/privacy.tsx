import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, BarChart3, Megaphone, Database, Lock, Baby, Mail, RefreshCw } from "lucide-react";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — PDF Reader" },
      { name: "description", content: "How PDF Reader collects, uses and protects information when you use our mobile application." },
      { property: "og:title", content: "Privacy Policy — PDF Reader" },
      { property: "og:description", content: "Read how PDF Reader protects your files and data." },
    ],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    icon: ShieldCheck,
    title: "1. Information We Collect",
    body: (
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <div>
          <p className="font-semibold text-foreground">A. Personal Data</p>
          <p className="mt-1">
            The PDF Reader app does not require you to create an account or provide personally identifiable information
            (such as your name, email address, or phone number) to use its core features. All PDF files and documents
            you open, edit, scan, merge, split, compress or protect are processed locally on your device and are not
            transmitted to our servers.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground">B. Usage Data and Analytics</p>
          <p className="mt-1">
            We may collect information automatically when you use the App, including but not limited to device type,
            operating system version, unique device identifiers (e.g., Google Advertising ID), and app crash reports.
          </p>
        </div>
        <div>
          <p className="font-semibold text-foreground">C. Third-Party Advertising (Google AdMob)</p>
          <p className="mt-1">
            The App uses Google AdMob as a third-party advertising service. AdMob may collect and use data to serve
            personalized ads based on your interests. You can opt out of personalized advertising by visiting Google
            Ads Settings.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: BarChart3,
    title: "2. How We Use Your Information",
    body: (
      <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
        <li>To provide, maintain, and improve the App's PDF reading and editing functionality.</li>
        <li>To serve advertisements via Google AdMob, which helps keep the App free to use.</li>
        <li>To detect, prevent, and address technical issues, crashes and bugs.</li>
      </ul>
    ),
  },
  {
    icon: Database,
    title: "3. Data Retention",
    body: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        Because PDF Reader processes your documents locally, we do not store your files or document contents on
        external servers. Usage and advertising data collected by third parties are retained according to their
        respective privacy policies.
      </p>
    ),
  },
  {
    icon: Lock,
    title: "4. Data Security",
    body: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        We value your trust in using our App and strive to use commercially acceptable means of protecting it.
        However, remember that no method of electronic transmission or storage is 100% secure.
      </p>
    ),
  },
  {
    icon: Baby,
    title: "5. Children's Privacy",
    body: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        These Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable
        information from children under 13.
      </p>
    ),
  },
  {
    icon: Megaphone,
    title: "6. Third-Party Services",
    body: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        The App may use third-party services (such as Google AdMob and analytics providers) that have their own
        privacy policies governing their handling of data. We encourage you to review their policies.
      </p>
    ),
  },
  {
    icon: RefreshCw,
    title: "7. Changes to This Policy",
    body: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        We may update this Privacy Policy from time to time. Material changes will be reflected in-app and on this
        page with a new "last updated" date.
      </p>
    ),
  },
  {
    icon: Mail,
    title: "8. Contact Us",
    body: (
      <p className="text-sm leading-relaxed text-muted-foreground">
        If you have any questions or suggestions about our Privacy Policy, contact us at:{" "}
        <span className="font-medium text-primary">info.pdfreader@gmail.com</span>
      </p>
    ),
  },
];

function PrivacyPage() {
  return (
    <SiteLayout>
      <section className="bg-hero py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Privacy Policy</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            PDF Reader ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains
            how we collect, use, and disclose information when you use our mobile application, PDF Reader.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">Last updated: April 30, 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-5">
          {sections.map((s) => (
            <div key={s.title} className="rounded-3xl border border-border bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-xl font-bold text-foreground">{s.title}</h2>
                  <div className="mt-3">{s.body}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-cta p-8 text-center text-primary-foreground shadow-glow">
          <h3 className="font-display text-xl font-bold">Have a privacy question?</h3>
          <p className="mt-2 text-sm opacity-90">Reach us at info.pdfreader@gmail.com</p>
        </div>
      </section>
    </SiteLayout>
  );
}
