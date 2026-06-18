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



// import React from 'react';
// import CardWrapper from '../ui/CardWrapper';
// import { 
//   CheckCircle, Award, Scale, Landmark, FileText, 
//   Shield, User, ShieldAlert, Wifi, ShieldX, QrCode 
// } from 'lucide-react';

// export default function TopRowSection({ isCardBlocked }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
      
//       {/* 1. ADVOCATE PROFILE BLOCK */}
//       <CardWrapper title="Advocate Profile">
//         <div className="flex flex-col h-full justify-between">
//           <div className="flex gap-4 items-start">
//             <div className="relative shrink-0">
//               <div className="w-20 h-24 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden">
//                 {/* Standard user avatar wrapper resembling image_0c073a.png */}
//                 <User size={44} className="text-slate-400 mt-4" />
//               </div>
//               <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] px-2.5 py-0.5 rounded-sm font-bold uppercase tracking-wider shadow-xs ${
//                 isCardBlocked ? 'bg-red-600 text-white' : 'bg-emerald-600 text-white'
//               }`}>
//                 {isCardBlocked ? 'Suspended' : 'Active'}
//               </span>
//             </div>
            
//             <div className="space-y-1 min-w-0">
//               <div className="flex items-center gap-1.5 flex-wrap">
//                 <h4 className="text-sm font-black text-slate-900 truncate">Adv. Rohit Sharma</h4>
//                 {!isCardBlocked && (
//                   <CheckCircle size={14} className="text-blue-500 fill-blue-500 text-white shrink-0" />
//                 )}
//               </div>
//               <p className="text-[11px] text-slate-500 font-medium">
//                 Enrollment No. <span className="font-bold text-slate-700 block sm:inline">MH/4789/2012</span>
//               </p>
//               <p className="text-[11px] text-slate-500 font-medium">
//                 Bar Council Reg. No. <span className="font-bold text-slate-700 block sm:inline">M/12345/2012</span>
//               </p>
//               <p className="text-[10px] text-slate-400 font-bold leading-tight mt-1">
//                 State Bar Council: <span className="text-slate-600">Maharashtra Bar Council</span>
//               </p>
//             </div>
//           </div>

//           {/* Quick Metrics Grid Bottom Footer Row */}
//           <div className="grid grid-cols-4 gap-1 border-t border-slate-100 pt-3 mt-4 text-center text-[10px]">
//             <div className="min-w-0">
//               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Practice Since</p>
//               <p className="font-black text-slate-800 mt-0.5">2012</p>
//             </div>
//             <div className="min-w-0">
//               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Experience</p>
//               <p className="font-black text-slate-800 mt-0.5">12+ Years</p>
//             </div>
//             <div className="min-w-0">
//               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Enroll Date</p>
//               <p className="font-bold text-slate-800 mt-0.5 whitespace-nowrap">15 Aug 2012</p>
//             </div>
//             <div className="min-w-0">
//               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Renewal Valid</p>
//               <p className={`font-black mt-0.5 ${isCardBlocked ? 'text-red-600 line-through' : 'text-amber-600'}`}>
//                 31 Dec 2025
//               </p>
//             </div>
//           </div>
//         </div>
//       </CardWrapper>

//       {/* 2. PROFESSIONAL CLASSIFICATION BLOCK */}
//       <CardWrapper title="Professional Classification">
//         <div className="grid grid-cols-4 gap-1.5 h-full content-between">
//           {[
//             { label: 'Advocate', sub: 'Enrolled', active: !isCardBlocked, icon: User, color: 'text-amber-600 bg-amber-50/60 border-amber-100' },
//             { label: 'Senior Advocate', sub: 'Not Enrolled', active: false, icon: Award, color: 'text-slate-400 bg-slate-50 border-slate-100' },
//             { label: 'Advocate-on-Record', sub: 'Eligible', active: !isCardBlocked, icon: Scale, color: 'text-blue-600 bg-blue-50/60 border-blue-100' },
//             { label: 'Law Officer', sub: 'Registered', active: !isCardBlocked, icon: Landmark, color: 'text-emerald-600 bg-emerald-50/60 border-emerald-100' },
//             { label: 'Government Counsel', sub: 'Registered', active: !isCardBlocked, icon: FileText, color: 'text-sky-600 bg-sky-50/60 border-sky-100' },
//             { label: 'Public Prosecutor', sub: 'Not Registered', active: false, icon: Shield, color: 'text-slate-400 bg-slate-50 border-slate-100' },
//             { label: 'Legal Consultant', sub: 'Registered', active: !isCardBlocked, icon: User, color: 'text-indigo-600 bg-indigo-50/60 border-indigo-100' },
//             { label: 'Corporate Counsel', sub: 'Registered', active: !isCardBlocked, icon: ShieldAlert, color: 'text-teal-600 bg-teal-50/60 border-teal-100' },
//           ].map((item, idx) => {
//             const IconComponent = item.icon;
//             return (
//               <div 
//                 key={idx} 
//                 className={`p-1.5 rounded-lg border flex flex-col items-center text-center justify-center transition-all ${item.color}`}
//               >
//                 <IconComponent size={14} className="mb-0.5" />
//                 <p className="text-[9px] font-black leading-tight text-slate-800 tracking-tight truncate w-full">{item.label}</p>
//                 <p className="text-[8px] font-bold opacity-80 mt-0.5 truncate w-full">
//                   {isCardBlocked && item.active ? 'Suspended' : item.sub}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </CardWrapper>

//       {/* 3. BAR COUNCIL VERIFICATION CHECKLIST */}
//       <CardWrapper title="Bar Council Verification" badge={isCardBlocked ? "Suspended" : "Verified"}>
//         <div className="space-y-1.5 text-xs h-full flex flex-col justify-between">
//           {[
//             { label: 'Bar Council Verification', status: isCardBlocked ? 'Suspended' : 'Verified', color: isCardBlocked ? 'text-red-600 font-bold' : 'text-emerald-600 font-bold' },
//             { label: 'Enrollment Date', status: '15 Aug 2012', color: 'text-slate-700' },
//             { label: 'License Validity', status: '31 Dec 2025', color: isCardBlocked ? 'text-slate-400 line-through' : 'text-slate-700 font-bold' },
//             { label: 'Renewal Status', status: isCardBlocked ? 'Hold' : 'Up To Date', color: isCardBlocked ? 'text-red-500' : 'text-emerald-600 font-semibold' },
//             { label: 'Continuing Legal Education', status: isCardBlocked ? 'Suspended' : 'Completed', color: isCardBlocked ? 'text-slate-400' : 'text-blue-600' },
//             { label: 'Disciplinary Record', status: isCardBlocked ? 'Review Pending' : 'No Record Found', color: isCardBlocked ? 'text-amber-600' : 'text-emerald-600' },
//           ].map((row, idx) => (
//             <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0 text-[11px]">
//               <div className="flex items-center gap-1.5 text-slate-500 min-w-0">
//                 <CheckCircle size={12} className={`shrink-0 ${isCardBlocked ? 'text-slate-300' : 'text-emerald-500 fill-emerald-50'}`} />
//                 <span className="truncate">{row.label}</span>
//               </div>
//               <span className={`text-[10px] font-medium shrink-0 pl-2 ${row.color}`}>{row.status}</span>
//             </div>
//           ))}
//         </div>
//       </CardWrapper>

