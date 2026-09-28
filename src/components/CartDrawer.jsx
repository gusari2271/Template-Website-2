import React from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { BRAND_INFO } from '../data/coffeeData';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) {
  if (!isOpen) return null;

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckoutWhatsApp = () => {
    if (cartItems.length === 0) return;

    let itemsText = cartItems
      .map(
        (item, index) =>
          `${index + 1}. *${item.name}* (${item.quantity}x) = ${formatPrice(
            item.price * item.quantity
          )}`
      )
      .join('\n');

    const message = encodeURIComponent(
      `*Halo ${BRAND_INFO.fullName}!* ☕\n\n` +
      `Saya ingin memesan menu berikut:\n\n` +
      `${itemsText}\n\n` +
      `---------------------------\n` +
      `*Total Pesanan:* ${formatPrice(subtotal)} (${totalItems} item)\n\n` +
      `Mohon info ketersediaan dan metode pembayaran / pengantaran. Terima kasih!`
    );

    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity animate-fade-in"
      />

      {/* Drawer Panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-coffee-950 border-l border-coffee-800 shadow-2xl flex flex-col justify-between animate-fade-in">
          {/* Header */}
          <div className="p-6 border-b border-coffee-800 flex items-center justify-between bg-coffee-900/60">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-amber-brand" />
              <h3 className="font-serif text-lg font-bold text-sand">Keranjang Pesanan</h3>
              <span className="bg-amber-brand/20 text-amber-light text-xs font-bold px-2 py-0.5 rounded-full border border-amber-brand/30">
                {totalItems} item
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-coffee-300 hover:text-sand hover:bg-coffee-800 transition-colors"
              aria-label="Tutup Keranjang"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-coffee-900 border border-coffee-800 flex items-center justify-center text-coffee-400 mb-4">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-sand mb-1">
                  Keranjang Masih Kosong
                </h4>
                <p className="text-xs text-coffee-400 max-w-xs mb-6">
                  Nikmati pengalaman seduhan kopi nusantara dan freshly baked croissant Kalandra hari ini.
                </p>
                <button
                  onClick={onClose}
                  className="bg-amber-brand hover:bg-amber-light text-coffee-950 font-bold px-6 py-2.5 rounded-full text-xs transition-colors"
                >
                  Pilih Menu Sekarang
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-coffee-900/80 border border-coffee-800 rounded-xl p-3.5 flex gap-3.5 items-center justify-between"
                >
                  {/* Thumbnail */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg object-cover border border-coffee-750 shrink-0"
                  />

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-sand text-xs sm:text-sm truncate">
                      {item.name}
                    </h5>
                    <p className="text-[11px] text-amber-light/80 italic truncate">
                      {item.notes}
                    </p>
                    <span className="text-xs font-mono font-bold text-sand block mt-1">
                      {formatPrice(item.price)}
                    </span>
                  </div>

                  {/* Quantity Actions */}
                  <div className="flex flex-col items-end gap-2 shrink-0">
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-coffee-400 hover:text-rose-400 transition-colors p-1"
                      title="Hapus dari keranjang"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-1.5 bg-coffee-950 border border-coffee-750 rounded-lg p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-coffee-300 hover:text-sand hover:bg-coffee-800 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold text-sand w-5 text-center font-mono">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-coffee-300 hover:text-sand hover:bg-coffee-800 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-coffee-800 bg-coffee-900/60 space-y-4">
              <div className="space-y-1.5 text-xs text-coffee-300">
                <div className="flex justify-between">
                  <span>Subtotal Pesanan</span>
                  <span className="font-mono text-sand font-bold text-sm">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-emerald-400">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Free Takeaway Packing
                  </span>
                  <span>Gratis</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleCheckoutWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-dark via-amber-brand to-amber-light hover:brightness-110 text-coffee-950 font-bold py-3.5 rounded-xl shadow-xl transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Pesan Sekarang via WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-coffee-400 mt-2">
                  Pesanan akan otomatis dirangkum dan diteruskan ke kasir Kalandra.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
