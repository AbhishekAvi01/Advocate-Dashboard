// import React, { useState } from 'react';
// import { useCourtSystem } from '../context/CourtContext';
// import { 
//   Building2, Search, Filter, Calendar, FileText, Scale, 
//   Download, Upload, AlertCircle, PlusCircle, ExternalLink, 
//   Clock, CheckCircle2, User, ChevronRight, X, ArrowUpDown, Bell, Info
// } from 'lucide-react';

// export default function CourtAccessPage() {
//   const { 
//     courts, cases, notifications, documents, 
//     markNotificationRead, deleteNotification, addCase, uploadDocument 
//   } = useCourtSystem();

//   // Component Control States
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCourtType, setSelectedCourtType] = useState('All');
//   const [activeModal, setActiveModal] = useState(null); // { type, data }
//   const [tableSearch, setTableSearch] = useState('');
//   const [tableStatusFilter, setTableStatusFilter] = useState('All');
//   const [sortField, setSortField] = useState('time');
//   const [sortDirection, setSortDirection] = useState('asc');
//   const [currentPage, setCurrentPage] = useState(1);
//   const rowsPerPage = 2;

//   // Form Fields State Structures
//   const [newCaseForm, setNewCaseForm] = useState({ caseNumber: '', cnr: '', clientName: '', courtName: '', judge: '', time: '10:00 AM', type: '', stage: '', status: 'Today' });
//   const [newDocForm, setNewDocForm] = useState({ name: '', type: 'Orders', caseNumber: '', size: '1.5 MB' });
//   const [selectedCalendarDay, setSelectedCalendarDay] = useState(19);

//   // --- Real-time Filter & Search Architecture ---
//   const filteredCourts = courts.filter(court => {
//     const matchesSearch = court.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                           court.jurisdiction.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesType = selectedCourtType === 'All' || court.type === selectedCourtType;
//     return matchesSearch && matchesType;
//   });

//   // Table computations
//   const sortedAndFilteredCases = cases
//     .filter(c => {
//       const matchesSearch = c.caseNumber.toLowerCase().includes(tableSearch.toLowerCase()) ||
//                             c.clientName.toLowerCase().includes(tableSearch.toLowerCase()) ||
//                             c.cnr.toLowerCase().includes(tableSearch.toLowerCase());
//       const matchesStatus = tableStatusFilter === 'All' || c.status === tableStatusFilter;
//       return matchesSearch && matchesStatus;
//     })
//     .sort((a, b) => {
//       let comparison = a[sortField].localeCompare(b[sortField]);
//       return sortDirection === 'asc' ? comparison : -comparison;
//     });

//   const totalPages = Math.ceil(sortedAndFilteredCases.length / rowsPerPage);
//   const paginatedCases = sortedAndFilteredCases.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

//   // Counters Metrics
//   const activeCasesCount = cases.length;
//   const todayHearingsCount = cases.filter(c => c.status === 'Today').length;
//   const pendingOrdersCount = cases.filter(c => c.status === 'Pending Order').length;
//   const unreadAlertsCount = notifications.filter(n => !n.read).length;

//   const handleSort = (field) => {
//     if (sortField === field) {
//       setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortField(field);
//       setSortDirection('asc');
//     }
//   };

//   return (
//     <div className="space-y-6 w-full pb-12 animate-in fade-in duration-300 text-slate-800">
      
//       {/* 1. OVERVIEW DATA METRICS STRIP */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">
//         {[
//           { title: 'Active Briefs Case Load', count: activeCasesCount, sub: 'Total System Records', color: 'border-blue-200 bg-blue-50/50 text-blue-700' },
//           { title: "Today's Listed Hearings", count: todayHearingsCount, sub: 'Immediate Court Appearances', color: 'border-amber-200 bg-amber-50/50 text-amber-800' },
//           { title: 'Pending Judgments/Orders', count: pendingOrdersCount, sub: 'Awaiting Verification', color: 'border-purple-200 bg-purple-50/50 text-purple-700' },
//           { title: 'Active Network Node Alerts', count: unreadAlertsCount, sub: 'Action Required Logs', color: 'border-emerald-200 bg-emerald-50/50 text-emerald-700' }
//         ].map((card, i) => (
//           <div key={i} className={`p-5 rounded-xl border flex flex-col justify-between shadow-2xs ${card.color}`}>
//             <span className="text-[10px] uppercase font-black tracking-wider opacity-75">{card.title}</span>
//             <div className="flex items-baseline gap-2 mt-2">
//               <span className="text-3xl font-black font-mono">{card.count}</span>
//               <span className="text-[11px] font-medium opacity-80">{card.sub}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 2. COURT DIRECTORY & SEARCH REGISTRY */}
//       <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
//         <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
//           <div>
//             <h3 className="text-sm font-black uppercase tracking-wider text-slate-900">SMART JUDICIARY SECURITY CLEARING HUB</h3>
//             <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time status routing nodes across statutory legal bodies.</p>
//           </div>
          
//           {/* Controls Bar */}
//           <div className="flex flex-wrap items-center gap-2">
//             <div className="relative">
//               <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
//               <input 
//                 type="text" 
//                 placeholder="Search courts, jurisdiction..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-lg text-slate-700 focus:outline-hidden focus:border-blue-500"
//               />
//             </div>
//             <select
//               value={selectedCourtType}
//               onChange={(e) => setSelectedCourtType(e.target.value)}
//               className="p-1.5 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:outline-hidden"
//             >
//               {['All', 'Supreme Court', 'High Courts', 'District Courts', 'NCLT', 'NCLAT', 'Family Courts'].map(t => (
//                 <option key={t} value={t}>{t}</option>
//               ))}
//             </select>
//             {searchQuery && (
//               <button onClick={() => setSearchQuery('')} className="text-[11px] text-red-600 font-bold bg-red-50 px-2.5 py-1.5 rounded-lg border border-red-200">
//                 Clear Filter
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Directory Grid output */}
//         {filteredCourts.length === 0 ? (
//           <div className="text-center py-8 border-2 border-dashed border-slate-100 rounded-lg text-slate-400 text-xs font-medium">
//             No integrated court directory nodes matches current query scope parameters.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
//             {filteredCourts.map(court => (
//               <div key={court.id} className="p-4 border border-slate-200/80 rounded-xl bg-slate-50/50 flex flex-col justify-between hover:border-slate-300 transition-all">
//                 <div>
//                   <div className="flex justify-between items-start gap-2">
//                     <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-tight">{court.name}</h4>
//                     <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-sm border shrink-0 ${
//                       court.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'
//                     }`}>
//                       {court.status}
//                     </span>
//                   </div>
//                   <p className="text-[11px] text-slate-400 font-medium mt-1 font-mono">{court.type} • {court.jurisdiction}</p>
//                 </div>
//                 <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100">
//                   <button 
//                     onClick={() => setActiveModal({ type: 'court_detail', data: court })}
//                     className="text-[10px] font-bold text-slate-700 bg-white border border-slate-200 rounded-lg py-1.5 text-center hover:bg-slate-50 transition-colors"
//                   >
//                     View Details
//                   </button>
//                   <a 
//                     href={court.virtualLinks} 
//                     target="_blank" 
//                     rel="noreferrer"
//                     className="text-[10px] font-bold text-white bg-blue-600 rounded-lg py-1.5 text-center hover:bg-blue-700 transition-colors flex items-center justify-center gap-1"
//                   >
//                     Open Court <ExternalLink size={10} />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* 3. INTERACTIVE COURT SERVICES MATRIX */}
//       <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//         <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-4">
//           Core Digital Judiciary Services Checkpoints
//         </h4>
//         <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
//           {[
//             { label: 'Case Status', modal: 'case_status' },
//             { label: 'Cause List', modal: 'cause_list' },
//             { label: 'Orders & Judgments', modal: 'orders' },
//             { label: 'Daily Board', modal: 'daily_board' },
//             { label: 'E-Filing Portal', modal: 'efiling' },
//             { label: 'Fee Calculator', modal: 'fee_calc' },
//             { label: 'Certified Request', modal: 'certified' },
//             { label: 'Virtual Hearing', modal: 'virtual_hear' }
//           ].map((srv, idx) => (
//             <button
//               key={idx}
//               onClick={() => setActiveModal({ type: srv.modal, data: null })}
//               className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center flex flex-col items-center justify-center gap-2 hover:border-blue-400 hover:bg-blue-50/20 transition-all group"
//             >
//               <Scale size={16} className="text-slate-500 group-hover:text-blue-600 transition-colors" />
//               <span className="text-[10px] font-bold tracking-tight text-slate-700 group-hover:text-slate-900 block leading-tight">
//                 {srv.label}
//               </span>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 4. DYNAMIC LITIGATION GRID INTERACTIVE ROSTER TABULAR SHEET */}
//       <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
//         <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-3">
//           <div>
//             <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
//               Chamber Cause List & Daily Roster Trail
//             </h4>
//             <p className="text-xs text-slate-500 font-medium">Sortable, filterable dynamic docket ledger sync node.</p>
//           </div>
          
