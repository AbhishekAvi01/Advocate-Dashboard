// import React from 'react';
// import CardWrapper from '../ui/CardWrapper';
// import { 
//   FileText, Download, Wallet, ArrowUpRight, ArrowDownLeft, 
//   Users, Users2, Building2, UserPlus, GitFork, ShieldAlert 
// } from 'lucide-react';

// export default function BottomUtilitySection() {
//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 items-stretch mt-5">
      
    
//       <CardWrapper title="Legal Document Vault">
//         <div className="space-y-2 h-full flex flex-col justify-between">
//           <div className="space-y-2">
//             {[
//               { name: 'Enrollment Certificate', meta: 'PDF • 15 Aug 2012' },
//               { name: 'Bar Council Certificate', meta: 'PDF • 15 Aug 2012' },
//               { name: 'Practice Certificate', meta: 'PDF • 20 Aug 2012' },
//               { name: 'Court Authorizations', meta: 'PDF • 10 Jan 2025' },
//               { name: 'Professional License', meta: 'PDF • 01 Jan 2025' },
//             ].map((doc, idx) => (
//               <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100 hover:bg-slate-100/60 transition-colors">
//                 <div className="flex items-center gap-2.5">
//                   <FileText size={15} className="text-red-500" />
//                   <div>
//                     <p className="text-xs font-bold text-slate-800 leading-tight">{doc.name}</p>
//                     <p className="text-[9px] text-slate-400 font-medium">{doc.meta}</p>
//                   </div>
//                 </div>
//                 <button className="text-slate-400 hover:text-slate-700 transition-colors p-1">
//                   <Download size={14} />
//                 </button>
//               </div>
//             ))}
//           </div>
//           <button className="text-[11px] font-bold text-blue-600 text-center mt-3 hover:underline w-full block border-t border-slate-100 pt-2">
//             View All Documents
//           </button>
//         </div>
//       </CardWrapper>

    
//       <CardWrapper title="Wallet & Payments">
//         <div className="flex flex-col h-full justify-between">
//           <div className="bg-emerald-50/60 border border-emerald-100 p-3 rounded-lg flex items-center justify-between">
//             <div>
//               <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider">Available Balance</p>
//               <h4 className="text-lg font-black text-emerald-800 mt-0.5">₹ 5,250.00</h4>
//             </div>
//             <div className="bg-emerald-600 text-white p-1.5 rounded-md">
//               <Wallet size={16} />
//             </div>
//           </div>

//           <div className="space-y-2 mt-3 flex-1">
//             {[
//               { type: 'Membership Fees', amount: '₹ 2,000.00', out: true },
//               { type: 'Bar Council Payments', amount: '₹ 1,200.00', out: true },
//               { type: 'Court Fees', amount: '₹ 1,750.00', out: true },
//               { type: 'Other Payments', amount: '₹ 300.00', out: true },
//             ].map((pay, idx) => (
//               <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100 last:border-0">
//                 <div className="flex items-center gap-2 text-slate-600 font-medium">
//                   <span className="w-1.5 h-1.5 bg-slate-400 rounded-full" />
//                   <span>{pay.type}</span>
//                 </div>
//                 <span className="font-mono font-bold text-slate-800">{pay.amount}</span>
//               </div>
//             ))}
//           </div>

