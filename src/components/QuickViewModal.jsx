import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Check, Coffee, Sparkles } from 'lucide-react';

export default function QuickViewModal({ product, isOpen, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!isOpen || !product) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAdd = () => {
    onAddToCart({ ...product, quantity: qty });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-coffee-900 border border-coffee-750 rounded-3xl overflow-hidden shadow-2xl z-10 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-coffee-950/80 text-coffee-300 hover:text-sand hover:bg-coffee-800 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Side */}
          <div className="relative aspect-square md:aspect-auto md:h-full bg-coffee-950">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
            {product.tag && (
              <span className="absolute top-4 left-4 bg-espresso/90 text-amber-light text-xs font-bold px-3 py-1 rounded-md border border-amber-brand/30 shadow-md">
                {product.tag}
              </span>
            )}
          </div>

          {/* Info Side */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-amber-brand">
                {product.volume} • {product.intensity}
              </span>

              <h3 className="font-serif text-2xl font-bold text-sand mt-1">
                {product.name}
              </h3>

              <div className="mt-2 p-2.5 rounded-xl bg-coffee-950/60 border border-coffee-800 text-xs text-amber-light/90 italic">
                <span className="font-semibold text-amber-brand not-italic">Tasting Notes: </span>
                {product.notes}
              </div>

              <p className="text-xs sm:text-sm text-coffee-300 mt-3 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-coffee-800">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-coffee-400 block">Total Harga</span>
                  <span className="text-2xl font-bold text-sand font-mono">
                    {formatPrice(product.price * qty)}
                  </span>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-coffee-950 border border-coffee-750 rounded-xl p-1">
                  <button
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-coffee-300 hover:text-sand hover:bg-coffee-800 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-bold text-sand w-8 text-center font-mono">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-coffee-300 hover:text-sand hover:bg-coffee-800 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button
                onClick={handleAdd}
                className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xl ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gradient-to-r from-amber-dark to-amber-brand hover:brightness-110 text-coffee-950'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Ditambahkan ke Keranjang!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
                    <span>Tambah ke Keranjang ({qty})</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
