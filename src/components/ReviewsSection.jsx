import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS, BRAND_INFO } from '../data/coffeeData';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="w-full py-20 md:py-28 bg-coffee-900 border-b border-coffee-800/80 relative">
      <div className="w-full px-6 md:px-12 lg:px-16">
        {/* Header with Aggregate Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-amber-brand text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">
              <Star className="w-4 h-4 fill-amber-brand" />
              <span>Suara Pecinta Kopi</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-sand tracking-tight">
              Cerita & Kesan Pengunjung
            </h2>
            <p className="text-coffee-300 text-sm md:text-base mt-2 max-w-xl">
              Dedikasi kami tercermin dari senyum dan cerita hangat para penikmat kopi yang telah menjadikan Kalandra bagian dari rutinitas harian mereka.
            </p>
          </div>

          {/* Aggregate Badge */}
          <div className="flex items-center gap-4 bg-coffee-950/80 border border-coffee-750 p-4 rounded-2xl w-fit">
            <div className="w-12 h-12 rounded-xl bg-amber-brand/20 flex items-center justify-center font-serif text-2xl font-bold text-amber-light">
              4.9
            </div>
            <div>
              <div className="flex items-center gap-1 text-amber-brand">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-brand text-amber-brand" />
                ))}
              </div>
              <p className="text-xs text-coffee-300 mt-1">
                Terverifikasi di Google Reviews ({BRAND_INFO.ratingCount})
              </p>
            </div>
          </div>
        </div>

        {/* 4 Cards Grid - Full Width Bleed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-coffee-850/70 hover:bg-coffee-800/80 border border-coffee-750/70 hover:border-amber-brand/30 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 hover:shadow-xl shadow-black/40 group relative"
            >
              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-brand">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-brand text-amber-brand" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-coffee-600 group-hover:text-amber-brand/60 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-coffee-200/90 text-sm leading-relaxed mb-6 italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-coffee-800 flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-amber-brand/40"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-sand truncate">{review.name}</h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-brand shrink-0" title="Pengunjung Terverifikasi" />
                  </div>
                  <p className="text-[11px] text-coffee-400 truncate">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
