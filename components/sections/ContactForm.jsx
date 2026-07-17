"use client";
import React from 'react';
import { Mail, Phone, Clock } from 'lucide-react';

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //(API/Server Action) 
  };
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white/90">Bizimlə Əlaqə</h2>
        <p className="text-gray-400 mt-2">Suallarınız, təklifləriniz və ya əməkdaşlıq üçün formanı doldurun.</p>
      </div>
      <div className="space-y-4">
        {[
          { icon: <Phone size={20} />, label: "Telefon", value: "+994 (55) 123-45-67" },
          { icon: <Mail size={20} />, label: "E-poçt", value: "support@kitabevimiz.az" },
          { icon: <Clock size={20} />, label: "İş Saatları", value: "Hər gün: 09:00 - 21:00" }
        ].map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 text-gray-300">
            <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-500/20 text-emerald-400">
              {item.icon}
            </div>
            <div>
              <p className="text-xs text-gray-500">{item.label}</p>
              <p className="font-semibold">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 p-6 rounded-xl border border-white/5 bg-white/[0.02]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Adınız" className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition text-sm"/>
          <input type="email" placeholder="E-poçtunuz" className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition text-sm"/>
        </div>
        <textarea rows="4" placeholder="Mesajınız..." className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg text-white focus:outline-none focus:border-emerald-500 transition text-sm"></textarea>
        <button type="submit" className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.4)]">
          Mesajı Göndər
        </button>
      </form>
    </div>
  );
};

export default ContactForm;