//           <div className="flex flex-wrap items-center gap-2">
//             <div className="relative">
//               <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
//               <input 
//                 type="text" 
//                 placeholder="Search by case, client..."
//                 value={tableSearch}
//                 onChange={(e) => { setTableSearch(e.target.value); setCurrentPage(1); }}
//                 className="pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-lg text-slate-700"
//               />
//             </div>
//             <select
//               value={tableStatusFilter}
//               onChange={(e) => { setTableStatusFilter(e.target.value); setCurrentPage(1); }}
//               className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:outline-hidden"
//             >
//               <option value="All">All Active States</option>
//               <option value="Today">Today Listed</option>
//               <option value="Upcoming">Upcoming Trials</option>
//               <option value="Pending Order">Pending Decisions</option>
//             </select>
//           </div>
//         </div>

//         {/* Table Viewport Canvas */}
//         <div className="overflow-x-auto w-full border border-slate-100 rounded-xl">
//           <table className="w-full text-left text-xs border-collapse">
//             <thead>
//               <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[9px] font-black tracking-wider">
//                 <th className="p-3">Case Index / CNR</th>
//                 <th className="p-3">Client Particulars</th>
//                 <th className="p-3 cursor-pointer select-none hover:bg-slate-100" onClick={() => handleSort('courtName')}>
//                   Target Court <ArrowUpDown size={10} className="inline ml-1" />
//                 </th>
//                 <th className="p-3">Presiding Bench</th>
//                 <th className="p-3 cursor-pointer select-none hover:bg-slate-100" onClick={() => handleSort('time')}>
//                   Time Stamp <ArrowUpDown size={10} className="inline ml-1" />
//                 </th>
//                 <th className="p-3 cursor-pointer select-none hover:bg-slate-100" onClick={() => handleSort('status')}>
//                   Operational Status <ArrowUpDown size={10} className="inline ml-1" />
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
//               {paginatedCases.length === 0 ? (
//                 <tr>
//                   <td colSpan="6" className="p-8 text-center text-slate-400 font-medium">No case briefs found within current layout filtration thresholds.</td>
//                 </tr>
//               ) : (
//                 paginatedCases.map(item => (
//                   <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
//                     <td className="p-3">
//                       <p className="font-bold text-slate-900">{item.caseNumber}</p>
//                       <span className="text-[10px] font-mono font-bold text-slate-400 block mt-0.5">CNR: {item.cnr}</span>
//                     </td>
//                     <td className="p-3">
//                       <p className="font-bold text-slate-800">{item.clientName}</p>
//                       <span className="text-[10px] text-slate-400 block mt-0.5">{item.type}</span>
//                     </td>
//                     <td className="p-3 text-slate-600 font-semibold">{item.courtName}</td>
//                     <td className="p-3 text-slate-500 max-w-[180px] truncate">{item.judge}</td>
//                     <td className="p-3 font-mono text-slate-900">{item.time}</td>
//                     <td className="p-3">
//                       <span className={`text-[10px] font-black uppercase tracking-tight px-2 py-0.5 rounded border ${
//                         item.status === 'Today' ? 'bg-amber-50 border-amber-200 text-amber-800' :
//                         item.status === 'Upcoming' ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-purple-50 border-purple-200 text-purple-700'
//                       }`}>
//                         {item.status}
//                       </span>
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Table Server Pagination Module */}
//         {totalPages > 1 && (
//           <div className="flex items-center justify-between pt-1 font-medium text-xs">
//             <span className="text-slate-400 font-bold">Page {currentPage} of {totalPages} sheets</span>
//             <div className="flex gap-1.5">
//               <button 
//                 onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="px-3 py-1 bg-slate-50 border rounded-md font-bold text-slate-700 disabled:opacity-40"
//               >
//                 Prev
//               </button>
//               <button 
//                 onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//                 className="px-3 py-1 bg-slate-50 border rounded-md font-bold text-slate-700 disabled:opacity-40"
//               >
//                 Next
//               </button>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* 5. MULTI-SPLIT LAYOUT MODULES: ALERTS HUB & HEARINGS DIARY CALENDAR */}
//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
        
//         {/* Real-time Notifications/Alert System */}
//         <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
//           <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
//             <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
//               <Bell size={14} className="text-blue-600" /> Statutory System Alert Feeds
//             </h4>
//             <span className="text-[10px] font-bold bg-blue-50 border border-blue-100 text-blue-700 px-2 py-0.5 rounded-sm">
//               {unreadAlertsCount} Unread
//             </span>
//           </div>

//           <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
//             {notifications.length === 0 ? (
//               <p className="text-xs text-slate-400 text-center py-12">No system alert broadcast messages matching current terminal pipeline.</p>
//             ) : (
//               notifications.map(alert => (
//                 <div key={alert.id} className={`p-3 rounded-lg border flex flex-col justify-between transition-all ${
//                   alert.read ? 'bg-slate-50/50 border-slate-100 opacity-60' : 'bg-linear-to-r from-slate-50 to-blue-50/30 border-blue-100'
//                 }`}>
//                   <div>
//                     <div className="flex items-start justify-between gap-2">
//                       <p className="text-xs font-bold text-slate-900 leading-tight">{alert.title}</p>
//                       <p className="text-[8px] font-mono text-slate-400 font-bold shrink-0">{alert.time}</p>
//                     </div>
//                     <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">{alert.desc}</p>
//                   </div>
//                   <div className="flex justify-end gap-3 mt-2 border-t border-slate-100/60 pt-2 text-[10px] font-bold">
//                     {!alert.read && (
//                       <button onClick={() => markNotificationRead(alert.id)} className="text-blue-600 hover:underline">Mark Read</button>
//                     )}
//                     <button onClick={() => deleteNotification(alert.id)} className="text-red-500 hover:underline">Delete</button>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>
//         </div>

//         {/* Dynamic 30-Day Calendar Sheet Grid */}
//         <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
//           <div className="flex justify-between items-center border-b border-slate-100 pb-2">
//             <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
//               <Calendar size={14} className="text-purple-600" /> Chamber Roster Diary Sheet
//             </h4>
//             <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-100 border rounded text-slate-600">June 2026</span>
//           </div>

//           <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-bold uppercase tracking-wider text-slate-400 py-1">
//             {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
//           </div>

//           <div className="grid grid-cols-7 gap-1.5">
//             {Array.from({ length: 30 }).map((_, i) => {
//               const dayNum = i + 1;
//               const hasHearing = cases.find(c => c.status === 'Today' && dayNum === 19) || (cases.find(c => c.status === 'Upcoming') && dayNum === 22);
              
//               return (
//                 <div
//                   key={i}
//                   onClick={() => setSelectedCalendarDay(dayNum)}
//                   className={`min-h-[50px] p-1.5 border rounded-lg flex flex-col justify-between transition-all cursor-pointer select-none ${
//                     selectedCalendarDay === dayNum ? 'ring-2 ring-blue-600 border-transparent bg-blue-50/50' : 'border-slate-100 bg-slate-50/40 hover:bg-slate-50'
//                   }`}
//                 >
//                   <span className={`text-[10px] font-mono font-bold ${hasHearing ? 'text-blue-600 font-black' : 'text-slate-400'}`}>{dayNum}</span>
//                   {hasHearing && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mx-auto block mb-0.5" />}
//                 </div>
//               );
//             })}
//           </div>

//           {/* Calendar Detail Overlay preview snippet */}
//           <div className="mt-2 bg-slate-50 border border-slate-100 p-2.5 rounded-lg text-xs flex justify-between items-center gap-4">
//             <div className="min-w-0 flex-1">
//               <p className="text-[9px] text-slate-400 font-bold uppercase">Roster Memo Target for Day {selectedCalendarDay}</p>
//               <p className="font-bold text-slate-800 truncate mt-0.5">
//                 {selectedCalendarDay === 19 ? 'WP(C) 4589/2025 Case Listed Today' : 'No core docket filings listed for evaluation.'}
//               </p>
//             </div>
//             <button onClick={() => setActiveModal({ type: 'calendar_sheet', data: selectedCalendarDay })} className="text-[10px] font-bold text-blue-600 shrink-0 hover:underline">
//               View All
//             </button>
//           </div>
//         </div>

