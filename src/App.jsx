
// following fully WORKING

// import React, { useState } from 'react';
// import Sidebar from './layout/Sidebar';
// import Topbar from './layout/Topbar';
// import TopRowSection from './components/dashboard/TopRowSection';
// import MiddleGridSection from './components/dashboard/MiddleGridSection';
// import BottomUtilitySection from './components/dashboard/BottomUtilitySection';
// import FooterSection from './components/dashboard/FooterSection';
// import Modal from './components/ui/Modal';

// import { initialTransactions, initialDocuments } from './data/mockData';

// // Mock database for standard production calendar hearings matching real advocate schedule
// const legalEvents = [
//   { id: 1, day: 4, title: "High Court Hearing", type: "hearing", caseId: "WP-4589/2025", time: "10:30 AM", notes: "Civil matter final arguments before Bench 3." },
//   { id: 2, day: 9, title: "Client Consultation", type: "consultation", caseId: "Mehta & Co", time: "03:00 PM", notes: "NDA revision and commercial contract signing parameters." },
//   { id: 3, day: 15, title: "Supreme Court SLP", type: "hearing", caseId: "SLP-1102/2026", time: "11:15 AM", notes: "Admission stage arguments for interim stay orders." },
//   { id: 4, day: 22, title: "Bar Association Meet", type: "meeting", caseId: "General Body", time: "04:30 PM", notes: "Discussion on hybrid e-filing implementation guidelines." },
//   { id: 5, day: 28, title: "Chamber Staff Review", type: "meeting", caseId: "Internal Staff", time: "06:00 PM", notes: "Weekly performance check and upcoming filing strategy planning." }
// ];

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeTab, setActiveTab] = useState('dashboard'); // Core Routing Control State
  
//   // Dynamic business states
//   const [isCardBlocked, setIsCardBlocked] = useState(false);
//   const [walletBalance, setWalletBalance] = useState(5250.00);
//   const [transactions, setTransactions] = useState(initialTransactions);
//   const [documents, setDocuments] = useState(initialDocuments);
  
//   // Calendar dynamic interaction states
//   const [selectedEvent, setSelectedEvent] = useState(legalEvents[0]); // Default first event

//   // Modals management
//   const [walletModalOpen, setWalletModalOpen] = useState(false);
//   const [inputAmount, setInputAmount] = useState('');
//   const [activeDownloadDoc, setActiveDownloadDoc] = useState(null);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const handleBlockCard = () => setIsCardBlocked(!isCardBlocked);

//   const handleAddMoney = (e) => {
//     e.preventDefault();
//     const amount = parseFloat(inputAmount);
//     if (!isNaN(amount) && amount > 0) {
//       setWalletBalance(prev => prev + amount);
//       setTransactions([{
//         id: Date.now(),
//         type: 'Added to Wallet',
//         amount: amount,
//         date: new Date().toISOString().split('T')[0]
//       }, ...transactions]);
//       setInputAmount('');
//       setWalletModalOpen(false);
//     }
//   };

//   const triggerDownload = (doc) => {
//     setActiveDownloadDoc(doc);
//     setTimeout(() => {
//       setActiveDownloadDoc(null);
//       alert(`Success: ${doc.name} successfully exported to local device downloads.`);
//     }, 1200);
//   };

//   // Dynamic Content Router Module
//   const renderViewContent = () => {
//     switch(activeTab) {
//       case 'dashboard':
//         return (
//           <>
//             <TopRowSection isCardBlocked={isCardBlocked} />
//             <MiddleGridSection searchQuery={searchQuery} />
//             <BottomUtilitySection 
//               walletBalance={walletBalance}
//               transactions={transactions}
//               documents={documents}
//               onAddMoneyClick={() => setWalletModalOpen(true)}
//               onDownloadClick={triggerDownload}
//               activeDownloadDoc={activeDownloadDoc}
//             />
//             <FooterSection isCardBlocked={isCardBlocked} onBlockToggle={handleBlockCard} />
//           </>
//         );

//       case 'profile':
//         return (
//           <div className="bg-white border border-slate-200 rounded-xl p-6 animate-in fade-in duration-200">
//             <h3 className="text-base font-bold text-slate-800 mb-4 uppercase tracking-wider">Advocate Detailed Dossier</h3>
//             <TopRowSection isCardBlocked={isCardBlocked} />
//           </div>
//         );

//       case 'wallet':
//         return (
//           <div className="space-y-6 w-full animate-in fade-in duration-300">
//             <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
//               <div>
//                 <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">
//                   Account Ledger & NFC Payments Center
//                 </h3>
//                 <p className="text-xs text-slate-500 font-medium mt-0.5">
//                   Real-time transactional monitoring node connected to Bar Council servers.
//                 </p>
//               </div>
//               <button 
//                 onClick={() => setWalletModalOpen(true)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors shadow-xs shrink-0"
//               >
//                 + Add Money to Wallet
//               </button>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full">
//               <div className="lg:col-span-2 space-y-6">
//                 <div className="bg-linear-to-br from-emerald-600 to-teal-800 text-white rounded-xl p-6 shadow-sm border border-emerald-700">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <p className="text-xs font-bold text-emerald-100 uppercase tracking-widest opacity-90">Available Account Balance</p>
//                       <h2 className="text-3xl md:text-4xl font-black font-mono tracking-tight mt-1">
//                         ₹ {walletBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
//                       </h2>
//                     </div>
//                     <span className="bg-white/10 text-emerald-100 font-mono font-bold text-[10px] px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider">
//                       Gateway Secure
//                     </span>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-white/10 text-xs text-emerald-100">
//                     <div>
//                       <p className="opacity-75 font-medium">Last Deposit Action</p>
//                       <p className="font-bold text-white mt-0.5">₹ {transactions[0]?.amount || '0.00'} INR</p>
//                     </div>
//                     <div>
//                       <p className="opacity-75 font-medium">Active Linked Medium</p>
//                       <p className="font-bold text-white mt-0.5">NFC Identity Smart Card</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//                   <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-3">
//                     Recent Transaction Audit Trail Ledger
//                   </h4>
//                   <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto pr-1">
//                     {transactions.map((pay) => (
//                       <div key={pay.id} className="flex items-center justify-between py-3 text-sm first:pt-0 last:pb-0">
//                         <div className="flex items-center gap-3 min-w-0">
//                           <div className={`p-2 rounded-lg shrink-0 ${
//                             pay.type.includes('Added') ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-50 text-slate-600'
//                           }`}>
//                             <span className="block w-2 h-2 rounded-full bg-current" />
//                           </div>
//                           <div className="min-w-0">
//                             <p className="font-bold text-slate-800 truncate">{pay.type}</p>
//                             <p className="text-[10px] text-slate-400 font-medium font-mono mt-0.5">{pay.date || '2026-06-18'} • Reference Node Secure</p>
//                           </div>
//                         </div>
//                         <span className={`font-mono font-black text-right text-base shrink-0 ${
//                           pay.type.includes('Added') ? 'text-emerald-600' : 'text-slate-800'
//                         }`}>
//                           {pay.type.includes('Added') ? '+' : ''}₹{pay.amount.toFixed(2)}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//                   <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">Linked Network Assets</h4>
//                   <div className="space-y-2.5">
//                     <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs">
//                       <p className="font-bold text-slate-500 uppercase text-[9px] tracking-wider">Chamber Staff Management</p>
//                       <p className="font-black text-slate-800 mt-0.5">Mehta & Associates</p>
//                       <span className="inline-block bg-blue-50 text-blue-600 text-[9px] font-bold px-1.5 py-0.5 rounded mt-2 border border-blue-100">Hierarchical Map Verified</span>
//                     </div>
//                     <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs">
//                       <p className="font-bold text-slate-500 uppercase text-[9px] tracking-wider">NFC Hardware Secure Clearance</p>
//                       <p className="font-black text-slate-800 mt-0.5">Level High Level (Active)</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'documents':
//         return (
//           <div className="space-y-6 w-full animate-in fade-in duration-300">
//             <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
//               <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Secure Document Vault</h3>
//               <p className="text-xs text-slate-500 font-medium mt-0.5">BCI Authenticated cryptographic digital file repository node.</p>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start max-w-4xl w-full">
//               <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//                 <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-3">Available Digital Credentials</h4>
//                 <div className="space-y-2.5">
//                   {documents.map((doc) => (
//                     <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
//                       <div className="min-w-0 flex-1 pr-3">
//                         <p className="text-xs font-bold text-slate-800 truncate">{doc.name}</p>
//                         <p className="text-[10px] text-slate-400 mt-0.5 font-medium">{doc.meta} • {doc.size}</p>
//                       </div>
//                       <button 
//                         onClick={() => triggerDownload(doc)}
//                         className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold px-3 py-1.5 rounded-md transition-colors"
//                       >
//                         Download Asset
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       // 🔥 EXECUTED PREMIUM CALENDAR MODULE SYSTEM VIEW (100% WORKING!)
//       case 'calendar':
//         return (
//           <div className="space-y-6 w-full animate-in fade-in duration-300">
//             {/* Header Block */}
//             <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
//               <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">
//                 Case Diary & Litigation Schedule Calendar
//               </h3>
//               <p className="text-xs text-slate-500 font-medium mt-0.5">
//                 Centralized interactive calendar module synchronizing court listings, client rosters, and statutory renewals.
//               </p>
//             </div>

