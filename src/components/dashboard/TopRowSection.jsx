// // // import React from 'react';
// // // import CardWrapper from '../ui/CardWrapper';
// // // import { 
// // //   CheckCircle, UserCheck, Scale, Award, ShieldAlert,
// // //   UserCheck2, Landmark, Shield, User, FileText, Wifi
// // // } from 'lucide-react';

// // // export default function TopRowSection() {
// // //   return (
// // //     <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 items-stretch">
      
      
// // //       <CardWrapper title="Advocate Profile">
// // //         <div className="flex flex-col h-full justify-between">
// // //           <div className="flex gap-4 items-start">
// // //             <div className="relative">
// // //               <div className="w-20 h-20 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden">
                
// // //                 <User size={40} className="text-slate-400" />
// // //               </div>
// // //               <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
// // //                 Active
// // //               </span>
// // //             </div>
            
// // //             <div className="space-y-1">
// // //               <div className="flex items-center gap-1">
// // //                 <h4 className="text-sm font-bold text-slate-900">Adv. Rohit Sharma</h4>
// // //                 <CheckCircle size={14} className="text-blue-500 fill-blue-500 text-white" />
// // //               </div>
// // //               <p className="text-[11px] text-slate-500 font-medium">Enrollment No. <span className="font-bold text-slate-700">MH/4789/2012</span></p>
// // //               <p className="text-[11px] text-slate-500 font-medium">Bar Council Reg. No. <span className="font-bold text-slate-700">M/12345/2012</span></p>
// // //               <div className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded inline-block font-medium">
// // //                 State Bar Council: Maharashtra Bar Council
// // //               </div>
// // //             </div>
// // //           </div>

          
// // //           <div className="grid grid-cols-4 gap-1 border-t border-slate-100 pt-3 mt-4 text-center">
// // //             <div className="p-1 hover:bg-slate-50 rounded">
// // //               <p className="text-[9px] text-slate-400 font-bold uppercase">Practice Since</p>
// // //               <p className="text-xs font-bold text-slate-800">2012</p>
// // //             </div>
// // //             <div className="p-1 hover:bg-slate-50 rounded">
// // //               <p className="text-[9px] text-slate-400 font-bold uppercase">Experience</p>
// // //               <p className="text-xs font-bold text-slate-800">12+ Years</p>
// // //             </div>
// // //             <div className="p-1 hover:bg-slate-50 rounded">
// // //               <p className="text-[9px] text-slate-400 font-bold uppercase">Enrollment Date</p>
// // //               <p className="text-[10px] font-bold text-slate-800">15 Aug 2012</p>
// // //             </div>
// // //             <div className="p-1 hover:bg-slate-50 rounded">
// // //               <p className="text-[9px] text-slate-400 font-bold uppercase">Renewal Valid</p>
// // //               <p className="text-[10px] font-bold text-amber-600">31 Dec 2025</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </CardWrapper>

      
// // //       <CardWrapper title="Professional Classification">
// // //         <div className="grid grid-cols-2 gap-2 h-full">
// // //           {[
// // //             { label: 'Advocate Enrolled', active: true, icon: UserCheck2, color: 'text-amber-600 bg-amber-50 border-amber-200' },
// // //             { label: 'Senior Advocate', active: false, status: 'Not Enrolled', icon: Award, color: 'text-slate-400 bg-slate-50 border-slate-100' },
// // //             { label: 'Advocate-on-Record', active: true, status: 'Eligible', icon: Scale, color: 'text-blue-600 bg-blue-50 border-blue-200' },
// // //             { label: 'Law Officer', active: true, status: 'Registered', icon: Landmark, color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
// // //             { label: 'Government Counsel', active: true, status: 'Registered', icon: FileText, color: 'text-sky-600 bg-sky-50 border-sky-200' },
// // //             { label: 'Public Prosecutor', active: false, status: 'Not Registered', icon: Shield, color: 'text-slate-400 bg-slate-50 border-slate-100' },
// // //             { label: 'Legal Consultant', active: true, status: 'Registered', icon: User, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
// // //             { label: 'Corporate Counsel', active: true, status: 'Registered', icon: ShieldAlert, color: 'text-teal-600 bg-teal-50 border-teal-200' },
// // //           ].map((item, idx) => {
// // //             const IconComponent = item.icon;
// // //             return (
// // //               <div key={idx} className={`p-2 rounded-lg border flex flex-col items-center text-center justify-center transition-all ${item.color}`}>
// // //                 <IconComponent size={16} className="mb-1" />
// // //                 <p className="text-[10px] font-bold leading-tight text-slate-800">{item.label}</p>
// // //                 <p className="text-[9px] font-semibold opacity-80">{item.status || 'Verified'}</p>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </CardWrapper>

      
// // //       <CardWrapper title="Bar Council Verification" badge="Verified">
// // //         <div className="space-y-2 text-xs">
// // //           {[
// // //             { label: 'Bar Council Verification', status: 'Verified', color: 'text-emerald-600' },
// // //             { label: 'Enrollment Date', status: '15 Aug 2012', color: 'text-slate-700' },
// // //             { label: 'License Validity', status: '31 Dec 2025', color: 'text-slate-700 font-bold' },
// // //             { label: 'Renewal Status', status: 'Up To Date', color: 'text-emerald-600 font-semibold' },
// // //             { label: 'Continuing Legal Education', status: 'Completed', color: 'text-blue-600' },
// // //             { label: 'Disciplinary Record', status: 'No Record Found', color: 'text-emerald-600' },
// // //           ].map((row, idx) => (
// // //             <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0">
// // //               <div className="flex items-center gap-2 text-slate-600">
// // //                 <CheckCircle size={14} className="text-emerald-500 fill-emerald-50" />
// // //                 <span>{row.label}</span>
// // //               </div>
// // //               <span className={`text-[11px] font-medium ${row.color}`}>{row.status}</span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </CardWrapper>

      
// // //       <CardWrapper title="NFC Identity Card">
    
