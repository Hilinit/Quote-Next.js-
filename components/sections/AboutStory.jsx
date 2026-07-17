import React from 'react';
import { BookOpen } from 'lucide-react';

const AboutStory = () => {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
          <BookOpen size={16} />
          <span>Biz kimik?</span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-white/90 to-white/50 bg-clip-text text-transparent">
          Hekayəmiz
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed pt-4">
          Biz sadəcə bir kitab mağazası deyilik. Biz kitabsevərləri, xəyalpərəstləri və bilik axtarışında olan hər kəsi bir araya gətirən rəqəmsal bir sığınacağıq. Hər bir kitabın yeni bir dünya olduğuna inanır və bu dünyaları sizin üçün əlçatan edirik.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-center">
        {[
          { value: "10k+", label: "Kitab Sayı" },
          { value: "5k+", label: "Aktiv Oxucu" },
          { value: "50+", label: "Yazıçı və Janr" },
          { value: "24/7", label: "Dəstək" }
        ].map((stat, idx) => (
          <div key={idx} className="p-6 rounded-xl border border-white/5 bg-white/[0.02]">
            <h3 className="text-3xl font-extrabold text-emerald-500">{stat.value}</h3>
            <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutStory;