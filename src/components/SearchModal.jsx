import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight, Coffee, Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/coffeeData';

export default function SearchModal({ isOpen, onClose, onSelectProduct }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const results = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.notes.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : PRODUCTS.slice(0, 4);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 sm:px-6">
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-coffee-900 border border-coffee-750 rounded-2xl overflow-hidden shadow-2xl z-10 animate-fade-in">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-coffee-800 flex items-center gap-3 bg-coffee-950/60">
          <Search className="w-5 h-5 text-amber-brand shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Cari biji kopi, latte, croissant, matcha..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sand placeholder:text-coffee-500 text-base sm:text-lg focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-coffee-400 hover:text-sand hover:bg-coffee-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-coffee-400 px-2 mb-2">
            {query.trim() ? `Hasil Pencarian (${results.length})` : 'Rekomendasi Menu'}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-10 text-coffee-400 text-sm">
              Tidak ditemukan menu dengan kata kunci "{query}"
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectProduct(item);
                  onClose();
                }}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-coffee-800/80 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 rounded-lg object-cover border border-coffee-750 shrink-0"
                  />
                  <div className="min-w-0">
                    <h5 className="font-bold text-sand text-sm group-hover:text-amber-light transition-colors truncate">
                      {item.name}
                    </h5>
                    <p className="text-xs text-coffee-400 italic truncate">
                      Notes: {item.notes}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-mono font-bold text-sand">
                    {formatPrice(item.price)}
                  </span>
                  <ArrowRight className="w-4 h-4 text-coffee-500 group-hover:text-amber-brand group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