// // //         <div className="bg-gradient-to-br from-[#0b1936] to-[#122e63] rounded-xl p-3 text-white border border-slate-700 relative overflow-hidden shadow-md flex flex-col justify-between h-full min-h-[160px]">
// // //           {/* Accent Glow Lines */}
// // //           <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
          
// // //           <div className="flex justify-between items-start">
// // //             <div>
// // //               <p className="text-[9px] font-extrabold tracking-widest text-blue-400 uppercase">Advocate Identity Card</p>
// // //               <h5 className="text-xs font-bold tracking-wide mt-1">ADV. ROHIT SHARMA</h5>
// // //               <p className="text-[9px] text-slate-300">MH/4789/2012</p>
// // //             </div>
// // //             <div className="text-blue-400">
// // //               <Wifi size={18} className="rotate-90" />
// // //             </div>
// // //           </div>

// // //           <div className="grid grid-cols-2 gap-2 mt-4 text-[9px] border-t border-white/10 pt-2 text-slate-300">
// // //             <div>
// // //               <p className="text-slate-400 font-semibold">Card ID</p>
// // //               <p className="font-mono text-white">AIC-IND-2025-123456</p>
// // //               <p className="text-slate-400 font-semibold mt-1">Card Status</p>
// // //               <p className="text-emerald-400 font-bold">Active</p>
// // //             </div>
// // //             <div>
// // //               <p className="text-slate-400 font-semibold">Card Type</p>
// // //               <p className="text-white">NFC + QR Hybrid</p>
// // //               <p className="text-slate-400 font-semibold mt-1">Expiry Date</p>
// // //               <p className="text-amber-400 font-bold">31 Dec 2025</p>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </CardWrapper>

// // //     </div>
// // //   );
// // // }




// // import React from 'react';
// // import CardWrapper from '../ui/CardWrapper';
// // import { CheckCircle, Award, Scale, Landmark, FileText, Shield, User, ShieldAlert, Wifi, ShieldX } from 'lucide-react';

// // export default function TopRowSection({ isCardBlocked }) {
// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
      
// //       {/* 1. ADVOCATE PROFILE BLOCK */}
// //       <CardWrapper title="Advocate Profile">
// //         <div className="flex flex-col h-full justify-between">
// //           <div className="flex gap-4 items-start">
// //             <div className="relative">
// //               <div className="w-20 h-20 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden">
// //                 <User size={40} className="text-slate-400" />
// //               </div>
// //               <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
// //                 isCardBlocked ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'
// //               }`}>
// //                 {isCardBlocked ? 'Suspended' : 'Active'}
// //               </span>
// //             </div>
            
