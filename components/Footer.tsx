"use client";

import Link from "next/link";
import { Sparkles, MessageCircle as Twitter, Code2 as Github, Globe as Facebook, Briefcase as Linkedin, Mail } from 'lucide-react';

const footerLinks = {
  Shop: [
    { label: "New Arrivals", href: "/#products" },
    { label: "Best Sellers", href: "/#products" },
    { label: "Sale", href: "/#products" },
    { label: "All Products", href: "/#products" },
  ],
  Support: [
    { label: "FAQ", href: "#" },
    { label: "Shipping Policy", href: "#" },
    { label: "Returns & Exchanges", href: "#" },
    { label: "Track Your Order", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Sustainability", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center group-hover:bg-indigo-400 transition-colors">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">Lumière</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Curated products for modern living. We believe great design and quality should be accessible to everyone.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Lumière Shop. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Mail className="w-3 h-3" />
            <a href="mailto:hello@lumiere.shop" className="hover:text-indigo-400 transition-colors">
              hello@lumiere.shop
            </a>
          </div>
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
