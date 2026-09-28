import React from 'react';
import { HeartHandshake, Flame, Coffee, Sparkles, MapPin } from 'lucide-react';
import { BRAND_INFO, GALLERY_IMAGES } from '../data/coffeeData';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-coffee-950 border-b border-coffee-800/80 relative overflow-hidden">
      {/* Decorative Warm Ambient Lights */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-brand/5 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Kolom Kiri: Galeri Foto Kolase Estetik (5 cols on lg) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            {/* Main large image */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden aspect-[16/10] group border border-coffee-800 shadow-2xl">
              <img
                src={GALLERY_IMAGES[0].image}
                alt={GALLERY_IMAGES[0].title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/90 via-transparent to-transparent flex flex-col justify-end p-5">
                <span className="text-[11px] uppercase tracking-wider text-amber-brand font-bold">
                  {GALLERY_IMAGES[0].title}
                </span>
                <p className="text-xs text-coffee-200 mt-1 max-w-sm">
                  {GALLERY_IMAGES[0].desc}
                </p>
              </div>
            </div>

            {/* Sub image 1 */}
            <div className="col-span-1 relative rounded-2xl overflow-hidden aspect-square group border border-coffee-800 shadow-xl">
              <img
                src={GALLERY_IMAGES[1].image}
                alt={GALLERY_IMAGES[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/90 via-transparent to-transparent flex flex-col justify-end p-3.5">
                <span className="text-[10px] uppercase font-bold text-amber-brand">{GALLERY_IMAGES[1].title}</span>
              </div>
            </div>

            {/* Sub image 2 */}
            <div className="col-span-1 relative rounded-2xl overflow-hidden aspect-square group border border-coffee-800 shadow-xl">
              <img
                src={GALLERY_IMAGES[2].image}
                alt={GALLERY_IMAGES[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/90 via-transparent to-transparent flex flex-col justify-end p-3.5">
                <span className="text-[10px] uppercase font-bold text-amber-brand">{GALLERY_IMAGES[2].title}</span>
              </div>
            </div>

            {/* Bottom Wide Bar */}
            <div className="col-span-2 relative rounded-2xl overflow-hidden aspect-[21/9] group border border-coffee-800 shadow-xl">
              <img
                src={GALLERY_IMAGES[3].image}
                alt={GALLERY_IMAGES[3].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950/90 via-transparent to-transparent flex flex-col justify-end p-4">
                <span className="text-[11px] uppercase tracking-wider text-amber-brand font-bold">
                  {GALLERY_IMAGES[3].title}
                </span>
                <p className="text-xs text-coffee-200 mt-0.5">
                  {GALLERY_IMAGES[3].desc}
                </p>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Cerita "Dari Petani Lokal ke Cangkir Anda" (6 cols on lg) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-amber-brand text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">
              <HeartHandshake className="w-4 h-4" />
              <span>Filosofi & Dedikasi Kalandra</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-sand tracking-tight leading-[1.15] mb-6">
              Dari Petani Lokal <br className="hidden sm:inline" />
              <span className="text-gradient-amber italic font-normal">ke Cangkir Anda</span>
            </h2>

            <div className="space-y-4 text-coffee-300 text-sm md:text-base leading-relaxed">
              <p>
                Kalandra lahir dari keyakinan sederhana: bahwa kekayaan tanah vulkanik Indonesia menyimpan karakter rasa kopi terindah di dunia. Kami bermitra langsung (direct-trade) dengan petani binaan di dataran tinggi Aceh Gayo, lereng Gunung Kerinci, Kintamani Bali, hingga pegunungan Flores Bajawa.
              </p>
              <p>
                Setiap batch biji kopi dipanggang secara teliti di roastery kami setiap minggu untuk mengunci potensi rasa terbaik—mulai dari floralitas bergamot yang cerah hingga kepekatan cokelat karamel yang menenangkan jiwa.
              </p>
              <p>
                Dipadukan dengan bakery house kami yang memproduksi croissant mentega Prancis berlipat-lipat serta sourdough beragi alami, kedai kami dirancang sebagai suaka hangat untuk Anda bekerja, berkontemplasi, atau sekadar berbagi tawa bersama orang tersayang.
              </p>
            </div>

            {/* 3 Pillars / Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-coffee-800">
              <div className="p-4 rounded-xl bg-coffee-900/90 border border-coffee-800/80">
                <Flame className="w-6 h-6 text-amber-brand mb-2" />
                <h4 className="font-serif font-bold text-sand text-sm">Micro-Batch Roast</h4>
                <p className="text-xs text-coffee-400 mt-1">Pemanggangan segar berskala kecil setiap pekan.</p>
              </div>

              <div className="p-4 rounded-xl bg-coffee-900/90 border border-coffee-800/80">
                <Coffee className="w-6 h-6 text-amber-brand mb-2" />
                <h4 className="font-serif font-bold text-sand text-sm">Specialty Grade</h4>
                <p className="text-xs text-coffee-400 mt-1">Skor cupping selalu di atas 84 poin standar SCA.</p>
              </div>

              <div className="p-4 rounded-xl bg-coffee-900/90 border border-coffee-800/80">
                <Sparkles className="w-6 h-6 text-amber-brand mb-2" />
                <h4 className="font-serif font-bold text-sand text-sm">Freshly Baked</h4>
                <p className="text-xs text-coffee-400 mt-1">Pastry mentega hangat keluar oven tiap pagi.</p>
              </div>
            </div>

            {/* Impact Metric Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-coffee-800/60">
              {BRAND_INFO.stats.map((stat, idx) => (
                <div key={idx}>
                  <span className="font-serif text-2xl lg:text-3xl font-bold text-sand">{stat.value}</span>
                  <span className="text-[11px] text-coffee-400 block mt-0.5">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