//       {/* 4. REALISTIC SMART DIGITAL NFC IDENTITY CARD BLOCK */}
//       <CardWrapper title="NFC Identity Card">
//         <div className="flex flex-col h-full justify-between">
          
//           {/* Main Visual Physical Smart Card Wrapper Box */}
//           <div className={`w-full aspect-[1.586/1] rounded-2xl p-3.5 text-white relative overflow-hidden shadow-md flex flex-col justify-between transition-all duration-500 bg-linear-to-br tracking-wide select-none ${
//             isCardBlocked 
//               ? 'from-[#3a0a0d] via-[#5c1318] to-[#240507] border border-red-800 shadow-red-900/30' 
//               : 'from-[#06163a] via-[#0f2d6b] to-[#0a1b40] border border-slate-800 shadow-blue-950/40'
//           }`}>
//             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.06),transparent_60%)] pointer-events-none" />
            
//             {/* Top row elements */}
//             <div className="flex justify-between items-start w-full z-10">
//               <div className="flex items-center gap-1.5">
//                 <div className="border border-white/20 p-1 rounded bg-white/5">
//                   <Landmark size={12} className={isCardBlocked ? 'text-red-400' : 'text-blue-300'} />
//                 </div>
//                 <div>
//                   <h5 className="text-[9px] font-black tracking-widest text-white leading-none uppercase">Advocate</h5>
//                   <p className="text-[6px] text-white/60 tracking-wider font-semibold uppercase mt-0.5">Identity Card</p>
//                 </div>
//               </div>
//               <div className={isCardBlocked ? 'text-red-400/40' : 'text-white/80'}>
//                 <Wifi size={16} className="rotate-90 transform" />
//               </div>
//             </div>

//             {/* Smart Chip, Photo, and QR matrix core grid rows layout */}
//             <div className="grid grid-cols-3 items-center w-full my-1 z-10 gap-2">
//               <div className="flex justify-start">
//                 <div className="w-8 h-6 rounded-xs bg-linear-to-br from-[#ffe082] via-[#ffd54f] to-[#b58d15] relative p-1 shadow-inner border border-[#d4af37]/40 overflow-hidden flex flex-col justify-between">
//                   <div className="w-full h-[1px] bg-black/10 absolute top-1/2 left-0" />
//                   <div className="w-[1px] h-full bg-black/10 absolute left-1/3 top-0" />
//                   <div className="w-[1px] h-full bg-black/10 absolute left-2/3 top-0" />
//                   <div className="w-2.5 h-2.5 rounded-xs border border-black/5 mx-auto bg-amber-400/20 z-10" />
//                 </div>
//               </div>

//               <div className="flex justify-center">
//                 <div className={`w-11 h-11 rounded-full border-2 bg-slate-200/90 flex items-center justify-center overflow-hidden shadow-sm relative ${
//                   isCardBlocked ? 'border-red-500/60' : 'border-white'
//                 }`}>
//                   <User size={26} className="text-slate-500 mt-1.5" />
//                   {isCardBlocked && (
//                     <div className="absolute inset-0 bg-red-950/40 flex items-center justify-center">
//                       <ShieldX size={12} className="text-red-400 animate-pulse" />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="flex justify-end">
//                 <div className="w-9 h-9 bg-white p-1 rounded-md shadow-sm flex items-center justify-center">
//                   <QrCode size={28} className={isCardBlocked ? 'text-red-900' : 'text-slate-900'} />
//                 </div>
//               </div>
//             </div>

//             {/* Credentials Info block footer row inside the card canvas layout */}
//             <div className="w-full z-10 flex justify-between items-end border-t border-white/10 pt-1">
//               <div className="text-left min-w-0">
//                 <h6 className="text-[9px] font-black tracking-wide text-white leading-tight uppercase truncate">Adv. Rohit Sharma</h6>
//                 <p className="text-[7px] text-white/70 font-mono tracking-normal">MH/4789/2012</p>
//               </div>
//               <span className={`text-[6px] font-black px-1 py-0.5 rounded uppercase tracking-wider shrink-0 ${
//                 isCardBlocked ? 'bg-red-500/20 text-red-300' : 'bg-emerald-500/20 text-emerald-300'
//               }`}>
//                 {isCardBlocked ? 'Blocked' : 'Active'}
//               </span>
//             </div>

//           </div>

//           {/* Perfectly Aligned Two-Column Detailed Rows Table */}
//           <div className="space-y-1 mt-3 text-[11px] border-t border-slate-100 pt-2 font-medium">
//             <div className="grid grid-cols-2 gap-2">
//               <div className="min-w-0">
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card ID</span>
//                 <span className="font-mono text-slate-700 block truncate font-semibold">AIC-IND-2025-123456</span>
//               </div>
//               <div className="min-w-0">
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card Type</span>
//                 <span className="text-slate-700 block truncate font-semibold">NFC + QR Hybrid</span>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-2">
//               <div className="min-w-0">
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card Status</span>
//                 <span className={`font-extrabold block truncate ${isCardBlocked ? 'text-red-600' : 'text-emerald-600'}`}>
//                   {isCardBlocked ? 'Suspended' : 'Active'}
//                 </span>
//               </div>
//               <div className="min-w-0">
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Issue Date</span>
//                 <span className="text-slate-700 block truncate font-semibold">01 Jan 2025</span>
//               </div>
//             </div>

//             <div className="grid grid-cols-2 gap-2">
//               <div className="min-w-0">
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Expiry Date</span>
//                 <span className={`font-semibold block truncate ${isCardBlocked ? 'text-red-500/70 line-through' : 'text-slate-700'}`}>
//                   31 Dec 2025
//                 </span>
//               </div>
//               <div className="min-w-0">
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Security Level</span>
//                 <span className={`font-extrabold block truncate ${isCardBlocked ? 'text-red-600' : 'text-blue-600'}`}>
//                   {isCardBlocked ? 'REVOKED' : 'High'}
//                 </span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </CardWrapper>

//     </div>
//   );
// }

