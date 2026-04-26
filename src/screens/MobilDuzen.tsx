// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Mobil Düzen
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface MobilDuzenProps {}

export function MobilDuzen(props: MobilDuzenProps) {
  return (
    <>
      {/*  Top App Bar (Mobile View)  */}
      <header className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto md:hidden sticky top-0 z-40 bg-background/80 backdrop-blur-md">
      <button className="text-[#6366f1] hover:opacity-80 transition-opacity active:scale-95 flex items-center justify-center p-2 rounded-full">
      <span className="material-symbols-outlined text-2xl">drag_indicator</span>
      </button>
      <div className="text-2xl font-black text-[#6366f1] tracking-tight font-headline">Sayı Sayacı</div>
      <button className="text-[#6366f1] hover:opacity-80 transition-opacity active:scale-95 flex items-center justify-center p-2 rounded-full">
      <span className="material-symbols-outlined text-2xl">account_circle</span>
      </button>
      </header>
      {/*  Main Content Canvas  */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 pb-32 pt-8 w-full max-w-md mx-auto space-y-8">
      {/*  Quick Add Chips  */}
      <div className="flex space-x-4 w-full justify-center">
      <button className="bg-surface-container-high text-on-surface font-label text-sm font-medium py-2 px-4 rounded-full hover:bg-surface-container-highest transition-colors active:scale-95 shadow-sm">
                      +1
                  </button>
      <button className="bg-surface-container-high text-on-surface font-label text-sm font-medium py-2 px-4 rounded-full hover:bg-surface-container-highest transition-colors active:scale-95 shadow-sm">
                      +5
                  </button>
      <button className="bg-surface-container-high text-on-surface font-label text-sm font-medium py-2 px-4 rounded-full hover:bg-surface-container-highest transition-colors active:scale-95 shadow-sm">
                      +10
                  </button>
      </div>
      {/*  The Hero Counter Card  */}
      <div className="w-full bg-surface-container-lowest rounded-3xl p-8 flex flex-col items-center justify-center relative overflow-hidden shadow-[0_20px_40px_-15px_rgba(70,72,212,0.05)] border border-outline-variant/15">
      {/*  Asymmetric Label  */}
      <span className="absolute top-6 left-6 font-label text-sm font-medium text-on-surface-variant uppercase tracking-wider">Mevcut Sayı</span>
      <div className="mt-8 mb-6 relative">
      <span className="display-font text-8xl md:text-[8rem] font-bold text-on-surface leading-none tracking-tighter">
                          42
                      </span>
      </div>
      </div>
      {/*  Action Buttons Grid (Thumb Reach)  */}
      <div className="w-full grid grid-cols-2 gap-4">
      {/*  Decrement (Azalt)  */}
      <button className="bg-surface-container-high text-on-surface-variant rounded-2xl py-6 flex flex-col items-center justify-center hover:bg-surface-container-highest transition-all active:scale-95">
      <span className="material-symbols-outlined text-3xl mb-2">remove</span>
      <span className="font-label text-sm font-semibold">Azalt</span>
      </button>
      {/*  Increment (Artır) - Primary Focus  */}
      <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-2xl py-6 flex flex-col items-center justify-center shadow-[0_15px_30px_-10px_rgba(70,72,212,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(70,72,212,0.5)] hover:scale-[1.02] transition-all active:scale-95">
      <span className="material-symbols-outlined text-4xl mb-2 font-bold">add</span>
      <span className="font-label text-base font-bold">Artır</span>
      </button>
      {/*  Reset (Sıfırla) - Spans Full Width  */}
      <button className="col-span-2 bg-transparent text-on-surface-variant rounded-2xl py-4 flex items-center justify-center hover:bg-surface-container-low transition-colors active:scale-95 mt-2 border border-outline-variant/20">
      <span className="material-symbols-outlined mr-2">refresh</span>
      <span className="font-label text-sm font-semibold">Sıfırla</span>
      </button>
      </div>
      </main>
      {/*  Bottom Navigation Bar (Mobile)  */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 bg-white/80 backdrop-blur-xl rounded-t-[2.5rem] shadow-[0_-10px_40px_-15px_rgba(99,102,241,0.15)] md:hidden">
      {/*  Tab 1: Sayaç (Active)  */}
      <a className="flex flex-col items-center justify-center bg-[#6366f1]/10 text-[#6366f1] rounded-2xl px-6 py-2 transition-all duration-300 scale-110" href="#">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>calculate</span>
      <span className="font-['Inter'] font-medium text-[10px]">Sayaç</span>
      </a>
      {/*  Tab 2: Geçmiş (Inactive)  */}
      <a className="flex flex-col items-center justify-center text-slate-400 px-6 py-2 hover:bg-slate-50 rounded-2xl transition-all" href="#">
      <span className="material-symbols-outlined mb-1">history</span>
      <span className="font-['Inter'] font-medium text-[10px]">Geçmiş</span>
      </a>
      {/*  Tab 3: Ayarlar (Inactive)  */}
      <a className="flex flex-col items-center justify-center text-slate-400 px-6 py-2 hover:bg-slate-50 rounded-2xl transition-all" href="#">
      <span className="material-symbols-outlined mb-1">settings</span>
      <span className="font-['Inter'] font-medium text-[10px]">Ayarlar</span>
      </a>
      </nav>
    </>
  );
}
