



// import React from 'react';
// import { Menu, CheckCircle2, ShieldCheck, Bell, QrCode } from 'lucide-react';

// export default function Topbar({ toggleSidebar }) {
//   return (
//     <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between shadow-xs sticky top-0 z-30">
      
      
//       <div className="flex items-center gap-3">
        
//         <button 
//           onClick={toggleSidebar}
//           className="lg:hidden p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
//         >
//           <Menu size={22} />
//         </button>

//         <div>
//           <h2 className="text-xs sm:text-sm font-black text-slate-900 tracking-wide uppercase leading-tight">
//             National Advocate Identity Card
//           </h2>
//           <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium hidden sm:block">
//             Bar Council Verified Digital Identity Ecosystem
//           </p>
//         </div>
//       </div>

      
//       <div className="flex items-center gap-3">
//         <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-slate-600">
//           <span className="bg-slate-50 px-2 py-1 rounded border border-slate-200 flex items-center gap-1">
//             <CheckCircle2 size={12} className="text-emerald-600" /> BCI Verified
//           </span>
//           <span className="bg-slate-50 px-2 py-1 rounded border border-slate-200 flex items-center gap-1">
//             <ShieldCheck size={12} className="text-blue-600" /> Authenticated
//           </span>
//         </div>

//         <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200 text-slate-500">
//           <span className="text-xs font-bold text-slate-700 cursor-pointer hover:text-blue-600">En/हिंदी</span>
//           <Bell size={16} className="cursor-pointer hover:text-slate-800" />
//           <QrCode size={16} className="cursor-pointer hover:text-slate-800" />
//         </div>
//       </div>
//     </header>
//   );
// }


// import React from 'react';
// import { Menu, CheckCircle2, ShieldCheck, Bell, QrCode, Search } from 'lucide-react';

// export default function Topbar({ toggleSidebar, searchQuery, setSearchQuery, isCardBlocked }) {
//   return (
//     <header className="bg-white border-b border-slate-200 px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 shadow-xs sticky top-0 z-30">
      
//       {/* Left controls */}
//       <div className="flex items-center gap-3 w-full md:w-auto">
//         <button 
//           onClick={toggleSidebar}
//           className="lg:hidden p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
//         >
//           <Menu size={22} />
//         </button>

//         <div>
//           <h2 className="text-xs sm:text-sm font-black text-slate-900 tracking-wide uppercase leading-tight">
//             National Advocate Identity Card
//           </h2>
//           <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium hidden sm:block">
//             Bar Council Verified Digital Identity Ecosystem
//           </p>
//         </div>
//       </div>

//       {/* Dynamic Search Filter Box Input */}
//       <div className="relative w-full md:w-72">
//         <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
//         <input 
//           type="text" 
//           placeholder="Search Practice Areas..." 
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-500 font-medium text-slate-700"
//         />
//       </div>

//       {/* Right verification tags */}
//       <div className="flex items-center gap-3 shrink-0">
//         <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-slate-600">
//           <span className="bg-slate-50 px-2 py-1 rounded border border-slate-200 flex items-center gap-1">
//             <CheckCircle2 size={12} className="text-emerald-600" /> BCI Verified
//           </span>
//           <span className={`px-2 py-1 rounded border flex items-center gap-1 ${
//             isCardBlocked ? 'bg-red-50 text-red-600 border-red-200' : 'bg-slate-50 text-blue-600 border-slate-200'
//           }`}>
//             <ShieldCheck size={12} /> {isCardBlocked ? 'CARD SUSPENDED' : 'Authenticated'}
//           </span>
//         </div>

//         <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200 text-slate-500">
//           <span className="text-xs font-bold text-slate-700">En/हिंदी</span>
//           <Bell size={16} />
//           <QrCode size={16} />
//         </div>
//       </div>
//     </header>
//   );
// }



import React, { useState } from 'react';
import { CheckCircle, ShieldCheck, Award, CreditCard, Bell, QrCode, Menu } from 'lucide-react';

