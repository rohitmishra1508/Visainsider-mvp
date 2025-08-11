import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Help Center – VisaInsider",
  description: "Help Center and support information.",
};

export default function HelpCenterPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-4">Help Center</h1>
      <p className="text-slate-600">
        This is a placeholder. Add your FAQs, contact details, and guides here.
      </p>
    </main>
  );
}
