// import React, { useState } from 'react';
// import { useDocumentVault } from '../context/DocumentVaultContext';
// import { 
//   ShieldCheck, AlertTriangle, FileText, FolderPlus, Search, 
//   Filter, Eye, Download, Share2, Trash2, Folder, CheckCircle, 
//   X, Copy, Users, Landmark, User, ArrowUpRight, Plus, RefreshCw, Layers
// } from 'lucide-react';

// export default function DocumentVaultPage() {
//   const {
//     documents, folders, activities, vaultNotifications,
//     createFolder, deleteFolder, addDocument, deleteDocument, updateVerificationStatus, clearNotification, triggerAlert
//   } = useDocumentVault();

//   // Workspace Filter Controls State
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedFolder, setSelectedFolder] = useState('All');
  
//   // Modals & UI Toggles
//   const [activeModal, setActiveModal] = useState(null); // { type: 'view' | 'share' | 'add_folder' | 'upload', data: ... }
//   const [isDragging, setIsDragging] = useState(false);
//   const [newFolderName, setNewFolderName] = useState('');
//   const [copiedToken, setCopiedToken] = useState(false);

//   // Upload Management State Hook Simulate
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [simulatedFileName, setSimulatedFileName] = useState('');
//   const [selectedUploadCategory, setSelectedUploadCategory] = useState('Enrollment Certificate');
//   const [selectedUploadFolder, setSelectedUploadFolder] = useState('Professional Documents');
//   const [uploadExpiryDate, setUploadExpiryDate] = useState('');

//   // Fixed Structural Roster Definitions
//   const categoriesList = [
//     'Enrollment Certificate', 'Bar Council Certificate', 'Practice Certificate',
//     'Court Authorizations', 'Professional License', 'Identity Documents',
//     'Client Documents', 'Case Documents'
//   ];

//   // --- Real-time Metrics Aggregation Engine ---
//   const todayStr = new Date('2026-06-19'); // Synced with current workspace context timeline
//   const totalDocs = documents.length;
//   const verifiedDocs = documents.filter(d => d.status === 'Verified').length;
//   const pendingDocs = documents.filter(d => d.status === 'Pending' || d.status === 'Under Review').length;
  
//   const expiringDocs = documents.filter(d => {
//     if (d.expiryDate === 'None') return false;
//     const exp = new Date(d.expiryDate);
//     const timeDiff = exp.getTime() - todayStr.getTime();
//     const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
//     return daysDiff >= 0 && daysDiff <= 30; // Within 30 days window threshold
//   }).length;

//   // --- Pipeline Real-time Data Filter Engine ---
//   const filteredDocuments = documents.filter(doc => {
//     const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           doc.id.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCat = selectedCategory === 'All' || doc.category === selectedCategory;
//     const matchesFolder = selectedFolder === 'All' || doc.folder === selectedFolder;
//     return matchesSearch && matchesCat && matchesFolder;
//   });

//   // --- File Verification/Expiry Status Color Matrix Helpers ---
//   const computeExpiryWarning = (expiryDate) => {
//     if (expiryDate === 'None') return { text: 'Permanent Valid', css: 'text-slate-500 bg-slate-50' };
//     const exp = new Date(expiryDate);
//     const days = Math.ceil((exp.getTime() - todayStr.getTime()) / (1000 * 3600 * 24));
//     if (days < 0) return { text: 'Expired', css: 'text-red-700 bg-red-50 border-red-200' };
//     if (days <= 30) return { text: `Expiring Soon (${days}d)`, css: 'text-amber-700 bg-amber-50 border-amber-200 animate-pulse' };
//     return { text: `Valid Till ${expiryDate}`, css: 'text-slate-600 bg-slate-50' };
//   };

//   // --- Drag & Drop Simulation Engine Hooks ---
//   const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
//   const handleDragLeave = () => setIsDragging(false);
//   const handleDrop = (e) => {
//     e.preventDefault();
//     setIsDragging(false);
//     const files = e.dataTransfer.files;
//     if (files && files.length > 0) {
//       triggerSimulatedUpload(files[0].name, files[0].size);
//     }
//   };

//   const triggerSimulatedUpload = (name, sizeBytes) => {
//     // Basic File Constraint Validation Gateways
//     const sizeMB = sizeBytes ? (sizeBytes / (1024 * 1024)).toFixed(1) + ' MB' : '1.8 MB';
//     setSimulatedFileName(name);
//     setUploadProgress(10);
    
//     let currentProgress = 10;
//     const timer = setInterval(() => {
//       currentProgress += 30;
//       if (currentProgress >= 100) {
//         clearInterval(timer);
//         setUploadProgress(100);
//         setTimeout(() => {
//           addDocument({
//             name,
//             category: selectedUploadCategory,
//             folder: selectedUploadFolder,
//             expiryDate: uploadExpiryDate || 'None',
//             status: 'Pending',
//             size: sizeMB
//           });
//           setUploadProgress(0);
//           setSimulatedFileName('');
//           setActiveModal(null);
//         }, 400);
//       } else {
//         setUploadProgress(currentProgress);
//       }
//     }, 200);
//   };

//   const executeDownload = (doc) => {
//     alert(`System call pipeline executing: Secure binary copy of ${doc.name} successfully exported.`);
//   };

//   return (
//     <div className="space-y-6 w-full animate-in fade-in duration-300 text-slate-800">
      
//       {/* REAL-TIME SYSTEM TOAST LIVE FEED ALERT LISTER */}
//       <div className="fixed bottom-5 right-5 z-50 space-y-2 max-w-sm w-full">
//         {vaultNotifications.map(toast => (
//           <div key={toast.id} className="bg-slate-900 text-white p-3.5 rounded-xl shadow-lg border border-slate-800 flex items-start justify-between gap-3 animate-in slide-in-from-bottom-5">
//             <div className="text-xs">
//               <p className="font-black text-blue-400 uppercase tracking-wide leading-none">{toast.title}</p>
//               <p className="text-slate-300 font-medium mt-1">{toast.message}</p>
//             </div>
//             <button onClick={() => clearNotification(toast.id)} className="text-slate-400 hover:text-white shrink-0"><X size={14} /></button>
//           </div>
//         ))}
//       </div>

//       {/* 1. VAULT TOP LEVEL EXECUTIVE DASHBOARD STRIP */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">
//         {[
//           { label: 'Total Vault Files Attached', count: totalDocs, status: 'Active Nodes', css: 'border-slate-200 text-slate-900 bg-white' },
//           { label: 'BCI Authenticated Seals', count: verifiedDocs, status: 'Verified Ledger', css: 'border-emerald-200 text-emerald-800 bg-emerald-50/40' },
//           { label: 'Pending Compliance Audits', count: pendingDocs, status: 'Under Review', css: 'border-blue-200 text-blue-800 bg-blue-50/40' },
//           { label: 'Expiring Licensing Nodes', count: expiringDocs, status: 'Critical Action Needed', css: expiringDocs > 0 ? 'border-red-200 text-red-800 bg-red-50/50 animate-pulse' : 'border-slate-200 text-slate-600 bg-white' }
//         ].map((card, i) => (
//           <div key={i} className={`p-4 border rounded-xl flex flex-col justify-between shadow-2xs ${card.css}`}>
//             <span className="text-[10px] font-black uppercase tracking-wider opacity-75 block text-left">{card.label}</span>
//             <div className="flex items-baseline gap-2 mt-2 text-left">
//               <span className="text-3xl font-black font-mono tracking-tight">{card.count}</span>
//               <span className="text-[10px] font-bold opacity-80 uppercase tracking-wider">{card.status}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 2. LIVE QUERY ACTION BAR CONTROLS FILTER BLOCK */}
//       <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col lg:flex-row lg:items-center justify-between gap-3 w-full">
//         <div className="relative flex-1 max-w-md">
//           <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
//           <input 
//             type="text"
//             placeholder="Search vault records by name or system document ID token..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="pl-9 pr-4 py-1.5 w-full bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-hidden focus:border-blue-500"
//           />
//         </div>
        
//         <div className="flex flex-wrap items-center gap-2.5">
//           <select 
//             value={selectedCategory} 
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700"
//           >
//             <option value="All">All Statutory Categories</option>
//             {categoriesList.map(c => <option key={c} value={c}>{c}</option>)}
//           </select>

//           <select 
//             value={selectedFolder} 
//             onChange={(e) => setSelectedFolder(e.target.value)}
//             className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700"
//           >
//             <option value="All">All Vault Folders</option>
//             {folders.map(f => <option key={f} value={f}>{f}</option>)}
//           </select>

//           {(searchQuery || selectedCategory !== 'All' || selectedFolder !== 'All') && (
//             <button 
//               onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedFolder('All'); }}
//               className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-200 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors"
//             >
//               Reset Filter Grid
//             </button>
//           )}
//         </div>
//       </div>

//       {/* 3. CORE FILE MANAGER DUAL GRID BLUEPRINT MAPPING */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start w-full">
        
//         {/* Left Hand: Folders & Direct Actions Panel */}
//         <div className="space-y-5">
//           {/* Folders Navigation Box */}
//           <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
//             <div className="flex items-center justify-between border-b border-slate-100 pb-2">
//               <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
//                 <Layers size={13} className="text-blue-600" /> Virtual Folders
//               </h4>
//               <button 
//                 onClick={() => setActiveModal({ type: 'add_folder', data: null })}
//                 className="text-[10px] font-black text-blue-600 hover:underline flex items-center gap-0.5"
//               >
//                 <Plus size={11} /> Add
//               </button>
//             </div>

//             <div className="space-y-1">
//               <button 
//                 onClick={() => setSelectedFolder('All')}
//                 className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-bold flex items-center justify-between transition-colors ${
//                   selectedFolder === 'All' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
//                 }`}
//               >
//                 <span className="truncate flex items-center gap-2"><Folder size={14} className="opacity-80" /> Root Directory</span>
//                 <span className="font-mono text-[10px] opacity-60">{documents.length}</span>
//               </button>