//           <div className="grid grid-cols-2 gap-2 mt-3 border-t border-slate-100 pt-2">
//             <button className="text-[10px] font-bold text-blue-600 bg-blue-50 py-1.5 rounded text-center hover:bg-blue-100 transition-colors">
//               Add Money
//             </button>
//             <button className="text-[10px] font-bold text-slate-600 bg-slate-50 py-1.5 rounded text-center hover:bg-slate-100 transition-colors">
//               Transaction History
//             </button>
//           </div>
//         </div>
//       </CardWrapper>

    
//       <CardWrapper title="Professional Network">
//         <div className="space-y-2 h-full flex flex-col justify-between">
//           <div className="space-y-2">
//             {[
//               { title: 'Senior Advocate', desc: 'Adv. Sandeep Mehta', status: 'Linked', icon: Users, color: 'border-blue-100 bg-blue-50/40 text-blue-700' },
//               { title: 'Chamber / Law Firm', desc: 'Mehta & Associates', status: 'Associated', icon: Building2, color: 'border-indigo-100 bg-indigo-50/40 text-indigo-700' },
//               { title: 'Bar Association', desc: 'Mumbai Bar Association', status: 'Active Member', icon: Users2, color: 'border-emerald-100 bg-emerald-50/40 text-emerald-700' },
//               { title: 'Junior Advocates (3)', desc: 'Linked', status: '3 Members', icon: UserPlus, color: 'border-slate-100 bg-slate-50 text-slate-700' },
//             ].map((item, idx) => {
//               const Icon = item.icon;
//               return (
//                 <div key={idx} className={`p-2 rounded-lg border flex items-center justify-between ${item.color}`}>
//                   <div className="flex items-center gap-2.5">
//                     <Icon size={15} />
//                     <div>
//                       <p className="text-[10px] font-bold tracking-tight text-slate-500 uppercase">{item.title}</p>
//                       <p className="text-xs font-bold text-slate-800 leading-tight">{item.desc}</p>
//                     </div>
//                   </div>
//                   <span className="text-[9px] font-bold opacity-80 uppercase tracking-wider">{item.status}</span>
//                 </div>
//               );
//             })}
//           </div>
//           <button className="text-[11px] font-bold text-blue-600 text-center mt-2 hover:underline w-full block">
//             View Full Network
//           </button>
//         </div>
//       </CardWrapper>

    
//       <CardWrapper title="Senior-Junior Mapping">
//         <div className="h-full flex flex-col justify-between">
//           <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-lg text-center relative">
//             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mx-auto mb-1" />
//             <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Senior Advocate</p>
//             <p className="text-xs font-bold text-slate-800">Adv. Sandeep Mehta</p>
            
            
//             <div className="w-0.5 h-3 bg-slate-200 mx-auto mt-2" />
//           </div>

//           <div className="grid grid-cols-4 gap-1 relative mt-1">
//             <div className="absolute top-0 left-1/8 right-1/8 h-0.5 bg-slate-200" />
//             {[
//               { name: 'Adv. Ankit Verma', role: 'Junior' },
//               { name: 'Adv. Priya Nair', role: 'Junior' },
//               { name: 'Adv. Kiran Joshi', role: 'Junior' },
//               { name: 'Adv. Ramesh K', role: 'Junior' },
//             ].map((jr, idx) => (
//               <div key={idx} className="bg-slate-50 border border-slate-100/80 p-1.5 rounded text-center flex flex-col justify-between pt-2">
//                 <div className="w-0.5 h-1.5 bg-slate-200 mx-auto -mt-2 mb-1" />
//                 <p className="text-[9px] font-bold text-slate-800 tracking-tight leading-tight line-clamp-2">{jr.name}</p>
//                 <span className="text-[8px] bg-slate-200/60 text-slate-500 font-semibold rounded mt-1 block">
//                   {jr.role}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="mt-4 bg-slate-50 border border-slate-100 p-2 rounded-lg flex items-center justify-between text-xs">
//             <div className="flex items-center gap-2 text-slate-600 font-medium">
//               <GitFork size={13} className="text-slate-400" />
//               <span>Chamber Staff</span>
//             </div>
//             <span className="text-[11px] font-bold text-slate-800">3 Members</span>
//           </div>

//           <button className="text-[11px] font-bold text-blue-600 text-center mt-2 hover:underline w-full block">
//             Manage Network
//           </button>
//         </div>
//       </CardWrapper>

//     </div>
//   );
// }


//----------------------------------------------------