//             {/* Layout Split: Left Calendar Grid, Right Event Inspector */}
//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
              
//               {/* Left Grid: Monthly Sheet Map */}
//               <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//                 <div className="flex justify-between items-center mb-4 pb-2 border-b border-slate-100">
//                   <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider font-mono">June 2026</h4>
//                   <span className="text-[10px] bg-slate-100 border border-slate-200 font-bold px-2.5 py-1 rounded text-slate-600">
//                     Standard View Mode
//                   </span>
//                 </div>

//                 {/* Weekday Labels Grid Header */}
//                 <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
//                   {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
//                     <div key={d} className="py-1">{d}</div>
//                   ))}
//                 </div>

//                 {/* 30 Days Dynamic Mapping Blueprint */}
//                 <div className="grid grid-cols-7 gap-1.5">
//                   {Array.from({ length: 30 }).map((_, i) => {
//                     const currentDayNumber = i + 1;
//                     const matchedDayEvent = legalEvents.find(ev => ev.day === currentDayNumber);
                    
//                     return (
//                       <div 
//                         key={i}
//                         onClick={() => matchedDayEvent && setSelectedEvent(matchedDayEvent)}
//                         className={`min-h-[64px] sm:min-h-[76px] p-1.5 rounded-lg border text-left flex flex-col justify-between transition-all select-none ${
//                           matchedDayEvent 
//                             ? 'cursor-pointer border-blue-200 bg-blue-50/40 hover:bg-blue-50' 
//                             : 'border-slate-100 bg-slate-50/30'
//                         } ${selectedEvent?.day === currentDayNumber ? 'ring-2 ring-blue-600 border-transparent bg-blue-50/70' : ''}`}
//                       >
//                         <span className={`text-xs font-bold font-mono ${
//                           matchedDayEvent ? 'text-blue-700' : 'text-slate-400'
//                         }`}>{currentDayNumber}</span>
                        
//                         {matchedDayEvent && (
//                           <div className={`text-[8px] font-extrabold px-1 py-0.5 rounded-sm truncate w-full uppercase tracking-tighter scale-95 mt-1 ${
//                             matchedDayEvent.type === 'hearing' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-800'
//                           }`}>
//                             {matchedDayEvent.title}
//                           </div>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>

//               {/* Right Grid: Detailed Live Event Description Panel Inspector */}
//               <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
//                 <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
//                   Dossier Docket Inspector
//                 </h4>

//                 {selectedEvent ? (
//                   <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
//                     <div className="flex items-center gap-2">
//                       <span className={`text-[8px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${
//                         selectedEvent.type === 'hearing' ? 'bg-red-50 border-red-200 text-red-700' : 'bg-amber-50 border-amber-200 text-amber-700'
//                       }`}>
//                         {selectedEvent.type}
//                       </span>
//                       <span className="text-xs font-mono font-bold text-slate-500">Day: June {selectedEvent.day}, 2026</span>
//                     </div>

//                     <div>
//                       <h3 className="text-base font-black text-slate-900 leading-tight">{selectedEvent.title}</h3>
//                       <p className="text-xs font-mono font-bold text-blue-600 mt-1 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded inline-block">
//                         {selectedEvent.caseId}
//                       </p>
//                     </div>

//                     <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg space-y-2 text-xs">
//                       <div>
//                         <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Scheduled Time Slot</p>
//                         <p className="font-bold text-slate-700 font-mono mt-0.5">{selectedEvent.time}</p>
//                       </div>
//                       <div>
//                         <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Operational Counsel Notes</p>
//                         <p className="text-slate-600 leading-relaxed font-medium mt-0.5">{selectedEvent.notes}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <p className="text-xs text-slate-400 font-medium text-center py-12">
//                     Select any highlighted event date in the calendar diary matrix to audit internal details.
//                   </p>
//                 )}
//               </div>

//             </div>
//           </div>
//         );

//       default:
//         return <div className="p-12 text-center text-slate-400 font-semibold bg-white border rounded-xl shadow-2xs">View layer module integration pending deployment.</div>;
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-slate-100 font-sans antialiased">
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
//         <Topbar toggleSidebar={toggleSidebar} searchQuery={searchQuery} setSearchQuery={setSearchQuery} isCardBlocked={isCardBlocked} />

//         <main className="flex-1 p-4 md:p-6 w-full max-w-[1600px] mx-auto space-y-6 overflow-y-auto">
//           {renderViewContent()}
//         </main>
//       </div>

//       <Modal isOpen={walletModalOpen} onClose={() => setWalletModalOpen(false)} title="Deposit Funds to Wallet">
//         <form onSubmit={handleAddMoney} className="space-y-4">
//           <div>
//             <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Amount (INR)</label>
//             <input 
//               type="number" 
//               placeholder="Enter amount (e.g. 1000)"
//               value={inputAmount}
//               onChange={(e) => setInputAmount(e.target.value)}
//               className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:outline-hidden focus:border-blue-500 bg-slate-50 font-semibold"
//               required
//             />
//           </div>
//           <div className="flex gap-2">
//             <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors">
//               Authorize Transaction
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// }




// import React, { useState } from 'react';
// import Sidebar from './layout/Sidebar';
// import Topbar from './layout/Topbar';
// import TopRowSection from './components/dashboard/TopRowSection';
// import MiddleGridSection from './components/dashboard/MiddleGridSection';
// import BottomUtilitySection from './components/dashboard/BottomUtilitySection';
// import FooterSection from './components/dashboard/FooterSection';
// import Modal from './components/ui/Modal';

// import { initialTransactions, initialDocuments } from './data/mockData';