//               {folders.map(f => {
//                 const count = documents.filter(d => d.folder === f).length;
//                 return (
//                   <div key={f} className="group flex items-center justify-between w-full rounded-lg hover:bg-slate-50/80 pr-2">
//                     <button 
//                       onClick={() => setSelectedFolder(f)}
//                       className={`text-left px-2.5 py-2 text-xs font-bold flex items-center gap-2 truncate flex-1 ${
//                         selectedFolder === f ? 'text-blue-700 font-extrabold' : 'text-slate-600'
//                       }`}
//                     >
//                       <Folder size={14} className={selectedFolder === f ? 'text-blue-600 fill-blue-50' : 'text-slate-400'} />
//                       <span className="truncate">{f}</span>
//                     </button>
//                     <div className="flex items-center gap-1.5 shrink-0">
//                       <span className="font-mono text-[10px] text-slate-400 font-bold">{count}</span>
//                       <button 
//                         onClick={() => { deleteFolder(f); if (selectedFolder === f) setSelectedFolder('All'); }}
//                         className="text-slate-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-0.5"
//                       >
//                         <Trash2 size={11} />
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Quick Actions Action Block */}
//           <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-2">
//             <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-2 block">Quick Actions</h4>
//             <button 
//               onClick={() => setActiveModal({ type: 'upload', data: null })}
//               className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs p-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
//             >
//               Upload New Document
//             </button>
//             <button 
//               onClick={() => alert("Verification request pipeline queued for bulk evaluation updates.")}
//               className="w-full text-left bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs p-2.5 rounded-lg transition-colors flex items-center justify-center gap-2"
//             >
//               Request Verification Scan
//             </button>
//           </div>

//           {/* Activity Log Tracker Box */}
//           <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
//             <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Recent Cryptographic Trails</h4>
//             <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
//               {activities.map(act => (
//                 <div key={act.id} className="text-[11px] leading-tight border-b border-slate-50 pb-2 last:border-0 last:pb-0 text-left">
//                   <p className="text-slate-600 font-medium">{act.text}</p>
//                   <span className="text-[9px] text-slate-400 font-mono block mt-0.5">{act.time}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Hand: Responsive Vault Roster Sheet Table Grid */}
//         <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
//           <div className="flex justify-between items-center">
//             <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
//               {selectedFolder === 'All' ? 'Complete Archive Database Records' : `Directory: ${selectedFolder}`}
//             </h4>
//             <span className="text-[10px] font-mono font-bold bg-slate-100 px-2 py-0.5 rounded text-slate-500">
//               Showing {filteredDocuments.length} files
//             </span>
//           </div>

//           <div className="overflow-x-auto w-full border border-slate-100 rounded-xl">
//             <table className="w-full text-left text-xs border-collapse">
//               <thead>
//                 <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[9px] font-black tracking-wider">
//                   <th className="p-3">Document Particulars / Token ID</th>
//                   <th className="p-3">Statutory Category</th>
//                   <th className="p-3">Validation Check</th>
//                   <th className="p-3">Verification Badge</th>
//                   <th className="p-3 text-right">Actions Matrix</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
//                 {filteredDocuments.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className="p-12 text-center text-slate-400 font-medium">
//                       No secure document nodes matches current active queries within this folder block.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredDocuments.map(doc => {
//                     const warnSpecs = computeExpiryWarning(doc.expiryDate);
//                     return (
//                       <tr key={doc.id} className="hover:bg-slate-50/60 transition-colors">
//                         <td className="p-3">
//                           <p className="font-bold text-slate-900 truncate max-w-[200px]">{doc.name}</p>
//                           <span className="text-[10px] font-mono font-bold text-slate-400 block mt-0.5">{doc.id} • {doc.size}</span>
//                         </td>
//                         <td className="p-3">
//                           <span className="text-[11px] text-slate-600 block truncate max-w-[150px] font-semibold">{doc.category}</span>
//                           <span className="text-[9px] text-slate-400 block font-mono mt-0.5">{doc.folder}</span>
//                         </td>
//                         <td className="p-3">
//                           <span className={`text-[10px] font-bold px-2 py-0.5 rounded border inline-block whitespace-nowrap ${warnSpecs.css}`}>
//                             {warnSpecs.text}
//                           </span>
//                         </td>
//                         <td className="p-3">
//                           <span className={`text-[10px] font-black uppercase tracking-tight px-2 py-0.5 rounded border ${
//                             doc.status === 'Verified' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' :
//                             doc.status === 'Under Review' ? 'bg-amber-50 border-amber-200 text-amber-800' :
//                             doc.status === 'Rejected' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-blue-50 border-blue-200 text-blue-700'
//                           }`}>
//                             {doc.status}
//                           </span>
//                         </td>
//                         <td className="p-3 text-right">
//                           <div className="flex items-center justify-end gap-1.5">
//                             <button 
//                               onClick={() => setActiveModal({ type: 'view', data: doc })}
//                               className="p-1.5 bg-slate-50 hover:bg-slate-100 rounded border border-slate-200 text-slate-600 transition-colors"
//                               title="Audit View File Dossier"
//                             >
//                               <Eye size={12} />
//                             </button>
//                             <button 
//                               onClick={() => executeDownload(doc)}
//                               className="p-1.5 bg-slate-50 hover:bg-slate-100 rounded border border-slate-200 text-slate-600 transition-colors"
//                               title="Download Asset"
//                             >
//                               <Download size={12} />
//                             </button>
//                             <button 
//                               onClick={() => { setCopiedToken(false); setActiveModal({ type: 'share', data: doc }); }}
//                               className="p-1.5 bg-slate-50 hover:bg-slate-100 rounded border border-slate-200 text-slate-600 transition-colors"
//                               title="Share Secure Hash Link"
//                             >
//                               <Share2 size={12} />
//                             </button>
//                             <button 
//                               onClick={() => deleteDocument(doc.id)}
//                               className="p-1.5 bg-red-50 hover:bg-red-100 rounded border border-red-100 text-red-600 transition-colors"
//                               title="Purge Truncate Record"
//                             >
//                               <Trash2 size={12} />
//                             </button>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>

//       {/* --- MASTER OVERLAY SYSTEM MODAL MANAGER TERMINAL LAYER --- */}
//       {activeModal && (
//         <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
//           <div className="bg-white border border-slate-200 rounded-xl w-full max-w-lg p-5 shadow-xl animate-in zoom-in-95 duration-150 flex flex-col justify-between text-left">
            
//             {/* Top Modal Navigation Header */}
//             <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
//               <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
//                 <ShieldCheck size={14} className="text-blue-600" /> Vault Security Action Node
//               </h3>
//               <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
//                 <X size={16} />
//               </button>
//             </div>

//             {/* Modal Internal Content Switch Router */}
//             <div className="flex-1 text-xs text-slate-600 font-medium leading-relaxed py-1">
              
//               {/* 1. VIEW FILE DOSSIER PREVIEW */}
//               {activeModal.type === 'view' && activeModal.data && (
//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="text-sm font-black text-slate-900 leading-tight break-all">{activeModal.data.name}</h4>
//                     <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 border border-blue-100 rounded mt-1 inline-block">
//                       UID: {activeModal.data.id}
//                     </span>
//                   </div>

//                   <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg font-mono text-[11px]">
//                     <div>
//                       <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight font-sans">Category Group</p>
//                       <p className="text-slate-800 font-bold mt-0.5">{activeModal.data.category}</p>
//                     </div>
//                     <div>
//                       <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight font-sans">Assigned Folder</p>
//                       <p className="text-slate-800 font-bold mt-0.5">{activeModal.data.folder}</p>
//                     </div>
//                     <div className="pt-2">
//                       <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight font-sans">Upload Timestamp</p>
//                       <p className="text-slate-800 font-bold mt-0.5">{activeModal.data.uploadDate}</p>
//                     </div>
//                     <div className="pt-2">
//                       <p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight font-sans">Expiry Threshold</p>
//                       <p className="text-slate-800 font-bold mt-0.5">{activeModal.data.expiryDate}</p>
//                     </div>
//                   </div>

//                   {/* High Contrast Document View Simulated Canvas Mesh */}
//                   <div className="w-full min-h-[140px] border-2 border-dashed border-slate-200 bg-slate-50 rounded-xl flex flex-col items-center justify-center text-center p-4">
//                     <FileText size={32} className="text-slate-300 mb-1" />
//                     <p className="font-bold text-slate-700 text-[11px]">Secure PDF Preview Container Active</p>
//                     <p className="text-[10px] text-slate-400 font-mono mt-0.5">Encrypted Byte Stream: {activeModal.data.secureToken} == OK</p>
                    
//                     {/* Inline Verification Status Mutation Sandbox for Demo Persist */}
//                     <div className="flex gap-1.5 mt-4 border-t border-slate-200/60 pt-3 w-full justify-center">
//                       <button 
//                         onClick={() => { updateVerificationStatus(activeModal.data.id, 'Verified'); setActiveModal(null); }}
//                         className="px-2 py-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded text-[9px] uppercase tracking-wider"
//                       >
//                         Approve Verify
//                       </button>
//                       <button 
//                         onClick={() => { updateVerificationStatus(activeModal.data.id, 'Rejected'); setActiveModal(null); }}
//                         className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white font-bold rounded text-[9px] uppercase tracking-wider"
//                       >
//                         Reject Node
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* 2. SECURE TOKEN CRYPTO SHARING OVERLAY */}
//               {activeModal.type === 'share' && activeModal.data && (
//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="text-sm font-black text-slate-900 truncate">Share Archive Handshake Block</h4>
//                     <p className="text-[11px] text-slate-400 font-medium mt-0.5">Generates an authorization tunnel token matching statutory requirements.</p>
//                   </div>

//                   {/* Dynamic Token Link Interface */}
//                   <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between gap-3">
//                     <span className="font-mono text-slate-600 text-[11px] truncate flex-1">
//                       https://advocatevault.gov.in/auth/verify?token={activeModal.data.secureToken}
//                     </span>
//                     <button 
//                       onClick={() => {
//                         navigator.clipboard.writeText(`https://advocatevault.gov.in/auth/verify?token=${activeModal.data.secureToken}`);
//                         setCopiedToken(true);
//                         triggerAlert('Token Copied', 'Secure ledger path link saved to clipboard.');
//                       }}
//                       className="p-1.5 bg-white hover:bg-slate-100 rounded border text-slate-700 shrink-0 flex items-center gap-1 font-bold text-[10px]"
//                     >
//                       {copiedToken ? <CheckCircle size={12} className="text-emerald-600" /> : <Copy size={12} />}
//                       {copiedToken ? 'Copied' : 'Copy'}
//                     </button>
//                   </div>

//                   {/* Channel Endpoints Targeting Links Row Grid */}
//                   <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] font-bold text-slate-700">
//                     {[
//                       { node: 'Share With Court', icon: Landmark, css: 'hover:border-purple-300 hover:bg-purple-50/20' },
//                       { node: 'Share With Client', icon: Users, css: 'hover:border-emerald-300 hover:bg-emerald-50/20' },
//                       { node: 'Transmit Counsel', icon: User, css: 'hover:border-blue-300 hover:bg-blue-50/20' }
//                     ].map((target, idx) => {
//                       const IconNode = target.icon;
//                       return (
//                         <button 
//                           key={idx}
//                           onClick={() => { setActiveModal(null); triggerAlert('Secure Transmit Code', `File credentials dispatched to ${target.node} interface endpoint.`); }}
//                           className={`p-3 border border-slate-200 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all ${target.css}`}
//                         >
//                           <IconNode size={14} className="text-slate-500" />
//                           <span className="leading-tight block">{target.node}</span>
//                         </button>
//                       );
//                     })}
//                   </div>
//                 </div>
//               )}

