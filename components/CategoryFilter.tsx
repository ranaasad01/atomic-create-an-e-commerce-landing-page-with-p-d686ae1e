"use client";

import { categories } from "@/lib/products";

interface CategoryFilterProps {
  selected: string;
  onChange: (category: string) => void;
}

export default function CategoryFilter({ selected, onChange }: CategoryFilterProps) {
  return (
    <div id="categories" className="flex items-center gap-2 overflow-x-auto pb-2">
      {categories.map((cat) => {
        const isActive = selected === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={
              isActive
                ? "flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium bg-indigo-600 text-white shadow-md"
                : "flex-shrink-0 px-5 py-2 rounded-full text-sm font-medium bg-white text-slate-600 border border-slate-200 hover:border-indigo-300 hover:text-indigo-600 transition-all"
            }
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
