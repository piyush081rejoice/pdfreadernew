import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — PDF Reader" },
      { name: "description", content: "Read the terms governing your use of the PDF Reader mobile application." },
      { property: "og:title", content: "Terms & Conditions — PDF Reader" },
      { property: "og:description", content: "Usage terms, responsibilities and disclaimers for PDF Reader." },
    ],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "1. Interpretation and Definitions",
    body: 'The words whose initial letters are capitalized have meanings defined under the following conditions. "Company" refers to RejoiceHub. "Application" refers to PDF Reader downloaded by You on any electronic device.',
  },
  {
    title: "2. Acknowledgment",
    body: "These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms.",
  },
  {
    title: "3. Use of the Application",
    body: "PDF Reader is provided for personal, non-commercial use. You are responsible for the documents you import, open, edit, scan, merge, split, compress or share through the App, and you must own the rights to those documents or have permission to process them.",
  },
  {
    title: "4. Links to Other Websites",
    body: "Our Service may contain links to third-party websites or services that are not owned or controlled by the Company. We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.",
  },
  {
    title: "5. Limitation of Liability",
    body: "To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever, including but not limited to loss of data, file corruption, or business interruption arising from use of the App.",
  },
  {
    title: '6. "AS IS" and "AS AVAILABLE" Disclaimer',
    body: 'The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. The Company provides no warranty that the Service will meet Your requirements or achieve any intended results. Always keep backups of important documents.',
  },
  {
    title: "7. Governing Law",
    body: "The laws of Gujarat, India, excluding its conflicts of law rules, shall govern these Terms and Your use of the Service.",
  },
  {
    title: "8. Changes to These Terms",
    body: "We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms.",
  },
  {
    title: "9. Contact Us",
    body: "If you have any questions about these Terms and Conditions, you can contact us: info.pdfreader@gmail.com",
  },
];

function TermsPage() {
  return (
    <SiteLayout>
      <section className="bg-hero py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Legal</p>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">Terms & Conditions</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Please read these terms and conditions carefully before using Our Service.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">Last updated: April 30, 2026</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="space-y-5">
          {sections.map((s) => (
            <div key={s.title} className="rounded-3xl border border-border bg-white p-7 shadow-card">
              <h2 className="font-display text-xl font-bold text-foreground">{s.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-gradient-cta p-8 text-center text-primary-foreground shadow-glow">
          <h3 className="font-display text-xl font-bold">Questions about these terms?</h3>
          <p className="mt-2 text-sm opacity-90">Contact us at info.pdfreader@gmail.com</p>
        </div>
      </section>
    </SiteLayout>
  );
}
