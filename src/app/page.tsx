import Header from "@/components/Header";
import HeroTitle from "@/components/HeroTitle";
import HeroSearch from "@/components/HeroSearch";
import Image from "next/image"; // ✅ added
import { Metadata } from "next";

// ---------- Data ----------

const POPULAR_DESTINATIONS = [
  {
    title: "France Tourist Visa",
    eta: "10–15 days",
    price: "From ₹6,999",
    q: "France",
    img: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
    alt: "Eiffel Tower in Paris, France",
  },
  {
    title: "Germany Tourist Visa",
    eta: "12–18 days",
    price: "From ₹7,499",
    q: "Germany",
    img: "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?q=80&w=1200&auto=format&fit=crop",
    alt: "Berlin Cathedral, Germany",
  },
  {
    title: "USA B1/B2 Visa",
    eta: "15–30 days",
    price: "From ₹12,999",
    q: "USA",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop",
    alt: "Statue of Liberty, New York, USA",
  },
  {
    title: "UK Visitor Visa",
    eta: "10–20 days",
    price: "From ₹11,499",
    q: "United Kingdom",
    img: "https://images.unsplash.com/photo-1430026996702-608b84ce9281?q=80&w=1200&auto=format&fit=crop",
    alt: "Big Ben and Houses of Parliament, London, UK",
  },
  {
    title: "Canada Visitor Visa",
    eta: "20–45 days",
    price: "From ₹9,999",
    q: "Canada",
    img: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop",
    alt: "Canadian Rocky Mountains landscape",
  },
  {
    title: "Japan Tourist Visa",
    eta: "7–15 days",
    price: "From ₹6,500",
    q: "Japan",
    img: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?q=80&w=1200&auto=format&fit=crop",
    alt: "Mount Fuji and cherry blossoms, Japan",
  },

  {
    title: "Switzerland Tourist Visa",
    eta: "10–15 days",
    price: "From ₹7,999",
    q: "Switzerland",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop",
    alt: "Swiss Alps and lake, Switzerland",
  },
  {
    title: "Spain Tourist Visa",
    eta: "10–20 days",
    price: "From ₹6,999",
    q: "Spain",
    img: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1200&auto=format&fit=crop",
    alt: "Park Güell in Barcelona, Spain",
  },
  {
    title: "Netherlands Tourist Visa",
    eta: "10–18 days",
    price: "From ₹7,499",
    q: "Netherlands",
    img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1200&auto=format&fit=crop",
    alt: "Canals and houses of Amsterdam, Netherlands",
  },
  {
    title: "New Zealand Visitor Visa",
    eta: "20–35 days",
    price: "From ₹9,499",
    q: "New Zealand",
    img: "https://images.unsplash.com/photo-1470083748587-df49227c0505?auto=format&fit=crop&w=1200&q=80",
    alt: "Mountain landscape in New Zealand",
  },
  {
    title: "Australia Visitor Visa",
    eta: "15–30 days",
    price: "From ₹10,999",
    q: "Australia",
    img: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?auto=format&fit=crop&w=1200&q=80",
    alt: "Sydney Opera House, Australia",
  },
  {
    title: "Ireland Tourist Visa",
    eta: "15–25 days",
    price: "From ₹8,999",
    q: "Ireland",
    img: "https://images.unsplash.com/photo-1549888834-3ec93abae044?q=80&w=1200&auto=format&fit=crop",
    alt: "Cliffs of Moher, Ireland",
  },
];

const TOOLS = [
  {
    id: "cost",
    title: "Visa Cost Calculator",
    description: "Pick country & services to get an instant estimate.",
    href: "/tools/cost",
    icon: "₹",
    ariaLabel: "Calculate visa costs for your destination",
    grad: "from-blue-600 to-indigo-600",
  },
  {
    id: "docs",
    title: "Document Checklist",
    description: "See documents by visa type & your profile.",
    href: "/tools/checklist",
    icon: "📄",
    ariaLabel: "View required documents for your visa application",
    grad: "from-violet-600 to-fuchsia-600",
  },
  {
    id: "tracker",
    title: "Processing Tracker",
    description: "Typical timelines for appointments & decisions.",
    href: "/tools/tracker",
    icon: "⏱️",
    ariaLabel: "Track visa processing times and timelines",
    grad: "from-teal-600 to-emerald-600",
  },
];