//       </div>

//       {/* 6. EXPANDED SECURE DOCUMENT CENTER */}
//       <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
//         <div className="flex justify-between items-center border-b border-slate-100 pb-3">
//           <div>
//             <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
//               Cryptographic Legal Document Vault Node
//             </h4>
//             <p className="text-xs text-slate-500 font-medium">BCI verified digital archive and receipt indices repository.</p>
//           </div>
//           <button 
//             onClick={() => setActiveModal({ type: 'upload_doc', data: null })}
//             className="flex items-center gap-1.5 text-[10px] font-bold text-white bg-blue-600 hover:bg-blue-700 py-1.5 px-3 rounded-lg transition-colors shadow-xs"
//           >
//             <Upload size={12} /> Upload Asset
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
//           {documents.map(doc => (
//             <div key={doc.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between gap-4 min-w-0">
//               <div className="flex items-center gap-3 min-w-0 flex-1">
//                 <FileText size={18} className="text-red-500 shrink-0" />
//                 <div className="min-w-0 flex-1">
//                   <p className="text-xs font-bold text-slate-800 truncate leading-tight">{doc.name}</p>
//                   <p className="text-[10px] text-slate-400 font-medium font-mono mt-1">{doc.type} • {doc.size}</p>
//                 </div>
//               </div>
//               <button 
//                 onClick={() => alert(`System call triggered: Exported ${doc.name} to local node storage downloads.`)}
//                 className="p-2 hover:bg-slate-200/60 rounded-lg text-slate-500 hover:text-blue-600 shrink-0 transition-colors"
//               >
//                 <Download size={14} />
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 7. QUICK ADMINISTRATIVE EXECUTIVE ACTIONS PANEL */}
//       <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//         <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2 mb-4">
//           Administrative Command Center
//         </h4>
//         <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
//           {[
//             { label: 'File New Brief/Case', modal: 'file_case' },
//             { label: 'Upload System File', modal: 'upload_doc' },
//             { label: 'Schedule Bench Trial', modal: 'file_case' },
//             { label: 'Generate Legal Notice', modal: 'notice' },
//             { label: 'Contact Registry Desk', modal: 'registry' }
//           ].map((act, i) => (
//             <button
//               key={i}
//               onClick={() => setActiveModal({ type: act.modal, data: null })}
//               className="p-2.5 border border-dashed border-slate-300 rounded-xl text-center bg-slate-50/40 text-xs font-bold text-slate-700 hover:border-blue-500 hover:bg-blue-50/10 transition-all flex items-center justify-center gap-2"
//             >
//               <PlusCircle size={13} className="text-blue-500" /> {act.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* --- MASTER OVERLAY CONTROLLER MODAL MANAGER ENGINE --- */}
//       {activeModal && (
//         <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
//           <div className="bg-white border border-slate-200 rounded-xl w-full max-w-lg p-5 shadow-xl animate-in zoom-in-95 duration-150 flex flex-col justify-between text-left">
            
//             {/* Modal Top Header Bar */}
//             <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
//               <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
//                 <Info size={14} className="text-blue-600" /> System Action Terminal
//               </h3>
//               <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
//                 <X size={16} />
//               </button>
//             </div>

//             {/* Modal Context Variable Discriminator Router */}
//             <div className="flex-1 text-xs text-slate-600 font-medium leading-relaxed py-2">
              
//               {activeModal.type === 'court_detail' && activeModal.data && (
//                 <div className="space-y-3">
//                   <h4 className="text-sm font-black text-slate-900 leading-tight">{activeModal.data.name}</h4>
//                   <div className="p-3 bg-slate-50 rounded-lg space-y-2 border border-slate-100 font-mono text-[11px]">
//                     <p><strong>Jurisdiction Base:</strong> {activeModal.data.jurisdiction}</p>
//                     <p><strong>Hierarchy Class:</strong> {activeModal.data.type}</p>
//                     <p><strong>Sanctioned Bench Size:</strong> {activeModal.data.activeJudges} Judges Active</p>
//                     <p><strong>Network Handshake:</strong> Node Verified Operational</p>
//                   </div>
//                 </div>
//               )}

//               {activeModal.type === 'file_case' && (
//                 <form onSubmit={(e) => {
//                   e.preventDefault();
//                   addCase(newCaseForm);
//                   setActiveModal(null);
//                   alert("Success: New legal case brief successfully synchronized into context store ledger.");
//                 }} className="space-y-3">
//                   <p className="text-[10px] text-slate-400 font-bold uppercase">Initialize New Case Docket Brief</p>
//                   <div className="grid grid-cols-2 gap-3">
//                     <input type="text" placeholder="Case Number (e.g. WP 441)" required className="p-2 border rounded-lg bg-slate-50 text-xs w-full font-bold" value={newCaseForm.caseNumber} onChange={e => setNewCaseForm({...newCaseForm, caseNumber: e.target.value})} />
//                     <input type="text" placeholder="CNR Number string token" required className="p-2 border rounded-lg bg-slate-50 text-xs w-full font-bold" value={newCaseForm.cnr} onChange={e => setNewCaseForm({...newCaseForm, cnr: e.target.value})} />
//                   </div>
//                   <input type="text" placeholder="Petitioner / Client Name" required className="p-2 border rounded-lg bg-slate-50 text-xs w-full font-bold" value={newCaseForm.clientName} onChange={e => setNewCaseForm({...newCaseForm, clientName: e.target.value})} />
//                   <input type="text" placeholder="Target Court Name jurisdiction" required className="p-2 border rounded-lg bg-slate-50 text-xs w-full font-bold" value={newCaseForm.courtName} onChange={e => setNewCaseForm({...newCaseForm, courtName: e.target.value})} />
//                   <button type="submit" className="w-full bg-blue-600 text-white font-bold p-2.5 rounded-lg text-center text-xs mt-2">Publish Case Authorization</button>
//                 </form>
//               )}

//               {activeModal.type === 'upload_doc' && (
//                 <form onSubmit={(e) => {
//                   e.preventDefault();
//                   uploadDocument(newDocForm);
//                   setActiveModal(null);
//                   alert("Success: Cryptographic upload complete. File token verified.");
//                 }} className="space-y-3">
//                   <p className="text-[10px] text-slate-400 font-bold uppercase">Upload Asset to Cryptographic Vault</p>
//                   <input type="text" placeholder="Document Name (e.g. Interim_Reply.pdf)" required className="p-2 border rounded-lg bg-slate-50 text-xs w-full font-bold" value={newDocForm.name} onChange={e => setNewDocForm({...newDocForm, name: e.target.value})} />
//                   <input type="text" placeholder="Associated Case Brief Number" required className="p-2 border rounded-lg bg-slate-50 text-xs w-full font-bold" value={newDocForm.caseNumber} onChange={e => setNewDocForm({...newDocForm, caseNumber: e.target.value})} />
//                   <select className="p-2 border rounded-lg bg-slate-50 text-xs w-full font-bold" value={newDocForm.type} onChange={e => setNewDocForm({...newDocForm, type: e.target.value})}>
//                     {['Orders', 'Judgments', 'Cause Lists', 'Filing Receipts'].map(t => <option key={t} value={t}>{t}</option>)}
//                   </select>
//                   <button type="submit" className="w-full bg-emerald-600 text-white font-bold p-2.5 rounded-lg text-center text-xs mt-2">Commit Upload Block</button>
//                 </form>
//               )}

//               {/* Dynamic Fallback Modal Handler for Service Grid Checkpoints */}
//               {!['court_detail', 'file_case', 'upload_doc'].includes(activeModal.type) && (
//                 <div className="space-y-3 text-center py-4">
//                   <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2 border border-blue-100">
//                     <Building2 size={18} />
//                   </div>
//                   <h4 className="text-sm font-black uppercase text-slate-900 tracking-wide">
//                     {activeModal.type.replace('_', ' ')} System Gateway Node
//                   </h4>
//                   <p className="text-xs text-slate-500 leading-relaxed max-w-sm mx-auto">
//                     Secure handshake established. This modal overlay terminal is listening directly on endpoints for live REST API state transmission data.
//                   </p>
//                   <div className="p-3 bg-slate-50 border border-slate-100 rounded-lg text-[11px] font-mono font-bold text-slate-500">
//                     STATUS: LISTENING_MODE_ON_PORT_SECURE
//                   </div>
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }



// import React, { useState } from 'react';
// import { useCourtSystem } from '../context/CourtContext';
// import { 
//   Gavel, Calendar, Search, Filter, ShieldAlert, 
//   CheckCircle2, Clock, PlayCircle, Plus, Layers, SlidersHorizontal 
// } from 'lucide-react';

