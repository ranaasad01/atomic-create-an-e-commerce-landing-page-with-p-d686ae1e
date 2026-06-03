"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="newsletter" className="bg-gradient-to-br from-indigo-600 to-indigo-800 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mb-6">
            <Mail className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Get Exclusive Deals First
          </h2>
          <p className="text-indigo-200 text-lg mb-8">
            Join 50,000+ subscribers and be the first to know about flash sales, new arrivals, and members-only discounts.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 bg-white/20 rounded-2xl px-6 py-4">
              <div className="w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <p className="text-white font-semibold">
                You&apos;re in! Check your inbox for a welcome discount.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3 rounded-xl bg-white/15 border border-white/30 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl hover:bg-indigo-50 transition-all hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <p className="text-indigo-300 text-xs mt-4">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