// // Mock data matrix for real-time court clearance nodes
// const courtClearanceData = [
//   { id: 'sc', court: 'Supreme Court of India', status: 'Authorized', badge: 'Level-3 Access', color: 'text-purple-700 bg-purple-50 border-purple-200' },
//   { id: 'hc', court: 'Bombay High Court (Main Bench)', status: 'Authorized', badge: 'Bar Member', color: 'text-blue-700 bg-blue-50 border-blue-200' },
//   { id: 'dc', court: 'Delhi District Courts (All Complexes)', status: 'Active Pass', badge: 'Biometric Verified', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
//   { id: 'ca', court: 'National Company Law Appellate Tribunal (NCLAT)', status: 'Clearance Active', badge: 'Corporate Counsel', color: 'text-amber-700 bg-amber-50 border-amber-200' },
// ];

// const legalEvents = [
//   { id: 1, day: 4, title: "High Court Hearing", type: "hearing", caseId: "WP-4589/2025", time: "10:30 AM", notes: "Civil matter final arguments before Bench 3." },
//   { id: 2, day: 9, title: "Client Consultation", type: "consultation", caseId: "Mehta & Co", time: "03:00 PM", notes: "NDA revision and commercial contract signing parameters." },
//   { id: 3, day: 15, title: "Supreme Court SLP", type: "hearing", caseId: "SLP-1102/2026", time: "11:15 AM", notes: "Admission stage arguments for interim stay orders." },
//   { id: 4, day: 22, title: "Bar Association Meet", type: "meeting", caseId: "General Body", time: "04:30 PM", notes: "Discussion on hybrid e-filing implementation guidelines." },
//   { id: 5, day: 28, title: "Chamber Staff Review", type: "meeting", caseId: "Internal Staff", time: "06:00 PM", notes: "Weekly performance check and upcoming filing strategy planning." }
// ];

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeTab, setActiveTab] = useState('court'); // Set to 'court' to verify this step directly
  
//   // Dynamic business states
//   const [isCardBlocked, setIsCardBlocked] = useState(false);
//   const [walletBalance, setWalletBalance] = useState(5250.00);
//   const [transactions, setTransactions] = useState(initialTransactions);
//   const [documents, setDocuments] = useState(initialDocuments);
  
//   // Dynamic interface selectors
//   const [selectedEvent, setSelectedEvent] = useState(legalEvents[0]);
//   const [selectedCourtNode, setSelectedCourtNode] = useState(courtClearanceData[0]);

//   // Modals management
//   const [walletModalOpen, setWalletModalOpen] = useState(false);
//   const [inputAmount, setInputAmount] = useState('');
//   const [activeDownloadDoc, setActiveDownloadDoc] = useState(null);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const handleBlockCard = () => setIsCardBlocked(!isCardBlocked);

//   const handleAddMoney = (e) => {
//     e.preventDefault();
//     const amount = parseFloat(inputAmount);
//     if (!isNaN(amount) && amount > 0) {
//       setWalletBalance(prev => prev + amount);
//       setTransactions([{
//         id: Date.now(),
//         type: 'Added to Wallet',
//         amount: amount,
//         date: new Date().toISOString().split('T')[0]
//       }, ...transactions]);
//       setInputAmount('');
//       setWalletModalOpen(false);
//     }
//   };

//   const triggerDownload = (doc) => {
//     setActiveDownloadDoc(doc);
//     setTimeout(() => {
//       setActiveDownloadDoc(null);
//       alert(`Success: ${doc.name} successfully exported to local device downloads.`);
//     }, 1200);
//   };

//   // Dynamic Content Router Module
//   const renderViewContent = () => {
//     switch(activeTab) {
//       case 'dashboard':
//         return (
//           <>
//             <TopRowSection isCardBlocked={isCardBlocked} />
//             <MiddleGridSection searchQuery={searchQuery} />
//             <BottomUtilitySection 
//               walletBalance={walletBalance}
//               transactions={transactions}
//               documents={documents}
//               onAddMoneyClick={() => setWalletModalOpen(true)}
//               onDownloadClick={triggerDownload}
//               activeDownloadDoc={activeDownloadDoc}
//             />
//             <FooterSection isCardBlocked={isCardBlocked} onBlockToggle={handleBlockCard} />
//           </>
//         );

//       case 'profile':
//         return (
//           <div className="bg-white border border-slate-200 rounded-xl p-6 animate-in fade-in duration-200">
//             <h3 className="text-base font-bold text-slate-800 mb-4 uppercase tracking-wider">Advocate Detailed Dossier</h3>
//             <TopRowSection isCardBlocked={isCardBlocked} />
//           </div>
//         );

//       case 'wallet':
//         return (
//           <div className="space-y-6 w-full animate-in fade-in duration-300">
//             <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
//               <div>
//                 <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Account Ledger & NFC Payments Center</h3>
//                 <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time transactional monitoring node connected to Bar Council servers.</p>
//               </div>
//               <button 
//                 onClick={() => setWalletModalOpen(true)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors shadow-xs shrink-0"
//               >
//                 + Add Money to Wallet
//               </button>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full">
//               <div className="lg:col-span-2 space-y-6">
//                 <div className="bg-linear-to-br from-emerald-600 to-teal-800 text-white rounded-xl p-6 shadow-sm border border-emerald-700">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <p className="text-xs font-bold text-emerald-100 uppercase tracking-widest opacity-90">Available Account Balance</p>
//                       <h2 className="text-3xl md:text-4xl font-black font-mono tracking-tight mt-1">
//                         ₹ {walletBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
//                       </h2>
//                     </div>
//                     <span className="bg-white/10 text-emerald-100 font-mono font-bold text-[10px] px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider">Gateway Secure</span>
//                   </div>
//                 </div>

//                 <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//                   <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-3">Recent Transaction Audit Trail Ledger</h4>
//                   <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto pr-1">
//                     {transactions.map((pay) => (
//                       <div key={pay.id} className="flex items-center justify-between py-3 text-sm first:pt-0 last:pb-0">
//                         <div className="flex items-center gap-3 min-w-0">
//                           <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
//                           <p className="font-bold text-slate-800 truncate">{pay.type}</p>
//                         </div>
//                         <span className="font-mono font-black text-slate-800">₹{pay.amount.toFixed(2)}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'documents':
//         return (
//           <div className="space-y-6 w-full animate-in fade-in duration-300">
//             <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
//               <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Secure Document Vault</h3>
//               <p className="text-xs text-slate-500 font-medium mt-0.5">BCI Authenticated cryptographic digital file repository node.</p>
//             </div>
//             <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs max-w-2xl">
//               <div className="space-y-2.5">
//                 {documents.map((doc) => (
//                   <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
//                     <p className="text-xs font-bold text-slate-800 truncate">{doc.name}</p>
//                     <button onClick={() => triggerDownload(doc)} className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold px-3 py-1.5 rounded-md">Download Asset</button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );

//       case 'calendar':
//         return (
//           <div className="space-y-6 w-full animate-in fade-in duration-300">
//             <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
//               <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Case Diary & Litigation Schedule Calendar</h3>
//             </div>
//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
//               <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//                 <div className="grid grid-cols-7 gap-1.5">
//                   {Array.from({ length: 30 }).map((_, i) => (
//                     <div key={i} className="min-h-[64px] p-2 border border-slate-100 rounded-lg text-xs font-bold text-slate-400">{i + 1}</div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       // 🔥 ENTERPRISE-GRADE INTERACTIVE COURT ACCESS CONTROL CENTER
//       case 'court':
//         return (
//           <div className="space-y-6 w-full animate-in fade-in duration-300">
//             {/* Header Area */}
//             <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
//               <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">
//                 Smart Judiciary Security Clearing & Court Entry Hub
//               </h3>
//               <p className="text-xs text-slate-500 font-medium mt-0.5">
//                 Manage automated entry tokens, digital parking permits, and secure RFID clearance certificates verified by the e-Courts grid ecosystem.
//               </p>
//             </div>

