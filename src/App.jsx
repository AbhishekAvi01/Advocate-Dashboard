import React, { useState } from 'react';
import Sidebar from './layout/Sidebar';
import Topbar from './layout/Topbar';
import TopRowSection from './components/dashboard/TopRowSection';
import MiddleGridSection from './components/dashboard/MiddleGridSection';
import BottomUtilitySection from './components/dashboard/BottomUtilitySection';
import FooterSection from './components/dashboard/FooterSection';
import Modal from './components/ui/Modal';
import CourtAccessPage from './pages/CourtAccessPage'; 
import WalletPaymentsPage from './pages/WalletPaymentsPage';


import DocumentVaultPage from './pages/DocumentVaultPage';
import { DocumentVaultProvider } from './context/DocumentVaultContext';
import { CourtProvider } from './context/CourtContext';


import { WalletPaymentsProvider } from './context/WalletPaymentsContext';


import CaseManagementPage from './pages/CaseManagementPage';
import { CaseManagementProvider } from './context/CaseManagementContext';

import ClientCRMPage from './pages/ClientCRMPage';
import { ClientCRMProvider } from './context/ClientCRMContext';


import LegalCalendarPage from './pages/LegalCalendarPage';
import { LegalCalendarProvider } from './context/LegalCalendarContext';

import { initialTransactions, initialDocuments } from './data/mockData';


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
            <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-4">Advocate Detailed Dossier</h3>
            <TopRowSection isCardBlocked={isCardBlocked} />
          </div>
        );

      case 'court':
        return (
          <CourtProvider>
            <CourtAccessPage />
          </CourtProvider>
        );

      case 'wallet':
        return (
          <WalletPaymentsProvider>
            <WalletPaymentsPage />
          </WalletPaymentsProvider>
        );

      case 'documents':
        return (
          <DocumentVaultProvider>
            <DocumentVaultPage />
          </DocumentVaultProvider>
        );

      case 'cases':
        return (
          <CaseManagementProvider>
            <CaseManagementPage />
          </CaseManagementProvider>
        );

      case 'clients':
        return (
          <ClientCRMProvider>
            <ClientCRMPage />
          </ClientCRMProvider>
        );

      case 'calendar':
        return (
          <LegalCalendarProvider>
            <LegalCalendarPage />
          </LegalCalendarProvider>
        );

      default:
        return <div className="p-12 text-center text-slate-400 font-semibold bg-white border rounded-xl shadow-2xs">View layer module integration pending deployment.</div>;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans antialiased">
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        <Topbar toggleSidebar={toggleSidebar} isCardBlocked={isCardBlocked} setSearchQuery={setSearchQuery} />

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
              className="w-full p-2.5 border border-slate-200 rounded-lg text-sm bg-slate-50 font-semibold focus:outline-hidden"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors">
            Authorize Transaction
          </button>
        </form>
      </Modal>
    </div>
  );
}