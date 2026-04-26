// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa (Masaüstü)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaMasaustuProps {}

export function AnaSayfaMasaustu(props: AnaSayfaMasaustuProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto docked full-width top-0 bg-[#f7f9fb] dark:bg-slate-900 transition-colors duration-200">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-[#6366f1] dark:text-[#818cf8] text-2xl font-black">drag_indicator</span>
      <span className="font-['Nunito'] font-bold text-lg text-2xl font-black text-[#6366f1] dark:text-[#818cf8] tracking-tight">Sayı Sayacı</span>
      </div>
      <div className="flex items-center">
      <button aria-label="Account" className="p-2 rounded-full hover:opacity-80 transition-opacity text-[#6366f1] dark:text-[#818cf8] scale-95 active:transition-all">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>account_circle</span>
      </button>
      </div>
      </header>
      {/*  Main Content Canvas  */}
      <main className="flex-grow flex items-center justify-center p-6 relative overflow-hidden">
      {/*  Decorative Background Element (Optional, for visual flair)  */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-fixed/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      {/*  Central CounterCard  */}
      <div className="bg-surface-container-lowest rounded-xl p-10 md:p-16 max-w-md w-full relative group" style={{boxShadow: "0 20px 40px -10px rgba(70, 72, 212, 0.05)"}}>
      {/*  Asymmetric Label  */}
      <div className="absolute top-6 left-6">
      <span className="text-on-surface-variant font-label text-sm uppercase tracking-wider font-semibold">Mevcut Değer</span>
      </div>
      {/*  Counter Display  */}
      <div className="flex items-center justify-center mt-8 mb-12">
      <span className="font-display font-bold text-on-surface" style={{fontSize: "8rem", lineHeight: "1", letterSpacing: "-0.05em", color: "#191c1e"}}>0</span>
      </div>
      {/*  ActionButtons Area  */}
      <div className="flex flex-col gap-4">
      {/*  Primary Action (Artır)  */}
      <button className="w-full relative overflow-hidden rounded-lg group/btn transition-transform hover:scale-[1.02] active:scale-95 flex items-center justify-center py-4 px-6" style={{background: "linear-gradient(135deg, #4648d4 0%, #6063ee 100%)", boxShadow: "0 10px 30px -5px rgba(70, 72, 212, 0.2)"}}>
      <div className="flex items-center gap-2 relative z-10 text-on-primary">
      <span className="material-symbols-outlined font-bold">add</span>
      <span className="font-label font-semibold text-lg">Artır</span>
      </div>
      </button>
      {/*  Secondary Actions Row  */}
      <div className="flex gap-4">
      {/*  Secondary Action (Azalt)  */}
      <button className="flex-1 rounded-lg bg-surface-container-high hover:bg-surface-dim transition-colors hover:scale-[1.02] active:scale-95 flex items-center justify-center py-3 px-4 group/btn2">
      <div className="flex items-center gap-2 text-on-surface">
      <span className="material-symbols-outlined text-secondary-container">remove</span>
      <span className="font-label font-medium">Azalt</span>
      </div>
      </button>
      {/*  Tertiary Action (Sıfırla)  */}
      <button className="flex-1 rounded-lg bg-transparent border border-outline-variant/30 hover:bg-surface-container-low transition-colors hover:scale-[1.02] active:scale-95 flex items-center justify-center py-3 px-4 group/btn3">
      <div className="flex items-center gap-2 text-on-surface-variant group-hover/btn3:text-on-surface transition-colors">
      <span className="material-symbols-outlined text-outline">rotate_left</span>
      <span className="font-label font-medium">Sıfırla</span>
      </div>
      </button>
      </div>
      </div>
      {/*  Quick Add Chips  */}
      <div className="mt-8 pt-6 border-t border-surface-container-highest flex justify-center gap-3">
      <button className="px-4 py-2 bg-surface-container-high rounded-full font-label text-sm text-on-surface hover:bg-surface-dim transition-colors">+5</button>
      <button className="px-4 py-2 bg-surface-container-high rounded-full font-label text-sm text-on-surface hover:bg-surface-dim transition-colors">+10</button>
      <button className="px-4 py-2 bg-surface-container-high rounded-full font-label text-sm text-on-surface hover:bg-surface-dim transition-colors">+50</button>
      </div>
      </div>
      </main>
      {/*  BottomNavBar (Mobile Only)  */}
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-8 pt-4 md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-t-[2.5rem]" style={{boxShadow: "0 -10px 40px -15px rgba(99,102,241,0.15)"}}>
      {/*  Active Tab: Sayaç  */}
      <button className="flex flex-col items-center justify-center bg-[#6366f1]/10 text-[#6366f1] dark:text-[#818cf8] rounded-2xl px-6 py-2 transition-all duration-300 scale-110 group relative">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 1"}}>calculate</span>
      <span className="font-['Inter'] font-medium text-[10px]">Sayaç</span>
      </button>
      {/*  Inactive Tab: Geçmiş  */}
      <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-6 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all duration-200">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 0"}}>history</span>
      <span className="font-['Inter'] font-medium text-[10px]">Geçmiş</span>
      </button>
      {/*  Inactive Tab: Ayarlar  */}
      <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-6 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-2xl transition-all duration-200">
      <span className="material-symbols-outlined mb-1" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
      <span className="font-['Inter'] font-medium text-[10px]">Ayarlar</span>
      </button>
      </nav>
    </>
  );
}