//             {/* Split Grid: Left Clearance List, Right Real-Time Pass Generator */}
//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
              
//               {/* Left Column: Authorized Nodes */}
//               <div className="xl:col-span-2 space-y-4">
//                 <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//                   <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-3 mb-4">
//                     Authenticated Institutional Clearance Nodes
//                   </h4>
                  
//                   <div className="space-y-3">
//                     {courtClearanceData.map((node) => {
//                       const isNodeSelected = selectedCourtNode.id === node.id;
//                       return (
//                         <div 
//                           key={node.id}
//                           onClick={() => !isCardBlocked && setSelectedCourtNode(node)}
//                           className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${
//                             isCardBlocked 
//                               ? 'opacity-50 cursor-not-allowed border-slate-200 bg-slate-50/50' 
//                               : 'cursor-pointer hover:border-blue-400 hover:shadow-2xs'
//                           } ${isNodeSelected && !isCardBlocked ? 'ring-2 ring-blue-600 bg-blue-50/30 border-transparent' : 'bg-white border-slate-200'}`}
//                         >
//                           <div className="flex items-start gap-3 min-w-0">
//                             <div className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
//                             <div className="min-w-0">
//                               <p className="text-sm font-bold text-slate-800 tracking-tight truncate">{node.court}</p>
//                               <p className="text-[11px] text-slate-400 font-medium mt-0.5">E-Courts Ledger Secure Reference Node</p>
//                             </div>
//                           </div>

//                           <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
//                             <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-sm bg-slate-100 border border-slate-200 text-slate-600">
//                               {node.badge}
//                             </span>
//                             <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-sm border ${
//                               isCardBlocked ? 'bg-red-100 border-red-200 text-red-700' : 'bg-emerald-100 border-emerald-200 text-emerald-700'
//                             }`}>
//                               {isCardBlocked ? 'REVOKED' : node.status}
//                             </span>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>

//                 {/* Additional Utilities Inside Court Access */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
//                     <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Automated RFID Parking Permit</h5>
//                     <p className="text-xs text-slate-500 font-medium leading-relaxed">Your registered vehicle (Slot MH-02-XXXX) has pre-cleared access authorization tags for Advocate Designated zones.</p>
//                   </div>
//                   <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
//                     <h5 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">Digital Attendance Synced</h5>
//                     <p className="text-xs text-slate-500 font-medium leading-relaxed">Integrated biometric logs push continuous presence verification to the state Bar Council ledger logs instantly.</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Right Column: Encrypted Access Pass Terminal */}
//               <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs flex flex-col items-center text-center">
//                 <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2 w-full mb-4">
//                   Encrypted Terminal Pass
//                 </h4>

//                 <div className={`w-full max-w-[280px] rounded-2xl border p-5 space-y-4 shadow-xs relative overflow-hidden transition-all duration-300 ${
//                   isCardBlocked ? 'bg-slate-50 border-slate-200' : 'bg-linear-to-b from-slate-900 to-slate-950 border-slate-800 text-white'
//                 }`}>
//                   <div className="absolute top-0 right-0 w-24 h-24 bg-blue-600/10 rounded-full blur-xl pointer-events-none" />
                  
//                   {/* Top Pass Meta */}
//                   <div className="flex justify-between items-center text-left">
//                     <div>
//                       <p className={`text-[8px] font-black uppercase tracking-widest ${isCardBlocked ? 'text-slate-400' : 'text-blue-400'}`}>Gate Pass Secure</p>
//                       <p className={`text-[10px] font-bold mt-0.5 ${isCardBlocked ? 'text-slate-800' : 'text-white'}`}>Adv. Rohit Sharma</p>
//                     </div>
//                     <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded ${isCardBlocked ? 'bg-slate-200 text-slate-600' : 'bg-white/10 text-white/80 border border-white/10'}`}>
//                       {isCardBlocked ? 'LOCKED' : 'NFC CAPABLE'}
//                     </span>
//                   </div>

//                   {/* High Contrast Entry QR Representation */}
//                   <div className="bg-white p-3 rounded-xl mx-auto inline-block border border-slate-200/40 shadow-inner">
//                     <div className={`w-36 h-36 border-2 border-dashed flex flex-col items-center justify-center p-2 rounded-lg ${
//                       isCardBlocked ? 'border-red-300 bg-red-50 text-red-500' : 'border-blue-200 text-slate-900'
//                     }`}>
//                       <span className="font-mono text-[9px] font-black tracking-widest uppercase text-center block leading-normal">
//                         {isCardBlocked ? 'ACCESS DENIED' : `SECURE_TOKEN\n${selectedCourtNode.id.toUpperCase()}_GATE_PASS`}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Pass Footer Meta details */}
//                   <div className="text-left border-t border-slate-100/10 pt-3 text-[11px] space-y-1">
//                     <p className={`text-[8px] font-bold uppercase tracking-wider ${isCardBlocked ? 'text-slate-400' : 'text-slate-500'}`}>Target Clearing Node</p>
//                     <p className={`font-bold truncate ${isCardBlocked ? 'text-slate-700' : 'text-white'}`}>{isCardBlocked ? 'None (Suspended)' : selectedCourtNode.court}</p>
//                   </div>
//                 </div>

//                 <p className="text-[11px] text-slate-400 font-medium mt-4 leading-normal px-2">
//                   {isCardBlocked 
//                     ? "Identity engine locked. Please toggle the administrative status switch to restore standard validation gateways."
//                     : "This entry badge changes dynamically. Scan at terminal checkpoints for single-point authentication workflows."}
//                 </p>
//               </div>

//             </div>
//           </div>
//         );

//       default:
//         return <div className="p-12 text-center text-slate-400 font-semibold bg-white border rounded-xl shadow-2xs">View layer module integration pending deployment.</div>;
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-slate-100 font-sans antialiased">
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
//         <Topbar toggleSidebar={toggleSidebar} searchQuery={searchQuery} setSearchQuery={setSearchQuery} isCardBlocked={isCardBlocked} />

//         <main className="flex-1 p-4 md:p-6 w-full max-w-[1600px] mx-auto space-y-6 overflow-y-auto">
//           {renderViewContent()}
//         </main>
//       </div>

//       <Modal isOpen={walletModalOpen} onClose={() => setWalletModalOpen(false)} title="Deposit Funds to Wallet">
//         <form onSubmit={handleAddMoney} className="space-y-4">
//           <div>
//             <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Amount (INR)</label>
//             <input 
//               type="number" 
//               placeholder="Enter amount (e.g. 1000)"
//               value={inputAmount}
//               onChange={(e) => setInputAmount(e.target.value)}
//               className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:outline-hidden focus:border-blue-500 bg-slate-50 font-semibold"
//               required
//             />
//           </div>
//           <div className="flex gap-2">
//             <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors">
//               Authorize Transaction
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// }





// import React, { useState } from 'react';
// import Sidebar from './layout/Sidebar';
// import Topbar from './layout/Topbar';
// import TopRowSection from './components/dashboard/TopRowSection';
// import MiddleGridSection from './components/dashboard/MiddleGridSection';
// import BottomUtilitySection from './components/dashboard/BottomUtilitySection';
// import FooterSection from './components/dashboard/FooterSection';
// import Modal from './components/ui/Modal';