// import React from 'react';
// import CardWrapper from '../ui/CardWrapper';
// import { 
//   CheckCircle, Award, Scale, Landmark, FileText, 
//   Shield, User, ShieldAlert, Wifi, ShieldX, QrCode 
// } from 'lucide-react';

// export default function TopRowSection({ isCardBlocked }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
      
//       {/* 1. ADVOCATE PROFILE BLOCK */}
//       <CardWrapper title="Advocate Profile">
//         <div className="flex flex-col h-full justify-between space-y-4">
//           <div className="flex gap-4 items-start">
//             <div className="relative shrink-0">
//               <div className="w-[84px] h-[100px] bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden">
//                 <User size={48} className="text-slate-400 mt-5" />
//               </div>
//               <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] px-3 py-0.5 rounded-sm font-bold uppercase tracking-wider shadow-xs border ${
//                 isCardBlocked ? 'bg-red-600 border-red-700 text-white' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
//               }`}>
//                 {isCardBlocked ? 'Suspended' : 'Active'}
//               </span>
//             </div>
            
//             <div className="space-y-1 min-w-0 flex-1">
//               <div className="flex items-center gap-1">
//                 <h4 className="text-[15px] font-extrabold text-slate-900 tracking-tight truncate">Adv. Rohit Sharma</h4>
//                 {!isCardBlocked && (
//                   <CheckCircle size={14} className="text-blue-500 fill-blue-500 text-white shrink-0" />
//                 )}
//               </div>
//               <div className="text-[11px] text-slate-500 font-medium space-y-0.5">
//                 <p>Enrollment No.</p>
//                 <p className="font-bold text-slate-800">MH/4789/2012</p>
//               </div>
//               <div className="text-[11px] text-slate-500 font-medium space-y-0.5 pt-0.5">
//                 <p>Bar Council Reg. No.</p>
//                 <p className="font-bold text-slate-800">M/12345/2012</p>
//               </div>
//               <p className="text-[10px] text-slate-400 font-bold leading-tight pt-1">
//                 State Bar Council: <span className="text-slate-600 block">Maharashtra Bar Council</span>
//               </p>
//             </div>
//           </div>

//           {/* Quick Metrics Grid Exactly Matching image_ee7f04.png */}
//           <div className="grid grid-cols-4 gap-1 border-t border-slate-100 pt-3 text-center text-[10px] bg-slate-50/50 rounded-b-xl -mx-4 -mb-4 p-3">
//             <div className="min-w-0 border-r border-slate-200/60 last:border-0">
//               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Practice Since</p>
//               <p className="font-black text-slate-800 mt-0.5">2012</p>
//             </div>
//             <div className="min-w-0 border-r border-slate-200/60 last:border-0">
//               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Experience</p>
//               <p className="font-black text-slate-800 mt-0.5">12+ Years</p>
//             </div>
//             <div className="min-w-0 border-r border-slate-200/60 last:border-0">
//               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Date of Enroll</p>
//               <p className="font-bold text-slate-800 mt-0.5 whitespace-nowrap text-[9px]">15 Aug 2012</p>
//             </div>
//             <div className="min-w-0">
//               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Renewal Valid</p>
//               <p className={`font-black mt-0.5 text-[9px] ${isCardBlocked ? 'text-red-600 line-through' : 'text-amber-600'}`}>
//                 31 Dec 2025
//               </p>
//             </div>
//           </div>
//         </div>
//       </CardWrapper>

//       {/* 2. PROFESSIONAL CLASSIFICATION BLOCK */}
//       <CardWrapper title="Professional Classification">
//         <div className="grid grid-cols-4 gap-2 h-full items-center">
//           {[
//             { label: 'Advocate', sub: 'Enrolled', active: !isCardBlocked, icon: User, color: 'text-amber-600 bg-amber-50/70 border-amber-200' },
//             { label: 'Senior Advocate', sub: 'Not Enrolled', active: false, icon: Award, color: 'text-slate-400 bg-slate-50 border-slate-200' },
//             { label: 'Advocate-on-Record', sub: 'Eligible', active: !isCardBlocked, icon: Scale, color: 'text-blue-600 bg-blue-50/70 border-blue-200' },
//             { label: 'Law Officer', sub: 'Registered', active: !isCardBlocked, icon: Landmark, color: 'text-emerald-600 bg-emerald-50/70 border-emerald-200' },
//             { label: 'Government Counsel', sub: 'Registered', active: !isCardBlocked, icon: FileText, color: 'text-sky-600 bg-sky-50/70 border-sky-200' },
//             { label: 'Public Prosecutor', sub: 'Not Regist.', active: false, icon: Shield, color: 'text-slate-400 bg-slate-50 border-slate-200' },
//             { label: 'Legal Consultant', sub: 'Registered', active: !isCardBlocked, icon: User, color: 'text-indigo-600 bg-indigo-50/70 border-indigo-200' },
//             { label: 'Corporate Counsel', sub: 'Registered', active: !isCardBlocked, icon: ShieldAlert, color: 'text-teal-600 bg-teal-50/70 border-teal-200' },
//           ].map((item, idx) => {
//             const IconComponent = item.icon;
//             return (
//               <div 
//                 key={idx} 
//                 className={`p-1 py-2 h-[68px] rounded-lg border flex flex-col items-center text-center justify-center transition-all ${item.color}`}
//               >
//                 <IconComponent size={15} className="mb-1 shrink-0 opacity-90" />
//                 <p className="text-[8px] font-extrabold leading-tight text-slate-800 tracking-tighter w-full max-h-6 overflow-hidden">
//                   {item.label}
//                 </p>
//                 <p className="text-[7px] font-bold opacity-75 mt-0.5 tracking-tighter scale-95 w-full truncate">
//                   {isCardBlocked && item.active ? 'Suspended' : item.sub}
//                 </p>
//               </div>
//             );
//           })}
//         </div>
//       </CardWrapper>

