import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use – VisaInsider",
  description: "Terms of use for VisaInsider.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-4">Terms of Use</h1>
      <p className="text-slate-600">
        We Will Add our terms of use content here.
      </p>
    </main>
  );
}