// import { initialTransactions, initialDocuments } from './data/mockData';

// // Mock database for standard production court clearance nodes
// const courtClearanceData = [
//   { id: 'sc', court: 'Supreme Court of India', status: 'Authorized', badge: 'Level-3 Access', color: 'text-purple-700 bg-purple-50 border-purple-200' },
//   { id: 'hc', court: 'Bombay High Court (Main Bench)', status: 'Authorized', badge: 'Bar Member', color: 'text-blue-700 bg-blue-50 border-blue-200' },
//   { id: 'dc', court: 'Delhi District Courts (All Complexes)', status: 'Active Pass', badge: 'Biometric Verified', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
//   { id: 'ca', court: 'National Company Law Appellate Tribunal (NCLAT)', status: 'Clearance Active', badge: 'Corporate Counsel', color: 'text-amber-700 bg-amber-50 border-amber-200' },
// ];

// // Mock database for standard calendar hearings
// const legalEvents = [
//   { id: 1, day: 4, title: "High Court Hearing", type: "hearing", caseId: "WP-4589/2025", time: "10:30 AM", notes: "Civil matter final arguments before Bench 3." },
//   { id: 2, day: 9, title: "Client Consultation", type: "consultation", caseId: "Mehta & Co", time: "03:00 PM", notes: "NDA revision and commercial contract signing parameters." },
//   { id: 3, day: 15, title: "Supreme Court SLP", type: "hearing", caseId: "SLP-1102/2026", time: "11:15 AM", notes: "Admission stage arguments for interim stay orders." },
//   { id: 4, day: 22, title: "Bar Association Meet", type: "meeting", caseId: "General Body", time: "04:30 PM", notes: "Discussion on hybrid e-filing implementation guidelines." },
//   { id: 5, day: 28, title: "Chamber Staff Review", type: "meeting", caseId: "Internal Staff", time: "06:00 PM", notes: "Weekly performance check and upcoming filing strategy planning." }
// ];

// // 🔥 NEW: Mock Database for Active Case Management System
// const masterCasesList = [
//   { id: 'case-1', cnr: 'MHHCO10047892012', title: 'Rohit Sharma vs. State of Maharashtra', court: 'Bombay High Court', stage: 'Final Arguments', nextHearing: '2026-07-04', type: 'Criminal Appeal', status: 'Critical' },
//   { id: 'case-2', cnr: 'DLCT010022342021', title: 'Malhotra Logistics vs. Union of India', court: 'Delhi District Court', stage: 'Evidence Tracking', nextHearing: '2026-07-12', type: 'Commercial Suit', status: 'Ongoing' },
//   { id: 'case-3', cnr: 'SCIA030011022025', title: 'S.K. Bansal vs. National Green Tribunal', court: 'Supreme Court of India', stage: 'Admission Stage', nextHearing: '2026-07-15', type: 'Special Leave Petition', status: 'High Priority' },
//   { id: 'case-4', cnr: 'MHHCO10099512023', title: 'Adani Power Ltd. vs. Maharashtra Electricity Regulatory Commission', court: 'MERC Tribunal', stage: 'Interim Order Review', nextHearing: '2026-07-20', type: 'Regulatory Dispute', status: 'Standard' }
// ];

// export default function App() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeTab, setActiveTab] = useState('cases'); // Set to 'cases' to verify this step directly
  
//   // Dynamic business states
//   const [isCardBlocked, setIsCardBlocked] = useState(false);
//   const [walletBalance, setWalletBalance] = useState(5250.00);
//   const [transactions, setTransactions] = useState(initialTransactions);
//   const [documents, setDocuments] = useState(initialDocuments);
  
//   // Dynamic interface selectors
//   const [selectedEvent, setSelectedEvent] = useState(legalEvents[0]);
//   const [selectedCourtNode, setSelectedCourtNode] = useState(courtClearanceData[0]);
//   const [selectedCase, setSelectedCase] = useState(masterCasesList[0]); // 🔥 NEW: Track chosen case details

//   // Modals management
//   const [walletModalOpen, setWalletModalOpen] = useState(false);
//   const [inputAmount, setInputAmount] = useState('');
//   const [activeDownloadDoc, setActiveDownloadDoc] = useState(null);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const handleBlockCard = () => setIsCardBlocked(!isCardBlocked);

//   const handleAddMoney = (e) => {
//     e.preventDefault();
//     const amount = parseFloat(inputAmount);
//     if (!isNaN(amount) && amount > 0) {
//       setWalletBalance(prev => prev + amount);
//       setTransactions([{
//         id: Date.now(),
//         type: 'Added to Wallet',
//         amount: amount,
//         date: new Date().toISOString().split('T')[0]
//       }, ...transactions]);
//       setInputAmount('');
//       setWalletModalOpen(false);
//     }
//   };

//   const triggerDownload = (doc) => {
//     setActiveDownloadDoc(doc);
//     setTimeout(() => {
//       setActiveDownloadDoc(null);
//       alert(`Success: ${doc.name} successfully exported to local device downloads.`);
//     }, 1200);
//   };

//   // Dynamic Content Router Module
//   const renderViewContent = () => {
//     switch(activeTab) {
//       case 'dashboard':
//         return (
//           <>
//             <TopRowSection isCardBlocked={isCardBlocked} />
//             <MiddleGridSection searchQuery={searchQuery} />
//             <BottomUtilitySection 
//               walletBalance={walletBalance}
//               transactions={transactions}
//               documents={documents}
//               onAddMoneyClick={() => setWalletModalOpen(true)}
//               onDownloadClick={triggerDownload}
//               activeDownloadDoc={activeDownloadDoc}
//             />
//             <FooterSection isCardBlocked={isCardBlocked} onBlockToggle={handleBlockCard} />
//           </>
//         );

//       case 'profile':
//         return (
//           <div className="bg-white border border-slate-200 rounded-xl p-6 animate-in fade-in duration-200">
//             <h3 className="text-base font-bold text-slate-800 mb-4 uppercase tracking-wider">Advocate Detailed Dossier</h3>
//             <TopRowSection isCardBlocked={isCardBlocked} />
//           </div>
//         );

//       case 'wallet':
//         return (
//           <div className="space-y-6 w-full animate-in fade-in duration-300">
//             <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
//               <div>
//                 <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Account Ledger & NFC Payments Center</h3>
//                 <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time transactional monitoring node connected to Bar Council servers.</p>
//               </div>
//               <button 
//                 onClick={() => setWalletModalOpen(true)}
//                 className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors shadow-xs shrink-0"
//               >
//                 + Add Money to Wallet
//               </button>
//             </div>

//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full">
//               <div className="lg:col-span-2 space-y-6">
//                 <div className="bg-linear-to-br from-emerald-600 to-teal-800 text-white rounded-xl p-6 shadow-sm border border-emerald-700">
//                   <div className="flex justify-between items-start">
//                     <div>
//                       <p className="text-xs font-bold text-emerald-100 uppercase tracking-widest opacity-90">Available Account Balance</p>
//                       <h2 className="text-3xl md:text-4xl font-black font-mono tracking-tight mt-1">
//                         ₹ {walletBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
//                       </h2>
//                     </div>
//                     <span className="bg-white/10 text-emerald-100 font-mono font-bold text-[10px] px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider">Gateway Secure</span>
//                   </div>
//                 </div>