//               {/* 3. VIRTUAL MAP DIRECTORY FOLDER INJECTOR */}
//               {activeModal.type === 'add_folder' && (
//                 <form onSubmit={(e) => {
//                   e.preventDefault();
//                   if (newFolderName.trim()) {
//                     const success = createFolder(newFolderName.trim());
//                     if (success) { setNewFolderName(''); setActiveModal(null); }
//                     else { alert("Error: Directory node name already allocated inside current memory thread stack."); }
//                   }
//                 }} className="space-y-4">
//                   <div>
//                     <label className="block text-[10px] font-black uppercase text-slate-400 mb-1">New Folder Matrix Directory Name</label>
//                     <input 
//                       type="text" 
//                       placeholder="e.g. Arbitration Records 2026"
//                       required
//                       value={newFolderName}
//                       onChange={e => setNewFolderName(e.target.value)}
//                       className="w-full p-2.5 border border-slate-200 rounded-lg text-xs font-bold bg-slate-50 text-slate-800"
//                     />
//                   </div>
//                   <button type="submit" className="w-full p-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-center">
//                     Initialize Mapping Entry Block
//                   </button>
//                 </form>
//               )}

//               {/* 4. DRAG-AND-DROP COMPREHENSIVE DOCK UPLOAD PANEL */}
//               {activeModal.type === 'upload' && (
//                 <div className="space-y-4">
//                   {/* Parameter Selection Setup Fields */}
//                   <div className="grid grid-cols-2 gap-3 text-left">
//                     <div>
//                       <label className="block text-[9px] font-bold uppercase text-slate-400 mb-1">Target Category</label>
//                       <select className="w-full p-2 border rounded-lg bg-slate-50 text-[11px] font-bold" value={selectedUploadCategory} onChange={e => setSelectedUploadCategory(e.target.value)}>
//                         {categoriesList.map(c => <option key={c} value={c}>{c}</option>)}
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-[9px] font-bold uppercase text-slate-400 mb-1">Target Folder</label>
//                       <select className="w-full p-2 border rounded-lg bg-slate-50 text-[11px] font-bold" value={selectedUploadFolder} onChange={e => setSelectedUploadFolder(e.target.value)}>
//                         {folders.map(f => <option key={f} value={f}>{f}</option>)}
//                       </select>
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-[9px] font-bold uppercase text-slate-400 mb-1 text-left">Statutory Expiry Threshold Date (Optional)</label>
//                     <input type="date" className="w-full p-2 border rounded-lg bg-slate-50 text-[11px] font-mono font-bold" value={uploadExpiryDate} onChange={e => setUploadExpiryDate(e.target.value)} />
//                   </div>

//                   {/* Active Drag-Over Canvas Capture Target Box */}
//                   <div 
//                     onDragOver={handleDragOver}
//                     onDragLeave={handleDragLeave}
//                     onDrop={handleDrop}
//                     className={`border-2 border-dashed rounded-xl p-6 text-center transition-all flex flex-col items-center justify-center ${
//                       isDragging ? 'border-blue-500 bg-blue-50/20' : 'border-slate-200 bg-slate-50/60 hover:bg-slate-50'
//                     }`}
//                   >
//                     <ArrowUpRight size={24} className={`mb-1.5 ${isDragging ? 'text-blue-500 animate-bounce' : 'text-slate-400'}`} />
//                     <p className="font-bold text-slate-800 text-xs">Drag & Drop Document Brief file attachment</p>
//                     <p className="text-[10px] text-slate-400 font-medium mt-0.5">Accepted Formats: PDF, JPG, PNG up to maximum size 10MB limit</p>
                    
//                     <button 
//                       onClick={() => triggerSimulatedUpload(`Brief_Docket_Ref_${Math.floor(1000+Math.random()*9000)}.pdf`, 2451002)}
//                       className="mt-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold px-3 py-1.5 shadow-2xs text-slate-700 flex items-center gap-1"
//                     >
//                       Browse Device Storage
//                     </button>
//                   </div>

//                   {/* Progress bar handler simulator view render box */}
//                   {uploadProgress > 0 && (
//                     <div className="space-y-1.5 text-left bg-slate-900 text-white p-3 rounded-lg border font-mono text-[10px]">
//                       <div className="flex justify-between font-bold">
//                         <span className="truncate flex-1 text-slate-300">Syncing: {simulatedFileName}</span>
//                         <span className="text-blue-400">{uploadProgress}%</span>
//                       </div>
//                       <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
//                         <div className="bg-blue-500 h-full transition-all duration-150" style={{ width: `${uploadProgress}%` }} />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }



// import React, { useState, useRef } from 'react';
// import { useDocumentVault } from '../context/DocumentVaultContext';
// import { 
//   ShieldCheck, FileText, FolderPlus, Search, 
//   Eye, Download, Share2, Trash2, Folder, 
//   X, Copy, Users, Landmark, User, ArrowUpRight, Plus, Layers, Camera
// } from 'lucide-react';

// export default function DocumentVaultPage() {
//   const {
//     documents, folders, activities, vaultNotifications,
//     createFolder, deleteFolder, addDocument, deleteDocument, updateVerificationStatus, clearNotification, triggerAlert
//   } = useDocumentVault();

//   // Filter Engine States
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedFolder, setSelectedFolder] = useState('All');
  
//   // Modals & UI Triggers
//   const [activeModal, setActiveModal] = useState(null); 
//   const [isDragging, setIsDragging] = useState(false);
//   const [newFolderName, setNewFolderName] = useState('');
//   const [copiedToken, setCopiedToken] = useState(false);

//   // 🔥 REAL FILE HANDLERS CORE MEMORY LAYER
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [simulatedFileName, setSimulatedFileName] = useState('');
//   const [selectedUploadCategory, setSelectedUploadCategory] = useState('Bar Council Certificate');
//   const [selectedUploadFolder, setSelectedUploadFolder] = useState('Professional Documents');
//   const [uploadExpiryDate, setUploadExpiryDate] = useState('');

//   // Native input link ref
//   const nativeFileInputRef = useRef(null);

//   const categoriesList = [
//     'Enrollment Certificate', 'Bar Council Certificate', 'Practice Certificate',
//     'Court Authorizations', 'Professional License', 'Identity Documents',
//     'Client Documents', 'Case Documents'
//   ];

//   // System Date Timeline Mapping Node
//   const todayStr = new Date('2026-06-19');

//   // Analytical Metrics Engine
//   const totalDocs = documents.length;
//   const verifiedDocs = documents.filter(d => d.status === 'Verified').length;
//   const pendingDocs = documents.filter(d => d.status === 'Pending' || d.status === 'Under Review').length;
  
//   const expiringDocs = documents.filter(d => {
//     if (d.expiryDate === 'None' || !d.expiryDate) return false;
//     const exp = new Date(d.expiryDate);
//     const timeDiff = exp.getTime() - todayStr.getTime();
//     const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
//     return daysDiff >= 0 && daysDiff <= 30;
//   }).length;

//   // Real-time Pipeline Filtration
//   const filteredDocuments = documents.filter(doc => {
//     const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           doc.id.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCat = selectedCategory === 'All' || doc.category === selectedCategory;
//     const matchesFolder = selectedFolder === 'All' || doc.folder === selectedFolder;
//     return matchesSearch && matchesCat && matchesFolder;
//   });

//   const computeExpiryWarning = (expiryDate) => {
//     if (expiryDate === 'None' || !expiryDate) return { text: 'Permanent Valid', css: 'text-slate-500 bg-slate-50' };
//     const exp = new Date(expiryDate);
//     const days = Math.ceil((exp.getTime() - todayStr.getTime()) / (1000 * 3600 * 24));
//     if (days < 0) return { text: 'Expired', css: 'text-red-700 bg-red-50 border-red-200' };
//     if (days <= 30) return { text: `Expiring Soon (${days}d)`, css: 'text-amber-700 bg-amber-50 border-amber-200 animate-pulse' };
//     return { text: `Valid Till ${expiryDate}`, css: 'text-slate-600 bg-slate-50' };
//   };

//   // 🔥 EXPLICIT DRAG OVER AND DROP LOGIC EXTRACTING REAL COMPUTER FILE METADATA
//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(false);
    
//     const droppedFiles = e.dataTransfer.files;
//     if (droppedFiles && droppedFiles.length > 0) {
//       processIncomingFileObject(droppedFiles[0]);
//     }
//   };

//   // Trigger from manual storage lookup button click events
//   const handleNativeFileSelection = (e) => {
//     const chosenFiles = e.target.files;
//     if (chosenFiles && chosenFiles.length > 0) {
//       processIncomingFileObject(chosenFiles[0]);
//     }
//   };

//   // Core Processing Unit validating extensions and file sizes
//   const processIncomingFileObject = (fileObj) => {
//     const extension = fileObj.name.split('.').pop().toLowerCase();
//     const allowedExtensions = ['pdf', 'jpg', 'jpeg', 'png'];
    
//     if (!allowedExtensions.includes(extension)) {
//       alert("Security Violation: Only PDF, JPG, and PNG file extensions are authorized inside this vault node.");
//       return;
//     }

//     const maxLimitBytes = 10 * 1024 * 1024; // Strict 10MB Constraint Gate
//     if (fileObj.size > maxLimitBytes) {
//       alert("Storage Threshold Exceeded: Upload target bounds cannot cross the 10MB data limit.");
//       return;
//     }

//     const readableSizeString = (fileObj.size / (1024 * 1024)).toFixed(1) + ' MB';
    
//     setSimulatedFileName(fileObj.name);
//     setUploadProgress(15);

//     let progressCount = 15;
//     const uploadTimer = setInterval(() => {
//       progressCount += 25;
//       if (progressCount >= 100) {
//         clearInterval(uploadTimer);
//         setUploadProgress(100);
//         setTimeout(() => {
//           addDocument({
//             name: fileObj.name,
//             category: selectedUploadCategory,
//             folder: selectedUploadFolder,
//             expiryDate: uploadExpiryDate || 'None',
//             status: 'Pending',
//             size: readableSizeString
//           });
//           setUploadProgress(0);
//           setSimulatedFileName('');
//           setActiveModal(null);
//         }, 300);
//       } else {
//         setUploadProgress(progressCount);
//       }
//     }, 150);
//   };