// export default function CourtAccessPage() {
//   const {
//     causeList, selectedCourtType, setSelectedCourtType,
//     activeDate, setActiveDate, searchFilter, setSearchFilter,
//     liveCourtLogs, updateCaseStatus, addManualCauseItem
//   } = useCourtSystem();

//   // Control modal open loops
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [formItemNo, setFormItemNo] = useState('');
//   const [formDetails, setFormDetails] = useState('');
//   const [formCnr, setFormCnr] = useState('');
//   const [formType, setFormType] = useState('High Court');
//   const [formCourtName, setFormCourtName] = useState('Bombay High Court');
//   const [formJudge, setFormJudge] = useState('');

//   // Analytical computation counts for metric ribbon blocks
//   const aggregateCount = causeList.length;
//   const activeCount = causeList.filter(c => c.status === 'Active').length;
//   const passedOverCount = causeList.filter(c => c.status === 'Passed Over').length;
//   const adjournedCount = causeList.filter(c => c.status === 'Adjourned').length;

//   // Real-time Pipeline Multi-stage Filter Array Evaluator
//   const complianceFilteredList = causeList.filter(item => {
//     const matchType = selectedCourtType === 'All' || item.courtType === selectedCourtType;
//     const matchSearch = item.caseDetails.toLowerCase().includes(searchFilter.toLowerCase()) || 
//                         item.cnr.toLowerCase().includes(searchFilter.toLowerCase()) ||
//                         item.judge.toLowerCase().includes(searchFilter.toLowerCase());
//     return matchType && matchSearch;
//   });

//   const triggerFormSubmission = (e) => {
//     e.preventDefault();
//     if (!formDetails.trim()) return;
//     addManualCauseItem({
//       itemNo: formItemNo,
//       caseDetails: formDetails,
//       cnr: formCnr,
//       courtType: formType,
//       courtName: formCourtName,
//       judge: formJudge
//     });
//     setFormDetails('');
//     setFormCnr('');
//     setFormItemNo('');
//     setShowAddModal(false);
//   };

//   return (
//     <div className="space-y-6 w-full text-slate-800 select-none animate-in fade-in duration-300">
      
//       {/* 1. DYNAMIC COURT METRICS SECTION CARDS */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">
//         {[
//           { text: 'Total Scheduled Board Cases', data: aggregateCount, meta: 'All Active Jurisdictions', css: 'border-slate-200 bg-white text-slate-900' },
//           { text: 'Live Running Board Docket', data: activeCount, meta: 'Awaiting Call / Hearing', css: 'border-emerald-200 bg-emerald-50/30 text-emerald-800' },
//           { text: 'Passed Over / Restatement Roster', data: passedOverCount, meta: 'To Be Recalled Later', css: 'border-amber-200 bg-amber-50/30 text-amber-800' },
//           { text: 'Adjourned Timeline Entries', data: adjournedCount, meta: 'Pushed to Next Calendar Dates', css: 'border-blue-200 bg-blue-50/30 text-blue-800' }
//         ].map((card, i) => (
//           <div key={i} className={`p-4 border rounded-xl flex flex-col justify-between text-left shadow-2xs ${card.css}`}>
//             <span className="text-[10px] font-black uppercase tracking-wider opacity-75">{card.text}</span>
//             <div className="flex items-baseline gap-2 mt-2">
//               <span className="text-3xl font-black font-mono tracking-tight">{card.data}</span>
//               <span className="text-[9px] font-bold uppercase tracking-wider opacity-80">{card.meta}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 2. FILTRATION HUB TOOLBAR REGISTER CONTEXT */}
//       <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4 shadow-2xs w-full">
        
//         {/* Real-time Search Input Wire */}
//         <div className="relative flex-1 max-w-md">
//           <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
//           <input 
//             type="text" 
//             placeholder="Search roster by CNR number, listing name, judge or advocate particulars..." 
//             value={searchFilter}
//             onChange={(e) => setSearchFilter(e.target.value)}
//             className="pl-9 pr-4 py-1.5 w-full bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:outline-hidden focus:border-blue-500 text-slate-800"
//           />
//         </div>

//         {/* Interactive Roster Tabs Layout */}
//         <div className="flex flex-wrap items-center gap-2">
//           {['All', 'Supreme Court', 'High Court', 'District Court'].map((tier) => (
//             <button
//               key={tier}
//               onClick={() => setSelectedCourtType(tier)}
//               className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
//                 selectedCourtType === tier 
//                   ? 'bg-blue-600 text-white shadow-xs' 
//                   : 'bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600'
//               }`}
//             >
//               {tier}
//             </button>
//           ))}
          
//           <input 
//             type="date" 
//             value={activeDate}
//             onChange={(e) => setActiveDate(e.target.value)}
//             className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono font-bold text-slate-700"
//           />

//           <button 
//             onClick={() => setShowAddModal(true)}
//             className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs flex items-center gap-1 shrink-0"
//           >
//             <Plus size={13} /> Inject Case Record
//           </button>
//         </div>
//       </div>

//       {/* 3. RUNTIME LAYOUT DIVIDER GRID */}
//       <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 items-start w-full">
        
//         {/* Full Tabular Cause List Ledger Block Sheet Context */}
//         <div className="xl:col-span-3 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
//           <div className="flex items-center justify-between border-b border-slate-100 pb-3">
//             <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-2">
//               <Gavel size={14} className="text-blue-600" /> Authorized Jurisdiction Daily Cause Roster Board
//             </h4>
//             <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-sm font-mono font-bold">
//               Records Counted: {complianceFilteredList.length}
//             </span>
//           </div>

//           <div className="overflow-x-auto w-full rounded-xl border border-slate-100">
//             <table className="w-full text-left text-xs border-collapse">
//               <thead>
//                 <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase text-[9px] font-black tracking-wider">
//                   <th className="p-3 text-center w-12">Item No</th>
//                   <th className="p-3">Case Matter Particulars / Structural CNR</th>
//                   <th className="p-3">Assigned Bench Node</th>
//                   <th className="p-3">Status Gate</th>
//                   <th className="p-3 text-right">Interactive State Actions</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
//                 {complianceFilteredList.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className="p-12 text-center text-slate-400 font-medium">
//                       No matching litigation data found for the specified active filtration queries.
//                     </td>
//                   </tr>
//                 ) : (
//                   complianceFilteredList.map((item) => (
//                     <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
//                       <td className="p-3 text-center">
//                         <span className="font-mono font-black text-slate-900 bg-slate-100 px-2 py-1 rounded text-xs block">
//                           {item.itemNo}
//                         </span>
//                       </td>
//                       <td className="p-3 text-left">
//                         <p className="font-bold text-slate-900 max-w-[340px] truncate">{item.caseDetails}</p>
//                         <span className="text-[10px] font-mono font-bold text-slate-400 block mt-0.5">
//                           CNR: {item.cnr} • <span className="text-blue-600 font-sans">{item.stage}</span>
//                         </span>
//                       </td>
//                       <td className="p-3 text-left">
//                         <p className="text-slate-800 font-bold text-[11px]">{item.judge}</p>
//                         <span className="text-[9px] text-slate-400 block font-mono mt-0.5">
//                           {item.courtName} • {item.room}
//                         </span>
//                       </td>
//                       <td className="p-3 text-left">
//                         <span className={`text-[10px] px-2 py-0.5 rounded border font-black uppercase tracking-tight ${
//                           item.status === 'Active' ? 'bg-emerald-50 border-emerald-200 text-emerald-700 animate-pulse' :
//                           item.status === 'Passed Over' ? 'bg-amber-50 border-amber-200 text-amber-800' :
//                           'bg-blue-50 border-blue-200 text-blue-700'
//                         }`}>
//                           {item.status}
//                         </span>
//                       </td>
//                       <td className="p-3 text-right">
//                         <div className="flex items-center justify-end gap-1">
//                           <button 
//                             onClick={() => updateCaseStatus(item.id, 'Active')}
//                             title="Call Case" 
//                             className="p-1 border hover:bg-slate-50 rounded text-emerald-600 bg-emerald-50/40"
//                           >
//                             <PlayCircle size={13} />
//                           </button>
//                           <button 
//                             onClick={() => updateCaseStatus(item.id, 'Passed Over')}
//                             title="Pass Over" 
//                             className="p-1 border hover:bg-slate-50 rounded text-amber-600 bg-amber-50/40"
//                           >
//                             <Clock size={13} />
//                           </button>
//                           <button 
//                             onClick={() => updateCaseStatus(item.id, 'Adjourned')}
//                             title="Adjourn" 
//                             className="p-1 border hover:bg-slate-50 rounded text-blue-600 bg-blue-50/40"
//                           >
//                             <ShieldAlert size={13} />
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//         {/* Right Side Logs Tracking Panel Feed Module */}
//         <div className="space-y-4">
//           <div className="bg-[#0f172a] text-white border border-slate-800 rounded-xl p-4 shadow-2xs space-y-3 text-left">
//             <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
//               <SlidersHorizontal size={13} /> Telemetry Live Boards Feed
//             </h4>
//             <p className="text-[10px] text-slate-400 leading-normal font-medium border-b border-slate-800 pb-2">
//               Real-time pipeline monitoring incoming calls directly via e-Courts web hooks scrapers.
//             </p>
//             <div className="space-y-2.5 max-h-[250px] overflow-y-auto pr-1 font-mono text-[11px] leading-tight text-slate-300">
//               {liveCourtLogs.length === 0 ? (
//                 <p className="text-slate-500 font-sans italic text-xs py-4 text-center">No structural mutations committed during this session node cycle.</p>
//               ) : (
//                 liveCourtLogs.map(log => (
//                   <div key={log.id} className="border-b border-slate-800/60 pb-2 last:border-0">
//                     <p className="text-slate-200 font-medium">{log.text}</p>
//                     <span className="text-[9px] text-slate-500 font-bold block mt-0.5">{log.timestamp}</span>
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </div>