// //             <div className="space-y-1">
// //               <div className="flex items-center gap-1">
// //                 <h4 className="text-sm font-bold text-slate-900">Adv. Rohit Sharma</h4>
// //                 {!isCardBlocked && <CheckCircle size={14} className="text-blue-500 fill-blue-500 text-white" />}
// //               </div>
// //               <p className="text-[11px] text-slate-500 font-medium">Enrollment: <span className="font-bold text-slate-700">MH/4789/2012</span></p>
// //               <div className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded inline-block font-medium">
// //                 Maharashtra Bar Council
// //               </div>
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-4 gap-1 border-t border-slate-100 pt-3 mt-4 text-center">
// //             <div>
// //               <p className="text-[9px] text-slate-400 font-bold uppercase">Practice</p>
// //               <p className="text-xs font-bold text-slate-800">2012</p>
// //             </div>
// //             <div>
// //               <p className="text-[9px] text-slate-400 font-bold uppercase">Exp.</p>
// //               <p className="text-xs font-bold text-slate-800">12+ Yrs</p>
// //             </div>
// //             <div>
// //               <p className="text-[9px] text-slate-400 font-bold uppercase">Enroll Date</p>
// //               <p className="text-[10px] font-bold text-slate-800">15 Aug 12</p>
// //             </div>
// //             <div>
// //               <p className="text-[9px] text-slate-400 font-bold uppercase">Validity</p>
// //               <p className={`text-[10px] font-bold ${isCardBlocked ? 'text-red-600 line-through' : 'text-amber-600'}`}>31 Dec 25</p>
// //             </div>
// //           </div>
// //         </div>
// //       </CardWrapper>

// //       {/* 2. PROFESSIONAL CLASSIFICATION */}
// //       <CardWrapper title="Professional Classification">
// //         <div className="grid grid-cols-2 gap-2 h-full">
// //           {[
// //             { label: 'Advocate Enrolled', active: !isCardBlocked, icon: CheckCircle, color: 'text-amber-600 bg-amber-50' },
// //             { label: 'Senior Advocate', active: false, status: 'Not Enrolled', icon: Award, color: 'text-slate-400 bg-slate-50' },
// //             { label: 'Advocate-on-Record', active: !isCardBlocked, status: 'Eligible', icon: Scale, color: 'text-blue-600 bg-blue-50' },
// //             { label: 'Law Officer', active: !isCardBlocked, status: 'Registered', icon: Landmark, color: 'text-emerald-600 bg-emerald-50' },
// //           ].map((item, idx) => {
// //             const IconComponent = item.icon;
// //             return (
// //               <div key={idx} className={`p-2 rounded-lg border flex flex-col items-center text-center justify-center ${item.color} border-slate-100`}>
// //                 <IconComponent size={14} className="mb-1" />
// //                 <p className="text-[10px] font-bold text-slate-800 leading-tight">{item.label}</p>
// //                 <p className="text-[9px] font-semibold opacity-70">{item.status || (isCardBlocked ? 'Suspended' : 'Verified')}</p>
// //               </div>
// //             );
// //           })}
// //         </div>
// //       </CardWrapper>

// //       {/* 3. BAR COUNCIL VERIFICATION */}
// //       <CardWrapper title="Bar Council Verification" badge={isCardBlocked ? "Suspended" : "Verified"}>
// //         <div className="space-y-1.5 text-xs">
// //           {[
// //             { label: 'Status', status: isCardBlocked ? 'Suspended' : 'Verified', color: isCardBlocked ? 'text-red-600' : 'text-emerald-600' },
// //             { label: 'License Validity', status: '31 Dec 2025', color: 'text-slate-700' },
// //             { label: 'Disciplinary Record', status: isCardBlocked ? 'Action Pending' : 'Clear', color: isCardBlocked ? 'text-red-500 font-bold' : 'text-emerald-600' },
// //           ].map((row, idx) => (
// //             <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0">
// //               <span className="text-slate-500 font-medium">{row.label}</span>
// //               <span className={`text-[11px] font-bold ${row.color}`}>{row.status}</span>
// //             </div>
// //           ))}
// //         </div>
// //       </CardWrapper>

