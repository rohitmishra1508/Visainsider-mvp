import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy – VisaInsider",
  description: "Refund policy for VisaInsider services.",
};

export default function RefundPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-4">Refund Policy</h1>
      <p className="text-slate-600">
        We will add our refund policy content here.
      </p>
    </main>
  );
}
