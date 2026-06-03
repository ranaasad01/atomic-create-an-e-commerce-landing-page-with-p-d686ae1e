"use client";

import { useCart } from "@/context/CartContext";
import { ArrowRight, ShieldCheck, Truck } from 'lucide-react';

export default function OrderSummary() {
  const { subtotal, items } = useCart();
  const shipping = subtotal >= 75 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 sticky top-24">
      <h2 className="text-lg font-bold text-slate-900 mb-5">Order Summary</h2>

      <div className="space-y-3 mb-5">
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">
            Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)
          </span>
          <span className="font-medium text-slate-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Shipping</span>
          {shipping === 0 ? (
            <span className="font-medium text-emerald-600">Free</span>
          ) : (
            <span className="font-medium text-slate-900">${shipping.toFixed(2)}</span>
          )}
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-slate-600">Estimated Tax (8%)</span>
          <span className="font-medium text-slate-900">${tax.toFixed(2)}</span>
        </div>
      </div>

      <div className="border-t border-slate-100 pt-4 mb-5">
        <div className="flex justify-between">
          <span className="font-bold text-slate-900">Total</span>
          <span className="font-bold text-xl text-slate-900">${total.toFixed(2)}</span>
        </div>
      </div>

      {subtotal < 75 && subtotal > 0 && (
        <div className="bg-indigo-50 rounded-xl p-3 mb-5 text-xs text-indigo-700 font-medium">
          Add ${(75 - subtotal).toFixed(2)} more for free shipping!
        </div>
      )}

      <button className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3.5 rounded-xl transition-all hover:shadow-lg hover:shadow-indigo-600/25 hover:-translate-y-0.5 mb-4">
        Proceed to Checkout
        <ArrowRight className="w-4 h-4" />
      </button>

      <div className="space-y-2">
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
          <span>Secure checkout with SSL encryption</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <Truck className="w-4 h-4 text-indigo-500 flex-shrink-0" />
          <span>Free returns within 30 days</span>
        </div>
      </div>
    </div>
  );
}
