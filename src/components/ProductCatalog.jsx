import React, { useState, useMemo } from 'react';
import { Plus, Check, Eye, Sparkles, Search, SlidersHorizontal } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data/coffeeData';

export default function ProductCatalog({ onAddToCart, onQuickView }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedItemMap, setAddedItemMap] = useState({});

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchCategory =
        activeCategory === 'all' || product.category === activeCategory;
      const matchSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.notes.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleAdd = (product, e) => {
    e.stopPropagation();
    onAddToCart(product);

    // Provide momentary visual feedback
    setAddedItemMap((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemMap((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section id="menu" className="w-full py-20 md:py-28 bg-coffee-900 border-b border-coffee-800/80">
      <div className="w-full px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-brand text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Menu Terkurasi & Roastery</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-sand tracking-tight">
              Eksplorasi Cita Rasa Artisan
            </h2>
            <p className="text-coffee-300 text-sm md:text-base mt-2 max-w-xl">
              Setiap cangkir diseduh dengan standar specialty coffee internasional, dipadukan dengan pastry artisan renyah yang dipanggang segar setiap pagi.
            </p>
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-coffee-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari kopi, pastry, beans..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-coffee-950/70 border border-coffee-700/60 rounded-full pl-10 pr-4 py-2.5 text-sm text-sand placeholder:text-coffee-400 focus:outline-none focus:border-amber-brand transition-colors"
            />
          </div>
        </div>

        {/* Category Tabs (Full Bleed Scrolling on Mobile) */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 scrollbar-none mb-10 -mx-2 px-2">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-amber-brand text-coffee-950 shadow-lg shadow-amber-brand/20 scale-[1.02]'
                    : 'bg-coffee-800/80 text-coffee-200 hover:bg-coffee-750 hover:text-sand border border-coffee-700/40'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Product Grid - Wide Full Bleed */}
        {filteredProducts.length === 0 ? (
          <div className="w-full text-center py-16 bg-coffee-950/40 rounded-3xl border border-coffee-800">
            <p className="text-coffee-300 text-base">Tidak ada menu yang sesuai dengan pencarian Anda.</p>
            <button
              onClick={() => {
                setActiveCategory('all');
                setSearchQuery('');
              }}
              className="mt-4 text-amber-brand text-sm font-semibold hover:underline"
            >
              Reset Filter Pencarian
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full gap-6">
            {filteredProducts.map((product) => {
              const isAdded = !!addedItemMap[product.id];
              return (
                <div
                  key={product.id}
                  onClick={() => onQuickView(product)}
                  className="group relative bg-coffee-850/80 hover:bg-coffee-800/90 rounded-2xl overflow-hidden border border-coffee-750/60 hover:border-amber-brand/40 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/50"
                >
                  {/* Image Container with Tag & Quick View */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-coffee-950">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Tag Badge */}
                    {product.tag && (
                      <span className="absolute top-3 left-3 bg-espresso/90 backdrop-blur-md text-amber-light text-[11px] font-bold px-2.5 py-1 rounded-md border border-amber-brand/30 shadow-md">
                        {product.tag}
                      </span>
                    )}

                    {/* Quick View Overlay Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickView(product);
                      }}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-coffee-950/80 backdrop-blur-md text-coffee-200 hover:text-sand hover:bg-amber-brand hover:text-coffee-950 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 shadow-md"
                      title="Lihat Detail Menu"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Product Details */}
                  <div className="p-5 flex flex-col flex-grow justify-between">
                    <div>
                      {/* Portion / Volume */}
                      <span className="text-[11px] tracking-wider uppercase text-amber-brand/90 font-medium">
                        {product.volume} • {product.intensity}
                      </span>

                      {/* Product Name */}
                      <h3 className="font-serif text-lg font-bold text-sand group-hover:text-amber-light transition-colors line-clamp-1 mt-1">
                        {product.name}
                      </h3>

                      {/* Tasting Notes */}
                      <p className="text-xs text-amber-light/80 italic mt-1.5 line-clamp-1">
                        Notes: {product.notes}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-coffee-300 mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>

                    {/* Price & Add to Cart Action */}
                    <div className="pt-4 mt-4 border-t border-coffee-800/80 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-coffee-400 block -mb-0.5">Harga</span>
                        <span className="text-base sm:text-lg font-bold text-sand font-mono">
                          {formatPrice(product.price)}
                        </span>
                      </div>

                      <button
                        onClick={(e) => handleAdd(product, e)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-300 shadow-md ${
                          isAdded
                            ? 'bg-emerald-600 text-white scale-95'
                            : 'bg-amber-brand hover:bg-amber-light text-coffee-950 hover:shadow-amber-brand/30 active:scale-95'
                        }`}
                        title="Tambah ke Keranjang"
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                            <span>Ditambah</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5 stroke-[3]" />
                            <span>Pesan</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
