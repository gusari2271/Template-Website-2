import React, { useState } from 'react';
import { Coffee, ArrowUpRight, Check, Heart, Mail } from 'lucide-react';
import { BRAND_INFO } from '../data/coffeeData';

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const TikTokIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

const YouTubeIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
    <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
  </svg>
);

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="w-full bg-coffee-950 text-coffee-300 border-t border-coffee-800/80 pt-16 pb-10">
      <div className="w-full px-6 md:px-12 lg:px-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-coffee-800/70">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber-brand flex items-center justify-center text-coffee-950 shadow-md">
                <Coffee className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-sand block">
                  {BRAND_INFO.name}
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-coffee-400 font-medium">
                  Coffee & Roastery
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-coffee-300 leading-relaxed max-w-sm">
              Secangkir ketenangan di tengah hiruk pikuk kota. Roastery biji kopi nusantara specialty dan artisan bakehouse modern.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={BRAND_INFO.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-coffee-900 border border-coffee-800 hover:border-amber-brand hover:text-amber-brand flex items-center justify-center transition-colors"
                aria-label="Instagram Kalandra"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.socials.tiktok}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-coffee-900 border border-coffee-800 hover:border-amber-brand hover:text-amber-brand flex items-center justify-center transition-colors"
                aria-label="TikTok Kalandra"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>

              <a
                href={BRAND_INFO.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-coffee-900 border border-coffee-800 hover:border-amber-brand hover:text-amber-brand flex items-center justify-center transition-colors"
                aria-label="YouTube Kalandra"
              >
                <YouTubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-sand uppercase tracking-wider">
              Eksplorasi
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#home" className="hover:text-amber-brand transition-colors">Beranda</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-brand transition-colors">Daftar Menu</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-brand transition-colors">Cerita & Petani Mitra</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-brand transition-colors">Ulasan Tamu</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-brand transition-colors">Lokasi & Jam Buka</a>
              </li>
            </ul>
          </div>

          {/* Product Categories (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold text-sand uppercase tracking-wider">
              Kategori Menu
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#menu" className="hover:text-amber-brand transition-colors">Signature Coffee</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-brand transition-colors">Manual Filter Brew</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-brand transition-colors">Artisan Croissant</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-brand transition-colors">Whole Beans Roastery</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-amber-brand transition-colors">Non-Coffee Specialty</a>
              </li>
            </ul>
          </div>

          {/* Newsletter Input (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-sm font-bold text-sand uppercase tracking-wider">
              Warta Kalandra
            </h4>
            <p className="text-xs text-coffee-300 leading-relaxed">
              Dapatkan warta batch roasting terbaru, undangan cupping session akhir pekan, dan voucher diskon khusus pelanggan setia.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-coffee-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Alamat email Anda..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full bg-coffee-900 border border-coffee-800 rounded-xl pl-10 pr-3 py-2.5 text-xs text-sand placeholder:text-coffee-500 focus:outline-none focus:border-amber-brand transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  disabled={subscribed}
                  className="bg-amber-brand hover:bg-amber-light text-coffee-950 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors shrink-0"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : 'Langganan'}
                </button>
              </div>

              {subscribed && (
                <p className="text-xs text-emerald-400 animate-fade-in">
                  ✓ Terima kasih! Anda telah terdaftar di Warta Kalandra.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-coffee-400">
          <p>© {new Date().getFullYear()} {BRAND_INFO.fullName}. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-sand cursor-pointer transition-colors">Kebijakan Privasi</span>
            <span className="hover:text-sand cursor-pointer transition-colors">Syarat & Ketentuan</span>
            <span className="hover:text-sand cursor-pointer transition-colors">Karir Barista</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