//       </div>

//       {/* 4. MODAL POPUP FOR CASE INJECTION MATRIX */}
//       {showAddModal && (
//         <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
//           <div className="bg-white border border-slate-200 rounded-xl w-full max-w-md p-5 shadow-xl text-left animate-in zoom-in-95 duration-150">
//             <div className="flex justify-between items-center border-b pb-2.5 mb-4">
//               <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
//                 <Gavel size={14} className="text-blue-600" /> Inject Custom Cause List Node
//               </h3>
//               <button onClick={() => setShowAddModal(false)} className="text-slate-400 hover:text-slate-600 text-sm font-bold">✕</button>
//             </div>

//             <form onSubmit={triggerFormSubmission} className="text-xs font-semibold text-slate-600 space-y-4">
//               <div className="grid grid-cols-3 gap-2">
//                 <div className="col-span-1">
//                   <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Item No</label>
//                   <input type="number" value={formItemNo} onChange={e => setFormItemNo(e.target.value)} placeholder="1" className="w-full p-2 bg-slate-50 border rounded-lg font-mono font-bold" required />
//                 </div>
//                 <div className="col-span-2">
//                   <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">CNR Token Reference</label>
//                   <input type="text" value={formCnr} onChange={e => setFormCnr(e.target.value)} placeholder="e.g. MHHCO100..." className="w-full p-2 bg-slate-50 border rounded-lg font-mono font-bold" />
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Case Matter Particulars Title Line</label>
//                 <input type="text" value={formDetails} onChange={e => setFormDetails(e.target.value)} placeholder="e.g. WP 1200/2026 - State vs. X" className="w-full p-2 bg-slate-50 border rounded-lg font-bold" required />
//               </div>

//               <div className="grid grid-cols-2 gap-2">
//                 <div>
//                   <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Jurisdiction Group</label>
//                   <select value={formType} onChange={e => setFormType(e.target.value)} className="w-full p-2 bg-slate-50 border rounded-lg font-bold">
//                     <option value="Supreme Court">Supreme Court</option>
//                     <option value="High Court">High Court</option>
//                     <option value="District Court">District Court</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Presiding Judge Bench Name</label>
//                   <input type="text" value={formJudge} onChange={e => setFormJudge(e.target.value)} placeholder="Honble Mr. Justice Patel" className="w-full p-2 bg-slate-50 border rounded-lg font-bold" />
//                 </div>
//               </div>

//               <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-2.5 rounded-lg text-center transition-colors">
//                 Authorize Registry Injection
//               </button>
//             </form>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }


import React, { useState, useRef } from 'react';
import { useCourtModuleEngine } from '../context/CourtContext';
import { 
  Building2, Search, Filter, Gavel, Calendar, FileText, Download, 
  Upload, Bell, ArrowUpDown, ChevronLeft, ChevronRight, X, AlertCircle, 
  ExternalLink, CheckCircle2, ShieldAlert, Plus, Layers, SlidersHorizontal, 
  HelpCircle, Link2, Copy, FilePlus, CalendarDays, Activity, Eye // 🔥 FIXED: Added missing 'Eye' icon safely here
} from 'lucide-react';