//       {/* 3. BAR COUNCIL VERIFICATION CHECKLIST */}
//       <CardWrapper title="Bar Council Verification" badge={isCardBlocked ? "Suspended" : "Verified"}>
//         <div className="space-y-2 text-xs h-full flex flex-col justify-center">
//           {[
//             { label: 'Bar Council Verification', status: isCardBlocked ? 'Suspended' : 'Verified', color: isCardBlocked ? 'text-red-600 font-bold' : 'text-emerald-600 font-bold' },
//             { label: 'Enrollment Date', status: '15 Aug 2012', color: 'text-slate-700 font-semibold' },
//             { label: 'License Validity', status: '31 Dec 2025', color: isCardBlocked ? 'text-slate-400 line-through' : 'text-slate-700 font-bold' },
//             { label: 'Renewal Status', status: isCardBlocked ? 'Hold' : 'Up To Date', color: isCardBlocked ? 'text-red-500' : 'text-emerald-600 font-semibold' },
//             { label: 'Continuing Legal Education', status: isCardBlocked ? 'Suspended' : 'Completed', color: isCardBlocked ? 'text-slate-400' : 'text-blue-600 font-medium' },
//             { label: 'Disciplinary Record', status: isCardBlocked ? 'Review Pending' : 'No Record Found', color: isCardBlocked ? 'text-amber-600' : 'text-emerald-600 font-medium' },
//           ].map((row, idx) => (
//             <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0 text-[11px]">
//               <div className="flex items-center gap-1.5 text-slate-500 min-w-0">
//                 <CheckCircle size={13} className={`shrink-0 ${isCardBlocked ? 'text-slate-300' : 'text-emerald-500 fill-emerald-50'}`} />
//                 <span className="truncate font-medium text-slate-600">{row.label}</span>
//               </div>
//               <span className={`text-[10px] shrink-0 pl-2 font-mono ${row.color}`}>{row.status}</span>
//             </div>
//           ))}
//         </div>
//       </CardWrapper>

//       {/* 4. PREMIUM COMPACT SMART NFC CARD VIEWPORT AS PER image_ee7f04.png */}
//       <CardWrapper title="NFC Identity Card">
//         <div className="flex flex-col h-full justify-between">
          
//           {/* Smart Card Visual Graphics Block Wrapper */}
//           <div className={`w-full aspect-[1.586/1] rounded-xl p-3 text-white relative overflow-hidden shadow-md flex flex-col justify-between transition-all duration-500 select-none ${
//             isCardBlocked 
//               ? 'from-[#2b080a] via-[#4a1014] to-[#1a0305] border border-red-900' 
//               : 'bg-linear-to-br from-[#061434] via-[#091f4d] to-[#040d24] border border-slate-900'
//           }`}>
            
//             {/* Elegant Right Glow Gradient Wave Line Pattern */}
//             <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-linear-to-l from-white/[0.04] to-transparent skew-x-12 pointer-events-none transform origin-top-right" />
            
//             {/* Header: Brand Stack & Wifi Waves Symbol */}
//             <div className="flex justify-between items-start w-full relative z-10">
//               <div className="flex items-center gap-2">
//                 <Landmark size={15} className={isCardBlocked ? 'text-red-400' : 'text-slate-100'} />
//                 <div className="leading-tight">
//                   <h5 className="text-[9px] font-black tracking-widest text-white uppercase font-sans">Advocate</h5>
//                   <p className="text-[6px] text-white/60 tracking-wider font-bold uppercase">Identity Card</p>
//                 </div>
//               </div>
//               <div className={isCardBlocked ? 'text-red-500/40' : 'text-white/90'}>
//                 <Wifi size={16} className="rotate-90 transform" />
//               </div>
//             </div>

//             {/* Content Mid-Section: Absolute Layout Positioning */}
//             <div className="relative h-12 w-full flex items-center justify-between z-10 px-0.5">
              
//               {/* Left Element: Golden Smart EMV Microchip Box */}
//               <div className="shrink-0">
//                 <div className="w-7.5 h-6 rounded-md bg-linear-to-br from-[#ffe082] via-[#ffd54f] to-[#c69a1c] relative p-0.5 border border-[#d4af37]/40 shadow-sm overflow-hidden">
//                   <div className="w-full h-[1px] bg-black/10 absolute top-1/2 left-0" />
//                   <div className="w-[1px] h-full bg-black/10 absolute left-1/3 top-0" />
//                   <div className="w-[1px] h-full bg-black/10 absolute left-2/3 top-0" />
//                 </div>
//               </div>

//               {/* Center-Right Element: Rounded User Avatar Mask Frame */}
//               <div className="absolute right-14 bottom-0">
//                 <div className={`w-11 h-11 rounded-full border-1.5 bg-slate-100 flex items-center justify-center overflow-hidden shadow-xs relative ${
//                   isCardBlocked ? 'border-red-500/50' : 'border-white/90'
//                 }`}>
//                   <User size={24} className="text-slate-400 mt-2" />
//                   {isCardBlocked && (
//                     <div className="absolute inset-0 bg-red-950/60 flex items-center justify-center">
//                       <ShieldX size={12} className="text-red-400" />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               {/* Right Element: Square Contrast Bounded QR Code Asset */}
//               <div className="shrink-0">
//                 <div className="w-9 h-9 bg-white p-0.5 rounded-md shadow-xs flex items-center justify-center">
//                   <QrCode size={32} className={isCardBlocked ? 'text-red-950' : 'text-[#061434]'} />
//                 </div>
//               </div>

//             </div>

//             {/* Footer Row: Meta Credentials */}
//             <div className="w-full relative z-10 flex justify-between items-end border-t border-white/10 pt-1">
//               <div className="text-left min-w-0 flex-1 pr-2">
//                 <h6 className="text-[10px] font-extrabold tracking-wide text-white leading-none uppercase truncate">
//                   Adv. Rohit Sharma
//                 </h6>
//                 <p className="text-[7.5px] text-white/60 font-mono tracking-tight mt-0.5 truncate">
//                   MH/4789/2012
//                 </p>
//               </div>
//               <span className={`text-[6px] font-black px-1.5 py-0.5 rounded-xs uppercase tracking-wider shrink-0 border ${
//                 isCardBlocked ? 'bg-red-500/10 border-red-500/30 text-red-300' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
//               }`}>
//                 {isCardBlocked ? 'Blocked' : 'Active'}
//               </span>
//             </div>

//           </div>

//           {/* Sub-Card Structured Data Panels Matching image_ee7f04.png Grid exactly */}
//           <div className="space-y-1.5 mt-3 text-[11px] border-t border-slate-100 pt-2 font-medium">
//             <div className="grid grid-cols-2 gap-x-4 gap-y-1">
//               <div>
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card ID</span>
//                 <span className="font-mono text-slate-700 block truncate font-bold text-[10.5px]">AIC-IND-2025-123456</span>
//               </div>
//               <div>
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card Type</span>
//                 <span className="text-slate-700 block truncate font-bold text-[10.5px]">NFC + QR Hybrid</span>
//               </div>
              
//               <div className="pt-0.5">
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card Status</span>
//                 <span className={`font-black block truncate text-[10.5px] ${isCardBlocked ? 'text-red-600' : 'text-emerald-600'}`}>
//                   {isCardBlocked ? 'Suspended' : 'Active'}
//                 </span>
//               </div>
//               <div className="pt-0.5">
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Issue Date</span>
//                 <span className="text-slate-700 block truncate font-bold text-[10.5px]">01 Jan 2025</span>
//               </div>

