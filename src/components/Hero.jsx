import React from 'react';
import { ArrowUpRight, Star, Sparkles, Award, Coffee, Flame } from 'lucide-react';
import { BRAND_INFO } from '../data/coffeeData';

export default function Hero({ onExploreMenu, onExploreStory }) {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center bg-coffee-950 overflow-hidden pt-20 lg:pt-0"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-brand/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 right-1/4 w-[32rem] h-[32rem] bg-espresso/80 rounded-full blur-3xl pointer-events-none -z-0" />

      {/* Full-width 50/50 Split Grid */}
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center z-10">
        {/* Left Side: Content & Typography */}
        <div className="flex flex-col justify-center px-6 sm:px-10 md:px-14 lg:pl-16 lg:pr-10 py-12 lg:py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-coffee-850/90 border border-amber-brand/30 text-amber-light text-xs md:text-sm font-medium w-fit mb-6 shadow-sm backdrop-blur-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-amber-brand animate-ping" />
            <span>{BRAND_INFO.badgeText}</span>
          </div>

          {/* Massive Editorial Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-sand leading-[1.12] mb-6">
            Secangkir <span className="italic font-normal text-gradient-amber">Ketenangan</span> di Tengah Hiruk Pikuk Kota.
          </h1>

          {/* Short Narrative Intro */}
          <p className="text-coffee-200/90 text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-2xl mb-8">
            {BRAND_INFO.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#menu"
              onClick={onExploreMenu}
              className="inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-dark via-amber-brand to-amber-light hover:brightness-110 text-coffee-950 font-bold text-sm md:text-base px-7 py-3.5 rounded-full shadow-xl hover:shadow-amber-brand/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>Pesan Sekarang (Menu)</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="#about"
              onClick={onExploreStory}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-coffee-900/80 hover:bg-coffee-800 text-sand border border-coffee-700/60 hover:border-amber-brand/40 font-medium text-sm md:text-base transition-all duration-300"
            >
              <span>Eksplor Rasa & Cerita</span>
            </a>
          </div>

          {/* Social Proof / Mini Ticker Rating */}
          <div className="pt-6 border-t border-coffee-800/80 flex flex-wrap items-center gap-5 sm:gap-8">
            {/* Star Rating Group */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-brand">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-brand text-amber-brand" />
                ))}
              </div>
              <div className="text-xs sm:text-sm">
                <span className="font-bold text-sand">{BRAND_INFO.rating}</span>
                <span className="text-coffee-300 ml-1">dari {BRAND_INFO.ratingCount}</span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-6 bg-coffee-800" />

            {/* Nusantara Origin Badge */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-coffee-200">
              <Award className="w-4 h-4 text-amber-brand shrink-0" />
              <span>{BRAND_INFO.originBadge}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Edge-to-Edge Immersive Visual */}
        <div className="relative w-full h-[55vh] sm:h-[65vh] lg:h-full min-h-[460px] lg:min-h-screen overflow-hidden group">
          {/* Main Visual Image with Warm Lighting */}
          <img
            src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=85&w=1600&auto=format&fit=crop"
            alt="Artisan Signature Pour-Over Coffee Kalandra"
            className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Gradients to seamlessly blend edges */}
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/20 to-transparent lg:hidden" />
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-coffee-950 via-transparent to-transparent w-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-coffee-950/40 via-transparent to-coffee-950/60" />

          {/* Floating Highlight Card #1: Signature Blend Info */}
          <div className="absolute top-8 right-6 sm:right-10 glass-panel p-4 rounded-2xl shadow-2xl max-w-xs animate-fade-in border border-amber-brand/20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-amber-brand/20 flex items-center justify-center text-amber-brand">
                <Flame className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-amber-light font-semibold">Specialty Roast</p>
                <h4 className="text-sm font-serif font-bold text-sand">Aceh Gayo Anaerob #01</h4>
              </div>
            </div>
            <p className="text-xs text-coffee-300">
              Slow fermentation 72 jam menghasilkan aroma wild berry & hint jasmine yang lembut.
            </p>
          </div>

          {/* Floating Highlight Card #2: Freshly Brewed Live Metric */}
          <div className="absolute bottom-8 left-6 sm:left-12 glass-panel p-3.5 sm:p-4 rounded-2xl shadow-2xl flex items-center gap-3.5 border border-amber-brand/20">
            <div className="w-10 h-10 rounded-xl bg-amber-brand/20 flex items-center justify-center text-amber-light">
              <Coffee className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-xs text-amber-brand font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Brewed to Perfection</span>
              </div>
              <p className="text-sm font-medium text-sand">Temp: 92.5°C • Ratio 1:15</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