export default function CourtAccessPage() {
  const { 
    courts, cases, alerts, documents,
    markAlertRead, purgeAlertNode, registerNewCaseDocket, commitDocUpload, purgeDocumentNode
  } = useCourtModuleEngine();

  // --- Dynamic Interface Control States ---
  const [directorySearch, setDirectorySearch] = useState('');
  const [selectedDirectoryType, setSelectedDirectoryType] = useState('All');
  const [activeModal, setActiveModal] = useState(null); // { type, data }
  
  // Tabular Engine parameters
  const [rosterSearch, setRosterSearch] = useState('');
  const [rosterStatusFilter, setRosterStatusFilter] = useState('All');
  const [rosterSortField, setRosterSortField] = useState('time');
  const [rosterSortDir, setRosterSortDirection] = useState('asc');
  const [rosterCurrentPage, setRosterCurrentPage] = useState(1);
  const itemsPerPageLimit = 2;

  // Document management search states
  const [docSearch, setDocSearch] = useState('');
  const [docFilterType, setDocFilterType] = useState('All');
  const [isDragOverActive, setIsDragOverActive] = useState(false);

  // Form State Nodes
  const [caseForm, setCaseForm] = useState({ caseNumber: '', clientName: '', advocateName: 'Adv. Rohit Sharma', courtName: 'Bombay High Court', judge: '', time: '10:00 AM', date: '2026-06-19', status: 'Today', type: 'Civil Suit', stage: 'Admission Stage', notes: '' });
  const [fileUploadForm, setFileForm] = useState({ name: '', type: 'Orders', caseNumber: '' });
  const [selectedCalendarDay, setSelectedCalendarDay] = useState(19);
  const [shareFeedbackMsg, setShareFeedbackMsg] = useState(false);

  const hiddenFileInputTrigger = useRef(null);

  // --- Analytics Metric Strips Computations ---
  const countActiveTotal = cases.length;
  const countTodayHearings = cases.filter(c => c.status === 'Today').length;
  const countPendingDecisions = cases.filter(c => c.status === 'Pending Order').length;
  const countUpcomingTrials = cases.filter(c => c.status === 'Upcoming').length;
  const unreadAlertsCounter = alerts.filter(a => !a.read).length;

  // --- 1. Court Search & Directory Filtering ---
  const filteredCourtDirectory = courts.filter(court => {
    const matchQuery = court.name.toLowerCase().includes(directorySearch.toLowerCase()) || 
                       court.jurisdiction.toLowerCase().includes(directorySearch.toLowerCase());
    const matchType = selectedDirectoryType === 'All' || court.type === selectedDirectoryType;
    return matchQuery && matchType;
  });

  // --- 2. Roster Tabular Engine Filtering & Calculations ---
  const processedRosterCases = cases
    .filter(c => {
      const matchSearch = c.caseNumber.toLowerCase().includes(rosterSearch.toLowerCase()) || 
                          c.cnr.toLowerCase().includes(rosterSearch.toLowerCase()) ||
                          c.clientName.toLowerCase().includes(rosterSearch.toLowerCase()) ||
                          c.advocateName.toLowerCase().includes(rosterSearch.toLowerCase());
      const matchStatus = rosterStatusFilter === 'All' || c.status === rosterStatusFilter;
      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      let comparison = a[rosterSortField].localeCompare(b[rosterSortField]);
      return rosterSortDir === 'asc' ? comparison : -comparison;
    });

  const paginationMaxPages = Math.ceil(processedRosterCases.length / itemsPerPageLimit);
  const paginatedRosterCases = processedRosterCases.slice(
    (rosterCurrentPage - 1) * itemsPerPageLimit, 
    rosterCurrentPage * itemsPerPageLimit
  );

  // --- 3. Document Processing Layer Filtration ---
  const filteredVaultDocuments = documents.filter(d => {
    const matchSearch = d.name.toLowerCase().includes(docSearch.toLowerCase()) || d.caseNumber.toLowerCase().includes(docSearch.toLowerCase());
    const matchType = docFilterType === 'All' || d.type === docFilterType;
    return matchSearch && matchType;
  });

  // --- 🔥 FIXED: Pure State Re-Mapping to prevent Reference Breakage ---
  const handleTableSortToggle = (field) => {
    if (rosterSortField === field) {
      setRosterSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setRosterSortField(field);
      setRosterSortDirection('asc');
    }
  };

  // --- Drag & Drop Core File Capture Parsers ---
  const onFileDragOver = (e) => { e.preventDefault(); setIsDragOverActive(true); };
  const onFileDragLeave = () => setIsDragOverActive(false);
  const onFileDropCommitted = (e) => {
    e.preventDefault();
    setIsDragOverActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const targetDroppedFile = e.dataTransfer.files[0];
      commitDocUpload({ name: targetDroppedFile.name, type: 'Orders', caseNumber: 'Global Upload Drop' });
      alert(`Success: ${targetDroppedFile.name} successfully pushed to cryptographic archive slots.`);
    }
  };

  return (
    <div className="space-y-6 w-full text-slate-800 antialiased select-none font-sans pb-12">
      
      {/* ==================================================================== */}
      {/* 1. COURT ACCESS DASHBOARD OVERVIEW MATRIX                           */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">
        {[
          { text: 'Total Active Briefs Load', metric: countActiveTotal, desc: 'Synchronized Case Roster Nodes', color: 'border-slate-200 bg-white text-slate-900' },
          { text: 'Today Listed Hear Board', metric: countTodayHearings, desc: 'Immediate Court Appearances', color: 'border-amber-200 bg-amber-50/60 text-amber-800' },
          { text: 'Pending Judgments/Orders', metric: countPendingDecisions, desc: 'Awaiting Certified Signing', color: 'border-purple-200 bg-purple-50/50 text-purple-700' },
          { text: 'Upcoming Trial Schedules', metric: countUpcomingTrials, desc: 'Next Calendar Diary Dockets', color: 'border-blue-200 bg-blue-50/50 text-blue-700' }
        ].map((card, idx) => (
          <div key={idx} className={`p-4 border rounded-xl flex flex-col justify-between shadow-2xs text-left ${card.color}`}>
            <span className="text-[10px] font-black uppercase tracking-wider opacity-75">{card.text}</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-black font-mono tracking-tight">{card.metric}</span>
              <span className="text-[10px] font-bold opacity-80 uppercase">{card.desc}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ==================================================================== */}
      {/* 2. COURT DIRECTORY & WORKING REAL-TIME SEARCH SYSTEM                */}
      {/* ==================================================================== */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="text-left">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Building2 size={14} className="text-blue-600" /> Integrated National Judiciary Clearing Directory
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time verification registry sync logs across statutory legal forums.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by court name, location base..."
                value={directorySearch}
                onChange={(e) => setDirectorySearch(e.target.value)}
                className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-lg text-slate-700 focus:outline-hidden focus:border-blue-500"
              />
            </div>
            <select
              value={selectedDirectoryType}
              onChange={(e) => setSelectedDirectoryType(e.target.value)}
              className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 focus:outline-hidden"
            >
              {['All', 'Supreme Court', 'High Courts', 'District Courts', 'NCLT', 'NCLAT', 'Consumer Courts', 'Family Courts'].map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {directorySearch && (
              <button onClick={() => setDirectorySearch('')} className="text-[10px] font-black uppercase tracking-wide px-2.5 py-1.5 rounded-lg text-red-600 bg-red-50 border border-red-100">Clear</button>
            )}
          </div>
        </div>

        {/* Directory Card Nodes Grid */}
        {filteredCourtDirectory.length === 0 ? (
          <div className="p-8 text-center border-2 border-dashed rounded-xl text-slate-400 font-medium text-xs">
            No verified jurisdiction directory nodes matches current query filter thresholds.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredCourtDirectory.map(court => (
              <div key={court.id} className="p-4 border border-slate-200 bg-slate-50/30 rounded-xl flex flex-col justify-between hover:border-slate-300 hover:bg-slate-50/50 transition-all text-left">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-xs font-black text-slate-900 tracking-tight leading-snug">{court.name}</h4>
                    <span className="text-[9px] font-black tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-200 rounded px-1.5 py-0.5 uppercase shrink-0">
                      {court.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono font-bold mt-1 uppercase tracking-tight">{court.type} • Jurisdiction: {court.jurisdiction}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 mt-4">
                  <button 
                    onClick={() => setActiveModal({ type: 'court_directory_details', data: court })}
                    className="bg-white border text-slate-700 hover:bg-slate-50 text-[10px] font-black uppercase tracking-wider p-2 rounded-lg text-center transition-colors"
                  >
                    View Details
                  </button>
                  <a 
                    href={court.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-wider p-2 rounded-lg text-center transition-colors flex items-center justify-center gap-1"
                  >
                    Open Court <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ==================================================================== */}
      {/* 3. INTERACTIVE COURT SERVICES MODULE LAYER                           */}
      {/* ==================================================================== */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-4 text-left">
          Core Digital Judiciary Services Checkpoints
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            { tag: 'Case Status', modalType: 'srv_case_status' },
            { tag: 'Cause List Tracker', modalType: 'srv_cause_list' },
            { tag: 'Orders & Judgments', modalType: 'srv_orders' },
            { tag: 'Daily Board Stream', modalType: 'srv_daily_board' },
            { tag: 'Dynamic E-Filing', modalType: 'srv_efiling' },
            { tag: 'Fee Calculator', modalType: 'srv_fee_calc' },
            { tag: 'Certified Copies', modalType: 'srv_certified' },
            { tag: 'Virtual Hearing Node', modalType: 'srv_virtual' }
          ].map((srv, idx) => (
            <button
              key={idx}
              onClick={() => setActiveModal({ type: srv.modalType, data: null })}
              className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center flex flex-col items-center justify-center gap-2.5 hover:border-blue-500 hover:bg-blue-50/10 transition-all group"
            >
              <Gavel size={15} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              <span className="text-[10px] font-black leading-tight text-slate-700 group-hover:text-slate-900 block tracking-tight">
                {srv.tag}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 4. TODAY'S HEARINGS TABLE SHEET GRID                                */}
      {/* ==================================================================== */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-3">
          <div className="text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Active Litigation Roster & Daily Cause List Sheet
            </h4>
            <p className="text-xs text-slate-500 font-medium">Sortable, filterable dynamic transactional docket mapping.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search docket, CNR, advocate..."
                value={rosterSearch}
                onChange={(e) => { setRosterSearch(e.target.value); setRosterCurrentPage(1); }}
                className="pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-lg text-slate-700"
              />
            </div>
            <select
              value={rosterStatusFilter}
              onChange={(e) => { setRosterStatusFilter(e.target.value); setRosterCurrentPage(1); }}
              className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 focus:outline-hidden"
            >
              <option value="All">All Active Statuses</option>
              <option value="Today">Today Listed</option>
              <option value="Upcoming">Upcoming Trials</option>
              <option value="Pending Order">Reserved Orders</option>
            </select>
          </div>
        </div>

        {/* Tabular Responsive Canvas Container */}
        <div className="overflow-x-auto w-full border border-slate-100 rounded-xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase text-[9px] font-black tracking-wider">
                <th className="p-3">Case Index Brief / CNR</th>
                <th className="p-3 cursor-pointer select-none hover:bg-slate-100" onClick={() => handleTableSortToggle('clientName')}>
                  Client Particulars <ArrowUpDown size={10} className="inline ml-0.5" />
                </th>
                <th className="p-3">Target Court Room Base</th>
                <th className="p-3">Presiding Bench Pool</th>
                <th className="p-3 cursor-pointer select-none hover:bg-slate-100" onClick={() => handleTableSortToggle('time')}>
                  Time Stamp <ArrowUpDown size={10} className="inline ml-0.5" />
                </th>
                <th className="p-3">Operational Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
              {paginatedRosterCases.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-12 text-center text-slate-400 font-medium">
                    No active case brief records matching current layout query filtration bounds.
                  </td>
                </tr>
              ) : (
                paginatedRosterCases.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-3 text-left">
                      <p className="font-bold text-slate-900">{item.caseNumber}</p>
                      <span className="text-[10px] font-mono font-bold text-slate-400 block mt-0.5">CNR: {item.cnr}</span>
                    </td>
                    <td className="p-3 text-left">
                      <p className="font-bold text-slate-800">{item.clientName}</p>
                      <span className="text-[10px] text-slate-400 font-medium block mt-0.5">Counsel: {item.advocateName}</span>
                    </td>
                    <td className="p-3 text-slate-600 font-bold text-left">{item.courtName}</td>
                    <td className="p-3 text-slate-500 max-w-[200px] truncate text-left">{item.judge}</td>
                    <td className="p-3 font-mono text-slate-900 text-left">{item.time}</td>
                    <td className="p-3 text-left">
                      <span className={`text-[10px] font-black uppercase tracking-tight px-2 py-0.5 rounded border ${
                        item.status === 'Today' ? 'bg-amber-50 border-amber-200 text-amber-800' :
                        item.status === 'Upcoming' ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-purple-50 border-purple-200 text-purple-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Tabular Pagination Foot Controls */}
        {paginationMaxPages > 1 && (
          <div className="flex items-center justify-between pt-1 font-semibold text-xs">
            <span className="text-slate-400 font-bold">Sheet {rosterCurrentPage} of {paginationMaxPages} entries</span>
            <div className="flex gap-1.5">
              <button 
                onClick={() => setRosterCurrentPage(p => Math.max(p - 1, 1))}
                disabled={rosterCurrentPage === 1}
                className="px-3 py-1 bg-slate-50 hover:bg-slate-100 border rounded-lg text-slate-700 disabled:opacity-40"
              >
                Prev
              </button>
              <button 
                onClick={() => setRosterCurrentPage(p => Math.min(p + 1, paginationMaxPages))}
                disabled={rosterCurrentPage === paginationMaxPages}
                className="px-3 py-1 bg-slate-50 hover:bg-slate-100 border rounded-lg text-slate-700 disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ==================================================================== */}
      {/* 5. MULTI-SPLIT RUNTIME LAYOUT: SYSTEM ALERTS HUB & ROSTER CALENDAR   */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
        
        {/* Court Alerts / Notification Feed Container */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Bell size={14} className="text-blue-600 animate-pulse" /> Judiciary Alerts & Broad Feeds
            </h4>
            <span className="text-[9px] font-black bg-red-500 border border-red-600 text-white px-2 py-0.5 rounded-sm">
              {unreadAlertsCounter} Active
            </span>
          </div>

          <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
            {alerts.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-12">No current active telemetry notifications broadcasted.</p>
            ) : (
              alerts.map(node => (
                <div key={node.id} className={`p-3 rounded-lg border flex flex-col justify-between transition-all text-left ${
                  node.read ? 'bg-slate-50/60 border-slate-100 opacity-60' : 'bg-linear-to-r from-slate-50 to-blue-50/20 border-blue-100 shadow-3xs'
                }`}>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs font-bold text-slate-900 leading-tight">{node.title}</p>
                      <span className="text-[8px] font-mono font-bold text-slate-400 shrink-0">{node.timestamp}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">{node.message}</p>
                  </div>
                  <div className="flex justify-end gap-3 mt-2 border-t border-slate-100/60 pt-2 text-[10px] font-black">
                    {!node.read && (
                      <button onClick={() => markAlertRead(node.id)} className="text-blue-600 hover:underline">Mark Read</button>
                    )}
                    <button onClick={() => purgeAlertNode(node.id)} className="text-red-500 hover:underline">Delete</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* 30-Day Litigant Agenda Grid Calendar Sheet */}
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <CalendarDays size={14} className="text-purple-600" /> Localized Chamber Agenda Diary Map
            </h4>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-50 border rounded text-slate-600">June 2026</span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-black uppercase tracking-wider text-slate-400 py-1 border-b border-slate-50">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day}>{day}</div>)}
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: 30 }).map((_, i) => {
              const currentDayIndex = i + 1;
              const dayHasHearing = currentDayIndex === 19 || currentDayIndex === 22;
              
              return (
                <div
                  key={i}
                  onClick={() => setSelectedCalendarDay(currentDayIndex)}
                  className={`min-h-[52px] p-1.5 border rounded-lg flex flex-col justify-between transition-all cursor-pointer select-none text-left ${
                    selectedCalendarDay === currentDayIndex 
                      ? 'ring-2 ring-blue-600 border-transparent bg-blue-50/40 font-black' 
                      : 'border-slate-100 bg-slate-50/40 hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold ${dayHasHearing ? 'text-blue-600 font-black' : 'text-slate-400'}`}>{currentDayIndex}</span>
                  {dayHasHearing && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mx-auto block mb-0.5" />}
                </div>
              );
            })}
          </div>

          {/* Interactive Date Panel Descriptor Sheet */}
          <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-lg text-xs flex justify-between items-center gap-4 text-left">
            <div className="min-w-0 flex-1">
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">Target Inspection Slot: June {selectedCalendarDay}, 2026</p>
              <p className="font-bold text-slate-800 truncate mt-0.5">
                {selectedCalendarDay === 19 ? '2 Active Court Hearings Listed for Selection Area.' : 
                 selectedCalendarDay === 22 ? 'SLP Appeal Brief Scheduled in Supreme Court.' : 
                 'No regulatory case briefs files allocated for this target date node.'}
              </p>
            </div>
            {(selectedCalendarDay === 19 || selectedCalendarDay === 22) && (
              <button 
                onClick={() => setActiveModal({ type: 'calendar_day_inspect', data: selectedCalendarDay })}
                className="text-[10px] font-black text-blue-600 uppercase hover:underline shrink-0"
              >
                Inspect Details
              </button>
            )}
          </div>
        </div>

      </div>

      {/* ==================================================================== */}
      {/* 6. EXPANDED LEGAL DOCUMENT CENTER MODULE                             */}
      {/* ==================================================================== */}
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-3">
          <div className="text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Judiciary Vault Archive & Cryptographic Document Center
            </h4>
            <p className="text-xs text-slate-500 font-medium">Drag-and-drop functional file token repository node.</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search archive..."
                value={docSearch}
                onChange={e => setDocSearch(e.target.value)}
                className="pl-8 pr-4 py-1 bg-slate-50 border text-xs font-semibold rounded-lg text-slate-700"
              />
            </div>
            <select
              value={docFilterType}
              onChange={e => setDocFilterType(e.target.value)}
              className="p-1 bg-slate-50 border text-xs font-bold text-slate-600 rounded-lg focus:outline-hidden"
            >
              <option value="All">All Types</option>
              {['Orders', 'Judgments', 'Cause Lists', 'Filing Receipts'].map(type => <option key={type} value={type}>{type}</option>)}
            </select>
            <button 
              onClick={() => setActiveModal({ type: 'cmd_upload_doc', data: null })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] px-3 py-1.5 rounded-lg flex items-center gap-1 uppercase tracking-wide shadow-3xs"
            >
              <Upload size={12} /> Upload File
            </button>
          </div>
        </div>

        {/* Drag Over Drop Zone Target Canvas Area */}
        <div 
          onDragOver={onFileDragOver}
          onDragLeave={onFileDragLeave}
          onDrop={onFileDropCommitted}
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-2 transition-all border-2 border-dashed rounded-xl ${
            isDragOverActive ? 'border-blue-500 bg-blue-50/20' : 'border-transparent'
          }`}
        >
          {filteredVaultDocuments.length === 0 ? (
            <div className="col-span-full p-8 text-center text-slate-400 font-semibold">No secure encrypted file records matched your active query filters.</div>
          ) : (
            filteredVaultDocuments.map(doc => (
              <div key={doc.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between gap-4 min-w-0 hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3 min-w-0 flex-1 text-left">
                  <FileText size={18} className="text-red-500 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-slate-900 truncate leading-tight">{doc.name}</p>
                    <p className="text-[10px] text-slate-400 font-mono font-bold mt-1 uppercase tracking-tighter">{doc.type} • {doc.size}</p>
                  </div>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => setActiveModal({ type: 'doc_preview_sheet', data: doc })} className="p-1 border bg-white rounded hover:bg-slate-50 text-slate-500" title="Preview"><Eye size={12} /></button>
                  <button onClick={() => alert(`Triggering download gateway stream for file metadata: ${doc.name}`)} className="p-1 border bg-white rounded hover:bg-slate-50 text-slate-500" title="Download"><Download size={12} /></button>
                  <button onClick={() => purgeDocumentNode(doc.id)} className="p-1 border border-red-100 bg-red-50 text-red-600 rounded hover:bg-red-100" title="Purge"><X size={12} /></button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 7. QUICK ACTION OVERLAYS COMMAND PANEL                              */}
      {/* ==================================================================== */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs text-left">
        <span className="text-[9px] font-black tracking-wider text-slate-400 uppercase block mb-3">Command Control Console</span>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: 'File New Case', action: 'cmd_file_case' },
            { label: 'Upload Document', action: 'cmd_upload_doc' },
            { label: 'Schedule Hearing', action: 'cmd_file_case' },
            { label: 'Generate Legal Notice', action: 'cmd_legal_notice' },
            { label: 'Contact Registry Desk', action: 'cmd_registry' }
          ].map((actionItem, idx) => (
            <button
              key={idx}
              onClick={() => setActiveModal({ type: actionItem.action, data: null })}
              className="p-3 bg-slate-50 hover:bg-slate-100 border border-dashed rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-slate-700 select-none active:scale-95 transition-all"
            >
              <Plus size={13} className="text-blue-600" /> {actionItem.label}
            </button>
          ))}
        </div>
      </div>

      {/* ==================================================================== */}
      {/* 8. MASTER FLOATING OVERLAY MODAL MANAGER ENGINE STRUCTURE            */}
      {/* ==================================================================== */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 select-none">
          <div className="bg-white border border-slate-200 rounded-xl w-full max-w-md p-5 shadow-2xl animate-in zoom-in-95 duration-150 text-left">
            
            {/* Modal Header Component Banner */}
            <div className="flex justify-between items-center border-b border-slate-100 pb-2.5 mb-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Activity size={14} className="text-blue-600" /> Judiciary Terminal Node Task
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400 hover:text-slate-600 font-bold text-sm">✕</button>
            </div>

            {/* Modal Content Routing Layer Switch Blocks */}
            <div className="text-xs font-semibold text-slate-600 max-h-[400px] overflow-y-auto pr-1">
              
              {/* Directory Deep Inspection Sheet View */}
              {activeModal.type === 'court_directory_details' && activeModal.data && (
                <div className="space-y-3">
                  <h4 className="text-sm font-black text-slate-900">{activeModal.data.name}</h4>
                  <div className="p-3 bg-slate-50 border rounded-lg font-mono text-[11px] space-y-2">
                    <p><strong>Jurisdiction Root:</strong> {activeModal.data.jurisdiction}</p>
                    <p><strong>Registry Classification:</strong> {activeModal.data.type}</p>
                    <p><strong>Active Working Judges:</strong> {activeModal.data.activeJudges} Members Pool</p>
                    <p><strong>Handshake Gateway Code:</strong> SECURE_JUD_NODE_PASS_OK</p>
                  </div>
                </div>
              )}

              {/* Service Modals Handler Hub Fallbacks */}
              {activeModal.type.startsWith('srv_') && (
                <div className="text-center py-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                    <Layers size={18} />
                  </div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                    {activeModal.type.replace('srv_', '').replace('_', ' ')} Portal Node
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">
                    Secure channel connection listening on e-Courts centralized APIs data clusters for live client streams.
                  </p>
                  <div className="p-2.5 bg-slate-50 border font-mono text-slate-500 text-[10px] rounded inline-block">
                    LEDGER_HANDSHAKE_ESTABLISHED: PORT_SECURE
                  </div>
                </div>
              )}

              {/* Action Form: Inject/File Case Brief */}
              {activeModal.type === 'cmd_file_case' && (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  registerNewCaseDocket(caseForm);
                  setActiveModal(null);
                  alert("Success: New legal case brief committed into active context store ledger indices.");
                }} className="space-y-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Initialize Case Brief Docket</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Case Number (WP 441)" required value={caseForm.caseNumber} onChange={e => setCaseForm({ ...caseForm, caseNumber: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold" />
                    <input type="text" placeholder="Petitioner / Client Name" required value={caseForm.clientName} onChange={e => setCaseForm({ ...caseForm, clientName: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold" />
                  </div>
                  <input type="text" placeholder="Presiding Judge Bench Name" required value={caseForm.judge} onChange={e => setCaseForm({ ...caseForm, judge: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full" />
                  <input type="text" placeholder="Target Court Name Group" required value={caseForm.courtName} onChange={e => setCaseForm({ ...caseForm, courtName: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full" />
                  <button type="submit" className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold p-2.5 rounded-lg mt-2 text-xs">Publish Roster Authorization</button>
                </form>
              )}

              {/* Action Form: Upload System File Node */}
              {activeModal.type === 'cmd_upload_doc' && (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  if (!fileUploadForm.name.trim()) return;
                  commitDocUpload(fileUploadForm);
                  setActiveModal(null);
                  alert(`Success: ${fileUploadForm.name} committed into vault blocks.`);
                }} className="space-y-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Commit Asset to Cryptographic Vault</span>
                  <input type="text" placeholder="File Name (e.g. Counter_Reply.pdf)" required value={fileUploadForm.name} onChange={e => setFileForm({ ...fileUploadForm, name: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full" />
                  <input type="text" placeholder="Associated Case Number brief tracking" required value={fileUploadForm.caseNumber} onChange={e => setFileForm({ ...fileUploadForm, caseNumber: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full" />
                  <select value={fileUploadForm.type} onChange={e => setFileForm({ ...fileUploadForm, type: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full">
                    {['Orders', 'Judgments', 'Cause Lists', 'Filing Receipts'].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <button type="submit" className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-2.5 rounded-lg mt-2 text-xs">Authorize Storage Block</button>
                </form>
              )}

              {/* Document File Preview Sheet Overlay */}
              {activeModal.type === 'doc_preview_sheet' && activeModal.data && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 break-all">{activeModal.data.name}</h4>
                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 mt-1 inline-block">UID: {activeModal.data.id}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg font-mono text-[11px] space-y-1">
                    <p><strong>Associated Case Brief:</strong> {activeModal.data.caseNumber}</p>
                    <p><strong>File Classification:</strong> {activeModal.data.type}</p>
                    <p><strong>Committed Registry Date:</strong> {activeModal.data.uploadDate}</p>
                  </div>
                  <div className="w-full min-h-[100px] border border-dashed rounded-xl bg-slate-50 flex flex-col items-center justify-center text-center p-4 text-slate-400">
                    <FileText size={24} className="text-slate-300 mb-1" />
                    <p className="font-bold text-slate-700 text-[11px]">Secure Binary Document Container View Active</p>
                  </div>
                </div>
              )}

              {/* Calendar Day Inspector Dialog Node Overlay */}
              {activeModal.type === 'calendar_day_inspect' && activeModal.data && (
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 border-b pb-1">Litigation Sheet Inspector: June {activeModal.data}, 2026</h4>
                  <div className="space-y-2">
                    {cases.filter(c => activeModal.data === 19 ? c.status === 'Today' : c.status === 'Upcoming').map(matchItem => (
                      <div key={matchItem.id} className="p-2.5 bg-slate-50 border rounded-lg">
                        <p className="font-bold text-slate-900">{matchItem.caseNumber} • <span className="text-blue-600 font-mono">{matchItem.time}</span></p>
                        <p className="text-[11px] text-slate-500 font-medium mt-0.5">{matchItem.clientName} vs. Opponent Particulars Node</p>
                        <p className="text-[10px] text-slate-400 italic mt-1 font-sans">Memo: {matchItem.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Form: Legal Notice Blueprint Generator */}
              {activeModal.type === 'cmd_legal_notice' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <input type="text" placeholder="Recipient Legal Entity / Target Name" className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full" />
                    <textarea placeholder="Outline cause of action parameters or draft breach details..." rows="3" className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full focus:outline-hidden" />
                  </div>
                  <button onClick={() => { setActiveModal(null); alert("Notice processing: Cryptographic watermark dispatch template queued successfully."); }} className="w-full bg-blue-600 text-white font-bold p-2.5 rounded-lg text-xs uppercase tracking-wide">Generate Notarized Envelope</button>
                </div>
              )}

              {/* Action Form: Contact Court Registry Desk Interface */}
              {activeModal.type === 'cmd_registry' && (
                <div className="space-y-3 text-center py-2">
                  <HelpCircle size={32} className="text-slate-300 mx-auto mb-1" />
                  <p className="text-xs font-bold text-slate-800">Establish Registry Central Endpoint Patch</p>
                  <p className="text-[11px] text-slate-500 max-w-xs mx-auto">Click below to dispatch an automated communication token query request straight to the designated registrar system desk node rooms.</p>
                  <div className="pt-2 flex gap-2">
                    <button onClick={() => { setShareFeedbackMsg(true); setTimeout(() => setShareFeedbackMsg(false), 2000); }} className="flex-1 bg-slate-50 border hover:bg-slate-100 p-2 rounded-lg text-[11px] font-bold text-slate-700 flex items-center justify-center gap-1">
                      <Link2 size={12} /> {shareFeedbackMsg ? 'Secure Key Copied' : 'Generate Secure Link'}
                    </button>
                    <button onClick={() => { setActiveModal(null); alert("Terminal call: Encrypted registry desk chat line established."); }} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg text-[11px] font-bold uppercase tracking-wider">Initialize Dial</button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