//               <div className="pt-0.5">
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Expiry Date</span>
//                 <span className={`font-bold block truncate text-[10.5px] ${isCardBlocked ? 'text-red-500/70 line-through' : 'text-slate-700'}`}>
//                   31 Dec 2025
//                 </span>
//               </div>
//               <div className="pt-0.5">
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Security Level</span>
//                 <span className={`font-black block truncate text-[10.5px] ${isCardBlocked ? 'text-red-600' : 'text-emerald-600'}`}>
//                   {isCardBlocked ? 'REVOKED' : 'High'}
//                 </span>
//               </div>
//             </div>
//           </div>

//         </div>
//       </CardWrapper>

//     </div>
//   );
// }



// import React from 'react';
// import CardWrapper from '../ui/CardWrapper';
// import { 
//   CheckCircle, Award, Scale, Landmark, FileText, 
//   Shield, User, ShieldAlert, Wifi, ShieldX, QrCode 
// } from 'lucide-react';

// export default function TopRowSection({ isCardBlocked }) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
      
//       {/* 1. ADVOCATE PROFILE BLOCK */}
//       <CardWrapper title="Advocate Profile">
//         <div className="flex flex-col justify-between h-full min-h-[220px]">
//           <div className="flex gap-4 items-start">
//             {/* Image Box Container */}
//             <div className="relative shrink-0">
//               <div className="w-20 h-24 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden shadow-xs">
//                 <User size={40} className="text-slate-400 mt-4" />
//               </div>
//               <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider shadow-xs border ${
//                 isCardBlocked 
//                   ? 'bg-red-100 border-red-200 text-red-700' 
//                   : 'bg-emerald-100 border-emerald-200 text-emerald-700'
//               }`}>
//                 {isCardBlocked ? 'Suspended' : 'Active'}
//               </span>
//             </div>
            
//             {/* Details Panel */}
//             <div className="space-y-1.5 min-w-0 flex-1">
//               <div className="flex items-center gap-1">
//                 <h4 className="text-base font-bold text-slate-900 tracking-tight truncate">Adv. Rohit Sharma</h4>
//                 {!isCardBlocked && (
//                   <CheckCircle size={14} className="text-blue-500 fill-blue-500 text-white shrink-0" />
//                 )}
//               </div>
              
//               <div className="text-[11px] text-slate-500 space-y-0.5">
//                 <p className="font-medium">Enrollment No.</p>
//                 <p className="font-semibold text-slate-800">MH/4789/2012</p>
//               </div>
              
//               <div className="text-[11px] text-slate-500 space-y-0.5">
//                 <p className="font-medium">Bar Council Reg. No.</p>
//                 <p className="font-semibold text-slate-800">M/12345/2012</p>
//               </div>

//               <p className="text-[10px] text-slate-400 font-bold leading-tight pt-1">
//                 State Bar Council: <span className="text-slate-600 font-medium block">Maharashtra Bar Council</span>
//               </p>
//             </div>
//           </div>

//           {/* Bottom Metrics Ledger Row */}
//           <div className="grid grid-cols-4 gap-1 border-t border-slate-100 pt-3 mt-4 text-center text-[10px]">
//             <div className="min-w-0 border-r border-slate-100 last:border-0">
//               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Practice Since</p>
//               <p className="font-bold text-slate-800 mt-0.5">2012</p>
//             </div>
//             <div className="min-w-0 border-r border-slate-100 last:border-0">
//               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Experience</p>
//               <p className="font-bold text-slate-800 mt-0.5">12+ Years</p>
//             </div>
//             <div className="min-w-0 border-r border-slate-100 last:border-0">
//               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Date of Enroll</p>
//               <p className="font-bold text-slate-800 mt-0.5 whitespace-nowrap">15 Aug 2012</p>
//             </div>
//             <div className="min-w-0">
//               <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Renewal Valid</p>
//               <p className={`font-bold mt-0.5 ${isCardBlocked ? 'text-red-600 line-through' : 'text-amber-600'}`}>
//                 31 Dec 2025
//               </p>
//             </div>
//           </div>
//         </div>
//       </CardWrapper>

//       {/* 2. PROFESSIONAL CLASSIFICATION BLOCK */}
//       <CardWrapper title="Professional Classification">
//         {/* Adjusted to grid-cols-2 grid for consistent cross-device rendering without layout clipping */}
//         <div className="grid grid-cols-2 gap-2.5 h-full content-start">
//           {[
//             { label: 'Advocate', sub: 'Enrolled', active: !isCardBlocked, icon: User, color: 'text-amber-600 bg-amber-50/60 border-amber-200' },
//             { label: 'Senior Advocate', sub: 'Not Enrolled', active: false, icon: Award, color: 'text-slate-400 bg-slate-50 border-slate-200' },
//             { label: 'Advocate-on-Record', sub: 'Eligible', active: !isCardBlocked, icon: Scale, color: 'text-blue-600 bg-blue-50/60 border-blue-200' },
//             { label: 'Law Officer', sub: 'Registered', active: !isCardBlocked, icon: Landmark, color: 'text-emerald-600 bg-emerald-50/60 border-emerald-200' },
//             { label: 'Government Counsel', sub: 'Registered', active: !isCardBlocked, icon: FileText, color: 'text-sky-600 bg-sky-50/60 border-sky-200' },
//             { label: 'Public Prosecutor', sub: 'Not Regist.', active: false, icon: Shield, color: 'text-slate-400 bg-slate-50 border-slate-200' },
//             { label: 'Legal Consultant', sub: 'Registered', active: !isCardBlocked, icon: User, color: 'text-indigo-600 bg-indigo-50/70 border-indigo-200' },
//             { label: 'Corporate Counsel', sub: 'Registered', active: !isCardBlocked, icon: ShieldAlert, color: 'text-teal-600 bg-teal-50/70 border-teal-200' },
//           ].map((item, idx) => {
//             const IconComponent = item.icon;
//             return (
//               <div 
//                 key={idx} 
//                 className={`px-2.5 py-2 rounded-lg border flex items-center gap-2.5 justify-start transition-all ${item.color}`}
//               >
//                 <IconComponent size={14} className="shrink-0 opacity-95" />
//                 <div className="min-w-0 text-left">
//                   <p className="text-[10px] font-bold leading-tight text-slate-800 truncate w-full">{item.label}</p>
//                   <p className="text-[9px] font-medium opacity-75 mt-0.5 truncate w-full">
//                     {isCardBlocked && item.active ? 'Suspended' : item.sub}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </CardWrapper>

