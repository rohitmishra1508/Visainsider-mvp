import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – VisaInsider",
  description: "Privacy policy for VisaInsider.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold tracking-tight mb-4">Privacy Policy</h1>
      <p className="text-slate-600">
        We will add our privacy policy content here.
      </p>
    </main>
  );
}