const REVIEWS = [
  { name: "Aditi S.", text: "Smooth process for my Schengen visa. Clear checklist & fast updates.", rating: 5, city: "Mumbai" },
  { name: "Rahul M.", text: "Transparent pricing and seamless payments. Highly recommend.", rating: 5, city: "Delhi" },
  { name: "Neha K.", text: "They handled documents perfectly; tracker kept me confident.", rating: 5, city: "Bengaluru" },
];

const FAQS = [
  { q: "How do I choose the right visa type?", a: "Search your destination above. On the pricing page, pick your visa type and add-ons." },
  { q: "Are VFS/Consulate fees included?", a: "Govt/VFS fees are shown separately from our service fee for full transparency." },
  { q: "How long does processing take?", a: "It varies by country and season. Check our Processing Tracker for typical timelines." },
  { q: "Do you help with documents?", a: "Yes—our Document Checklist adapts to your profile (employed, business, student, etc.)." },
  { q: "Can you book flights or insurance?", a: "Yes, we provide assistance with flight reservations and travel insurance if needed." },
  { q: "What if my visa is refused?", a: "We guide you on next steps and re-application; fees and policies depend on each consulate." },
];

// ---------- SEO ----------
export const metadata: Metadata = {
  title: "VisaInsider - Your Visa Journey Made Simple",
  description:
    "Tourist, Business and Family Visit visas. Transparent pricing, expert guidance, and modern tools to simplify your visa journey.",
  keywords: "visa services, tourist visa, business visa, Schengen visa, visa application",
  openGraph: {
    title: "VisaInsider - Your Visa Journey Made Simple",
    description: "Apply for Tourist, Business, or Family Visit visas with expert guidance at every step.",
    type: "website",
  },
};