// import React from 'react';
// import CardWrapper from '../ui/CardWrapper';
// import { FileText, Download, Wallet, Users, Building2, Users2, UserPlus, GitFork, Loader2 } from 'lucide-react';

// export default function BottomUtilitySection({ 
//   walletBalance, transactions, documents, onAddMoneyClick, onDownloadClick, activeDownloadDoc 
// }) {
//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 items-stretch">
      
//       {/* 1. LEGAL DOCUMENT VAULT WITH SIMULATED LOADER */}
//       <CardWrapper title="Legal Document Vault">
//         <div className="space-y-2 h-full flex flex-col justify-between">
//           <div className="space-y-2">
//             {documents.map((doc) => {
//               const isCurrentlyDownloading = activeDownloadDoc?.id === doc.id;
//               return (
//                 <div key={doc.id} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
//                   <div className="flex items-center gap-2.5 min-w-0">
//                     <FileText size={15} className="text-red-500 shrink-0" />
//                     <div className="min-w-0">
//                       <p className="text-xs font-bold text-slate-800 leading-tight truncate">{doc.name}</p>
//                       <p className="text-[9px] text-slate-400 font-medium">{doc.meta} • {doc.size}</p>
//                     </div>
//                   </div>
//                   <button 
//                     onClick={() => !isCurrentlyDownloading && onDownloadClick(doc)}
//                     disabled={isCurrentlyDownloading}
//                     className="text-slate-400 hover:text-blue-600 transition-colors p-1 disabled:opacity-50"
//                   >
//                     {isCurrentlyDownloading ? (
//                       <Loader2 size={14} className="animate-spin text-blue-500" />
//                     ) : (
//                       <Download size={14} />
//                     )}
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//           <button className="text-[11px] font-bold text-blue-600 text-center mt-3 hover:underline w-full block border-t border-slate-100 pt-2">
//             View All Archived Vault Files
//           </button>
//         </div>
//       </CardWrapper>

//       {/* 2. LIVE WALLET & ACC TRANSACTION PAYMENTS */}
//       <CardWrapper title="Wallet & Payments">
//         <div className="flex flex-col h-full justify-between">
//           <div className="bg-emerald-50/60 border border-emerald-100 p-3 rounded-lg flex items-center justify-between">
//             <div>
//               <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider">Available Balance</p>
//               <h4 className="text-lg font-black text-emerald-800 mt-0.5 font-mono">
//                 ₹ {walletBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
//               </h4>
//             </div>
//             <div className="bg-emerald-600 text-white p-1.5 rounded-md">
//               <Wallet size={16} />
//             </div>
//           </div>

//           {/* Dynamic real-time rendered transactions listing loop */}
//           <div className="space-y-1.5 mt-3 flex-1 max-h-[140px] overflow-y-auto pr-1">
//             {transactions.map((pay) => (
//               <div key={pay.id} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-100 last:border-0 animate-in slide-in-from-top-1 duration-200">
//                 <div className="flex items-center gap-2 text-slate-600 font-medium truncate">
//                   <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${pay.type.includes('Added') ? 'bg-emerald-500' : 'bg-slate-400'}`} />
//                   <span className="truncate">{pay.type}</span>
//                 </div>
//                 <span className={`font-mono font-bold shrink-0 ${pay.type.includes('Added') ? 'text-emerald-600' : 'text-slate-800'}`}>
//                   {pay.type.includes('Added') ? '+' : ''}₹{pay.amount}
//                 </span>
//               </div>
//             ))}
//           </div>

//           <div className="grid grid-cols-2 gap-2 mt-3 border-t border-slate-100 pt-2">
//             <button 
//               onClick={onAddMoneyClick}
//               className="text-[10px] font-bold text-blue-600 bg-blue-50 py-1.5 rounded text-center hover:bg-blue-100 transition-colors shadow-xs"
//             >
//               Add Money
//             </button>
//             <button className="text-[10px] font-bold text-slate-600 bg-slate-50 py-1.5 rounded text-center hover:bg-slate-100 transition-colors">
//               Transaction History
//             </button>
//           </div>
//         </div>
//       </CardWrapper>

