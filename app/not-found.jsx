import Link from 'next/link';
import { global } from "@/app/globals.css";
export default function NotFound() {
  return (
    <div 
      style={{
        backgroundImage: "url('https://i.pinimg.com/1200x/bf/80/00/bf80007ef2548f820dc121c6bd064767.jpg')", 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",      
        backgroundPosition: "center"   
      }} 
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans">
      <div className="absolute inset-0 bg-black/40 grayscale-[55%] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none" />
      <div className="relative z-10 px-6 text-center max-w-lg mx-auto bg-black/20 p-10 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">
        <h1 className="text-[12rem] font-extrabold text-slate-200 leading-none tracking-tighter select-none">
          404
        </h1>
        <div className="mt-6 space-y-3">
          <h2 className="text-2xl font-semibold text-slate-200 tracking-wide">
            Səhifə tapılmadı
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-md mx-auto">
            Axtardığınız səhifə silinmiş, adı dəyişdirilmiş və ya müvəqqəti olaraq əlçatmaz ola bilər.
          </p>
        </div>
        <div className="mt-10">
          <Link href="/home" className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-white hover:bg-slate-100 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-0.5">
            Ana səhifəyə qayıt
          </Link>
        </div>
      </div>
    </div>
  );
}