import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import Newsletter from "@/components/Newsletter";
import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';

const perks = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On all orders over $75. Fast delivery to your door.",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free returns on all products.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description: "Your payment info is always protected.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our team is here whenever you need help.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Perks bar */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map((perk, index) => {
              const Icon = perk.icon;
              return (
                <div key={perk.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-indigo-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{perk.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{perk.description}</p>
                  </div>
                  {index === 3 && (
                    <a style={{ fontFamily: "DM Sans", fontSize: "30px" }}></a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <ProductGrid h1Style={{ backgroundColor: "#e60f0f", color: "#151414" }} h1Text="Discover Products with us" />
      <Newsletter />
    </main>
  );
}