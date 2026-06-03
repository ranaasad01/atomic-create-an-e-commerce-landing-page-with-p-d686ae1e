"use client";

import Link from "next/link";
import { ShoppingCart, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useCart } from "@/context/CartContext";
import CartItemRow from "@/components/CartItemRow";
import OrderSummary from "@/components/OrderSummary";

export default function CartPage() {
  const { items, clearCart } = useCart();

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Shopping Cart
            </h1>
            <p className="text-slate-500 mt-1">
              {items.length === 0
                ? "Your cart is empty"
                : items.reduce((s, i) => s + i.quantity, 0) + " item" + (items.reduce((s, i) => s + i.quantity, 0) !== 1 ? "s" : "") + " in your cart"}
            </p>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>

        {items.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6">
              <ShoppingBag className="w-12 h-12 text-indigo-300" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
            <p className="text-slate-500 mb-8 max-w-sm">
              Looks like you haven&apos;t added anything yet. Browse our collection and find something you love.
            </p>
            <Link
              href="/#products"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <ShoppingCart className="w-4 h-4" />
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
                <div className="flex items-center justify-between mb-2">
                  <h2 className="text-base font-bold text-slate-900">
                    Cart Items ({items.length})
                  </h2>
                  <button
                    onClick={clearCart}
                    className="text-xs text-slate-400 hover:text-rose-500 transition-colors font-medium"
                  >
                    Clear all
                  </button>
                </div>

                <div>
                  {items.map((item) => (
                    <CartItemRow key={item.product.id} item={item} />
                  ))}
                </div>
              </div>

              {/* Recommended / upsell banner */}
              <div className="mt-6 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl p-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-white font-semibold text-sm">
                    Free shipping is just a few items away!
                  </p>
                  <p className="text-indigo-200 text-xs mt-0.5">
                    Orders over $75 qualify for free standard shipping.
                  </p>
                </div>
                <Link
                  href="/#products"
                  className="flex-shrink-0 bg-white text-indigo-700 text-xs font-bold px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
                >
                  Add More
                </Link>
              </div>
            </div>

            {/* Order summary */}
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
