



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


import React from 'react';
import { Menu, CheckCircle2, ShieldCheck, Bell, QrCode, Search } from 'lucide-react';

export default function Topbar({ toggleSidebar, searchQuery, setSearchQuery, isCardBlocked }) {
  return (
    <header className="bg-white border-b border-slate-200 px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-3 shadow-xs sticky top-0 z-30">
      
      {/* Left controls */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <button 
          onClick={toggleSidebar}
          className="lg:hidden p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <Menu size={22} />
        </button>

        <div>
          <h2 className="text-xs sm:text-sm font-black text-slate-900 tracking-wide uppercase leading-tight">
            National Advocate Identity Card
          </h2>
          <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium hidden sm:block">
            Bar Council Verified Digital Identity Ecosystem
          </p>
        </div>
      </div>

      {/* Dynamic Search Filter Box Input */}
      <div className="relative w-full md:w-72">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search Practice Areas..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-hidden focus:border-blue-500 font-medium text-slate-700"
        />
      </div>

      {/* Right verification tags */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="hidden md:flex items-center gap-2 text-[10px] font-bold text-slate-600">
          <span className="bg-slate-50 px-2 py-1 rounded border border-slate-200 flex items-center gap-1">
            <CheckCircle2 size={12} className="text-emerald-600" /> BCI Verified
          </span>
          <span className={`px-2 py-1 rounded border flex items-center gap-1 ${
            isCardBlocked ? 'bg-red-50 text-red-600 border-red-200' : 'bg-slate-50 text-blue-600 border-slate-200'
          }`}>
            <ShieldCheck size={12} /> {isCardBlocked ? 'CARD SUSPENDED' : 'Authenticated'}
          </span>
        </div>

        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200 text-slate-500">
          <span className="text-xs font-bold text-slate-700">En/हिंदी</span>
          <Bell size={16} />
          <QrCode size={16} />
        </div>
      </div>
    </header>
  );
}