// //       {/* 4. DIGITAL NFC IDENTITY CARD */}
// //       <CardWrapper title="NFC Identity Card">
// //         <div className={`rounded-xl p-3 text-white border relative overflow-hidden shadow-md flex flex-col justify-between h-full min-h-[140px] transition-all duration-500 ${
// //           isCardBlocked 
// //             ? 'from-[#3a0f12] to-[#5c1319] border-red-900 shadow-red-900/20' 
// //             : 'from-[#0b1936] to-[#122e63] border-slate-700'
// //         }`}>
// //           <div className="flex justify-between items-start z-10">
// //             <div>
// //               <p className={`text-[8px] font-extrabold tracking-widest uppercase ${isCardBlocked ? 'text-red-400' : 'text-blue-400'}`}>
// //                 {isCardBlocked ? 'CARD SYSTEM LOCKED' : 'Advocate Identity Card'}
// //               </p>
// //               <h5 className="text-xs font-bold tracking-wide mt-1">ADV. ROHIT SHARMA</h5>
// //               <p className="text-[9px] text-slate-300 font-mono">MH/4789/2012</p>
// //             </div>
// //             <div className={isCardBlocked ? 'text-red-400' : 'text-blue-400'}>
// //               {isCardBlocked ? <ShieldX size={18} className="animate-pulse" /> : <Wifi size={18} className="rotate-90" />}
// //             </div>
// //           </div>

// //           <div className="grid grid-cols-2 gap-2 text-[9px] border-t border-white/10 pt-2 text-slate-300 z-10">
// //             <div>
// //               <p className="text-white/60 font-medium">Status</p>
// //               <p className={`font-bold ${isCardBlocked ? 'text-red-400' : 'text-emerald-400'}`}>
// //                 {isCardBlocked ? 'BLOCKED' : 'ACTIVE'}
// //               </p>
// //             </div>
// //             <div>
// //               <p className="text-white/60 font-medium">Security Level</p>
// //               <p className="text-white font-bold">{isCardBlocked ? 'TERMINATED' : 'HIGH'}</p>
// //             </div>
// //           </div>
// //         </div>
// //       </CardWrapper>

// //     </div>
// //   );
// // }



// // ------------------------------------------
// import React from 'react';
// import CardWrapper from '../ui/CardWrapper';
// import { CheckCircle, Award, Scale, Landmark, User, Wifi, ShieldX, QrCode } from 'lucide-react';

// export default function TopRowSection({ isCardBlocked }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
      
//       {/* baki ke teeno wrappers yahan pehle jaise hi rahenge (Advocate Profile, Classification, Verification)... */}
//       {/* ... Unhe same rkhna hai, bas 4th Card wrapper ko niche se completely replace karein ... */}

//       {/* 4. REALISTIC SMART DIGITAL NFC IDENTITY CARD BLOCK */}
//       <CardWrapper title="NFC Identity Card">
//         <div className="flex flex-col h-full justify-between">
          
//           {/* Main Visual Physical Smart Card container matching image_0c19e9.png */}
//           <div className={`w-full aspect-[1.586/1] rounded-2xl p-4 text-white relative overflow-hidden shadow-md flex flex-col justify-between transition-all duration-500 bg-linear-to-br tracking-wide select-none ${
//             isCardBlocked 
//               ? 'from-[#3a0a0d] via-[#5c1318] to-[#240507] border border-red-800 shadow-red-900/30' 
//               : 'from-[#06163a] via-[#0f2d6b] to-[#0a1b40] border border-slate-800 shadow-blue-950/40'
//           }`}>
            
//             {/* Holographic Subtle Waves Background effect */}
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />
            
//             {/* Top Row: System Brand and Contactless Wave Signal */}
//             <div className="flex justify-between items-start w-full z-10">
//               <div className="flex items-center gap-2">
//                 <div className="border border-white/20 p-1 rounded bg-white/5">
//                   <Landmark size={14} className={isCardBlocked ? 'text-red-400' : 'text-blue-300'} />
//                 </div>
//                 <div>
//                   <h5 className="text-[10px] font-black tracking-widest text-white leading-none uppercase">Advocate</h5>
//                   <p className="text-[7px] text-white/60 tracking-wider font-semibold uppercase mt-0.5">Identity Card</p>
//                 </div>
//               </div>
              
