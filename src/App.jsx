import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MarqueeTicker from './components/MarqueeTicker';
import ProductCatalog from './components/ProductCatalog';
import AboutSection from './components/AboutSection';
import ReviewsSection from './components/ReviewsSection';
import ContactAndVisitSection from './components/ContactAndVisitSection';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import { Check, ShoppingBag, X } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Cart total items count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Add to cart handler
  const handleAddToCart = (product) => {
    const qtyToAdd = product.quantity || 1;
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qtyToAdd }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: qtyToAdd }];
    });

    showToast(`✓ "${product.name}" ditambahkan ke keranjang`);
  };

  // Update item quantity
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove single item
  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  // Clear cart
  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen w-full bg-coffee-950 text-coffee-100 flex flex-col relative selection:bg-amber-brand selection:text-white">
      {/* 1. Full-Width Sticky Navbar */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      <main className="w-full flex-grow">
        {/* 2. Hero Section (100vh Split Edge-to-Edge) */}
        <Hero
          onExploreMenu={() => {
            const el = document.getElementById('menu');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          onExploreStory={() => {
            const el = document.getElementById('about');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Ticker / Running Text Banner (Full-Width) */}
        <MarqueeTicker />

        {/* 4. Katalog Produk & Makanan (E-Commerce Ready Grid) */}
        <ProductCatalog
          onAddToCart={handleAddToCart}
          onQuickView={(product) => setQuickViewProduct(product)}
        />

        {/* 5. About Us Section (Edge-to-Edge Showcase) */}
        <AboutSection />

        {/* 6. Customer Reviews / Social Proof */}
        <ReviewsSection />

        {/* 7. Contact Person & Visit Us (Satu Pintu Informasi) */}
        <ContactAndVisitSection />
      </main>

      {/* 8. Footer Lengkap (Full-Width) */}
      <Footer />

      {/* Cart Slide-Over Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Quick View Product Modal */}
      <QuickViewModal
        isOpen={!!quickViewProduct}
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Global Quick Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setQuickViewProduct(product)}
      />

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-coffee-900 border border-amber-brand/40 text-sand px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in">
          <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
            <Check className="w-4 h-4 stroke-[3]" />
          </div>
          <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-coffee-400 hover:text-sand ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