//       {/* 3. BAR COUNCIL VERIFICATION CHECKLIST */}
//       <CardWrapper title="Bar Council Verification" badge={isCardBlocked ? "Suspended" : "Verified"}>
//         <div className="space-y-2 text-xs h-full flex flex-col justify-between min-h-[220px]">
//           {[
//             { label: 'Bar Council Verification', status: isCardBlocked ? 'Suspended' : 'Verified', color: isCardBlocked ? 'text-red-600 font-bold' : 'text-emerald-600 font-bold' },
//             { label: 'Enrollment Date', status: '15 Aug 2012', color: 'text-slate-700 font-medium' },
//             { label: 'License Validity', status: '31 Dec 2025', color: isCardBlocked ? 'text-slate-400 line-through' : 'text-slate-700 font-bold' },
//             { label: 'Renewal Status', status: isCardBlocked ? 'Hold' : 'Up To Date', color: isCardBlocked ? 'text-red-500' : 'text-emerald-600 font-semibold' },
//             { label: 'Continuing Legal Education', status: isCardBlocked ? 'Suspended' : 'Completed', color: isCardBlocked ? 'text-slate-400' : 'text-blue-600 font-medium' },
//             { label: 'Disciplinary Record', status: isCardBlocked ? 'Review Pending' : 'No Record Found', color: isCardBlocked ? 'text-amber-600' : 'text-emerald-600 font-medium' },
//           ].map((row, idx) => (
//             <div key={idx} className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-0 text-[11px]">
//               <div className="flex items-center gap-2 text-slate-500 min-w-0">
//                 <CheckCircle size={13} className={`shrink-0 ${isCardBlocked ? 'text-slate-300' : 'text-emerald-500 fill-emerald-50'}`} />
//                 <span className="truncate font-medium text-slate-600">{row.label}</span>
//               </div>
//               <span className={`text-[10px] shrink-0 pl-2 font-mono ${row.color}`}>{row.status}</span>
//             </div>
//           ))}
//         </div>
//       </CardWrapper>

//       {/* 4. PREMIUM COMPACT SMART NFC CARD VIEWPORT */}
//       <CardWrapper title="NFC Identity Card">
//         <div className="flex flex-col h-full justify-between min-h-[220px]">
          
//           {/* Main Visual Physical Card Base Container with Fixed Aspect Ratio */}
//           <div className={`w-full aspect-[1.586/1] rounded-xl p-4 text-white relative overflow-hidden shadow-xs flex flex-col justify-between transition-all duration-500 select-none ${
//             isCardBlocked 
//               ? 'from-[#2b080a] via-[#4a1014] to-[#1a0305] border border-red-900' 
//               : 'bg-linear-to-br from-[#061434] via-[#091f4d] to-[#040d24] border border-slate-900'
//           }`}>
//             <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-linear-to-l from-white/[0.04] to-transparent skew-x-12 pointer-events-none transform origin-top-right" />
            
//             {/* Header */}
//             <div className="flex justify-between items-start w-full relative z-10">
//               <div className="flex items-center gap-2">
//                 <Landmark size={14} className={isCardBlocked ? 'text-red-400' : 'text-slate-100'} />
//                 <div className="leading-tight">
//                   <h5 className="text-[9px] font-black tracking-widest text-white uppercase">Advocate</h5>
//                   <p className="text-[6px] text-white/50 tracking-wider font-bold uppercase">Identity Card</p>
//                 </div>
//               </div>
//               <div className={isCardBlocked ? 'text-red-500/40' : 'text-white/80'}>
//                 <Wifi size={16} className="rotate-90 transform" />
//               </div>
//             </div>

//             {/* Microchip, Photo, and QR row */}
//             <div className="relative h-12 w-full flex items-center justify-between z-10 px-0.5">
//               <div className="shrink-0">
//                 <div className="w-7.5 h-6 rounded bg-linear-to-br from-[#ffe082] via-[#ffd54f] to-[#c69a1c] relative p-0.5 border border-[#d4af37]/40 shadow-xs overflow-hidden">
//                   <div className="w-full h-[1px] bg-black/10 absolute top-1/2 left-0" />
//                   <div className="w-[1px] h-full bg-black/10 absolute left-1/3 top-0" />
//                   <div className="w-[1px] h-full bg-black/10 absolute left-2/3 top-0" />
//                 </div>
//               </div>

//               {/* Exact Center Shifting Avatar Ring */}
//               <div className="absolute right-14 bottom-0">
//                 <div className={`w-11 h-11 rounded-full border-1.5 bg-slate-100 flex items-center justify-center overflow-hidden shadow-xs relative ${
//                   isCardBlocked ? 'border-red-500/50' : 'border-white/90'
//                 }`}>
//                   <User size={24} className="text-slate-400 mt-2" />
//                   {isCardBlocked && (
//                     <div className="absolute inset-0 bg-red-950/60 flex items-center justify-center">
//                       <ShieldX size={12} className="text-red-400" />
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="shrink-0">
//                 <div className="w-8.5 h-8.5 bg-white p-0.5 rounded flex items-center justify-center shadow-xs">
//                   <QrCode size={30} className={isCardBlocked ? 'text-red-950' : 'text-[#061434]'} />
//                 </div>
//               </div>
//             </div>

//             {/* Footer metadata fields inside the card layer */}
//             <div className="w-full relative z-10 flex justify-between items-end border-t border-white/10 pt-1">
//               <div className="text-left min-w-0 flex-1 pr-2">
//                 <h6 className="text-[10px] font-extrabold tracking-wide text-white leading-none uppercase truncate">
//                   Adv. Rohit Sharma
//                 </h6>
//                 <p className="text-[7.5px] text-white/60 font-mono tracking-tight mt-0.5 truncate">
//                   MH/4789/2012
//                 </p>
//               </div>
//               <span className={`text-[6px] font-black px-1.5 py-0.5 rounded-xs uppercase tracking-wider shrink-0 border ${
//                 isCardBlocked ? 'bg-red-500/10 border-red-500/30 text-red-300' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
//               }`}>
//                 {isCardBlocked ? 'Blocked' : 'Active'}
//               </span>
//             </div>

//           </div>

//           {/* Sub-Card Structured Data Panels with proportional heights */}
//           <div className="space-y-1.5 mt-3 text-[11px] border-t border-slate-100 pt-2 font-medium">
//             <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
//               <div>
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card ID</span>
//                 <span className="font-mono text-slate-700 block truncate font-bold text-[10.5px]">AIC-IND-2025-123456</span>
//               </div>
//               <div>
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card Type</span>
//                 <span className="text-slate-700 block truncate font-bold text-[10.5px]">NFC + QR Hybrid</span>
//               </div>
              
//               <div>
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card Status</span>
//                 <span className={`font-black block truncate text-[10.5px] ${isCardBlocked ? 'text-red-600' : 'text-emerald-600'}`}>
//                   {isCardBlocked ? 'Suspended' : 'Active'}
//                 </span>
//               </div>
//               <div>
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Issue Date</span>
//                 <span className="text-slate-700 block truncate font-bold text-[10.5px]">01 Jan 2025</span>
//               </div>