//   return (
//     <div className="space-y-6 w-full animate-in fade-in duration-300 text-slate-800">
      
//       {/* Dynamic Hidden Input Wire Tag to capture device directories native UI */}
//       <input 
//         type="file"
//         ref={nativeFileInputRef}
//         onChange={handleNativeFileSelection}
//         accept=".pdf,.png,.jpg,.jpeg"
//         className="hidden"
//       />

//       {/* TOAST PANEL COUPLER */}
//       <div className="fixed bottom-5 right-5 z-50 space-y-2 max-w-sm w-full">
//         {vaultNotifications.map(toast => (
//           <div key={toast.id} className="bg-slate-900 text-white p-3.5 rounded-xl shadow-lg border border-slate-800 flex items-start justify-between gap-3 animate-in slide-in-from-bottom-5">
//             <div className="text-xs text-left">
//               <p className="font-black text-blue-400 uppercase tracking-wide leading-none">{toast.title}</p>
//               <p className="text-slate-300 font-medium mt-1">{toast.message}</p>
//             </div>
//             <button onClick={() => clearNotification(toast.id)} className="text-slate-400 hover:text-white shrink-0"><X size={14} /></button>
//           </div>
//         ))}
//       </div>

//       {/* STATISTICS CANVAS BLOCK */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">
//         {[
//           { label: 'Total Vault Files Attached', count: totalDocs, status: 'Active Records', css: 'border-slate-200 text-slate-900 bg-white' },
//           { label: 'BCI Authenticated Seals', count: verifiedDocs, status: 'Verified Ledger', css: 'border-emerald-200 text-emerald-800 bg-emerald-50/40' },
//           { label: 'Pending Compliance Audits', count: pendingDocs, status: 'Under Review', css: 'border-blue-200 text-blue-800 bg-blue-50/40' },
//           { label: 'Expiring Licensing Nodes', count: expiringDocs, status: 'Action Needed', css: expiringDocs > 0 ? 'border-red-200 text-red-800 bg-red-50/50 animate-pulse' : 'border-slate-200 text-slate-600 bg-white' }
//         ].map((card, i) => (
//           <div key={i} className={`p-4 border rounded-xl flex flex-col justify-between shadow-2xs ${card.css}`}>
//             <span className="text-[10px] font-black uppercase tracking-wider opacity-75 block text-left">{card.label}</span>
//             <div className="flex items-baseline gap-2 mt-2 text-left">
//               <span className="text-3xl font-black font-mono tracking-tight">{card.count}</span>
//               <span className="text-[10px] font-bold opacity-80 uppercase tracking-wider">{card.status}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* FILTER AND CONTROLS ACTION REGISTRY STRIP */}
//       <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col lg:flex-row lg:items-center justify-between gap-3 w-full">
//         <div className="relative flex-1 max-w-md">
//           <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
//           <input 
//             type="text"
//             placeholder="Search vault records by name or system document ID token..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="pl-9 pr-4 py-1.5 w-full bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-hidden focus:border-blue-500"
//           />
//         </div>
        
//         <div className="flex flex-wrap items-center gap-2.5">
//           <select 
//             value={selectedCategory} 
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700"
//           >
//             <option value="All">All Categories</option>
//             {categoriesList.map(c => <option key={c} value={c}>{c}</option>)}
//           </select>

//           <select 
//             value={selectedFolder} 
//             onChange={(e) => setSelectedFolder(e.target.value)}
//             className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700"
//           >
//             <option value="All">All Folders</option>
//             {folders.map(f => <option key={f} value={f}>{f}</option>)}
//           </select>
//         </div>
//       </div>

//       {/* SYSTEM DIRECTORY DOUBLE WORKSPACE BLUEPRINT LAYOUT */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start w-full">
        
//         {/* Left Side: Virtual Directory Blocks & Fast Triggers */}
//         <div className="space-y-5">
//           <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
//             <div className="flex items-center justify-between border-b border-slate-100 pb-2">
//               <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
//                 <Layers size={13} className="text-blue-600" /> Virtual Folders
//               </h4>
//               <button 
//                 onClick={() => setActiveModal({ type: 'add_folder', data: null })}
//                 className="text-[10px] font-black text-blue-600 hover:underline flex items-center gap-0.5"
//               >
//                 <Plus size={11} /> Add
//               </button>
//             </div>

//             <div className="space-y-1">
//               <button 
//                 onClick={() => setSelectedFolder('All')}
//                 className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-bold flex items-center justify-between transition-colors ${
//                   selectedFolder === 'All' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
//                 }`}
//               >
//                 <span className="truncate flex items-center gap-2"><FileText size={14} /> Root Directory</span>
//                 <span className="font-mono text-[10px] opacity-60">{documents.length}</span>
//               </button>

//               {folders.map(f => {
//                 const count = documents.filter(d => d.folder === f).length;
//                 return (
//                   <div key={f} className="group flex items-center justify-between w-full rounded-lg hover:bg-slate-50/80 pr-2">
//                     <button 
//                       onClick={() => setSelectedFolder(f)}
//                       className={`text-left px-2.5 py-2 text-xs font-bold flex items-center gap-2 truncate flex-1 ${
//                         selectedFolder === f ? 'text-blue-700 font-extrabold' : 'text-slate-600'
//                       }`}
//                     >
//                       <Folder size={14} className={selectedFolder === f ? 'text-blue-600 fill-blue-50' : 'text-slate-400'} />
//                       <span className="truncate">{f}</span>
//                     </button>
//                     <div className="flex items-center gap-1.5 shrink-0">
//                       <span className="font-mono text-[10px] text-slate-400 font-bold">{count}</span>
//                       <button 
//                         onClick={() => { deleteFolder(f); if (selectedFolder === f) setSelectedFolder('All'); }}
//                         className="text-slate-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-0.5"
//                       >
//                         <Trash2 size={11} />
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Quick Triggers Layout */}
//           <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-2">
//             <button 
//               onClick={() => setActiveModal({ type: 'upload', data: null })}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs p-2.5 rounded-lg transition-colors flex items-center justify-center shadow-xs"
//             >
//               Upload New Document
//             </button>
//             <button 
//               onClick={() => alert("System message: Real-time validation audit requests dispatched directly to state Bar servers.")}
//               className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs p-2.5 rounded-lg transition-colors flex items-center justify-center"
//             >
//               Request Verification Scan
//             </button>
//           </div>

