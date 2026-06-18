import React, { useState } from 'react';
import { CheckCircle, ShieldCheck, Award, CreditCard, Bell, QrCode, Menu } from 'lucide-react';

export default function Topbar({ toggleSidebar, isCardBlocked }) {
  const [currentLang, setCurrentLang] = useState('EN'); 

  return (
    <header className="bg-white border-b border-slate-200 min-h-[68px] py-2 px-4 md:px-5 flex flex-col xl:flex-row items-center justify-between gap-4 sticky top-0 z-40 shadow-2xs w-full select-none">
      
      
      <div className="flex items-center justify-between xl:justify-start gap-4 w-full xl:w-auto shrink-0">
        <div className="flex items-center gap-3">
         
          <button 
            onClick={toggleSidebar}
            className="p-1.5 -ml-1 rounded-lg hover:bg-slate-50 text-slate-500 lg:hidden transition-colors"
          >
            <Menu size={20} />
          </button>

          
          <div className="flex items-center gap-2.5 bg-emerald-50/80 border border-emerald-100 p-2 rounded-xl px-3 shadow-2xs">
            <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0">
              <CheckCircle size={15} className="fill-emerald-600 text-white" />
            </div>
            <div className="leading-tight text-left">
              <h4 className="text-xs font-bold text-emerald-800 tracking-tight">
                {isCardBlocked ? 'NFC Locked' : 'NFC Card Detected'}
              </h4>
              <p className="text-[10px] text-emerald-600 font-medium">
                {isCardBlocked ? 'Gateway Terminated' : 'Card Successfully Read'}
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="text-center space-y-0.5 max-w-2xl hidden lg:block mx-auto">
        <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-wide uppercase font-sans">
          NATIONAL ADVOCATE IDENTITY CARD (NFC)
        </h1>
        <p className="text-[10px] sm:text-[11px] text-slate-500 font-bold tracking-normal">
          Bar Council Verified – Advocate Digital Identity Ecosystem
        </p>
      </div>

      
      <div className="flex items-center justify-between xl:justify-end gap-2.5 sm:gap-4 w-full xl:w-auto overflow-x-auto pb-1 xl:pb-0 scrollbar-none shrink-0">
        
        
        <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-200/60 rounded-xl p-1.5 px-3 whitespace-nowrap">
          <ShieldCheck size={15} className="text-emerald-600 fill-emerald-50" />
          <div className="text-left text-[9px] sm:text-[10px] leading-tight">
            <span className="block text-slate-400 font-bold uppercase tracking-tight">Verified by</span>
            <span className="block text-slate-700 font-bold">Bar Council of India</span>
          </div>
        </div>

        
        <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-200/60 rounded-xl p-1.5 px-3 whitespace-nowrap">
          <Award size={15} className="text-blue-600 fill-blue-50" />
          <div className="text-left text-[9px] sm:text-[10px] leading-tight">
            <span className="block text-blue-700 font-bold tracking-wide">Digital Identity</span>
            <span className="block text-slate-400 font-bold uppercase tracking-tight">Authenticated</span>
          </div>
        </div>

        
        <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-200/60 rounded-xl p-1.5 px-3 whitespace-nowrap">
          <CreditCard size={15} className={isCardBlocked ? 'text-red-600' : 'text-emerald-600'} />
          <div className="text-left text-[9px] sm:text-[10px] leading-tight">
            <span className="block text-slate-400 font-bold uppercase tracking-tight">Card Status</span>
            <span className={`block font-extrabold ${isCardBlocked ? 'text-red-600' : 'text-emerald-600'}`}>
              {isCardBlocked ? 'Inactive' : 'Active'}
            </span>
          </div>
        </div>

      
        <button 
          onClick={() => setCurrentLang(prev => prev === 'EN' ? 'HI' : 'EN')}
          className="bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all rounded-xl px-2.5 py-2 text-[10px] font-bold text-slate-700 whitespace-nowrap flex items-center justify-center min-w-[54px] active:scale-95 shadow-3xs"
        >
          {currentLang === 'EN' ? 'En / हिंदी' : 'हिंदी / En'}
        </button>

        
        <div className="relative shrink-0 cursor-pointer p-2 hover:bg-slate-50 rounded-full transition-colors group">
          <Bell size={18} className="text-slate-600 group-hover:text-slate-900" />
          <span className="absolute top-1 right-1 bg-red-500 border border-white text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center font-mono shadow-xs transform scale-100 transition-transform group-hover:scale-105">
            1
          </span>
        </div>

       
        <button 
          onClick={() => alert("Initializing cryptographic matrix security camera scanner...")}
          className="flex flex-col items-center justify-center text-slate-600 hover:text-blue-600 transition-colors p-1 shrink-0 group select-none"
        >
          <QrCode size={18} className="group-hover:scale-105 transition-transform" />
          <span className="text-[8px] font-black uppercase tracking-tighter mt-0.5 text-slate-400 group-hover:text-blue-600">
            Scan QR
          </span>
        </button>

      </div>
    </header>
  );
}