//                 <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//                   <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-3">Recent Transaction Audit Trail Ledger</h4>
//                   <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto pr-1">
//                     {transactions.map((pay) => (
//                       <div key={pay.id} className="flex items-center justify-between py-3 text-sm first:pt-0 last:pb-0">
//                         <div className="flex items-center gap-3 min-w-0">
//                           <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
//                           <p className="font-bold text-slate-800 truncate">{pay.type}</p>
//                         </div>
//                         <span className="font-mono font-black text-slate-800">₹{pay.amount.toFixed(2)}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'documents':
//         return (
//           <div className="space-y-6 w-full animate-in fade-in duration-300">
//             <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
//               <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Secure Document Vault</h3>
//               <p className="text-xs text-slate-500 font-medium mt-0.5">BCI Authenticated cryptographic digital file repository node.</p>
//             </div>
//             <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs max-w-2xl">
//               <div className="space-y-2.5">
//                 {documents.map((doc) => (
//                   <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100">
//                     <p className="text-xs font-bold text-slate-800 truncate">{doc.name}</p>
//                     <button onClick={() => triggerDownload(doc)} className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-[10px] font-bold px-3 py-1.5 rounded-md">Download Asset</button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         );

//       case 'calendar':
//         return (
//           <div className="space-y-6 w-full animate-in fade-in duration-300">
//             <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
//               <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Case Diary & Litigation Schedule Calendar</h3>
//             </div>
//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
//               <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//                 <div className="grid grid-cols-7 gap-1.5">
//                   {Array.from({ length: 30 }).map((_, i) => (
//                     <div key={i} className="min-h-[64px] p-2 border border-slate-100 rounded-lg text-xs font-bold text-slate-400">{i + 1}</div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case 'court':
//         return (
//           <div className="space-y-6 w-full animate-in fade-in duration-300">
//             <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
//               <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Smart Judiciary Security Clearing Hub</h3>
//             </div>
//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
//               <div className="xl:col-span-2 space-y-4">
//                 <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//                   {courtClearanceData.map((node) => (
//                     <div key={node.id} className="p-3 border-b last:border-0">{node.court}</div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       // 🔥 ENTERPRISE-GRADE INTERACTIVE CASES VIEW DEPLOYMENT (100% WORKING!)
//       case 'cases':
//         return (
//           <div className="space-y-6 w-full animate-in fade-in duration-300">
//             {/* Header Description Title */}
//             <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
//               <div>
//                 <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">
//                   Litigation Case Ledger & Active Docket Monitor
//                 </h3>
//                 <p className="text-xs text-slate-500 font-medium mt-0.5">
//                   Real-time centralized tracking matrix linked directly via Integrated e-Courts CNR network streams.
//                 </p>
//               </div>
//               <span className="text-[10px] bg-blue-50 border border-blue-200 font-mono font-bold px-3 py-1.5 rounded-lg text-blue-700">
//                 CNR Tracker Link: Live
//               </span>
//             </div>

//             {/* Split Display: Left Case Cards, Right Live Docket Inspector */}
//             <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
              
//               {/* Left Column: List Layout of Active Cases */}
//               <div className="xl:col-span-2 space-y-3">
//                 <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
//                   <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-3 mb-4">
//                     Active Roster Log Matrix
//                   </h4>

//                   <div className="space-y-3">
//                     {masterCasesList.map((item) => {
//                       const isCaseSelected = selectedCase.id === item.id;
//                       return (
//                         <div 
//                           key={item.id}
//                           onClick={() => setSelectedCase(item)}
//                           className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-3 ${
//                             isCaseSelected 
//                               ? 'ring-2 ring-blue-600 bg-blue-50/30 border-transparent shadow-xs' 
//                               : 'bg-white border-slate-200 hover:border-slate-300'
//                           }`}
//                         >
//                           <div className="min-w-0 flex-1 space-y-1">
//                             <div className="flex items-center gap-2 flex-wrap">
//                               <span className="text-[10px] font-mono font-bold bg-slate-100 border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded">
//                                 CNR: {item.cnr}
//                               </span>
//                               <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm ${
//                                 item.status === 'Critical' || item.status === 'High Priority' ? 'bg-red-50 text-red-700 border border-red-200' : 'bg-slate-50 text-slate-600 border border-slate-200'
//                               }`}>
//                                 {item.status}
//                               </span>
//                             </div>
//                             <p className="text-sm font-bold text-slate-900 truncate">{item.title}</p>
//                             <p className="text-xs text-slate-400 font-medium">{item.court} • <span className="text-slate-600 font-semibold">{item.type}</span></p>
//                           </div>

//                           <div className="text-left md:text-right shrink-0 border-t md:border-t-0 pt-2 md:pt-0 border-slate-100">
//                             <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Next Hearing Date</p>
//                             <p className="text-xs font-mono font-black text-slate-700 mt-0.5">{item.nextHearing}</p>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>

//               {/* Right Column: Deep Inspection Details Sheet */}
//               <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
//                 <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
//                   Case Docket Inspector Sheet
//                 </h4>

//                 {selectedCase ? (
//                   <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
//                     <div>
//                       <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 inline-block">
//                         CNR: {selectedCase.cnr}
//                       </span>
//                       <h3 className="text-base font-black text-slate-900 mt-3 leading-tight">{selectedCase.title}</h3>
//                     </div>

//                     <div className="bg-slate-50 border border-slate-100 p-3 rounded-lg space-y-3 text-xs font-medium">
//                       <div>
//                         <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Jurisdiction Court Room</p>
//                         <p className="text-slate-800 font-bold mt-0.5">{selectedCase.court}</p>
//                       </div>
                      
//                       <div className="grid grid-cols-2 gap-2">
//                         <div>
//                           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Current Stage</p>
//                           <p className="text-slate-700 font-bold mt-0.5">{selectedCase.stage}</p>
//                         </div>
//                         <div>
//                           <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Litigation Classification</p>
//                           <p className="text-slate-700 font-bold mt-0.5">{selectedCase.type}</p>
//                         </div>
//                       </div>

//                       <div className="border-t border-slate-200/60 pt-2.5">
//                         <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Automated Sync Audit Log</p>
//                         <p className="text-[10px] text-slate-500 font-normal leading-relaxed mt-1">
//                           Secure checkpoint handshake established. Dynamic records match the current database files of the e-Courts grid servers.
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <p className="text-xs text-slate-400 font-medium text-center py-12">
//                     Select any listed active case file card to audit comprehensive tracking records.
//                   </p>
//                 )}
//               </div>

//             </div>
//           </div>
//         );

//       default:
//         return <div className="p-12 text-center text-slate-400 font-semibold bg-white border rounded-xl shadow-2xs">View layer module integration pending deployment.</div>;
//     }
//   };

//   return (
//     <div className="flex min-h-screen bg-slate-100 font-sans antialiased">
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} activeTab={activeTab} setActiveTab={setActiveTab} />

//       <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
//         <Topbar toggleSidebar={toggleSidebar} searchQuery={searchQuery} setSearchQuery={setSearchQuery} isCardBlocked={isCardBlocked} />

//         <main className="flex-1 p-4 md:p-6 w-full max-w-[1600px] mx-auto space-y-6 overflow-y-auto">
//           {renderViewContent()}
//         </main>
//       </div>

//       <Modal isOpen={walletModalOpen} onClose={() => setWalletModalOpen(false)} title="Deposit Funds to Wallet">
//         <form onSubmit={handleAddMoney} className="space-y-4">
//           <div>
//             <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Amount (INR)</label>
//             <input 
//               type="number" 
//               placeholder="Enter amount (e.g. 1000)"
//               value={inputAmount}
//               onChange={(e) => setInputAmount(e.target.value)}
//               className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:outline-hidden focus:border-blue-500 bg-slate-50 font-semibold"
//               required
//             />
//           </div>
//           <div className="flex gap-2">
//             <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors">
//               Authorize Transaction
//             </button>
//           </div>
//         </form>
//       </Modal>
//     </div>
//   );
// }