//       {/* 3. PROFESSIONAL NETWORK */}
//       <CardWrapper title="Professional Network">
//         <div className="space-y-2 h-full flex flex-col justify-between">
//           <div className="space-y-2">
//             {[
//               { title: 'Senior Advocate', desc: 'Adv. Sandeep Mehta', status: 'Linked', icon: Users, color: 'border-blue-100 bg-blue-50/40 text-blue-700' },
//               { title: 'Chamber / Law Firm', desc: 'Mehta & Associates', status: 'Associated', icon: Building2, color: 'border-indigo-100 bg-indigo-50/40 text-indigo-700' },
//               { title: 'Bar Association', desc: 'Mumbai Bar Association', status: 'Active Member', icon: Users2, color: 'border-emerald-100 bg-emerald-50/40 text-emerald-700' },
//               { title: 'Junior Advocates (3)', desc: 'Linked', status: '3 Members', icon: UserPlus, color: 'border-slate-100 bg-slate-50 text-slate-700' },
//             ].map((item, idx) => {
//               const Icon = item.icon;
//               return (
//                 <div key={idx} className={`p-2 rounded-lg border flex items-center justify-between ${item.color}`}>
//                   <div className="flex items-center gap-2.5 min-w-0">
//                     <Icon size={14} className="shrink-0" />
//                     <div className="min-w-0">
//                       <p className="text-[9px] font-bold tracking-tight text-slate-400 uppercase leading-none">{item.title}</p>
//                       <p className="text-xs font-bold text-slate-800 leading-tight truncate mt-0.5">{item.desc}</p>
//                     </div>
//                   </div>
//                   <span className="text-[8px] font-extrabold opacity-90 uppercase tracking-wider bg-white/80 px-1 py-0.5 rounded shrink-0">{item.status}</span>
//                 </div>
//               );
//             })}
//           </div>
//           <button className="text-[11px] font-bold text-blue-600 text-center mt-2 hover:underline w-full block">
//             View Full Matrix Network
//           </button>
//         </div>
//       </CardWrapper>

//       {/* 4. SENIOR-JUNIOR MAPPING TREE */}
//       <CardWrapper title="Senior-Junior Mapping">
//         <div className="h-full flex flex-col justify-between text-center">
//           <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg relative">
//             <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mx-auto mb-1" />
//             <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Senior Consultant Counsel</p>
//             <p className="text-xs font-bold text-slate-800 truncate">Adv. Sandeep Mehta</p>
//             <div className="w-0.5 h-3 bg-slate-200 mx-auto mt-1" />
//           </div>

//           <div className="grid grid-cols-4 gap-1 relative mt-0.5">
//             {[
//               { name: 'Adv. Ankit V.' },
//               { name: 'Adv. Priya N.' },
//               { name: 'Adv. Kiran J.' },
//               { name: 'Adv. Ramesh K' },
//             ].map((jr, idx) => (
//               <div key={idx} className="bg-slate-50 border border-slate-100/80 p-1 rounded flex flex-col justify-between pt-1.5">
//                 <div className="w-0.5 h-1.5 bg-slate-200 mx-auto -mt-2 mb-1" />
//                 <p className="text-[9px] font-bold text-slate-800 tracking-tight leading-tight line-clamp-2">{jr.name}</p>
//                 <span className="text-[8px] bg-slate-200/50 text-slate-500 font-bold rounded mt-1 block py-0.5">Junior</span>
//               </div>
//             ))}
//           </div>