//               {/* NFC Contactless Wave Indicator matching image_0c19e9.png */}
//               <div className={isCardBlocked ? 'text-red-400/40' : 'text-white/80'}>
//                 <Wifi size={18} className="rotate-90 transform" />
//               </div>
//             </div>

//             {/* Middle Row: Gold EMV Chip, Center Photo, and Dynamic QR Code Container */}
//             <div className="grid grid-cols-3 items-center w-full my-1 z-10 gap-2">
              
//               {/* Left Column: Metallic Gold Smart Chip Design */}
//               <div className="flex justify-start">
//                 <div className="w-9 h-7 rounded-md bg-linear-to-br from-[#ffe082] via-[#ffd54f] to-[#b58d15] relative p-1 shadow-inner border border-[#d4af37]/40 overflow-hidden flex flex-col justify-between">
//                   {/* Subtle EMV chip layout grids */}
//                   <div className="w-full h-[1px] bg-black/10 absolute top-1/2 left-0" />
//                   <div className="w-[1px] h-full bg-black/10 absolute left-1/3 top-0" />
//                   <div className="w-[1px] h-full bg-black/10 absolute left-2/3 top-0" />
//                   <div className="w-3 h-3 rounded-xs border border-black/5 mx-auto bg-amber-400/20 z-10" />
//                 </div>
//               </div>

//               {/* Center Column: Circular Profile Avatar matching image_0c19e9.png */}
//               <div className="flex justify-center">
//                 <div className={`w-14 h-14 rounded-full border-2 bg-slate-200/90 flex items-center justify-center overflow-hidden shadow-sm relative ${
//                   isCardBlocked ? 'border-red-500/60' : 'border-white'
//                 }`}>
//                   <User size={32} className="text-slate-500 mt-2" />
//                   {isCardBlocked && (
//                     <div className="absolute inset-0 bg-red-950/40 flex items-center justify-center">
//                       <ShieldX size={16} className="text-red-400 animate-pulse" />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Right Column: Dynamic Interactive QR Code */}
//               <div className="flex justify-end">
//                 <div 
//                   onClick={() => alert(isCardBlocked ? "Verification terminated. This ID is blocked." : "Secure Hash Token Verified: AIC-IND-789234")}
//                   className="w-11 h-11 bg-white p-1 rounded-md shadow-sm cursor-pointer hover:scale-105 transition-transform flex items-center justify-center"
//                 >
//                   <QrCode size={36} className={isCardBlocked ? 'text-red-900' : 'text-slate-900'} />
//                 </div>
//               </div>

//             </div>

//             {/* Bottom Row: User Profile Credentials Details */}
//             <div className="w-full z-10 flex justify-between items-end border-t border-white/10 pt-1.5">
//               <div className="text-left">
//                 <h6 className="text-[11px] font-black tracking-wide text-white leading-tight uppercase">Adv. Rohit Sharma</h6>
//                 <p className="text-[8px] text-white/70 font-mono tracking-normal mt-0.5">MH/4789/2012</p>
//               </div>
//               <div className="text-right">
//                 <span className={`text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider ${
//                   isCardBlocked ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'
//                 }`}>
//                   {isCardBlocked ? 'Blocked' : 'NFC Active'}
//                 </span>
//               </div>
//             </div>

//           </div>

//           {/* Core Card Specs Fields underneath the physical design layout matching initial screen mapping */}
//           <div className="grid grid-cols-2 gap-2 mt-3 text-[11px] border-t border-slate-100 pt-2 font-medium">
//             <div>
//               <p className="text-slate-400 font-bold uppercase text-[9px]">Card ID</p>
//               <p className="font-mono text-slate-700 truncate">AIC-IND-2025-123456</p>
//               <p className="text-slate-400 font-bold uppercase text-[9px] mt-1.5">Card Status</p>
//               <p className={`font-extrabold ${isCardBlocked ? 'text-red-600' : 'text-emerald-600'}`}>
//                 {isCardBlocked ? 'Suspended' : 'Active + Hybrid'}
//               </p>
//             </div>
//             <div>
//               <p className="text-slate-400 font-bold uppercase text-[9px]">Card Type</p>
//               <p className="text-slate-700">NFC + QR Hybrid</p>
//               <p className="text-slate-400 font-bold uppercase text-[9px] mt-1.5">Security Clearance</p>
//               <p className="text-slate-700 font-bold">{isCardBlocked ? 'Revoked' : 'Level High'}</p>
//             </div>
//           </div>