//           {/* Logs Audit Box */}
//           <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
//             <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">Recent Cryptographic Trails</h4>
//             <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
//               {activities.map(act => (
//                 <div key={act.id} className="text-[11px] leading-tight border-b border-slate-50 pb-2 last:border-0 last:pb-0 text-left">
//                   <p className="text-slate-600 font-medium">{act.text}</p>
//                   <span className="text-[9px] text-slate-400 font-mono block mt-0.5">{act.time}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Tabular Archive Ledger Workspace Layout Sheet */}
//         <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
//           <div className="overflow-x-auto w-full border border-slate-100 rounded-xl">
//             <table className="w-full text-left text-xs border-collapse">
//               <thead>
//                 <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase text-[9px] font-black tracking-wider">
//                   <th className="p-3">Document Particulars / Token ID</th>
//                   <th className="p-3">Statutory Category</th>
//                   <th className="p-3">Validation Check</th>
//                   <th className="p-3">Verification Badge</th>
//                   <th className="p-3 text-right">Actions Matrix</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
//                 {filteredDocuments.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className="p-12 text-center text-slate-400 font-medium">
//                       No secure document nodes matches current active queries within this folder block.
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredDocuments.map(doc => {
//                     const warnSpecs = computeExpiryWarning(doc.expiryDate);
//                     return (
//                       <tr key={doc.id} className="hover:bg-slate-50/60 transition-colors">
//                         <td className="p-3">
//                           <p className="font-bold text-slate-900 max-w-[220px] truncate">{doc.name}</p>
//                           <span className="text-[10px] font-mono font-bold text-slate-400 block mt-0.5">{doc.id} • {doc.size}</span>
//                         </td>
//                         <td className="p-3">
//                           <span className="text-[11px] text-slate-600 font-semibold">{doc.category}</span>
//                           <span className="text-[9px] text-slate-400 block font-mono mt-0.5">{doc.folder}</span>
//                         </td>
//                         <td className="p-3">
//                           <span className={`text-[10px] font-bold px-2 py-0.5 rounded border inline-block whitespace-nowrap ${warnSpecs.css}`}>
//                             {warnSpecs.text}
//                           </span>
//                         </td>
//                         <td className="p-3">
//                           <span className={`text-[10px] font-black uppercase tracking-tight px-2 py-0.5 rounded border ${
//                             doc.status === 'Verified' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' :
//                             doc.status === 'Under Review' ? 'bg-amber-50 border-amber-200 text-amber-800' :
//                             doc.status === 'Rejected' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-blue-50 border-blue-200 text-blue-700'
//                           }`}>
//                             {doc.status}
//                           </span>
//                         </td>
//                         <td className="p-3 text-right">
//                           <div className="flex items-center justify-end gap-1.5">
//                             <button onClick={() => setActiveModal({ type: 'view', data: doc })} className="p-1.5 bg-slate-50 hover:bg-slate-100 rounded border text-slate-600"><Eye size={12} /></button>
//                             <button onClick={() => executeDownload(doc)} className="p-1.5 bg-slate-50 hover:bg-slate-100 rounded border text-slate-600"><Download size={12} /></button>
//                             <button onClick={() => { setCopiedToken(false); setActiveModal({ type: 'share', data: doc }); }} className="p-1.5 bg-slate-50 hover:bg-slate-100 rounded border text-slate-600"><Share2 size={12} /></button>
//                             <button onClick={() => deleteDocument(doc.id)} className="p-1.5 bg-red-50 hover:bg-red-100 rounded border border-red-100 text-red-600"><Trash2 size={12} /></button>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>

//       {/* --- RE-ARCHITECTED SYSTEM MODALS SCREEN TERMINAL PANEL LAYER --- */}
//       {activeModal && (
//         <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
//           <div className="bg-white border border-slate-200 rounded-xl w-full max-w-lg p-5 shadow-xl animate-in zoom-in-95 duration-150 flex flex-col justify-between text-left">
            
//             <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
//               <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
//                 <ShieldCheck size={14} className="text-blue-600" /> Vault Security Action Node
//               </h3>
//               <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400 hover:text-slate-600 rounded-lg">
//                 <X size={16} />
//               </button>
//             </div>

//             <div className="flex-1 text-xs text-slate-600 font-medium leading-relaxed py-1">
              
//               {activeModal.type === 'view' && activeModal.data && (
//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="text-sm font-black text-slate-900 leading-tight break-all">{activeModal.data.name}</h4>
//                     <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 border border-blue-100 rounded mt-1 inline-block">UID: {activeModal.data.id}</span>
//                   </div>
//                   <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 border border-slate-100 rounded-lg font-mono text-[11px]">
//                     <div><p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">Category Group</p><p className="text-slate-800 font-bold mt-0.5">{activeModal.data.category}</p></div>
//                     <div><p className="text-[9px] text-slate-400 font-bold uppercase tracking-tight">Assigned Folder</p><p className="text-slate-800 font-bold mt-0.5">{activeModal.data.folder}</p></div>
//                   </div>
//                   <div className="w-full min-h-[120px] border border-slate-200 bg-slate-50 rounded-xl flex flex-col items-center justify-center text-center p-4">
//                     <FileText size={24} className="text-slate-300 mb-1" />
//                     <p className="font-bold text-slate-700">Encrypted Byte Container Stream Verified</p>
//                     <div className="flex gap-1.5 mt-3 w-full justify-center">
//                       <button onClick={() => { updateVerificationStatus(activeModal.data.id, 'Verified'); setActiveModal(null); }} className="px-2 py-1 bg-emerald-600 text-white font-bold rounded text-[9px]">APPROVE</button>
//                       <button onClick={() => { updateVerificationStatus(activeModal.data.id, 'Rejected'); setActiveModal(null); }} className="px-2 py-1 bg-red-600 text-white font-bold rounded text-[9px]">REJECT</button>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeModal.type === 'share' && activeModal.data && (
//                 <div className="space-y-4">
//                   <div className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-between gap-3">
//                     <span className="font-mono text-slate-600 text-[11px] truncate flex-1">https://advocatevault.gov.in/auth/verify?token={activeModal.data.secureToken}</span>
//                     <button 
//                       onClick={() => {
//                         navigator.clipboard.writeText(`https://advocatevault.gov.in/auth/verify?token=${activeModal.data.secureToken}`);
//                         setCopiedToken(true);
//                         triggerAlert('Token Copied', 'Secure handshake token address saved.');
//                       }}
//                       className="p-1.5 bg-white border text-slate-700 shrink-0 flex items-center gap-1 font-bold text-[10px]"
//                     >
//                       {copiedToken ? 'Copied' : 'Copy'}
//                     </button>
//                   </div>
//                 </div>
//               )}

//               {activeModal.type === 'add_folder' && (
//                 <form onSubmit={(e) => {
//                   e.preventDefault();
//                   if (newFolderName.trim() && createFolder(newFolderName.trim())) { setNewFolderName(''); setActiveModal(null); }
//                 }} className="space-y-4">
//                   <input type="text" placeholder="e.g. Court Records 2026" required value={newFolderName} onChange={e => setNewFolderName(e.target.value)} className="w-full p-2.5 border rounded-lg text-xs font-bold bg-slate-50 text-slate-800" />
//                   <button type="submit" className="w-full p-2.5 bg-blue-600 text-white font-bold rounded-lg">Create Directory</button>
//                 </form>
//               )}

//               {/* 🔥 EXACT RE-ENGINEERED UPLOAD MATRIX COMPLYING WITH IMAGE_6473AC.PNG */}
//               {activeModal.type === 'upload' && (
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 gap-3 text-left">
//                     <div>
//                       <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Target Category</label>
//                       <select className="w-full p-2 border rounded-lg bg-slate-50 font-bold" value={selectedUploadCategory} onChange={e => setSelectedUploadCategory(e.target.value)}>
//                         {categoriesList.map(c => <option key={c} value={c}>{c}</option>)}
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Target Folder</label>
//                       <select className="w-full p-2 border rounded-lg bg-slate-50 font-bold" value={selectedUploadFolder} onChange={e => setSelectedUploadFolder(e.target.value)}>
//                         {folders.map(f => <option key={f} value={f}>{f}</option>)}
//                       </select>
//                     </div>
//                   </div>

//                   <div className="text-left">
//                     <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Statutory Expiry Threshold Date (Optional)</label>
//                     <input type="date" className="w-full p-2 border rounded-lg bg-slate-50 font-mono font-bold" value={uploadExpiryDate} onChange={e => setUploadExpiryDate(e.target.value)} />
//                   </div>

//                   {/* DROP ZONE CANVAS CAPTURING COMPUTER HARDWARE FILES */}
//                   <div 
//                     onDragOver={handleDragOver}
//                     onDragLeave={handleDragLeave}
//                     onDrop={handleDrop}
//                     className={`border-2 border-dashed rounded-xl p-8 text-center transition-all flex flex-col items-center justify-center ${
//                       isDragging ? 'border-blue-500 bg-blue-50/40' : 'border-slate-200 bg-slate-50/60'
//                     }`}
//                   >
//                     <ArrowUpRight size={24} className={`mb-2 ${isDragging ? 'text-blue-500 animate-bounce' : 'text-slate-400'}`} />
//                     <p className="font-bold text-slate-800 text-xs">Drag & Drop Document Brief file attachment</p>
//                     <p className="text-[10px] text-slate-400 font-medium mt-0.5">Accepted Formats: PDF, JPG, PNG up to maximum size 10MB limit</p>
                    
//                     {/* Click event bypass link bound directly to system click layers */}
//                     <button 
//                       onClick={() => nativeFileInputRef.current.click()}
//                       className="mt-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold px-3 py-1.5 shadow-3xs text-slate-700"
//                     >
//                       Browse Device Storage
//                     </button>
//                   </div>

//                   {/* Progress tracker canvas */}
//                   {uploadProgress > 0 && (
//                     <div className="space-y-1 text-left bg-slate-900 text-white p-3 rounded-lg font-mono text-[10px]">
//                       <div className="flex justify-between font-bold">
//                         <span className="truncate flex-1 text-slate-300">Uploading File Node: {simulatedFileName}</span>
//                         <span className="text-blue-400">{uploadProgress}%</span>
//                       </div>
//                       <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
//                         <div className="bg-blue-500 h-full transition-all" style={{ width: `${uploadProgress}%` }} />
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               )}

//             </div>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }



// import React, { useState, useRef } from 'react';
// import { useDocumentVault } from '../context/DocumentVaultContext';
// import { 
//   ShieldCheck, FileText, FolderPlus, Search, 
//   Eye, Download, Share2, Trash2, Folder, 
//   X, Copy, Users, Landmark, User, ArrowUpRight, Plus, Layers, Camera
// } from 'lucide-react';

// // 🔥 FIXED: Added export default descriptor node safely to patch Vite component routing boundaries
// export default function DocumentVaultPage() {
//   const {
//     documents, folders, activities, vaultNotifications,
//     createFolder, deleteFolder, addDocument, deleteDocument, updateVerificationStatus, clearNotification, triggerAlert
//   } = useDocumentVault();

//   // Filter Engine States
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [selectedFolder, setSelectedFolder] = useState('All');
  
//   // Modals & UI Triggers
//   const [activeModal, setActiveModal] = useState(null); 
//   const [isDragging, setIsDragging] = useState(false);
//   const [newFolderName, setNewFolderName] = useState('');
//   const [copiedToken, setCopiedToken] = useState(false);

//   // REAL FILE HANDLERS CORE MEMORY LAYER
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [simulatedFileName, setSimulatedFileName] = useState('');
//   const [selectedUploadCategory, setSelectedUploadCategory] = useState('Bar Council Certificate');
//   const [selectedUploadFolder, setSelectedUploadFolder] = useState('Professional Documents');
//   const [uploadExpiryDate, setUploadExpiryDate] = useState('');

//   // Native input link ref
//   const nativeFileInputRef = useRef(null);

//   const categoriesList = [
//     'Enrollment Certificate', 'Bar Council Certificate', 'Practice Certificate',
//     'Court Authorizations', 'Professional License', 'Identity Documents',
//     'Client Documents', 'Case Documents'
//   ];

//   // System Date Timeline Mapping Node
//   const todayStr = new Date('2026-06-19');

//   // Analytical Metrics Engine
//   const totalDocs = documents.length;
//   const verifiedDocs = documents.filter(d => d.status === 'Verified').length;
//   const pendingDocs = documents.filter(d => d.status === 'Pending' || d.status === 'Under Review').length;
  
//   const expiringDocs = documents.filter(d => {
//     if (d.expiryDate === 'None' || !d.expiryDate) return false;
//     const exp = new Date(d.expiryDate);
//     const timeDiff = exp.getTime() - todayStr.getTime();
//     const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
//     return daysDiff >= 0 && daysDiff <= 30;
//   }).length;

//   // Real-time Pipeline Filtration
//   const filteredDocuments = documents.filter(doc => {
//     const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//                           doc.id.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesCat = selectedCategory === 'All' || doc.category === selectedCategory;
//     const matchesFolder = selectedFolder === 'All' || doc.folder === selectedFolder;
//     return matchesSearch && matchesCat && matchesFolder;
//   });

//   const computeExpiryWarning = (expiryDate) => {
//     if (expiryDate === 'None' || !expiryDate) return { text: 'Permanent Valid', css: 'text-slate-500 bg-slate-50' };
//     const exp = new Date(expiryDate);
//     const days = Math.ceil((exp.getTime() - todayStr.getTime()) / (1000 * 3600 * 24));
//     if (days < 0) return { text: 'Expired', css: 'text-red-700 bg-red-50 border-red-200' };
//     if (days <= 30) return { text: `Expiring Soon (${days}d)`, css: 'text-amber-700 bg-amber-50 border-amber-200 animate-pulse' };
//     return { text: `Valid Till ${expiryDate}`, css: 'text-slate-600 bg-slate-50' };
//   };

//   // 🔥 FIXED: Added the missing operational download utility engine handler function
//   const executeDownload = (doc) => {
//     try {
//       triggerAlert('Secure Download', `Initializing binary stream export for file ledger token: ${doc.id}`);
//       // Simulate real-world downloadable system generation anchors
//       const virtualAnchorElement = document.createElement('a');
//       virtualAnchorElement.setAttribute('href', '#');
//       virtualAnchorElement.setAttribute('download', doc.name);
//       document.body.appendChild(virtualAnchorElement);
//       virtualAnchorElement.click();
//       document.body.removeChild(virtualAnchorElement);
//     } catch (err) {
//       console.error("FileSystem Stream Failure Exception Code Log:", err);
//     }
//   };

//   // EXPLICIT DRAG OVER AND DROP LOGIC EXTRACTING REAL COMPUTER FILE METADATA
//   const handleDragOver = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(true);
//   };

//   const handleDragLeave = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(false);
//   };

//   const handleDrop = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     setIsDragging(false);
    
//     const droppedFiles = e.dataTransfer.files;
//     if (droppedFiles && droppedFiles.length > 0) {
//       processIncomingFileObject(droppedFiles[0]);
//     }
//   };

