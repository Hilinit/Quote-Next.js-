import React from 'react';
import { MapPin } from 'lucide-react';

const MapSection = () => {
  return (
    <div className="space-y-8 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold text-white/90">Ünvanımız</h2>
        <div className="flex items-start gap-2 text-gray-400 mt-2">
          <MapPin size={20} className="text-emerald-500 shrink-0 mt-1" />
          <p>Bakı şəhəri, Nizami küçəsi 142 (Tarqovı), AZ1000, Azərbaycan</p>
        </div>
      </div>
      <div className="relative w-full h-[350px] lg:h-full min-h-[350px] rounded-xl overflow-hidden border border-white/10 group">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.428674853685!2d49.8436!3d40.3725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDIyJzIxLjAiTiA0OcKwNTAnMzcuMCJF!5e0!3m2!1sen!2saz!4v1680000000000!5m2!1sen!2saz" width="100%" height="100%" style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(100%) contrast(120%)" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"className="absolute inset-0 w-full h-full"></iframe>
        <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none group-hover:bg-transparent transition-all duration-500"></div>
      </div>
    </div>
  );
};
export default MapSection;