import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  Calendar,
  Users,
  Send,
  CheckCircle,
  ExternalLink,
  Wifi,
  Car,
  Sparkles
} from 'lucide-react';
import { BRAND_INFO } from '../data/coffeeData';

export default function ContactAndVisitSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    guests: '2 Orang',
    date: '',
    time: '14:00',
    type: 'Reservasi Meja', // or 'Pertanyaan Umum'
    notes: '',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build WhatsApp message
    const message = encodeURIComponent(
      `*Halo ${BRAND_INFO.fullName}*\n\n` +
      `Saya ingin membuat *${formData.type}* dengan rincian berikut:\n` +
      `• *Nama:* ${formData.name}\n` +
      `• *WhatsApp:* ${formData.phone}\n` +
      `• *Jumlah Tamu:* ${formData.guests}\n` +
      `• *Tanggal & Jam:* ${formData.date || 'Hari ini'} pukul ${formData.time} WIB\n` +
      (formData.notes ? `• *Catatan Tambahan:* ${formData.notes}\n` : '') +
      `\nMohon konfirmasi ketersediaan meja. Terima kasih!`
    );

    setFormSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/${BRAND_INFO.whatsappNumber}?text=${message}`, '_blank');
      setFormSubmitted(false);
    }, 800);
  };

  return (
    <section id="contact" className="w-full py-20 md:py-28 bg-coffee-950 border-b border-coffee-800/80 relative">
      <div className="w-full px-6 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 text-amber-brand text-xs md:text-sm font-semibold uppercase tracking-widest mb-3">
            <MapPin className="w-4 h-4" />
            <span>Kunjungi Kedai & Reservasi</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-sand tracking-tight">
            Satu Pintu Informasi & Kunjungan
          </h2>
          <p className="text-coffee-300 text-sm md:text-base mt-2 max-w-xl">
            Mari singgah dan rasakan langsung kehangatan atmosfer kami. Butuh meja khusus untuk meeting atau arisan? Tim kami siap melayani Anda.
          </p>
        </div>

        {/* 2-Column Wide Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 w-full">
          {/* Kolom Kiri: Detail Kontak & Jam Operasional (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Address Card */}
              <div className="bg-coffee-900/90 border border-coffee-800 rounded-2xl p-6 hover:border-amber-brand/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-brand/20 flex items-center justify-center text-amber-brand shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-sand uppercase tracking-wider">Alamat Kedai</h3>
                    <p className="text-sm text-coffee-200 mt-1 leading-relaxed">
                      {BRAND_INFO.address}
                    </p>
                    <p className="text-xs text-coffee-400 mt-2 bg-coffee-950/60 p-2.5 rounded-lg border border-coffee-850">
                      {BRAND_INFO.addressNotes}
                    </p>
                  </div>
                </div>
              </div>

              {/* Operating Hours Card */}
              <div className="bg-coffee-900/90 border border-coffee-800 rounded-2xl p-6 hover:border-amber-brand/40 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-brand/20 flex items-center justify-center text-amber-brand shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-bold text-sand uppercase tracking-wider">Jam Operasional</h3>
                    <div className="mt-3 space-y-2.5">
                      {BRAND_INFO.hours.map((h, i) => (
                        <div key={i} className="flex justify-between items-center text-xs sm:text-sm border-b border-coffee-800/60 pb-2 last:border-0 last:pb-0">
                          <div>
                            <span className="font-semibold text-sand block">{h.day}</span>
                            <span className="text-[11px] text-coffee-400">{h.note}</span>
                          </div>
                          <span className="font-mono text-amber-light font-bold">{h.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp & Email Quick Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-coffee-900/90 hover:bg-coffee-850 border border-coffee-800 hover:border-amber-brand/40 rounded-2xl p-5 transition-all group flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-coffee-400 block uppercase">WhatsApp Direct</span>
                    <span className="text-xs sm:text-sm font-bold text-sand group-hover:text-emerald-400 transition-colors truncate block">
                      {BRAND_INFO.whatsappFormatted}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="bg-coffee-900/90 hover:bg-coffee-850 border border-coffee-800 hover:border-amber-brand/40 rounded-2xl p-5 transition-all group flex items-center gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-brand/20 text-amber-brand flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] text-coffee-400 block uppercase">Email Resmi</span>
                    <span className="text-xs sm:text-sm font-bold text-sand group-hover:text-amber-light transition-colors truncate block">
                      {BRAND_INFO.email}
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Facilities Bar */}
            <div className="bg-coffee-950/70 border border-coffee-800/80 rounded-2xl p-4 flex flex-wrap items-center justify-around gap-4 text-xs text-coffee-300">
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-amber-brand" />
                <span>WiFi 150 Mbps</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-brand" />
                <span>Free Valet Parking</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-brand" />
                <span>Indoor AC & Smoking Garden</span>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Peta Interaktif & Form Reservasi (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Interactive Map Card Preview */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-coffee-800 bg-coffee-900 aspect-[16/7] group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                alt="Peta Lokasi Kalandra Coffee Senopati"
                className="w-full h-full object-cover filter contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-950 via-coffee-950/40 to-transparent" />

              {/* Map Floating Pin Info */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="bg-coffee-950/95 backdrop-blur-md border border-amber-brand/40 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-amber-brand text-coffee-950 flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-sand font-serif">Kalandra Roastery Senopati</h4>
                    <p className="text-xs text-coffee-300">Kebayoran Baru, Jakarta Selatan</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Senopati+Jakarta+Selatan"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 bg-coffee-800 hover:bg-amber-brand hover:text-coffee-950 text-coffee-200 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5"
                  >
                    <span>Rute</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Form Pemesanan Meja / Pertanyaan */}
            <div className="bg-coffee-900/90 border border-coffee-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-sand">
                    Reservasi Meja / Pertanyaan Singkat
                  </h3>
                  <p className="text-xs text-coffee-300 mt-1">
                    Isi formulir dan konfirmasi otomatis akan diteruskan ke WhatsApp staf kedai kami.
                  </p>
                </div>

                <div className="hidden sm:flex gap-1 bg-coffee-950 p-1 rounded-xl border border-coffee-800 text-xs font-medium">
                  {['Reservasi Meja', 'Pertanyaan'].map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, type })}
                      className={`px-3 py-1.5 rounded-lg transition-colors ${
                        formData.type === type
                          ? 'bg-amber-brand text-coffee-950 font-bold'
                          : 'text-coffee-300 hover:text-sand'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-medium text-coffee-300 mb-1.5">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Raden Bagus"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-coffee-950/80 border border-coffee-750 rounded-xl px-4 py-2.5 text-sm text-sand placeholder:text-coffee-500 focus:outline-none focus:border-amber-brand transition-colors"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div>
                    <label className="block text-xs font-medium text-coffee-300 mb-1.5">
                      Nomor WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxxx"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-coffee-950/80 border border-coffee-750 rounded-xl px-4 py-2.5 text-sm text-sand placeholder:text-coffee-500 focus:outline-none focus:border-amber-brand transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {/* Guests */}
                  <div>
                    <label className="block text-xs font-medium text-coffee-300 mb-1.5">
                      Jumlah Tamu
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-coffee-950/80 border border-coffee-750 rounded-xl px-4 py-2.5 text-sm text-sand focus:outline-none focus:border-amber-brand transition-colors"
                    >
                      <option>1 Orang</option>
                      <option>2 Orang</option>
                      <option>3 - 4 Orang</option>
                      <option>5 - 8 Orang</option>
                      <option>Grup (&gt; 8 Orang)</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label className="block text-xs font-medium text-coffee-300 mb-1.5">
                      Rencana Tanggal
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-coffee-950/80 border border-coffee-750 rounded-xl px-4 py-2.5 text-sm text-sand focus:outline-none focus:border-amber-brand transition-colors"
                    />
                  </div>

                  {/* Time */}
                  <div>
                    <label className="block text-xs font-medium text-coffee-300 mb-1.5">
                      Estimasi Jam
                    </label>
                    <input
                      type="time"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full bg-coffee-950/80 border border-coffee-750 rounded-xl px-4 py-2.5 text-sm text-sand focus:outline-none focus:border-amber-brand transition-colors"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-medium text-coffee-300 mb-1.5">
                    Catatan Khusus (Opsional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Contoh: Butuh colokan listrik untuk laptop / area non-smoking / perayaan ulang tahun..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-coffee-950/80 border border-coffee-750 rounded-xl px-4 py-2 text-sm text-sand placeholder:text-coffee-500 focus:outline-none focus:border-amber-brand transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formSubmitted}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-dark via-amber-brand to-amber-light hover:brightness-110 text-coffee-950 font-bold py-3.5 rounded-xl shadow-lg hover:shadow-amber-brand/20 transition-all duration-300"
                >
                  {formSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5 stroke-[2.5]" />
                      <span>Membuka WhatsApp Kalandra...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 stroke-[2.5]" />
                      <span>Kirim Reservasi ke WhatsApp Kedai</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