//         </div>
//       </CardWrapper>

//     </div>
//   );
// }

import React from 'react';
import CardWrapper from '../ui/CardWrapper';
import { 
  CheckCircle, Award, Scale, Landmark, FileText, 
  Shield, User, ShieldAlert, Wifi, ShieldX, QrCode 
} from 'lucide-react';

export default function TopRowSection({ isCardBlocked }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
      
      {/* 1. ADVOCATE PROFILE BLOCK */}
      <CardWrapper title="Advocate Profile">
        <div className="flex flex-col h-full justify-between">
          <div className="flex gap-4 items-start">
            <div className="relative shrink-0">
              <div className="w-20 h-24 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden">
                {/* Standard user avatar wrapper resembling image_0c073a.png */}
                <User size={44} className="text-slate-400 mt-4" />
              </div>
              <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] px-2.5 py-0.5 rounded-sm font-bold uppercase tracking-wider shadow-xs ${
                isCardBlocked ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'
              }`}>
                {isCardBlocked ? 'Suspended' : 'Active'}
              </span>
            </div>
            
            <div className="space-y-1 min-w-0">
              <div className="flex items-center gap-1.5 flex-wrap">
                <h4 className="text-sm font-black text-slate-900 truncate">Adv. Rohit Sharma</h4>
                {!isCardBlocked && (
                  <CheckCircle size={14} className="text-blue-500 fill-blue-500 text-white shrink-0" />
                )}
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                Enrollment No. <span className="font-bold text-slate-700 block sm:inline">MH/4789/2012</span>
              </p>
              <p className="text-[11px] text-slate-500 font-medium">
                Bar Council Reg. No. <span className="font-bold text-slate-700 block sm:inline">M/12345/2012</span>
              </p>
              <p className="text-[10px] text-slate-400 font-bold leading-tight mt-1">
                State Bar Council: <span className="text-slate-600">Maharashtra Bar Council</span>
              </p>
            </div>
          </div>

          {/* Quick Metrics Grid Bottom Footer Row */}
          <div className="grid grid-cols-4 gap-1 border-t border-slate-100 pt-3 mt-4 text-center text-[10px]">
            <div className="min-w-0">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Practice Since</p>
              <p className="font-black text-slate-800 mt-0.5">2012</p>
            </div>
            <div className="min-w-0">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Experience</p>
              <p className="font-black text-slate-800 mt-0.5">12+ Years</p>
            </div>
            <div className="min-w-0">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Enroll Date</p>
              <p className="font-bold text-slate-800 mt-0.5 whitespace-nowrap">15 Aug 2012</p>
            </div>
            <div className="min-w-0">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Renewal Valid</p>
              <p className={`font-black mt-0.5 ${isCardBlocked ? 'text-red-600 line-through' : 'text-amber-600'}`}>
                31 Dec 2025
              </p>
            </div>
          </div>
        </div>
      </CardWrapper>

      {/* 2. PROFESSIONAL CLASSIFICATION BLOCK */}
      <CardWrapper title="Professional Classification">
        <div className="grid grid-cols-4 gap-1.5 h-full content-between">
          {[
            { label: 'Advocate', sub: 'Enrolled', active: !isCardBlocked, icon: User, color: 'text-amber-600 bg-amber-50/60 border-amber-100' },
            { label: 'Senior Advocate', sub: 'Not Enrolled', active: false, icon: Award, color: 'text-slate-400 bg-slate-50 border-slate-100' },
            { label: 'Advocate-on-Record', sub: 'Eligible', active: !isCardBlocked, icon: Scale, color: 'text-blue-600 bg-blue-50/60 border-blue-100' },
            { label: 'Law Officer', sub: 'Registered', active: !isCardBlocked, icon: Landmark, color: 'text-emerald-600 bg-emerald-50/60 border-emerald-100' },
            { label: 'Government Counsel', sub: 'Registered', active: !isCardBlocked, icon: FileText, color: 'text-sky-600 bg-sky-50/60 border-sky-100' },
            { label: 'Public Prosecutor', sub: 'Not Registered', active: false, icon: Shield, color: 'text-slate-400 bg-slate-50 border-slate-100' },
            { label: 'Legal Consultant', sub: 'Registered', active: !isCardBlocked, icon: User, color: 'text-indigo-600 bg-indigo-50/60 border-indigo-100' },
            { label: 'Corporate Counsel', sub: 'Registered', active: !isCardBlocked, icon: ShieldAlert, color: 'text-teal-600 bg-teal-50/60 border-teal-100' },
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className={`p-1.5 rounded-lg border flex flex-col items-center text-center justify-center transition-all ${item.color}`}
              >
                <IconComponent size={14} className="mb-0.5" />
                <p className="text-[9px] font-black leading-tight text-slate-800 tracking-tight truncate w-full">{item.label}</p>
                <p className="text-[8px] font-bold opacity-80 mt-0.5 truncate w-full">
                  {isCardBlocked && item.active ? 'Suspended' : item.sub}
                </p>
              </div>
            );
          })}
        </div>
      </CardWrapper>

      {/* 3. BAR COUNCIL VERIFICATION CHECKLIST */}
      <CardWrapper title="Bar Council Verification" badge={isCardBlocked ? "Suspended" : "Verified"}>
        <div className="space-y-1.5 text-xs h-full flex flex-col justify-between">
          {[
            { label: 'Bar Council Verification', status: isCardBlocked ? 'Suspended' : 'Verified', color: isCardBlocked ? 'text-red-600 font-bold' : 'text-emerald-600 font-bold' },
            { label: 'Enrollment Date', status: '15 Aug 2012', color: 'text-slate-700' },
            { label: 'License Validity', status: '31 Dec 2025', color: isCardBlocked ? 'text-slate-400 line-through' : 'text-slate-700 font-bold' },
            { label: 'Renewal Status', status: isCardBlocked ? 'Hold' : 'Up To Date', color: isCardBlocked ? 'text-red-500' : 'text-emerald-600 font-semibold' },
            { label: 'Continuing Legal Education', status: isCardBlocked ? 'Suspended' : 'Completed', color: isCardBlocked ? 'text-slate-400' : 'text-blue-600' },
            { label: 'Disciplinary Record', status: isCardBlocked ? 'Review Pending' : 'No Record Found', color: isCardBlocked ? 'text-amber-600' : 'text-emerald-600' },
          ].map((row, idx) => (
            <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0 text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-500 min-w-0">
                <CheckCircle size={12} className={`shrink-0 ${isCardBlocked ? 'text-slate-300' : 'text-emerald-500 fill-emerald-50'}`} />
                <span className="truncate">{row.label}</span>
              </div>
              <span className={`text-[10px] font-medium shrink-0 pl-2 ${row.color}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </CardWrapper>

      {/* 4. REALISTIC SMART DIGITAL NFC IDENTITY CARD BLOCK */}
      <CardWrapper title="NFC Identity Card">
        <div className="flex flex-col h-full justify-between">
          
          {/* Main Visual Physical Smart Card Wrapper Box */}
          <div className={`w-full aspect-[1.586/1] rounded-2xl p-3.5 text-white relative overflow-hidden shadow-md flex flex-col justify-between transition-all duration-500 bg-linear-to-br tracking-wide select-none ${
            isCardBlocked 
              ? 'from-[#3a0a0d] via-[#5c1318] to-[#240507] border border-red-800 shadow-red-900/30' 
              : 'from-[#06163a] via-[#0f2d6b] to-[#0a1b40] border border-slate-800 shadow-blue-950/40'
          }`}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />
            
            {/* Top row elements */}
            <div className="flex justify-between items-start w-full z-10">
              <div className="flex items-center gap-1.5">
                <div className="border border-white/20 p-1 rounded bg-white/5">
                  <Landmark size={12} className={isCardBlocked ? 'text-red-400' : 'text-blue-300'} />
                </div>
                <div>
                  <h5 className="text-[9px] font-black tracking-widest text-white leading-none uppercase">Advocate</h5>
                  <p className="text-[6px] text-white/60 tracking-wider font-semibold uppercase mt-0.5">Identity Card</p>
                </div>
              </div>
              <div className={isCardBlocked ? 'text-red-400/40' : 'text-white/80'}>
                <Wifi size={16} className="rotate-90 transform" />
              </div>
            </div>

            {/* Smart Chip, Photo, and QR matrix core grid rows layout */}
            <div className="grid grid-cols-3 items-center w-full my-1 z-10 gap-2">
              <div className="flex justify-start">
                <div className="w-8 h-6 rounded-xs bg-linear-to-br from-[#ffe082] via-[#ffd54f] to-[#b58d15] relative p-1 shadow-inner border border-[#d4af37]/40 overflow-hidden flex flex-col justify-between">
                  <div className="w-full h-[1px] bg-black/10 absolute top-1/2 left-0" />
                  <div className="w-[1px] h-full bg-black/10 absolute left-1/3 top-0" />
                  <div className="w-[1px] h-full bg-black/10 absolute left-2/3 top-0" />
                  <div className="w-2.5 h-2.5 rounded-xs border border-black/5 mx-auto bg-amber-400/20 z-10" />
                </div>
              </div>

              <div className="flex justify-center">
                <div className={`w-11 h-11 rounded-full border-2 bg-slate-200/90 flex items-center justify-center overflow-hidden shadow-sm relative ${
                  isCardBlocked ? 'border-red-500/60' : 'border-white'
                }`}>
                  <User size={26} className="text-slate-500 mt-1.5" />
                  {isCardBlocked && (
                    <div className="absolute inset-0 bg-red-950/40 flex items-center justify-center">
                      <ShieldX size={12} className="text-red-400 animate-pulse" />
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end">
                <div className="w-9 h-9 bg-white p-1 rounded-md shadow-sm flex items-center justify-center">
                  <QrCode size={28} className={isCardBlocked ? 'text-red-900' : 'text-slate-900'} />
                </div>
              </div>
            </div>

            {/* Credentials Info block footer row inside the card canvas layout */}
            <div className="w-full z-10 flex justify-between items-end border-t border-white/10 pt-1">
              <div className="text-left min-w-0">
                <h6 className="text-[9px] font-black tracking-wide text-white leading-tight uppercase truncate">Adv. Rohit Sharma</h6>
                <p className="text-[7px] text-white/70 font-mono tracking-normal">MH/4789/2012</p>
              </div>
              <span className={`text-[6px] font-black px-1 py-0.5 rounded uppercase tracking-wider shrink-0 ${
                isCardBlocked ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'
              }`}>
                {isCardBlocked ? 'Blocked' : 'Active'}
              </span>
            </div>

          </div>

          {/* Perfectly Aligned Two-Column Detailed Rows Table */}
          <div className="space-y-1 mt-3 text-[11px] border-t border-slate-100 pt-2 font-medium">
            <div className="grid grid-cols-2 gap-2">
              <div className="min-w-0">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card ID</span>
                <span className="font-mono text-slate-700 block truncate font-semibold">AIC-IND-2025-123456</span>
              </div>
              <div className="min-w-0">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card Type</span>
                <span className="text-slate-700 block truncate font-semibold">NFC + QR Hybrid</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="min-w-0">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card Status</span>
                <span className={`font-extrabold block truncate ${isCardBlocked ? 'text-red-600' : 'text-emerald-600'}`}>
                  {isCardBlocked ? 'Suspended' : 'Active'}
                </span>
              </div>
              <div className="min-w-0">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Issue Date</span>
                <span className="text-slate-700 block truncate font-semibold">01 Jan 2025</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="min-w-0">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Expiry Date</span>
                <span className={`font-semibold block truncate ${isCardBlocked ? 'text-red-500/70 line-through' : 'text-slate-700'}`}>
                  31 Dec 2025
                </span>
              </div>
              <div className="min-w-0">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Security Level</span>
                <span className={`font-extrabold block truncate ${isCardBlocked ? 'text-red-600' : 'text-blue-600'}`}>
                  {isCardBlocked ? 'REVOKED' : 'High'}
                </span>
              </div>
            </div>
          </div>

        </div>
      </CardWrapper>

    </div>
  );
}