//   const handleNativeFileSelection = (e) => {
//     const chosenFiles = e.target.files;
//     if (chosenFiles && chosenFiles.length > 0) {
//       processIncomingFileObject(chosenFiles[0]);
//     }
//   };

//   const processIncomingFileObject = (fileObj) => {
//     const extension = fileObj.name.split('.').pop().toLowerCase();
//     const allowedExtensions = ['pdf', 'jpg', 'jpeg', 'png'];
    
//     if (!allowedExtensions.includes(extension)) {
//       alert("Security Violation: Only PDF, JPG, and PNG file extensions are authorized inside this vault node.");
//       return;
//     }

//     const maxLimitBytes = 10 * 1024 * 1024; 
//     if (fileObj.size > maxLimitBytes) {
//       alert("Storage Threshold Exceeded: Upload target bounds cannot cross the 10MB data limit.");
//       return;
//     }

//     const readableSizeString = (fileObj.size / (1024 * 1024)).toFixed(1) + ' MB';
    
//     setSimulatedFileName(fileObj.name);
//     setUploadProgress(15);

//     let progressCount = 15;
//     const uploadTimer = setInterval(() => {
//       progressCount += 25;
//       if (progressCount >= 100) {
//         clearInterval(uploadTimer);
//         setUploadProgress(100);
//         setTimeout(() => {
//           addDocument({
//             name: fileObj.name,
//             category: selectedUploadCategory,
//             folder: selectedUploadFolder,
//             expiryDate: uploadExpiryDate || 'None',
//             status: 'Pending',
//             size: readableSizeString
//           });
//           setUploadProgress(0);
//           setSimulatedFileName('');
//           setActiveModal(null);
//         }, 300);
//       } else {
//         setUploadProgress(progressCount);
//       }
//     }, 150);
//   };

//   return (
//     <div className="space-y-6 w-full animate-in fade-in duration-300 text-slate-800">
      
//       <input 
//         type="file"
//         ref={nativeFileInputRef}
//         onChange={handleNativeFileSelection}
//         accept=".pdf,.png,.jpg,.jpeg"
//         className="hidden"
//       />

//       {/* TOAST PANEL COUPLER */}
//       <div className="fixed bottom-5 right-5 z-50 space-y-2 max-w-sm w-full">
//         {vaultNotifications.map(toast => (
//           <div key={toast.id} className="bg-slate-900 text-white p-3.5 rounded-xl shadow-lg border border-slate-800 flex items-start justify-between gap-3 animate-in slide-in-from-bottom-5">
//             <div className="text-xs text-left">
//               <p className="font-black text-blue-400 uppercase tracking-wide leading-none">{toast.title}</p>
//               <p className="text-slate-300 font-medium mt-1">{toast.message}</p>
//             </div>
//             <button onClick={() => clearNotification(toast.id)} className="text-slate-400 hover:text-white shrink-0"><X size={14} /></button>
//           </div>
//         ))}
//       </div>

//       {/* STATISTICS CANVAS BLOCK */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">
//         {[
//           { label: 'Total Vault Files Attached', count: totalDocs, status: 'Active Records', css: 'border-slate-200 text-slate-900 bg-white' },
//           { label: 'BCI Authenticated Seals', count: verifiedDocs, status: 'Verified Ledger', css: 'border-emerald-200 text-emerald-800 bg-emerald-50/40' },
//           { label: 'Pending Compliance Audits', count: pendingDocs, status: 'Under Review', css: 'border-blue-200 text-blue-800 bg-blue-50/40' },
//           { label: 'Expiring Licensing Nodes', count: expiringDocs, status: 'Action Needed', css: expiringDocs > 0 ? 'border-red-200 text-red-800 bg-red-50/50 animate-pulse' : 'border-slate-200 text-slate-600 bg-white' }
//         ].map((card, i) => (
//           <div key={i} className={`p-4 border rounded-xl flex flex-col justify-between shadow-2xs ${card.css}`}>
//             <span className="text-[10px] font-black uppercase tracking-wider opacity-75 block text-left">{card.label}</span>
//             <div className="flex items-baseline gap-2 mt-2 text-left">
//               <span className="text-3xl font-black font-mono tracking-tight">{card.count}</span>
//               <span className="text-[10px] font-bold opacity-80 uppercase tracking-wider">{card.status}</span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* FILTER AND CONTROLS ACTION REGISTRY STRIP */}
//       <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col lg:flex-row lg:items-center justify-between gap-3 w-full">
//         <div className="relative flex-1 max-w-md">
//           <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
//           <input 
//             type="text"
//             placeholder="Search vault records by name or system document ID token..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="pl-9 pr-4 py-1.5 w-full bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-hidden"
//           />
//         </div>
        
//         <div className="flex flex-wrap items-center gap-2.5">
//           <select 
//             value={selectedCategory} 
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:outline-hidden"
//           >
//             <option value="All">All Categories</option>
//             {categoriesList.map(c => <option key={c} value={c}>{c}</option>)}
//           </select>

//           <select 
//             value={selectedFolder} 
//             onChange={(e) => setSelectedFolder(e.target.value)}
//             className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 focus:outline-hidden"
//           >
//             <option value="All">All Folders</option>
//             {folders.map(f => <option key={f} value={f}>{f}</option>)}
//           </select>
//         </div>
//       </div>

//       {/* SYSTEM DIRECTORY DOUBLE WORKSPACE LAYOUT */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start w-full">
        
//         {/* Left Side: Directory Blocks */}
//         <div className="space-y-5">
//           <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
//             <div className="flex items-center justify-between border-b border-slate-100 pb-2">
//               <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
//                 <Layers size={13} className="text-blue-600" /> Virtual Folders
//               </h4>
//               <button 
//                 onClick={() => setActiveModal({ type: 'add_folder', data: null })}
//                 className="text-[10px] font-black text-blue-600 hover:underline flex items-center gap-0.5"
//               >
//                 <Plus size={11} /> Add
//               </button>
//             </div>

//             <div className="space-y-1 text-left">
//               <button 
//                 onClick={() => setSelectedFolder('All')}
//                 className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-bold flex items-center justify-between transition-colors ${
//                   selectedFolder === 'All' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'
//                 }`}
//               >
//                 <span className="truncate flex items-center gap-2"><FileText size={14} /> Root Directory</span>
//                 <span className="font-mono text-[10px] opacity-60">{documents.length}</span>
//               </button>

//               {folders.map(f => {
//                 const count = documents.filter(d => d.folder === f).length;
//                 return (
//                   <div key={f} className="group flex items-center justify-between w-full rounded-lg hover:bg-slate-50/80 pr-2">
//                     <button 
//                       onClick={() => setSelectedFolder(f)}
//                       className={`text-left px-2.5 py-2 text-xs font-bold flex items-center gap-2 truncate flex-1 ${
//                         selectedFolder === f ? 'text-blue-700 font-extrabold' : 'text-slate-600'
//                       }`}
//                     >
//                       <Folder size={14} className={selectedFolder === f ? 'text-blue-600 fill-blue-50' : 'text-slate-400'} />
//                       <span className="truncate">{f}</span>
//                     </button>
//                     <div className="flex items-center gap-1.5 shrink-0">
//                       <span className="font-mono text-[10px] text-slate-400 font-bold">{count}</span>
//                       <button 
//                         onClick={() => { deleteFolder(f); if (selectedFolder === f) setSelectedFolder('All'); }}
//                         className="text-slate-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-0.5"
//                       >
//                         <Trash2 size={11} />
//                       </button>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-2">
//             <button 
//               onClick={() => setActiveModal({ type: 'upload', data: null })}
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs p-2.5 rounded-lg transition-colors flex items-center justify-center shadow-xs"
//             >
//               Upload New Document
//             </button>
//           </div>

//           <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
//             <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2 text-left">Recent Cryptographic Trails</h4>
//             <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1 text-left">
//               {activities.map(act => (
//                 <div key={act.id} className="text-[11px] leading-tight border-b border-slate-50 pb-2 last:border-0 last:pb-0">
//                   <p className="text-slate-600 font-medium">{act.text}</p>
//                   <span className="text-[9px] text-slate-400 font-mono block mt-0.5">{act.time}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Tabular Archive Ledger */}
//         <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
//           <div className="overflow-x-auto w-full border border-slate-100 rounded-xl">
//             <table className="w-full text-left text-xs border-collapse">
//               <thead>
//                 <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase text-[9px] font-black tracking-wider">
//                   <th className="p-3">Document Particulars / Token ID</th>
//                   <th className="p-3">Statutory Category</th>
//                   <th className="p-3">Validation Check</th>
//                   <th className="p-3">Verification Badge</th>
//                   <th className="p-3 text-right">Actions Matrix</th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
//                 {filteredDocuments.length === 0 ? (
//                   <tr>
//                     <td colSpan="5" className="p-12 text-center text-slate-400 font-medium">No secure records matching queries found.</td>
//                   </tr>
//                 ) : (
//                   filteredDocuments.map(doc => {
//                     const warnSpecs = computeExpiryWarning(doc.expiryDate);
//                     return (
//                       <tr key={doc.id} className="hover:bg-slate-50/60 transition-colors">
//                         <td className="p-3 text-left">
//                           <p className="font-bold text-slate-900 max-w-[220px] truncate">{doc.name}</p>
//                           <span className="text-[10px] font-mono font-bold text-slate-400 block mt-0.5">{doc.id} • {doc.size}</span>
//                         </td>
//                         <td className="p-3 text-left">
//                           <span className="text-[11px] text-slate-600 font-semibold">{doc.category}</span>
//                           <span className="text-[9px] text-slate-400 block font-mono mt-0.5">{doc.folder}</span>
//                         </td>
//                         <td className="p-3 text-left">
//                           <span className={`text-[10px] font-bold px-2 py-0.5 rounded border inline-block whitespace-nowrap ${warnSpecs.css}`}>
//                             {warnSpecs.text}
//                           </span>
//                         </td>
//                         <td className="p-3 text-left">
//                           <span className={`text-[10px] font-black uppercase tracking-tight px-2 py-0.5 rounded border ${
//                             doc.status === 'Verified' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-blue-50 border-blue-200 text-blue-700'
//                           }`}>{doc.status}</span>
//                         </td>
//                         <td className="p-3 text-right">
//                           <div className="flex items-center justify-end gap-1.5">
//                             <button onClick={() => setActiveModal({ type: 'view', data: doc })} className="p-1.5 bg-slate-50 border text-slate-500 rounded"><Eye size={12} /></button>
//                             <button onClick={() => executeDownload(doc)} className="p-1.5 bg-slate-50 border text-slate-500 rounded"><Download size={12} /></button>
//                             <button onClick={() => deleteDocument(doc.id)} className="p-1.5 bg-red-50 border text-red-600 rounded border-red-100"><Trash2 size={12} /></button>
//                           </div>
//                         </td>
//                       </tr>
//                     );
//                   })
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>

