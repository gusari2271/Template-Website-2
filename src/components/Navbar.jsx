import React, { useState, useEffect } from 'react';
import { ShoppingBag, Coffee, Search, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';
import { BRAND_INFO } from '../data/coffeeData';

export default function Navbar({ cartCount, onOpenCart, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#home' },
    { name: 'Menu & Produk', href: '#menu' },
    { name: 'Cerita Kami', href: '#about' },
    { name: 'Ulasan Tamu', href: '#reviews' },
    { name: 'Lokasi & Jam Buka', href: '#contact' },
  ];

  const handleWhatsappCTA = () => {
    const message = encodeURIComponent(
      `Halo ${BRAND_INFO.name}, saya ingin memesan menu / reservasi meja. Boleh info menu rekomendasi hari ini?`
    );
    window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-coffee-950/90 backdrop-blur-md border-b border-coffee-700/40 py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-coffee-950/90 via-coffee-950/40 to-transparent py-5'
        }`}
      >
        <div className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Kalandra Coffee Home"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-dark via-amber-brand to-amber-light flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
              <Coffee className="w-5 h-5 text-coffee-950" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-sand group-hover:text-amber-glow transition-colors">
                KALANDRA
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-coffee-300 -mt-1 font-medium">
                Coffee & Roastery
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-coffee-200/90 hover:text-amber-brand transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-brand hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full text-coffee-200 hover:text-sand hover:bg-coffee-800/60 transition-all border border-transparent hover:border-coffee-700/50"
              title="Cari Menu atau Produk"
              aria-label="Cari Menu"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Shopping Bag / Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full text-coffee-200 hover:text-sand hover:bg-coffee-800/60 transition-all border border-transparent hover:border-coffee-700/50 group"
              title="Buka Keranjang Belanja"
              aria-label="Keranjang Belanja"
            >
              <ShoppingBag className="w-5 h-5 text-sand group-hover:text-amber-brand transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-brand text-coffee-950 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse-subtle">
                  {cartCount}
                </span>
              )}
            </button>

            {/* WhatsApp CTA Button */}
            <button
              onClick={handleWhatsappCTA}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-dark to-amber-brand hover:from-amber-brand hover:to-amber-light text-coffee-950 font-semibold text-xs md:text-sm px-4 md:px-5 py-2.5 rounded-full shadow-lg hover:shadow-amber-brand/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Pesan via WA</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg text-coffee-200 hover:text-sand hover:bg-coffee-800/60"
              aria-label="Buka Menu Navigasi"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-coffee-900/98 backdrop-blur-xl border-b border-coffee-800 px-6 py-6 shadow-2xl transition-all animate-fade-in">
            <nav className="flex flex-col gap-4 text-base font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-coffee-200 hover:text-amber-brand py-2 border-b border-coffee-800/50 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-coffee-500" />
                </a>
              ))}
              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleWhatsappCTA();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-amber-brand hover:bg-amber-light text-coffee-950 font-bold py-3 rounded-xl shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Pesan Cepat via WhatsApp</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