//               <div>
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Expiry Date</span>
//                 <span className={`font-bold block truncate text-[10.5px] ${isCardBlocked ? 'text-red-500/70 line-through' : 'text-slate-700'}`}>
//                   31 Dec 2025
//                 </span>
//               </div>
//               <div>
//                 <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Security Level</span>
//                 <span className={`font-black block truncate text-[10.5px] ${isCardBlocked ? 'text-red-600' : 'text-blue-600'}`}>
//                   {isCardBlocked ? 'REVOKED' : 'High'}
//                 </span>
//               </div>
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
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch w-full">
      
      {/* 1. ADVOCATE PROFILE BLOCK */}
      <CardWrapper title="Advocate Profile">
        <div className="flex flex-col justify-between h-full min-h-[230px] w-full overflow-hidden">
          <div className="flex gap-4 items-start w-full">
            {/* Avatar container slot */}
            <div className="relative shrink-0">
              <div className="w-18 h-22 sm:w-20 sm:h-24 bg-slate-100 rounded-lg border border-slate-200 flex items-center justify-center overflow-hidden shadow-xs">
                <User size={38} className="text-slate-400 mt-4" />
              </div>
              <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] px-2.5 py-0.5 rounded font-bold uppercase tracking-wider shadow-xs border ${
                isCardBlocked 
                  ? 'bg-red-100 border-red-200 text-red-700' 
                  : 'bg-emerald-100 border-emerald-200 text-emerald-700'
              }`}>
                {isCardBlocked ? 'Suspended' : 'Active'}
              </span>
            </div>
            
            {/* Context details container */}
            <div className="space-y-1 min-w-0 flex-1">
              <div className="flex items-center gap-1 max-w-full">
                <h4 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight truncate">Adv. Rohit Sharma</h4>
                {!isCardBlocked && (
                  <CheckCircle size={14} className="text-blue-500 fill-blue-500 text-white shrink-0" />
                )}
              </div>
              
              <div className="text-[10px] sm:text-[11px] text-slate-500">
                <p className="font-medium">Enrollment No.</p>
                <p className="font-semibold text-slate-800 truncate">MH/4789/2012</p>
              </div>
              
              <div className="text-[10px] sm:text-[11px] text-slate-500">
                <p className="font-medium">Bar Council Reg. No.</p>
                <p className="font-semibold text-slate-800 truncate">M/12345/2012</p>
              </div>

              <p className="text-[9px] sm:text-[10px] text-slate-400 font-bold leading-tight pt-0.5">
                State Bar: <span className="text-slate-600 font-medium block truncate">Maharashtra Bar Council</span>
              </p>
            </div>
          </div>

          {/* Quick Metrics Multi-Row Responsive Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-t border-slate-100 pt-3 mt-4 text-center text-[10px] w-full">
            <div className="min-w-0 border-r border-slate-100 last:border-0 pb-1 sm:pb-0">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Practice Since</p>
              <p className="font-bold text-slate-800 mt-0.5">2012</p>
            </div>
            <div className="min-w-0 sm:border-r border-slate-100 last:border-0 pb-1 sm:pb-0">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Experience</p>
              <p className="font-bold text-slate-800 mt-0.5">12+ Years</p>
            </div>
            <div className="min-w-0 border-r border-slate-100 last:border-0">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Date of Enroll</p>
              <p className="font-bold text-slate-800 mt-0.5 whitespace-nowrap truncate">15 Aug 2012</p>
            </div>
            <div className="min-w-0">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Renewal Valid</p>
              <p className={`font-bold mt-0.5 truncate ${isCardBlocked ? 'text-red-600 line-through' : 'text-amber-600'}`}>
                31 Dec 2025
              </p>
            </div>
          </div>
        </div>
      </CardWrapper>

      {/* 2. PROFESSIONAL CLASSIFICATION MODULE */}
      <CardWrapper title="Professional Classification">
        {/* Responsive dual-column flow grid targeting text wrap safety limits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full content-start overflow-y-auto max-h-[220px] pr-1">
          {[
            { label: 'Advocate', sub: 'Enrolled', active: !isCardBlocked, icon: User, color: 'text-amber-600 bg-amber-50/60 border-amber-200' },
            { label: 'Senior Advocate', sub: 'Not Enrolled', active: false, icon: Award, color: 'text-slate-400 bg-slate-50 border-slate-200' },
            { label: 'Advocate-on-Record', sub: 'Eligible', active: !isCardBlocked, icon: Scale, color: 'text-blue-600 bg-blue-50/60 border-blue-200' },
            { label: 'Law Officer', sub: 'Registered', active: !isCardBlocked, icon: Landmark, color: 'text-emerald-600 bg-emerald-50/60 border-emerald-200' },
            { label: 'Government Counsel', sub: 'Registered', active: !isCardBlocked, icon: FileText, color: 'text-sky-600 bg-sky-50/60 border-sky-200' },
            { label: 'Public Prosecutor', sub: 'Not Regist.', active: false, icon: Shield, color: 'text-slate-400 bg-slate-50 border-slate-200' },
            { label: 'Legal Consultant', sub: 'Registered', active: !isCardBlocked, icon: User, color: 'text-indigo-600 bg-indigo-50/70 border-indigo-200' },
            { label: 'Corporate Counsel', sub: 'Registered', active: !isCardBlocked, icon: ShieldAlert, color: 'text-teal-600 bg-teal-50/70 border-teal-200' },
          ].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className={`px-2 py-1.5 rounded-lg border flex items-center gap-2 justify-start transition-all min-w-0 ${item.color}`}
              >
                <IconComponent size={13} className="shrink-0 opacity-95" />
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold leading-tight text-slate-800 truncate w-full">{item.label}</p>
                  <p className="text-[8px] font-medium opacity-75 mt-0.5 truncate w-full">
                    {isCardBlocked && item.active ? 'Suspended' : item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardWrapper>

      {/* 3. BAR COUNCIL VERIFICATION MODULE */}
      <CardWrapper title="Bar Council Verification" badge={isCardBlocked ? "Suspended" : "Verified"}>
        <div className="space-y-2 text-xs h-full flex flex-col justify-between min-h-[200px] sm:min-h-[220px] w-full">
          {[
            { label: 'Bar Council Verification', status: isCardBlocked ? 'Suspended' : 'Verified', color: isCardBlocked ? 'text-red-600 font-bold' : 'text-emerald-600 font-bold' },
            { label: 'Enrollment Date', status: '15 Aug 2012', color: 'text-slate-700 font-medium' },
            { label: 'License Validity', status: '31 Dec 2025', color: isCardBlocked ? 'text-slate-400 line-through' : 'text-slate-700 font-bold' },
            { label: 'Renewal Status', status: isCardBlocked ? 'Hold' : 'Up To Date', color: isCardBlocked ? 'text-red-500' : 'text-emerald-600 font-semibold' },
            { label: 'Continuing Legal Education', status: isCardBlocked ? 'Suspended' : 'Completed', color: isCardBlocked ? 'text-slate-400' : 'text-blue-600 font-medium' },
            { label: 'Disciplinary Record', status: isCardBlocked ? 'Review Pending' : 'No Record Found', color: isCardBlocked ? 'text-amber-600' : 'text-emerald-600 font-medium' },
          ].map((row, idx) => (
            <div key={idx} className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-0 text-[10px] sm:text-[11px] w-full gap-2">
              <div className="flex items-center gap-1.5 text-slate-500 min-w-0 flex-1">
                <CheckCircle size={12} className={`shrink-0 ${isCardBlocked ? 'text-slate-300' : 'text-emerald-500 fill-emerald-50'}`} />
                <span className="truncate font-medium text-slate-600">{row.label}</span>
              </div>
              <span className={`text-[9px] sm:text-[10px] shrink-0 font-mono text-right ${row.color}`}>{row.status}</span>
            </div>
          ))}
        </div>
      </CardWrapper>

      {/* 4. DIGITAL NFC IDENTITY SMART CARD VIEW */}
      <CardWrapper title="NFC Identity Card">
        <div className="flex flex-col h-full justify-between min-h-[220px] w-full">
          
          {/* Main Card graphic layered canvas */}
          <div className={`w-full aspect-[1.586/1] rounded-xl p-3.5 text-white relative overflow-hidden shadow-xs flex flex-col justify-between transition-all duration-500 select-none ${
            isCardBlocked 
              ? 'from-[#2b080a] via-[#4a1014] to-[#1a0305] border border-red-900 shadow-sm' 
              : 'bg-linear-to-br from-[#061434] via-[#091f4d] to-[#040d24] border border-slate-900 shadow-sm'
          }`}>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-linear-to-l from-white/[0.04] to-transparent skew-x-12 pointer-events-none transform origin-top-right" />
            
            {/* Header properties */}
            <div className="flex justify-between items-start w-full relative z-10">
              <div className="flex items-center gap-1.5">
                <Landmark size={13} className={isCardBlocked ? 'text-red-400' : 'text-slate-100'} />
                <div className="leading-tight">
                  <h5 className="text-[8px] sm:text-[9px] font-black tracking-widest text-white uppercase">Advocate</h5>
                  <p className="text-[5px] sm:text-[6px] text-white/50 tracking-wider font-bold uppercase">Identity Card</p>
                </div>
              </div>
              <div className={isCardBlocked ? 'text-red-500/40' : 'text-white/80'}>
                <Wifi size={14} className="rotate-90 transform" />
              </div>
            </div>

            {/* Absolute element spatial placement slot row */}
            <div className="relative h-11 w-full flex items-center justify-between z-10 px-0.5">
              <div className="shrink-0">
                <div className="w-7 h-5.5 rounded-sm bg-linear-to-br from-[#ffe082] via-[#ffd54f] to-[#c69a1c] relative p-0.5 border border-[#d4af37]/30 overflow-hidden">
                  <div className="w-full h-[1px] bg-black/10 absolute top-1/2 left-0" />
                  <div className="w-[1px] h-full bg-black/10 absolute left-1/3 top-0" />
                </div>
              </div>

              {/* Centered User ring node offset */}
              <div className="absolute right-12 sm:right-14 bottom-0">
                <div className={`w-10 h-10 rounded-full border bg-slate-100 flex items-center justify-center overflow-hidden shadow-xs relative ${
                  isCardBlocked ? 'border-red-500/40' : 'border-white/80'
                }`}>
                  <User size={22} className="text-slate-400 mt-2" />
                  {isCardBlocked && (
                    <div className="absolute inset-0 bg-red-950/60 flex items-center justify-center">
                      <ShieldX size={10} className="text-red-400" />
                    </div>
                  )}
                </div>
              </div>

              <div className="shrink-0">
                <div className="w-8 h-8 bg-white p-0.5 rounded flex items-center justify-center">
                  <QrCode size={26} className={isCardBlocked ? 'text-red-950' : 'text-[#061434]'} />
                </div>
              </div>
            </div>

            {/* Inner bottom data tags */}
            <div className="w-full relative z-10 flex justify-between items-end border-t border-white/10 pt-1">
              <div className="text-left min-w-0 flex-1 pr-2">
                <h6 className="text-[9px] sm:text-[10px] font-bold tracking-wide text-white leading-none uppercase truncate">
                  Adv. Rohit Sharma
                </h6>
                <p className="text-[7px] text-white/60 font-mono tracking-tight mt-0.5 truncate">
                  MH/4789/2012
                </p>
              </div>
              <span className={`text-[5px] sm:text-[6px] font-black px-1.5 py-0.5 rounded-xs uppercase tracking-wider shrink-0 border ${
                isCardBlocked ? 'bg-red-500/10 border-red-500/30 text-red-300' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
              }`}>
                {isCardBlocked ? 'Blocked' : 'Active'}
              </span>
            </div>
          </div>

          {/* Core Table Grid Elements Metadata specs panels */}
          <div className="space-y-1 mt-3 text-[10px] sm:text-[11px] border-t border-slate-100 pt-2 font-medium w-full">
            <div className="grid grid-cols-2 gap-x-3 gap-y-1">
              <div>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card ID</span>
                <span className="font-mono text-slate-700 block truncate font-bold">AIC-IND-2025-123456</span>
              </div>
              <div>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card Type</span>
                <span className="text-slate-700 block truncate font-bold">NFC + QR Hybrid</span>
              </div>
              
              <div className="pt-0.5">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card Status</span>
                <span className={`font-black block truncate ${isCardBlocked ? 'text-red-600' : 'text-emerald-600'}`}>
                  {isCardBlocked ? 'Suspended' : 'Active'}
                </span>
              </div>
              <div className="pt-0.5">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Issue Date</span>
                <span className="text-slate-700 block truncate font-bold">01 Jan 2025</span>
              </div>

              <div className="pt-0.5">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Expiry Date</span>
                <span className={`font-bold block truncate ${isCardBlocked ? 'text-red-500/70 line-through' : 'text-slate-700'}`}>
                  31 Dec 2025
                </span>
              </div>
              <div className="pt-0.5">
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Security Level</span>
                <span className="text-slate-700 block truncate font-black">{isCardBlocked ? 'REVOKED' : 'High'}</span>
              </div>
            </div>
          </div>

        </div>
      </CardWrapper>

    </div>
  );
}