//       {/* RE-ARCHITECTED SYSTEM MODALS SCREEN TERMINAL PANEL LAYER */}
//       {activeModal && (
//         <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
//           <div className="bg-white border border-slate-200 rounded-xl w-full max-w-lg p-5 shadow-xl flex flex-col justify-between text-left">
//             <div className="flex justify-between items-center border-b border-slate-100 pb-3 mb-4">
//               <h3 className="text-xs font-black uppercase text-slate-900">Vault Security Action Node</h3>
//               <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400"><X size={16} /></button>
//             </div>

//             <div className="flex-1 text-xs text-slate-600 font-medium space-y-3">
//               {activeModal.type === 'view' && activeModal.data && (
//                 <div className="space-y-4">
//                   <div>
//                     <h4 className="text-sm font-black text-slate-900 break-all">{activeModal.data.name}</h4>
//                     <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 border border-blue-100 rounded mt-1 inline-block">UID: {activeModal.data.id}</span>
//                   </div>
//                   <div className="w-full min-h-[120px] border border-slate-200 bg-slate-50 rounded-xl flex flex-col items-center justify-center text-center p-4">
//                     <FileText size={24} className="text-slate-300 mb-1" />
//                     <p className="font-bold text-slate-700">Encrypted Byte Container Stream Verified</p>
//                     <div className="flex gap-1.5 mt-3 w-full justify-center">
//                       <button onClick={() => { updateVerificationStatus(activeModal.data.id, 'Verified'); setActiveModal(null); }} className="px-2 py-1 bg-emerald-600 text-white font-bold rounded text-[9px]">APPROVE</button>
//                       <button onClick={() => { updateVerificationStatus(activeModal.data.id, 'Rejected'); setActiveModal(null); }} className="px-2 py-1 bg-red-600 text-white font-bold rounded text-[9px]">REJECT</button>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {activeModal.type === 'add_folder' && (
//                 <form onSubmit={(e) => {
//                   e.preventDefault();
//                   if (newFolderName.trim() && createFolder(newFolderName.trim())) { setNewFolderName(''); setActiveModal(null); }
//                 }} className="space-y-4">
//                   <input type="text" placeholder="e.g. Court Records 2026" required value={newFolderName} onChange={e => setNewFolderName(e.target.value)} className="w-full p-2.5 border rounded-lg text-xs font-bold bg-slate-50 text-slate-800" />
//                   <button type="submit" className="w-full p-2.5 bg-blue-600 text-white font-bold rounded-lg">Create Directory</button>
//                 </form>
//               )}

//               {activeModal.type === 'upload' && (
//                 <div className="space-y-4">
//                   <div className="grid grid-cols-2 gap-3 text-left">
//                     <div>
//                       <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Target Category</label>
//                       <select className="w-full p-2 border rounded-lg bg-slate-50 font-bold" value={selectedUploadCategory} onChange={e => setSelectedUploadCategory(e.target.value)}>
//                         {categoriesList.map(c => <option key={c} value={c}>{c}</option>)}
//                       </select>
//                     </div>
//                     <div>
//                       <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Target Folder</label>
//                       <select className="w-full p-2 border rounded-lg bg-slate-50 font-bold" value={selectedUploadFolder} onChange={e => setSelectedUploadFolder(e.target.value)}>
//                         {folders.map(f => <option key={f} value={f}>{f}</option>)}
//                       </select>
//                     </div>
//                   </div>

//                   <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} className={`border-2 border-dashed rounded-xl p-8 text-center transition-all flex flex-col items-center justify-center ${isDragging ? 'border-blue-500 bg-blue-50/40' : 'border-slate-200 bg-slate-50/60'}`}>
//                     <ArrowUpRight size={24} className="text-slate-400 mb-2" />
//                     <p className="font-bold text-slate-800 text-xs">Drag & Drop Document Brief file attachment</p>
//                     <button onClick={() => nativeFileInputRef.current.click()} className="mt-4 bg-white border border-slate-200 rounded-lg text-[10px] font-bold px-3 py-1.5 text-slate-700">Browse Device Storage</button>
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



import React, { useState, useRef } from 'react';
import { useDocumentVault } from '../context/DocumentVaultContext';
import { 
  Eye, Download, Share2, Trash2, Folder, X, Copy, 
  Search, ArrowUpRight, Plus, Layers, ShieldCheck, FileText
} from 'lucide-react';

