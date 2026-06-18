import React, { useState } from 'react';
import Sidebar from './layout/Sidebar';
import Topbar from './layout/Topbar';
import TopRowSection from './components/dashboard/TopRowSection';
import MiddleGridSection from './components/dashboard/MiddleGridSection';
import BottomUtilitySection from './components/dashboard/BottomUtilitySection';
import FooterSection from './components/dashboard/FooterSection';
import Modal from './components/ui/Modal';

import { initialTransactions, initialDocuments } from './data/mockData';


const courtClearanceData = [
  { id: 'sc', court: 'Supreme Court of India', status: 'Authorized', badge: 'Level-3 Access', color: 'text-purple-700 bg-purple-50 border-purple-200' },
  { id: 'hc', court: 'Bombay High Court (Main Bench)', status: 'Authorized', badge: 'Bar Member', color: 'text-blue-700 bg-blue-50 border-blue-200' },
  { id: 'dc', court: 'Delhi District Courts (All Complexes)', status: 'Active Pass', badge: 'Biometric Verified', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
  { id: 'ca', court: 'National Company Law Appellate Tribunal (NCLAT)', status: 'Clearance Active', badge: 'Corporate Counsel', color: 'text-amber-700 bg-amber-50 border-amber-200' },
];


const legalEvents = [
  { id: 1, day: 4, title: "High Court Hearing", type: "hearing", caseId: "WP-4589/2025", time: "10:30 AM", notes: "Civil matter final arguments before Bench 3." },
  { id: 2, day: 9, title: "Client Consultation", type: "consultation", caseId: "Mehta & Co", time: "03:00 PM", notes: "NDA revision and commercial contract signing parameters." },
  { id: 3, day: 15, title: "Supreme Court SLP", type: "hearing", caseId: "SLP-1102/2026", time: "11:15 AM", notes: "Admission stage arguments for interim stay orders." },
  { id: 4, day: 22, title: "Bar Association Meet", type: "meeting", caseId: "General Body", time: "04:30 PM", notes: "Discussion on hybrid e-filing implementation guidelines." },
  { id: 5, day: 28, title: "Chamber Staff Review", type: "meeting", caseId: "Internal Staff", time: "06:00 PM", notes: "Weekly performance check and upcoming filing strategy planning." }
];


const masterCasesList = [
  { id: 'case-1', cnr: 'MHHCO10047892012', title: 'Rohit Sharma vs. State of Maharashtra', court: 'Bombay High Court', stage: 'Final Arguments', nextHearing: '2026-07-04', type: 'Criminal Appeal', status: 'Critical' },
  { id: 'case-2', cnr: 'DLCT010022342021', title: 'Malhotra Logistics vs. Union of India', court: 'Delhi District Court', stage: 'Evidence Tracking', nextHearing: '2026-07-12', type: 'Commercial Suit', status: 'Ongoing' },
  { id: 'case-3', cnr: 'SCIA030011022025', title: 'S.K. Bansal vs. National Green Tribunal', court: 'Supreme Court of India', stage: 'Admission Stage', nextHearing: '2026-07-15', type: 'Special Leave Petition', status: 'High Priority' },
  { id: 'case-4', cnr: 'MHHCO10099512023', title: 'Adani Power Ltd. vs. Maharashtra Electricity Regulatory Commission', court: 'MERC Tribunal', stage: 'Interim Order Review', nextHearing: '2026-07-20', type: 'Regulatory Dispute', status: 'Standard' }
];

const masterClientsList = [
  { id: 'client-1', name: 'Sandeep Malhotra', corporate: 'Malhotra Logistics Ltd.', type: 'Corporate Retainer', activeCases: 2, totalDues: '₹45,000', email: 'sandeep@malhotralogistics.com', phone: '+91 98765 43210' },
  { id: 'client-2', name: 'Priyanjali Sharma', corporate: 'Individual Litigant', type: 'Private Client', activeCases: 1, totalDues: '₹0.00 (Paid)', email: 'priya.sharma@outlook.com', phone: '+91 91122 33445' },
  { id: 'client-3', name: 'Kiran Joshi', corporate: 'Joshi Infrastructure Corp.', type: 'Corporate Retainer', activeCases: 1, totalDues: '₹1,20,000', email: 'k.joshi@joshicorp.in', phone: '+91 99887 76655' },
  { id: 'client-4', name: 'Devendra Kumar', corporate: 'State Electricity Board', type: 'Public Sector Advisory', activeCases: 3, totalDues: '₹85,000', email: 'd.kumar@mseb.gov.in', phone: '+91 90011 22334' }
];

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  

  const [activeTab, setActiveTab] = useState('dashboard'); 
  
 
  const [isCardBlocked, setIsCardBlocked] = useState(false);
  const [walletBalance, setWalletBalance] = useState(5250.00);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [documents, setDocuments] = useState(initialDocuments);
 
  const [selectedEvent, setSelectedEvent] = useState(legalEvents[0]);
  const [selectedCourtNode, setSelectedCourtNode] = useState(courtClearanceData[0]);
  const [selectedCase, setSelectedCase] = useState(masterCasesList[0]);
  const [selectedClient, setSelectedClient] = useState(masterClientsList[0]);

 
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
                <h3 className="text-base font-black text-slate-900 uppercase tracking-wide font-sans">Account Ledger & NFC Payments Center</h3>
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
              <h3 className="text-base font-black text-slate-900 uppercase tracking-wide font-sans">Secure Document Vault</h3>
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
              <h3 className="text-base font-black text-slate-900 uppercase tracking-wide font-sans">Case Diary & Litigation Schedule Calendar</h3>
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
              <h3 className="text-base font-black text-slate-900 uppercase tracking-wide font-sans">Smart Judiciary Security Clearing Hub</h3>
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
              <h3 className="text-base font-black text-slate-900 uppercase tracking-wide font-sans">Litigation Case Ledger</h3>
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

      case 'clients':
        return (
          <div className="space-y-6 w-full animate-in fade-in duration-300">
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div>
                <h3 className="text-base font-black text-slate-900 uppercase tracking-wide font-sans">Chamber CRM Directory & Retainer Index</h3>
                <p className="text-xs text-slate-500 font-medium mt-0.5">Secure localized management portal tracking dynamic corporate counsels.</p>
              </div>
              <span className="text-[10px] bg-emerald-50 border border-emerald-200 font-mono font-bold px-3 py-1.5 rounded-lg text-emerald-700">Total Counsel Profiles: 4 Records</span>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
              <div className="xl:col-span-2 space-y-3">
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
                  <div className="space-y-3">
                    {masterClientsList.map((client) => {
                      const isClientSelected = selectedClient.id === client.id;
                      return (
                        <div 
                          key={client.id}
                          onClick={() => setSelectedClient(client)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                            isClientSelected ? 'ring-2 ring-blue-600 bg-blue-50/30 border-transparent shadow-xs' : 'bg-white border-slate-200 hover:border-slate-300'
                          }`}
                        >
                          <div className="min-w-0 flex-1 space-y-1">
                            <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm bg-slate-100 text-slate-600 border border-slate-200">{client.type}</span>
                            <p className="text-sm font-bold text-slate-900 truncate">{client.name}</p>
                            <p className="text-xs text-slate-400 font-medium truncate">{client.corporate}</p>
                          </div>
                          <div className="text-xs font-bold text-slate-700">{client.activeCases} Matters</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">Client Dossier Card Inspector</h4>
                <div className="bg-slate-50 border border-slate-100 p-3.5 rounded-lg space-y-3 text-xs font-medium">
                  <p className="text-slate-800 font-bold">{selectedClient.name}</p>
                  <p className="text-slate-600 font-mono">{selectedClient.email}</p>
                  <p className="text-slate-700 font-bold mt-2">Outstanding Retainer: <span className="text-red-600 font-black">{selectedClient.totalDues}</span></p>
                </div>
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
        <Topbar toggleSidebar={toggleSidebar} isCardBlocked={isCardBlocked} />

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