// ---------- UI bits ----------
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1 text-yellow-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 20 20"
          fill={i < rating ? "currentColor" : "none"}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.561-.953L10 0l2.949 5.957 6.561.953-4.755 4.635 1.123 6.545z" />
        </svg>
      ))}
      <span className="text-xs text-slate-500 ml-1">{rating}.0</span>
    </div>
  );
}

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <main id="main-content" className="min-h-screen bg-white text-slate-900">
      <Header />

      {/* ---------- HERO ---------- */}
      <section className="relative overflow-hidden border-b" aria-labelledby="hero-heading">
        {/* subtle gradient blobs */}
        <div className="pointer-events-none absolute -top-32 -right-24 h-80 w-80 rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-violet-400/20 to-pink-400/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="text-center mb-6 md:mb-8">
            <div id="hero-heading" className="mb-2 md:mb-4">
              <HeroTitle />
            </div>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-4xl mx-auto">
              Apply for <strong>Tourist</strong>, <strong>Business</strong>, or <strong>Family Visit</strong> visas,
              <strong> faster</strong>, <strong>easier</strong>, with <strong>expert guidance</strong> and <strong>transparent service</strong> at every step.
            </p>
          </div>

          {/* search card */}
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-3 md:p-4">
              <HeroSearch />
            </div>
            <p className="mt-2 text-sm text-slate-500">Type a country and hit Enter to get started.</p>

            {/* badges */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-sm">
              {[
                { id: "processed", label: <> <strong>50K+</strong> visas processed</>, icon: "🛂" },
                { id: "approval", label: <> <strong>98%</strong> approval rate</>, icon: "✅" },
                { id: "assist", label: <> <strong>24/7</strong> visa assistance</>, icon: "📞" },
              ].map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 backdrop-blur p-3 font-medium text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-200/50"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="leading-none">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TOOLS ---------- */}
      <section id="tools" className="scroll-mt-20" aria-labelledby="tools-heading">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-end justify-between mb-6">
            <h2 id="tools-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
              Visa Tools
            </h2>
            <p className="hidden md:block text-sm text-slate-500">
              Modern utilities to plan, budget, and track your application.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS.map((t) => (
              <a
                key={t.id}
                href={t.href}
                aria-label={t.ariaLabel}
                className="group relative overflow-hidden rounded-2xl bg-white p-6 border border-slate-200/70 shadow-sm 
                           transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                           focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-100"
              >
                {/* Hover gradient ring */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-transparent
                             group-hover:ring-8 group-hover:ring-blue-500/10 transition-all"
                />

                <div className="flex items-center gap-4">
                  <div
                    className={`h-12 w-12 rounded-xl bg-gradient-to-r ${t.grad} text-white grid place-content-center text-xl shadow-sm`}
                  >
                    {t.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{t.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{t.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DESTINATIONS ---------- */}
      <section id="destinations" className="bg-slate-50 scroll-mt-20" aria-labelledby="destinations-heading">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 id="destinations-heading" className="text-2xl md:text-3xl font-semibold tracking-tight">
                Popular Destinations
              </h2>
              <p className="text-slate-600 text-sm md:text-base mt-1">Start your journey with these frequently booked routes.</p>
            </div>
            <a className="text-sm text-blue-600 hover:underline focus:underline focus:outline-none" href="/pricing">
              View all →
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {POPULAR_DESTINATIONS.map((d) => (
              <a
                key={d.title}
                href={`/pricing?country=${encodeURIComponent(d.q)}`}
                aria-label={`${d.title} – ${d.price}; ETA ${d.eta}`}
                className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition-all 
                           duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="overflow-hidden">
                  {/* ✅ next/image used */}
                  <Image
                    src={d.img}
                    alt={d.alt}
                    width={1200}
                    height={600}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    priority={false}
                  />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="relative text-white">
                    <h3 className="font-medium">{d.title}</h3>
                    <div className="mt-1 flex items-center justify-between text-xs text-white/85">
                      <span className="inline-flex items-center gap-1">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
                          <circle cx="12" cy="12" r="9" strokeWidth="2" />
                        </svg>
                        {d.eta}
                      </span>
                      <span className="font-semibold">{d.price}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- REVIEWS ---------- */}
      <section id="reviews" className="scroll-mt-20" aria-labelledby="reviews-heading">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 id="reviews-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
            What our clients say
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <div
                key={`${r.name}-${i}`}
                role="article"
                aria-label={`Review by ${r.name}`}
                className="rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm transition-all 
                           duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white grid place-content-center font-semibold">
                    {r.name.charAt(0)}
                  </div>
                  <div className="leading-tight">
                    <div className="font-medium text-slate-900">{r.name}</div>
                    <div className="text-xs text-slate-500">{r.city}</div>
                  </div>
                </div>

                <div className="mt-3">
                  <StarRating rating={r.rating} />
                </div>

                <blockquote className="text-slate-700 text-sm leading-relaxed mt-3">“{r.text}”</blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section id="faq" className="bg-slate-50 scroll-mt-20" aria-labelledby="faq-heading">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">
            FAQs
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {FAQS.map((f, idx) => (
              <details
                key={`faq-${idx}`}
                className="rounded-2xl border border-slate-200/70 bg-white p-5 transition-all open:border-blue-200 open:bg-blue-50/40"
              >
                <summary className="cursor-pointer font-medium list-none flex items-center justify-between">
                  <span>{f.q}</span>
                  <svg className="w-5 h-5 text-slate-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-slate-600 text-sm mt-3">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="border-t bg-white" role="contentinfo">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-9 w-9 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 grid place-content-center text-white font-bold">V</div>
                <span className="text-lg font-semibold">VisaInsider</span>
              </div>
              <p className="text-sm text-slate-600 max-w-md">
                We simplify visas with transparent pricing, expert guidance, and modern tools that keep you in control at every step of the way.
              </p>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Support</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/help" className="text-slate-600 hover:text-slate-900"><strong>Help Center</strong></a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-3">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy" className="text-slate-600 hover:text-slate-900"><strong>Privacy Policy</strong></a></li>
                <li><a href="/terms" className="text-slate-600 hover:text-slate-900"><strong>Terms of Use</strong></a></li>
                <li><a href="/refund" className="text-slate-600 hover:text-slate-900"><strong>Refund Policy</strong></a></li>
              </ul>
            </div>
          </div>

          {/* Social row */}
          <div className="mt-10 flex items-center justify-between border-t pt-6">
            <div className="text-xs text-slate-500">© {currentYear} VisaInsider — All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="https://facebook.com" aria-label="Facebook" className="text-slate-500 hover:text-slate-900">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.6c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="text-slate-500 hover:text-slate-900">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.3 1.1 1.1 0 0 0 0-2.3zM12 9.3a2.7 2.7 0 1 1 0 5.4 2.7 2.7 0 0 1 0-5.4z"/></svg>
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="text-slate-500 hover:text-slate-900">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zM8 8h3.8v2.05h.05c.53-1 1.8-2.05 3.7-2.05 3.96 0 4.7 2.6 4.7 6V23h-4v-6.6c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.53 1.72-2.53 3.5V23H8V8z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