export default function DocumentVaultPage() {
  const {
    documents, folders, activities, vaultNotifications,
    createFolder, deleteFolder, addDocument, deleteDocument, updateVerificationStatus, clearNotification, triggerAlert
  } = useDocumentVault();

  // Search & Filter Pipeline Core States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFolder, setSelectedFolder] = useState('All');

  // Control Layer UI Triggers
  const [activeModal, setActiveModal] = useState(null); 
  const [isDragging, setIsDragging] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [copied, setCopied] = useState(false);

  // Drag & Drop / Selection Memory States
  const [uploadProgress, setUploadProgress] = useState(0);
  const [simulatedFileName, setSimulatedFileName] = useState('');
  const [uploadCategory, setUploadCategory] = useState('Enrollment Certificate');
  const [uploadFolder, setUploadFolder] = useState('Professional Documents');
  const [uploadExpiry, setUploadExpiry] = useState('');

  const fileInputTriggerRef = useRef(null);

  const categories = [
    'Enrollment Certificate', 'Bar Council Certificate', 'Practice Certificate',
    'Court Authorizations', 'Professional License', 'Identity Documents',
    'Client Documents', 'Case Documents'
  ];

  const todayStr = new Date('2026-06-19');

  // Dynamic Summary Metrics
  const totalFiles = documents.length;
  const verifiedCount = documents.filter(d => d.status === 'Verified').length;
  const underReviewCount = documents.filter(d => d.status === 'Under Review' || d.status === 'Pending').length;
  
  const expiringCount = documents.filter(d => {
    if (d.expiryDate === 'None' || !d.expiryDate) return false;
    const exp = new Date(d.expiryDate);
    const diffDays = Math.ceil((exp.getTime() - todayStr.getTime()) / (1000 * 3600 * 24));
    return diffDays <= 30; 
  }).length;

  // Real-time Search Filter Array Processor
  const filteredDocs = documents.filter(doc => {
    const queryMatch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.id.toLowerCase().includes(searchQuery.toLowerCase());
    const catMatch = selectedCategory === 'All' || doc.category === selectedCategory;
    const folderMatch = selectedFolder === 'All' || doc.folder === selectedFolder;
    return queryMatch && catMatch && folderMatch;
  });

  const checkExpiryStatus = (expiryDate) => {
    if (expiryDate === 'None' || !expiryDate) return { text: 'Permanent Valid', css: 'text-slate-600 bg-slate-100/70 border-slate-200' };
    const exp = new Date(expiryDate);
    const diff = Math.ceil((exp.getTime() - todayStr.getTime()) / (1000 * 3600 * 24));
    if (diff < 0) return { text: 'Expired', css: 'text-red-700 bg-red-50 border-red-200' };
    if (diff <= 30) return { text: `Expiring Soon (${diff}d)`, css: 'text-amber-700 bg-amber-50 border-amber-200 font-bold' };
    return { text: `Valid Till ${expiryDate}`, css: 'text-slate-600 bg-slate-50 border-slate-200' };
  };

  // 🔥 FIXED CORE ENGINE: Programmatic Blob Stream Generation to prevent corrupted PDF load crashes
  const executeDownload = (doc) => {
    try {
      triggerAlert('Secure Download', `Initializing file stream for: ${doc.name}`);

      // High contrast standard compliant mock PDF byte code stream chunk layout
      const mockPdfContent = `%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R >>\nendobj\n4 0 obj\n<< /Length 55 >>\nstream\nBT\n/F1 12 Tf\n72 712 Td\n(ADVOCATE IDENTITY SECURE VAULT - FILE ACCESS) Tj\n72 690 Td\n(Document Name: ${doc.name}) Tj\nET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f\n0000000009 00000 n\n0000000056 00000 n\n0000000111 00000 n\n0000000212 00000 n\ntrailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n0000000325\n%%EOF`;

      const byteArray = new Uint8Array(mockPdfContent.length);
      for (let i = 0; i < mockPdfContent.length; i++) {
        byteArray[i] = mockPdfContent.charCodeAt(i);
      }

      const activeBlob = new Blob([byteArray], { type: 'application/pdf' });
      const binaryObjectDownloadUrl = URL.createObjectURL(activeBlob);

      const dynamicDownloadAnchor = document.createElement('a');
      dynamicDownloadAnchor.href = binaryObjectDownloadUrl;
      dynamicDownloadAnchor.download = doc.name.endsWith('.pdf') ? doc.name : `${doc.name}.pdf`;
      
      document.body.appendChild(dynamicDownloadAnchor);
      dynamicDownloadAnchor.click();
      
      // Clear instance reference buffers instantly
      document.body.removeChild(dynamicDownloadAnchor);
      URL.revokeObjectURL(binaryObjectDownloadUrl);
    } catch (err) {
      console.error("FileSystem Stream Failure Exception Code Log:", err);
    }
  };

  // Real File Drag and Drop Parsers
  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDropEvent = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processIncomingFile(e.dataTransfer.files[0]);
    }
  };

  const handleManualSelection = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processIncomingFile(e.target.files[0]);
    }
  };

  const processIncomingFile = (file) => {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!['pdf', 'png', 'jpg', 'jpeg'].includes(ext)) {
      alert("Invalid Extension: System protocol only authorizes PDF, PNG, and JPG formats.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("Size Limit Breach: File data cannot cross the 10MB infrastructure threshold.");
      return;
    }

    setSimulatedFileName(file.name);
    setUploadProgress(20);
    
    let prog = 20;
    const interval = setInterval(() => {
      prog += 20;
      if (prog >= 100) {
        clearInterval(interval);
        setUploadProgress(100);
        setTimeout(() => {
          addDocument({
            name: file.name,
            category: uploadCategory,
            folder: uploadFolder,
            expiryDate: uploadExpiry || 'None',
            size: (file.size / (1024 * 1024)).toFixed(1) + ' MB'
          });
          setUploadProgress(0);
          setSimulatedFileName('');
          setActiveModal(null);
        }, 250);
      } else {
        setUploadProgress(prog);
      }
    }, 100);
  };

  return (
    <div className="space-y-6 w-full text-slate-800 select-none animate-in fade-in duration-300">
      <input type="file" ref={fileInputTriggerRef} className="hidden" accept=".pdf,.png,.jpg,.jpeg" onChange={handleManualSelection} />

      {/* 1. TOP STATS CARDS GRID ROW */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">
        <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-3xs flex flex-col justify-between text-left">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">TOTAL VAULT FILES ATTACHED</span>
          <div className="flex items-baseline gap-2 mt-2"><span className="text-3xl font-black font-mono text-slate-900">{totalFiles}</span><span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">ACTIVE RECORDS</span></div>
        </div>
        <div className="p-4 border border-emerald-100 rounded-xl bg-emerald-50/20 shadow-3xs flex flex-col justify-between text-left">
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600/80">BCI AUTHENTICATED SEALS</span>
          <div className="flex items-baseline gap-2 mt-2"><span className="text-3xl font-black font-mono text-emerald-800">{verifiedCount}</span><span className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-wider">VERIFIED LEDGER</span></div>
        </div>
        <div className="p-4 border border-blue-100 rounded-xl bg-blue-50/20 shadow-3xs flex flex-col justify-between text-left">
          <span className="text-[10px] font-black uppercase tracking-wider text-blue-600/80">PENDING COMPLIANCE AUDITS</span>
          <div className="flex items-baseline gap-2 mt-2"><span className="text-3xl font-black font-mono text-blue-800">{underReviewCount}</span><span className="text-[9px] font-extrabold text-blue-800 uppercase tracking-wider">UNDER REVIEW</span></div>
        </div>
        <div className={`p-4 border rounded-xl shadow-3xs flex flex-col justify-between text-left ${expiringCount > 0 ? 'border-red-200 bg-red-50/40' : 'border-slate-200 bg-white'}`}>
          <span className="text-[10px] font-black uppercase tracking-wider text-red-500/80">EXPIRING LICENSING NODES</span>
          <div className="flex items-baseline gap-2 mt-2"><span className="text-3xl font-black font-mono text-red-700">{expiringCount}</span><span className="text-[9px] font-extrabold text-red-600 uppercase tracking-wider">ACTION NEEDED</span></div>
        </div>
      </div>

      {/* 2. BAR FILTER INPUT ROW */}
      <div className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col lg:flex-row lg:items-center justify-between gap-3 w-full shadow-3xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input type="text" placeholder="Search vault records by name or system document ID token..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9 pr-4 py-1.5 w-full bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:outline-hidden" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="p-1.5 bg-slate-50 border rounded-lg text-xs font-bold text-slate-600 focus:outline-hidden"><option value="All">All Categories</option>{categories.map(c => <option key={c} value={c}>{c}</option>)}</select>
          <select value={selectedFolder} onChange={e => setSelectedFolder(e.target.value)} className="p-1.5 bg-slate-50 border rounded-lg text-xs font-bold text-slate-600 focus:outline-hidden"><option value="All">All Folders</option>{folders.map(f => <option key={f} value={f}>{f}</option>)}</select>
        </div>
      </div>

      {/* 3. VAULT BLUEPRINT CORE GRIDS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start w-full">
        
        {/* Left Side Navigation Panels */}
        <div className="space-y-4 text-left">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-3xs space-y-3">
            <div className="flex items-center justify-between border-b pb-2"><h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5"><Layers size={13} className="text-blue-600" /> VIRTUAL FOLDERS</h4><button onClick={() => setActiveModal({ type: 'add_folder' })} className="text-[10px] font-black text-blue-600 hover:underline flex items-center gap-0.5"><Plus size={11} /> Add</button></div>
            <div className="space-y-1">
              <button onClick={() => setSelectedFolder('All')} className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-bold flex items-center justify-between ${selectedFolder === 'All' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}><span>Root Directory</span><span className="font-mono text-[10px] opacity-60">{documents.length}</span></button>
              {folders.map(f => (
                <div key={f} className="flex items-center justify-between w-full group pr-1"><button onClick={() => setSelectedFolder(f)} className={`text-left px-2.5 py-1.5 text-xs font-bold truncate flex-1 ${selectedFolder === f ? 'text-blue-700 font-black' : 'text-slate-600'}`}>{f}</button><button onClick={() => deleteFolder(f)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 p-0.5 transition-opacity"><Trash2 size={11} /></button></div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-3xs space-y-2">
            <button onClick={() => setActiveModal({ type: 'upload' })} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs p-2.5 rounded-lg text-center transition-colors shadow-sm">Upload New Document</button>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-3xs space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b pb-2">RECENT VAULT LOGS</h4>
            <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
              {activities.map(act => (
                <div key={act.id} className="text-[11px] leading-snug border-b border-slate-50 pb-2 last:border-none">
                  <p className="text-slate-600 font-semibold">{act.text}</p>
                  <span className="text-[9px] text-slate-400 font-mono block mt-0.5">{act.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Vault Records Document Ledger Grid Sheet */}
        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-4 shadow-3xs space-y-4">
          <div className="overflow-x-auto w-full rounded-xl border border-slate-100">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase text-[9px] font-black tracking-wider">
                  <th className="p-3">DOCUMENT PARTICULARS / TOKEN ID</th>
                  <th className="p-3">STATUTORY CATEGORY</th>
                  <th className="p-3">VALIDATION CHECK</th>
                  <th className="p-3">VERIFICATION BADGE</th>
                  <th className="p-3 text-right">ACTIONS MATRIX</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                {filteredDocs.map(doc => {
                  const warn = checkExpiryStatus(doc.expiryDate);
                  return (
                    <tr key={doc.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3 text-left">
                        <p className="font-bold text-slate-900 max-w-[240px] truncate">{doc.name}</p>
                        <span className="text-[10px] font-mono text-slate-400 block mt-0.5">{doc.id} • {doc.size}</span>
                      </td>
                      <td className="p-3 text-left">
                        <p className="text-slate-800 font-bold">{doc.category}</p>
                        <span className="text-[9px] font-mono text-slate-400 block mt-0.5">{doc.folder}</span>
                      </td>
                      <td className="p-3 text-left"><span className={`text-[10px] px-2 py-0.5 rounded border ${warn.css}`}>{warn.text}</span></td>
                      <td className="p-3 text-left">
                        <span className={`text-[10px] px-2 py-0.5 rounded border font-black ${
                          doc.status === 'Verified' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-blue-50 border-blue-200 text-blue-700'
                        }`}>{doc.status}</span>
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button onClick={() => setActiveModal({ type: 'view', data: doc })} className="p-1.5 border hover:bg-slate-50 rounded text-slate-500"><Eye size={12} /></button>
                          <button onClick={() => executeDownload(doc)} className="p-1.5 bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 rounded transition-colors"><Download size={12} /></button>
                          <button onClick={() => deleteDocument(doc.id)} className="p-1.5 border border-red-100 text-red-500 bg-red-50 hover:bg-red-100 rounded"><Trash2 size={12} /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* ADMINISTRATIVE SECURITY OVERLAY MODALS */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl w-full max-w-md p-5 shadow-xl text-left animate-in zoom-in-95 duration-150">
            <div className="flex justify-between items-center border-b pb-2.5 mb-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">VAULT SECURITY CONTROL ACTION NODE</h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            <div className="text-xs font-semibold text-slate-600 space-y-4">
              {activeModal.type === 'view' && activeModal.data && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 break-all">{activeModal.data.name}</h4>
                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 border px-1.5 py-0.5 rounded mt-1 inline-block">UID: {activeModal.data.id}</span>
                  </div>
                  <div className="w-full min-h-[100px] bg-slate-50 border border-dashed rounded-lg flex flex-col items-center justify-center p-4">
                    <p className="font-bold text-slate-700">Encrypted Byte Container Stream Verified</p>
                    <div className="flex gap-2 mt-4 w-full justify-center">
                      <button onClick={() => { updateVerificationStatus(activeModal.data.id, 'Verified'); setActiveModal(null); }} className="bg-emerald-600 text-white font-bold p-1 px-3 rounded text-[10px]">APPROVE VERIFY</button>
                      <button onClick={() => { updateVerificationStatus(activeModal.data.id, 'Under Review'); setActiveModal(null); }} className="bg-amber-600 text-white font-bold p-1 px-3 rounded text-[10px]">UNDER REVIEW</button>
                    </div>
                  </div>
                </div>
              )}

              {activeModal.type === 'add_folder' && (
                <form onSubmit={(e) => { e.preventDefault(); if (newFolderName.trim() && createFolder(newFolderName.trim())) { setNewFolderName(''); setActiveModal(null); } }} className="space-y-3">
                  <input type="text" placeholder="e.g. Appeal Briefs 2026" required value={newFolderName} onChange={e => setNewFolderName(e.target.value)} className="w-full p-2.5 bg-slate-50 border rounded-lg text-xs font-bold" />
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold p-2 rounded-lg text-center">Commit Directory Mapping</button>
                </form>
              )}

              {activeModal.type === 'upload' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">TARGET CATEGORY</label>
                      <select className="w-full p-2 bg-slate-50 border rounded-lg font-bold text-[11px]" value={uploadCategory} onChange={e => setUploadCategory(e.target.value)}>{categories.map(c => <option key={c} value={c}>{c}</option>)}</select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">TARGET FOLDER</label>
                      <select className="w-full p-2 bg-slate-50 border rounded-lg font-bold text-[11px]" value={uploadFolder} onChange={e => setUploadFolder(e.target.value)}>{folders.map(f => <option key={f} value={f}>{f}</option>)}</select>
                    </div>
                  </div>

                  <div className="text-left">
                    <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">STATUTORY EXPIRY THRESHOLD DATE (OPTIONAL)</label>
                    <input type="date" value={uploadExpiry} onChange={e => setUploadExpiry(e.target.value)} className="w-full p-2 bg-slate-50 border rounded-lg font-mono font-bold text-[11px]" />
                  </div>

                  <div 
                    onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDropEvent}
                    className={`border-2 border-dashed rounded-xl p-7 text-center transition-all flex flex-col items-center justify-center ${isDragging ? 'border-blue-500 bg-blue-50/30' : 'border-slate-200 bg-slate-50/60'}`}
                  >
                    <ArrowUpRight size={22} className={`mb-1.5 ${isDragging ? 'text-blue-500 animate-bounce' : 'text-slate-400'}`} />
                    <p className="font-black text-slate-800 text-xs">Drag & Drop Document Brief file attachment</p>
                    <button onClick={() => fileInputTriggerRef.current.click()} className="mt-4 bg-white hover:bg-slate-50 border rounded-lg text-[10px] font-bold px-4 py-1.5 text-slate-700 shadow-3xs">Browse Device Storage</button>
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