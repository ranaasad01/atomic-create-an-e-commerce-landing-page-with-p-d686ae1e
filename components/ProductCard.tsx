"use client";

import { useState } from "react";
import { Star, ShoppingCart, Check, Heart } from 'lucide-react';
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const [wishlisted, setWishlisted] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const badgeLabel =
    product.badge === "sale"
      ? "Sale"
      : product.badge === "featured"
      ? "Featured"
      : product.badge === "new"
      ? "New"
      : product.badge === "bestseller"
      ? "Best Seller"
      : null;

  const badgeClass =
    product.badge === "sale"
      ? "bg-rose-500 text-white"
      : product.badge === "featured"
      ? "bg-indigo-600 text-white"
      : product.badge === "new"
      ? "bg-emerald-500 text-white"
      : product.badge === "bestseller"
      ? "bg-amber-500 text-white"
      : "";

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="relative overflow-hidden aspect-square bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {badgeLabel && (
          <span className={"absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full " + badgeClass}>
            {badgeLabel}
          </span>
        )}

        {discount && (
          <span className="absolute top-3 right-3 text-xs font-bold bg-rose-100 text-rose-600 px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}

        <button
          onClick={() => setWishlisted(!wishlisted)}
          aria-label="Add to wishlist"
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
        >
          <Heart
            className={"w-4 h-4 transition-colors " + (wishlisted ? "fill-rose-500 text-rose-500" : "text-slate-400")}
          />
        </button>
      </div>

      <div className="p-4">
        <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide mb-1">
          {product.category}
        </p>
        <h3 className="text-sm font-semibold text-slate-900 leading-snug mb-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center gap-1.5 mb-3">
          <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                className={"w-3.5 h-3.5 " + (s <= Math.round(product.rating) ? "fill-yellow-400 text-yellow-400" : "fill-slate-200 text-slate-200")}
              />
            ))}
          </div>
          <span className="text-xs text-slate-500">
            {product.rating} ({product.reviewCount.toLocaleString()})
          </span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-slate-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-slate-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={"flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all " + (added ? "bg-emerald-500 text-white" : "bg-indigo-600 hover:bg-indigo-500 text-white")}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                Added
              </>
            ) : (
              <>
                <ShoppingCart className="w-3.5 h-3.5" />
                Add
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