//           <div className="mt-3 bg-slate-50 border border-slate-100 p-1.5 rounded-lg flex items-center justify-between text-xs">
//             <div className="flex items-center gap-1.5 text-slate-600 font-medium">
//               <GitFork size={13} className="text-slate-400" />
//               <span>Chamber Staff Hierarchy</span>
//             </div>
//             <span className="text-[11px] font-bold text-slate-800">3 Operators</span>
//           </div>
//         </div>
//       </CardWrapper>

//     </div>
//   );
// }




import React from 'react';
import CardWrapper from '../ui/CardWrapper';
import { FileText, Download, Wallet, Users, Building2, Users2, UserPlus, GitFork, Loader2 } from 'lucide-react';

export default function BottomUtilitySection({ 
  walletBalance, transactions, documents, onAddMoneyClick, onDownloadClick, activeDownloadDoc 
}) {
  return (
    /* Squeezed narrow wrapper fixed with a highly fluid, fully responsive responsive grid layout */
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch w-full">
      
      {/* 1. LEGAL DOCUMENT VAULT */}
      <CardWrapper title="Legal Document Vault">
        <div className="space-y-3 h-full flex flex-col justify-between min-h-[220px]">
          <div className="space-y-2.5">
            {documents.map((doc) => {
              const isCurrentlyDownloading = activeDownloadDoc?.id === doc.id;
              return (
                <div key={doc.id} className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 min-w-0 gap-3">
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <FileText size={16} className="text-red-500 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-800 leading-tight truncate">{doc.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate">{doc.meta} • {doc.size}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => !isCurrentlyDownloading && onDownloadClick(doc)}
                    disabled={isCurrentlyDownloading}
                    className="text-slate-400 hover:text-blue-600 transition-colors p-1 shrink-0 disabled:opacity-50"
                  >
                    {isCurrentlyDownloading ? (
                      <Loader2 size={14} className="animate-spin text-blue-500" />
                    ) : (
                      <Download size={14} />
                    )}
                  </button>
                </div>
              );
            })}
          </div>
          <button className="text-[11px] font-bold text-blue-600 text-center mt-3 hover:underline w-full block border-t border-slate-100 pt-2 shrink-0">
            View All Archived Vault Files
          </button>
        </div>
      </CardWrapper>

      {/* 2. WALLET & PAYMENTS ACCOUNT LEDGER */}
      <CardWrapper title="Wallet & Payments">
        <div className="flex flex-col h-full justify-between min-h-[220px]">
          <div className="bg-emerald-50/60 border border-emerald-100 p-3.5 rounded-lg flex items-center justify-between w-full">
            <div className="min-w-0">
              <p className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider">Available Balance</p>
              <h4 className="text-xl font-black text-emerald-800 mt-0.5 font-mono truncate">
                ₹ {walletBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
              </h4>
            </div>
            <div className="bg-emerald-600 text-white p-2 rounded-md shrink-0 shadow-xs">
              <Wallet size={16} />
            </div>
          </div>

          {/* Real-time rendered transactions listing loop with clean text spacing */}
          <div className="space-y-2 mt-3 flex-1 overflow-y-auto max-h-[120px] pr-1 w-full">
            {transactions.map((pay) => (
              <div key={pay.id} className="flex items-center justify-between text-xs py-1 border-b border-slate-50 last:border-0 gap-3 w-full">
                <div className="flex items-center gap-2 text-slate-600 font-medium min-w-0 flex-1">
                  <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${pay.type.includes('Added') ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                  <span className="truncate">{pay.type}</span>
                </div>
                <span className={`font-mono font-bold shrink-0 text-right ${pay.type.includes('Added') ? 'text-emerald-600' : 'text-slate-800'}`}>
                  {pay.type.includes('Added') ? '+' : ''}₹{pay.amount}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 mt-3 border-t border-slate-100 pt-2 shrink-0">
            <button 
              onClick={onAddMoneyClick}
              className="text-[10px] font-bold text-blue-600 bg-blue-50 py-2 rounded text-center hover:bg-blue-100 transition-colors"
            >
              Add Money
            </button>
            <button className="text-[10px] font-bold text-slate-600 bg-slate-50 py-2 rounded text-center hover:bg-slate-100 transition-colors">
              Ledger History
            </button>
          </div>
        </div>
      </CardWrapper>

      {/* 3. PROFESSIONAL NETWORK */}
      <CardWrapper title="Professional Network">
        <div className="space-y-2 h-full flex flex-col justify-between min-h-[220px]">
          <div className="space-y-2 w-full">
            {[
              { title: 'Senior Advocate', desc: 'Adv. Sandeep Mehta', status: 'Linked', icon: Users, color: 'border-blue-100 bg-blue-50/40 text-blue-700' },
              { title: 'Chamber / Law Firm', desc: 'Mehta & Associates', status: 'Associated', icon: Building2, color: 'border-indigo-100 bg-indigo-50/40 text-indigo-700' },
              { title: 'Bar Association', desc: 'Mumbai Bar Association', status: 'Active', icon: Users2, color: 'border-emerald-100 bg-emerald-50/40 text-emerald-700' },
              { title: 'Junior Advocates (3)', desc: 'Linked', status: '3 Members', icon: UserPlus, color: 'border-slate-100 bg-slate-50 text-slate-700' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className={`p-2 rounded-lg border flex items-center justify-between min-w-0 gap-3 ${item.color}`}>
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <Icon size={14} className="shrink-0" />
                    <div className="min-w-0 flex-1">
                      <p className="text-[8px] font-bold tracking-tight opacity-60 uppercase leading-none">{item.title}</p>
                      <p className="text-xs font-bold text-slate-800 leading-tight truncate mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                  <span className="text-[8px] font-extrabold bg-white/90 px-1.5 py-0.5 rounded shadow-2xs shrink-0 uppercase tracking-wider">{item.status}</span>
                </div>
              );
            })}
          </div>
          <button className="text-[11px] font-bold text-blue-600 text-center mt-2 hover:underline w-full block shrink-0">
            View Full Matrix Network
          </button>
        </div>
      </CardWrapper>

      {/* 4. SENIOR-JUNIOR MAPPING TREE */}
      <CardWrapper title="Senior-Junior Mapping">
        <div className="h-full flex flex-col justify-between min-h-[220px] w-full">
          <div className="bg-slate-50 border border-slate-100 p-2 rounded-lg text-center w-full shrink-0">
            <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wider">Senior Consultant Counsel</p>
            <p className="text-xs font-bold text-slate-800 truncate mt-0.5">Adv. Sandeep Mehta</p>
            <div className="w-0.5 h-2.5 bg-slate-200 mx-auto mt-1" />
          </div>

          <div className="grid grid-cols-4 gap-1.5 mt-1 w-full">
            {[
              { name: 'Adv. Ankit' },
              { name: 'Adv. Priya' },
              { name: 'Adv. Kiran' },
              { name: 'Adv. Ramesh' },
            ].map((jr, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-1 rounded text-center min-w-0 flex flex-col justify-between min-h-[42px]">
                <p className="text-[9px] font-bold text-slate-800 tracking-tighter leading-tight truncate w-full">{jr.name}</p>
                <span className="text-[7.5px] bg-slate-200/60 text-slate-500 font-extrabold rounded-sm mt-1 block py-0.5 uppercase tracking-tighter shrink-0">Jr</span>
              </div>
            ))}
          </div>

          <div className="mt-3 bg-slate-50 border border-slate-100 p-2 rounded-lg flex items-center justify-between text-xs w-full shrink-0">
            <div className="flex items-center gap-1.5 text-slate-600 font-medium min-w-0">
              <GitFork size={13} className="text-slate-400 shrink-0" />
              <span className="truncate">Chamber Staff Hierarchy</span>
            </div>
            <span className="text-[10px] font-bold text-slate-800 shrink-0">3 Ops</span>
          </div>
        </div>
      </CardWrapper>

    </div>
  );
}