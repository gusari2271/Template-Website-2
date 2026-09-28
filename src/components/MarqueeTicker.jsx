import React from 'react';
import { MARQUEE_ITEMS } from '../data/coffeeData';

export default function MarqueeTicker() {
  // Repeat items for seamless infinite marquee loop
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="w-full bg-gradient-to-r from-espresso via-coffee-800 to-espresso border-y border-amber-brand/20 py-3.5 overflow-hidden select-none relative shadow-inner">
      <div className="flex w-max animate-marquee">
        {repeated.map((item, index) => (
          <div key={index} className="flex items-center mx-4 md:mx-6">
            <span className="text-xs md:text-sm tracking-[0.25em] uppercase font-bold text-sand/90 hover:text-amber-light transition-colors whitespace-nowrap">
              {item}
            </span>
            <span className="ml-4 md:ml-6 text-amber-brand text-xs font-black">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
