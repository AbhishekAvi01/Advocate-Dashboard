
// import React, { useState } from 'react';
// import Sidebar from './layout/Sidebar';
// import Topbar from './layout/Topbar';
// import TopRowSection from './components/dashboard/TopRowSection';
// import MiddleGridSection from './components/dashboard/MiddleGridSection';
// import BottomUtilitySection from './components/dashboard/BottomUtilitySection';
// import FooterSection from './components/dashboard/FooterSection';

// export default function App() {
  
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!sidebarOpen);
//   };

//   return (
//     <div className="flex min-h-screen bg-slate-100 font-sans antialiased">
      
    
//       <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

    
//       <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        
      
//         <Topbar toggleSidebar={toggleSidebar} />

    
//         <main className="flex-1 p-4 md:p-6 w-full max-w-[1600px] mx-auto space-y-6 overflow-y-auto">
          
//           <TopRowSection />
//           <MiddleGridSection />
//           <BottomUtilitySection />
//           <FooterSection />

//         </main>
//       </div>

//     </div>
//   );
// }



import React, { useState, useMemo } from 'react';
import Sidebar from './layout/Sidebar';
import Topbar from './layout/Topbar';
import TopRowSection from './components/dashboard/TopRowSection';
import MiddleGridSection from './components/dashboard/MiddleGridSection';
import BottomUtilitySection from './components/dashboard/BottomUtilitySection';
import FooterSection from './components/dashboard/FooterSection';
import Modal from './components/ui/Modal';

import { initialPracticeAreas, initialDocuments, initialTransactions } from './data/mockData';

export default function App() {
  // Navigation & UI States
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Functional States (Dynamic Logic)
  const [isCardBlocked, setIsCardBlocked] = useState(false);
  const [walletBalance, setWalletBalance] = useState(5250.00);
  const [transactions, setTransactions] = useState(initialTransactions);
  const [documents, setDocuments] = useState(initialDocuments);
  
  // Modal States
  const [walletModalOpen, setWalletModalOpen] = useState(false);
  const [inputAmount, setInputAmount] = useState('');
  const [activeDownloadDoc, setActiveDownloadDoc] = useState(null);

  // Handlers
  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  
  const handleBlockCard = () => {
    setIsCardBlocked(!isCardBlocked);
  };

  const handleAddMoney = (e) => {
    e.preventDefault();
    const amount = parseFloat(inputAmount);
    if (!isNaN(amount) && amount > 0) {
      setWalletBalance(prev => prev + amount);
      const newTx = {
        id: Date.now(),
        type: 'Added to Wallet',
        amount: amount,
        date: new Date().toISOString().split('T')[0]
      };
      setTransactions([newTx, ...transactions]);
      setInputAmount('');
      setWalletModalOpen(false);
    }
  };

  const triggerDownload = (doc) => {
    setActiveDownloadDoc(doc);
    // Real simulating download behavior
    setTimeout(() => {
      setActiveDownloadDoc(null);
      alert(`${doc.name} successfully downloaded to your local device.`);
    }, 1500);
  };

  return (
    <div className="flex min-h-screen bg-slate-100 font-sans antialiased">
      
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        
        <Topbar 
          toggleSidebar={toggleSidebar} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery}
          isCardBlocked={isCardBlocked}
        />

        <main className="flex-1 p-4 md:p-6 w-full max-w-[1600px] mx-auto space-y-6 overflow-y-auto">
          
          {/* Row 1: Profile & NFC Card State */}
          <TopRowSection isCardBlocked={isCardBlocked} />

          {/* Row 2: Practice Areas with live Filtering capability */}
          <MiddleGridSection searchQuery={searchQuery} />

          {/* Row 3: Vault downloads & Live Wallet tracking ledger */}
          <BottomUtilitySection 
            walletBalance={walletBalance}
            transactions={transactions}
            documents={documents}
            onAddMoneyClick={() => setWalletModalOpen(true)}
            onDownloadClick={triggerDownload}
            activeDownloadDoc={activeDownloadDoc}
          />

          {/* Row 4: Admin Panel & Security Toggle actions */}
          <FooterSection 
            isCardBlocked={isCardBlocked} 
            onBlockToggle={handleBlockCard} 
          />

        </main>
      </div>

      {/* DYNAMIC MODAL: ADD MONEY ENGINE */}
      <Modal 
        isOpen={walletModalOpen} 
        onClose={() => setWalletModalOpen(false)} 
        title="Add Funds to Digital Wallet"
      >
        <form onSubmit={handleAddMoney} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Amount (INR)</label>
            <input 
              type="number" 
              placeholder="Enter amount (e.g. 500)"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              className="w-full p-2.5 border border-slate-200 rounded-lg text-sm font-mono focus:outline-hidden focus:border-blue-500 bg-slate-50"
              required
            />
          </div>
          <div className="flex gap-2 pt-2">
            <button 
              type="submit" 
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold py-2.5 rounded-lg transition-colors shadow-xs"
            >
              Confirm Transaction
            </button>
            <button 
              type="button" 
              onClick={() => setWalletModalOpen(false)}
              className="bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold px-4 py-2.5 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}