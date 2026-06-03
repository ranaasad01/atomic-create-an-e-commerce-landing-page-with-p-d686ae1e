"use client";

import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartItem } from "@/types";
import { useCart } from "@/context/CartContext";

interface CartItemRowProps {
  item: CartItem;
}

export default function CartItemRow({ item }: CartItemRowProps) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="flex gap-4 py-5 border-b border-slate-100 last:border-0">
      <div className="w-20 h-20 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
        <img
          src={item.product.image}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-xs font-medium text-indigo-600 uppercase tracking-wide">
              {item.product.category}
            </p>
            <h3 className="text-sm font-semibold text-slate-900 leading-snug mt-0.5">
              {item.product.name}
            </h3>
          </div>
          <button
            onClick={() => removeItem(item.product.id)}
            aria-label="Remove item"
            className="text-slate-400 hover:text-rose-500 transition-colors flex-shrink-0 p-1"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1 border border-slate-200 rounded-lg overflow-hidden">
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
              aria-label="Decrease quantity"
              className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="w-8 text-center text-sm font-semibold text-slate-900">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
              aria-label="Increase quantity"
              className="w-8 h-8 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-right">
            <p className="text-sm font-bold text-slate-900">
              ${(item.product.price * item.quantity).toFixed(2)}
            </p>
            {item.quantity > 1 && (
              <p className="text-xs text-slate-400">
                ${item.product.price.toFixed(2)} each
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