export default function Topbar({ toggleSidebar, isCardBlocked }) {
  const [currentLang, setCurrentLang] = useState('EN'); // EN or HI tracking node

  return (
    <header className="bg-white border-b border-slate-200 min-h-[68px] py-2 px-4 md:px-5 flex flex-col xl:flex-row items-center justify-between gap-4 sticky top-0 z-40 shadow-2xs w-full select-none">
      
      {/* LEFT SECTION: REAL-TIME TERMINAL NFC ACCESS BADGE */}
      <div className="flex items-center justify-between xl:justify-start gap-4 w-full xl:w-auto shrink-0">
        <div className="flex items-center gap-3">
          {/* Responsive Mobile Drawer Sidebar Trigger */}
          <button 
            onClick={toggleSidebar}
            className="p-1.5 -ml-1 rounded-lg hover:bg-slate-50 text-slate-500 lg:hidden transition-colors"
          >
            <Menu size={20} />
          </button>

          {/* NFC Hardware Status Block matching image_e3a081.png */}
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

      {/* CENTER SECTION: AUTHENTIC NATIONAL SYSTEM HEADLINE BRAND DECK */}
      <div className="text-center space-y-0.5 max-w-2xl hidden lg:block mx-auto">
        <h1 className="text-base sm:text-lg font-black text-slate-900 tracking-wide uppercase font-sans">
          NATIONAL ADVOCATE IDENTITY CARD (NFC)
        </h1>
        <p className="text-[10px] sm:text-[11px] text-slate-500 font-bold tracking-normal">
          Bar Council Verified – Advocate Digital Identity Ecosystem
        </p>
      </div>

      {/* RIGHT SECTION: MULTI-BADGE VERIFICATION REGISTRY TERMINAL ROWS */}
      <div className="flex items-center justify-between xl:justify-end gap-2.5 sm:gap-4 w-full xl:w-auto overflow-x-auto pb-1 xl:pb-0 scrollbar-none shrink-0">
        
        {/* 1. Bar Council Verification Token */}
        <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-200/60 rounded-xl p-1.5 px-3 whitespace-nowrap">
          <ShieldCheck size={15} className="text-emerald-600 fill-emerald-50" />
          <div className="text-left text-[9px] sm:text-[10px] leading-tight">
            <span className="block text-slate-400 font-bold uppercase tracking-tight">Verified by</span>
            <span className="block text-slate-700 font-bold">Bar Council of India</span>
          </div>
        </div>

        {/* 2. Digital Identity Status Token */}
        <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-200/60 rounded-xl p-1.5 px-3 whitespace-nowrap">
          <Award size={15} className="text-blue-600 fill-blue-50" />
          <div className="text-left text-[9px] sm:text-[10px] leading-tight">
            <span className="block text-blue-700 font-bold tracking-wide">Digital Identity</span>
            <span className="block text-slate-400 font-bold uppercase tracking-tight">Authenticated</span>
          </div>
        </div>

        {/* 3. Dynamic Card Hardware Status Badge */}
        <div className="flex items-center gap-2 bg-slate-50/80 border border-slate-200/60 rounded-xl p-1.5 px-3 whitespace-nowrap">
          <CreditCard size={15} className={isCardBlocked ? 'text-red-600' : 'text-emerald-600'} />
          <div className="text-left text-[9px] sm:text-[10px] leading-tight">
            <span className="block text-slate-400 font-bold uppercase tracking-tight">Card Status</span>
            <span className={`block font-extrabold ${isCardBlocked ? 'text-red-600' : 'text-emerald-600'}`}>
              {isCardBlocked ? 'Inactive' : 'Active'}
            </span>
          </div>
        </div>

        {/* 4. Compact Non-Wrapping Language Toggle Selector */}
        <button 
          onClick={() => setCurrentLang(prev => prev === 'EN' ? 'HI' : 'EN')}
          className="bg-slate-50 border border-slate-200 hover:bg-slate-100 hover:border-slate-300 transition-all rounded-xl px-2.5 py-2 text-[10px] font-bold text-slate-700 whitespace-nowrap flex items-center justify-center min-w-[54px] active:scale-95 shadow-3xs"
        >
          {currentLang === 'EN' ? 'En / हिंदी' : 'हिंदी / En'}
        </button>

        {/* 5. Notification Bell with Count Badge '5' */}
        <div className="relative shrink-0 cursor-pointer p-2 hover:bg-slate-50 rounded-full transition-colors group">
          <Bell size={18} className="text-slate-600 group-hover:text-slate-900" />
          <span className="absolute top-1 right-1 bg-red-500 border border-white text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center font-mono shadow-xs transform scale-100 transition-transform group-hover:scale-105">
            1
          </span>
        </div>

        {/* 6. Scan QR Grid Module Action */}
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