import React, { useState } from 'react';
import Sidebar from './layout/Sidebar';
import Topbar from './layout/Topbar';
import TopRowSection from './components/dashboard/TopRowSection';
import MiddleGridSection from './components/dashboard/MiddleGridSection';
import BottomUtilitySection from './components/dashboard/BottomUtilitySection';
import FooterSection from './components/dashboard/FooterSection';
import Modal from './components/ui/Modal';

import { initialTransactions, initialDocuments } from './data/mockData';

// Mock database for standard production court clearance nodes
const courtClearanceData = [
  { id: 'sc', court: 'Supreme Court of India', status: 'Authorized', badge: 'Level-3 Access', color: 'text-purple-700 bg-purple-50 border-purple-200' },
  { id: 'hc', court: 'Bombay High Court (Main Bench)', status: 'Authorized', badge: 'Bar Member', color: 'text-blue-700 bg-blue-50 border-blue-200' },
  { id: 'dc', court: 'Delhi District Courts (All Complexes)', status: 'Active Pass', badge: 'Biometric Verified', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  { id: 'ca', court: 'National Company Law Appellate Tribunal (NCLAT)', status: 'Clearance Active', badge: 'Corporate Counsel', color: 'text-amber-700 bg-amber-50 border-amber-200' },
];

// Mock database for standard calendar hearings
const legalEvents = [
  { id: 1, day: 4, title: "High Court Hearing", type: "hearing", caseId: "WP-4589/2025", time: "10:30 AM", notes: "Civil matter final arguments before Bench 3." },
  { id: 2, day: 9, title: "Client Consultation", type: "consultation", caseId: "Mehta & Co", time: "03:00 PM", notes: "NDA revision and commercial contract signing parameters." },
  { id: 3, day: 15, title: "Supreme Court SLP", type: "hearing", caseId: "SLP-1102/2026", time: "11:15 AM", notes: "Admission stage arguments for interim stay orders." },
  { id: 4, day: 22, title: "Bar Association Meet", type: "meeting", caseId: "General Body", time: "04:30 PM", notes: "Discussion on hybrid e-filing implementation guidelines." },
  { id: 5, day: 28, title: "Chamber Staff Review", type: "meeting", caseId: "Internal Staff", time: "06:00 PM", notes: "Weekly performance check and upcoming filing strategy planning." }
];

// Mock Database for Active Case Management System
const masterCasesList = [
  { id: 'case-1', cnr: 'MHHCO10047892012', title: 'Rohit Sharma vs. State of Maharashtra', court: 'Bombay High Court', stage: 'Final Arguments', nextHearing: '2026-07-04', type: 'Criminal Appeal', status: 'Critical' },
  { id: 'case-2', cnr: 'DLCT010022342021', title: 'Malhotra Logistics vs. Union of India', court: 'Delhi District Court', stage: 'Evidence Tracking', nextHearing: '2026-07-12', type: 'Commercial Suit', status: 'Ongoing' },
  { id: 'case-3', cnr: 'SCIA030011022025', title: 'S.K. Bansal vs. National Green Tribunal', court: 'Supreme Court of India', stage: 'Admission Stage', nextHearing: '2026-07-15', type: 'Special Leave Petition', status: 'High Priority' },
  { id: 'case-4', cnr: 'MHHCO10099512023', title: 'Adani Power Ltd. vs. Maharashtra Electricity Regulatory Commission', court: 'MERC Tribunal', stage: 'Interim Order Review', nextHearing: '2026-07-20', type: 'Regulatory Dispute', status: 'Standard' }
];

// 🔥 NEW: Mock Database for CRM Client Framework
const masterClientsList = [
  { id: 'client-1', name: 'Sandeep Malhotra', corporate: 'Malhotra Logistics Ltd.', type: 'Corporate Retainer', activeCases: 2, totalDues: '₹45,000', email: 'sandeep@malhotralogistics.com', phone: '+91 98765 43210' },
  { id: 'client-2', name: 'Priyanjali Sharma', corporate: 'Individual Litigant', type: 'Private Client', activeCases: 1, totalDues: '₹0.00 (Paid)', email: 'priya.sharma@outlook.com', phone: '+91 91122 33445' },
  { id: 'client-3', name: 'Kiran Joshi', corporate: 'Joshi Infrastructure Corp.', type: 'Corporate Retainer', activeCases: 1, totalDues: '₹1,20,000', email: 'k.joshi@joshicorp.in', phone: '+91 99887 76655' },
  { id: 'client-4', name: 'Devendra Kumar', corporate: 'State Electricity Board', type: 'Public Sector Advisory', activeCases: 3, totalDues: '₹85,000', email: 'd.kumar@mseb.gov.in', phone: '+91 90011 22334' }
];

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('clients'); // Set to 'clients' to evaluate this step directly
  
  // Dynamic business states
  const [isCardBlocked, setIsCardBlocked] = useState(false);
  const [walletBalance, setWalletBalance] = useState(5250.00);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [documents, setDocuments] = useState(initialDocuments);
  
  // Dynamic interface selectors
  const [selectedEvent, setSelectedEvent] = useState(legalEvents[0]);
  const [selectedCourtNode, setSelectedCourtNode] = useState(courtClearanceData[0]);
  const [selectedCase, setSelectedCase] = useState(masterCasesList[0]);
  const [selectedClient, setSelectedClient] = useState(masterClientsList[0]); // 🔥 NEW: Chosen client controller state

  // Modals management
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [inputAmount, setInputAmount] = useState('');
  const [activeDownloadDoc, setActiveDownloadDoc] = useState(null);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const handleBlockCard = () => setIsCardBlocked(!isCardBlocked);

  const handleAddMoney = (e) => {
    e.preventDefault();
    const amount = parseFloat(inputAmount);
    if (!isNaN(amount) && amount > 0) {
      setWalletBalance(prev => prev + amount);
      setTransactions([{
        id: Date.now(),
        type: 'Added to Wallet',
        amount: amount,
        date: new Date().toISOString().split('T')[0]
      }, ...transactions]);
      setInputAmount('');
      setWalletModalOpen(false);
    }
  };

  const triggerDownload = (doc) => {
    setActiveDownloadDoc(doc);
    setTimeout(() => {
      setActiveDownloadDoc(null);
      alert(`Success: ${doc.name} successfully exported to local device downloads.`);
    }, 1200);
  };

  // Dynamic Content Router Module
  const renderViewContent = () => {
    switch(activeTab) {
      case 'dashboard':
        return (
          <>
            <TopRowSection isCardBlocked={isCardBlocked} />
            <MiddleGridSection searchQuery={searchQuery} />
            <BottomUtilitySection 
              walletBalance={walletBalance}
              transactions={transactions}
              documents={documents}
              onAddMoneyClick={() => setWalletModalOpen(true)}
              onDownloadClick={triggerDownload}
              activeDownloadDoc={activeDownloadDoc}
            />
            <FooterSection isCardBlocked={isCardBlocked} onBlockToggle={handleBlockCard} />
          </>
        );

      case 'profile':
        return (
          <div className="bg-white border border-slate-200 rounded-xl p-6 animate-in fade-in duration-200">
            <h3 className="text-base font-bold text-slate-800 mb-4 uppercase tracking-wider">Advocate Detailed Dossier</h3>
            <TopRowSection isCardBlocked={isCardBlocked} />
          </div>
        );

      case 'wallet':
        return (
          <div className="space-y-6 w-full animate-in fade-in duration-300">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Account Ledger & NFC Payments Center</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time transactional monitoring node connected to Bar Council servers.</p>
              </div>
              <button 
                onClick={() => setWalletModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-4 py-2 rounded-lg transition-colors shadow-xs shrink-0"
              >
                + Add Money to Wallet
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-linear-to-br from-emerald-600 to-teal-800 text-white rounded-xl p-6 shadow-sm border border-emerald-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-xs font-bold text-emerald-100 uppercase tracking-widest opacity-90">Available Account Balance</p>
                      <h2 className="text-3xl md:text-4xl font-black font-mono tracking-tight mt-1">
                        ₹ {walletBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                      </h2>
                    </div>
                    <span className="bg-white/10 text-emerald-100 font-mono font-bold text-[10px] px-2.5 py-1 rounded-md border border-white/10 uppercase tracking-wider">Gateway Secure</span>
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-3">Recent Transaction Audit Trail Ledger</h4>
                  <div className="divide-y divide-slate-100 max-h-[300px] overflow-y-auto pr-1">
                    {transactions.map((pay) => (
                      <div key={pay.id} className="flex items-center justify-between py-3 text-sm first:pt-0 last:pb-0">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                        <p className="font-bold text-slate-800 truncate">{pay.type}</p>
                        <span className="font-mono font-black text-slate-800">₹{pay.amount.toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'documents':
        return (
          <div className="space-y-6 w-full animate-in fade-in duration-300">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
              <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Secure Document Vault</h3>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs max-w-2xl">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 border border-slate-100 mb-2">
                  <p className="text-xs font-bold text-slate-800 truncate">{doc.name}</p>
                  <button onClick={() => triggerDownload(doc)} className="bg-white border text-[10px] font-bold px-3 py-1.5 rounded-md">Download Asset</button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'calendar':
        return (
          <div className="space-y-6 w-full animate-in fade-in duration-300">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
              <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Case Diary & Litigation Schedule Calendar</h3>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
              <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
                <div className="grid grid-cols-7 gap-1.5">
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} className="min-h-[64px] p-2 border border-slate-100 rounded-lg text-xs font-bold text-slate-400">{i + 1}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'court':
        return (
          <div className="space-y-6 w-full animate-in fade-in duration-300">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
              <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Smart Judiciary Security Clearing Hub</h3>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs max-w-2xl">
              {courtClearanceData.map((node) => (
                <div key={node.id} className="p-3 border-b last:border-0">{node.court}</div>
              ))}
            </div>
          </div>
        );

      case 'cases':
        return (
          <div className="space-y-6 w-full animate-in fade-in duration-300">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs">
              <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">Litigation Case Ledger</h3>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
              <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
                {masterCasesList.map((item) => (
                  <div key={item.id} onClick={() => setSelectedCase(item)} className="p-3 border-b border-slate-100 cursor-pointer">{item.title}</div>
                ))}
              </div>
            </div>
          </div>
        );

      // 🔥 ENTERPRISE-GRADE INTERACTIVE CLIENTS CRM MODULE DEPLOYMENT (100% WORKING!)
      case 'clients':
        return (
          <div className="space-y-6 w-full animate-in fade-in duration-300">
            {/* Header Control Box */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h3 className="text-base font-black text-slate-900 uppercase tracking-wide">
                  Chamber CRM Directory & Retainer Index
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  Secure localized management portal tracking dynamic corporate counsels, billable retainer contracts, and encrypted contact channels.
                </p>
              </div>
              <span className="text-[10px] bg-emerald-50 border border-emerald-200 font-mono font-bold px-3 py-1.5 rounded-lg text-emerald-700">
                Total Counsel Profiles: 4 Records
              </span>
            </div>

            {/* Split Grid Blueprint layout */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
              
              {/* Left Grid Column: Interactive Directory Rows */}
              <div className="xl:col-span-2 space-y-3">
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 border-b border-slate-100 pb-3 mb-4">
                    Active Client Corporate Matrix
                  </h4>

                  <div className="space-y-3">
                    {masterClientsList.map((client) => {
                      const isClientSelected = selectedClient.id === client.id;
                      return (
                        <div 
                          key={client.id}
                          onClick={() => setSelectedClient(client)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            isClientSelected 
                              ? 'ring-2 ring-blue-600 bg-blue-50/30 border-transparent shadow-xs' 
                              : 'bg-white border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="min-w-0 flex-1 space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm bg-slate-100 text-slate-600 border border-slate-200">
                                {client.type}
                              </span>
                            </div>
                            <p className="text-sm font-bold text-slate-900 truncate">{client.name}</p>
                            <p className="text-xs text-slate-400 font-medium truncate">{client.corporate}</p>
                          </div>

                          <div className="text-left sm:text-right shrink-0 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100 flex sm:flex-col justify-between sm:justify-center gap-2">
                            <div>
                              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-wide">Active Dockets</p>
                              <p className="text-xs font-black text-slate-700 mt-0.5">{client.activeCases} Matters</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Grid Column: Profile Information Sheet Card */}
              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">
                  Client Dossier Card Inspector
                </h4>

                {selectedClient ? (
                  <div className="space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100 inline-block uppercase">
                        {selectedClient.type}
                      </span>
                      <h3 className="text-base font-black text-slate-900 mt-2.5 leading-tight">{selectedClient.name}</h3>
                      <p className="text-xs font-medium text-slate-400 mt-0.5">{selectedClient.corporate}</p>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-lg space-y-3 text-xs font-medium">
                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Communication Email</p>
                        <p className="text-slate-800 font-mono font-bold mt-0.5 break-all">{selectedClient.email}</p>
                      </div>

                      <div>
                        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Secure Mobile Roster</p>
                        <p className="text-slate-800 font-mono font-bold mt-0.5">{selectedClient.phone}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-2 border-t border-slate-200/60 pt-3 mt-1">
                        <div>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Active Load</p>
                          <p className="text-slate-700 font-bold mt-0.5">{selectedClient.activeCases} Active Briefs</p>
                        </div>
                        <div>
                          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wide">Outstanding Retainer</p>
                          <p className={`font-black mt-0.5 ${selectedClient.totalDues.includes('Paid') ? 'text-emerald-600' : 'text-red-600'}`}>
                            {selectedClient.totalDues}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-slate-400 font-medium text-center py-12">
                    Select any roster entity record entry card to inspect localized credentials info.
                  </p>
                )}
              </div>

            </div>
          </div>
        );

      default:
        return <div className="p-12 text-center text-slate-400 font-semibold bg-white border rounded-xl shadow-2xs">View layer module integration pending deployment.</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans antialiased">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <Topbar toggleSidebar={toggleSidebar} searchQuery={searchQuery} setSearchQuery={setSearchQuery} isCardBlocked={isCardBlocked} />

        <main className="flex-1 p-4 md:p-6 w-full max-w-[1600px] mx-auto space-y-6 overflow-y-auto">
          {renderViewContent()}
        </main>
      </div>

      <Modal isOpen={walletModalOpen} onClose={() => setWalletModalOpen(false)} title="Deposit Funds to Wallet">
        <form onSubmit={handleAddMoney} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Amount (INR)</label>
            <input 
              type="number" 
              placeholder="Enter amount (e.g. 1000)"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg text-sm focus:outline-hidden focus:border-blue-500 bg-slate-50 font-semibold"
              required
            />
          </div>
          <div className="flex gap-2">
            <button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors">
              Authorize Transaction
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}