import React, { useState } from 'react';
import { useFinTechEngine } from '../context/WalletPaymentsContext';
import { 
  Wallet, ArrowUpCircle, ArrowDownCircle, CreditCard, DollarSign, 
  Search, Filter, Receipt, QrCode, ToggleLeft, ToggleRight, FileText, 
  TrendingUp, CheckCircle2, ShieldAlert, X, Plus, Printer, Bell, Activity
} from 'lucide-react';

export default function WalletPaymentsPage() {
  const {
    balance, transactions, invoices, expenses, autoPaySettings, notifications,
    addWalletFunds, commitDirectPayment, registerNewInvoice, setAutoPay, clearAlert
  } = useFinTechEngine();

  // Workspace View Tabs Controllers
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'invoices' | 'expenses'
  const [activeModal, setActiveModal] = useState(null); // { type, data }
  const [txnSearch, setTxnSearch] = useState('');
  const [txnFilter, setTxnFilter] = useState('All');

  // Input states tracking variables
  const [fundsAmount, setFundsAmount] = useState('');
  const [payMethod, setPayMethod] = useState('UPI');
  const [courtFeeAmount, setCourtFeeAmount] = useState('');
  const [targetFeeCategory, setTargetFeeCategory] = useState('Court Fees');
  const [invoiceForm, setInvoiceForm] = useState({ clientName: '', service: '', amount: '', dueDate: '2026-06-30' });

  // Statistical metrics compilation loops
  const calculatedTotalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const monthlySpendingTotal = transactions.filter(t => t.type === 'Debit' && t.status === 'Success').reduce((sum, item) => sum + item.amount, 0);
  const aggregateTxnCount = transactions.length;

  // Search filter pipelines evaluation matrix array
  const activeFilteredTransactions = transactions.filter(t => {
    const matchesSearch = t.id.toLowerCase().includes(txnSearch.toLowerCase()) || t.category.toLowerCase().includes(txnSearch.toLowerCase());
    const matchesCategory = txnFilter === 'All' || t.type === txnFilter;
    return matchesSearch && matchesCategory;
  });

  // Programmable PDF Download Simulator
  const executeReceiptDownload = (txn) => {
    try {
      const mockReceiptLayout = `%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R >>\nendobj\n4 0 obj\n<< /Length 120 >>\nstream\nBT\n/F1 12 Tf\n72 750 Td\n(NATIONAL ADVOCATE IDENTITY LEDGER - PAYMENT RECEIPT) Tj\n72 720 Td\n(Transaction Token ID: ${txn.id}) Tj\n72 700 Td\n(Settlement Date Node: ${txn.date}) Tj\n72 680 Td\n(Allocation Classification: ${txn.category}) Tj\n72 660 Td\n(Net Volume Capital: INR ${txn.amount.toFixed(2)}) Tj\n72 640 Td\n(GST Parameters: ${txn.gst}) Tj\n72 620 Td\n(Handshake Mode: ${txn.method} - SUCCESS) Tj\nET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f\n0000000009 00000 n\n0000000056 00000 n\n0000000111 00000 n\n0000000212 00000 n\ntrailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n0000000395\n%%EOF`;

      const byteArray = new Uint8Array(mockReceiptLayout.length);
      for (let i = 0; i < mockReceiptLayout.length; i++) {
        byteArray[i] = mockReceiptLayout.charCodeAt(i);
      }

      const activeFileBlob = new Blob([byteArray], { type: 'application/pdf' });
      const downloadBlobStringUrl = URL.createObjectURL(activeFileBlob);

      const dynamicDownloadAnchor = document.createElement('a');
      dynamicDownloadAnchor.href = downloadBlobStringUrl;
      dynamicDownloadAnchor.download = `RECEIPT_${txn.id}.pdf`;
      document.body.appendChild(dynamicDownloadAnchor);
      dynamicDownloadAnchor.click();
      
      document.body.removeChild(dynamicDownloadAnchor);
      URL.revokeObjectURL(downloadBlobStringUrl);
    } catch (err) {
      console.error("FinTech Transaction Document Engine Failure Exception:", err);
    }
  };

  return (
    <div className="space-y-6 w-full text-slate-800 antialiased select-none font-sans pb-12 text-left">
      
      {/* TOAST SYSTEM PORTAL NODE OVERLAY MAPPING */}
      <div className="fixed bottom-5 right-5 z-50 space-y-2 max-w-sm w-full">
        {notifications.map(toast => (
          <div key={toast.id} className="bg-slate-900 text-white p-3 rounded-xl shadow-xl flex items-center justify-between gap-3 animate-in slide-in-from-bottom-5">
            <span className="text-xs font-semibold">{toast.text}</span>
            <button onClick={() => clearAlert(toast.id)} className="text-slate-400 hover:text-white">✕</button>
          </div>
        ))}
      </div>

      {/* ==================================================================== */}
      {/* FINTECH BALANCES OVERVIEW METRIC GRID STRIPS                         */}
      {/* ==================================================================== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">
        <div className="p-4 border border-emerald-100 rounded-xl bg-linear-to-br from-emerald-600 to-teal-800 text-white shadow-md flex flex-col justify-between">
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-100/80 flex items-center gap-1.5"><Wallet size={12} /> Available Core Wallet Capital</span>
          <h2 className="text-3xl font-black font-mono tracking-tight mt-2">₹ {balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</h2>
          <span className="text-[9px] font-mono font-bold text-emerald-200 mt-2 block tracking-wider">KYC VERIFIED • SYSTEM SECURE NODE</span>
        </div>
        {[
          { label: 'Monthly Volume Expenditure', value: `₹${monthlySpendingTotal.toLocaleString('en-IN')}`, desc: 'Aggregated Dynamic Outflows' },
          { label: 'Internal Expense Tracker Node', value: `₹${calculatedTotalExpenses.toLocaleString('en-IN')}`, desc: 'Logged Administrative Costs' },
          { label: 'Settled System Transactions', value: aggregateTxnCount, desc: 'Committed Financial Logs' }
        ].map((stat, i) => (
          <div key={i} className="p-4 border border-slate-200 rounded-xl bg-white shadow-3xs flex flex-col justify-between">
            <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">{stat.label}</span>
            <span className="text-2xl font-black font-mono tracking-tight text-slate-900 mt-1">{stat.value}</span>
            <span className="text-[9px] font-bold text-slate-400 block mt-1 uppercase">{stat.desc}</span>
          </div>
        ))}
      </div>

      {/* Dynamic Tab Switching Strip Layer */}
      <div className="flex border-b border-slate-200 gap-2">
        {['overview', 'invoices', 'expenses'].map(tabId => (
          <button
            key={tabId}
            onClick={() => setActiveTab(tabId)}
            className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${
              activeTab === tabId ? 'border-blue-600 text-blue-600 font-extrabold' : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            {tabId === 'overview' ? 'Ledger Overview' : tabId === 'invoices' ? 'Invoice Hub' : 'Chamber Expenses'}
          </button>
        ))}
      </div>

      {/* ==================================================================== */}
      {/* VIEW LAYER TAB SEGMENTATION DISCRIMINATOR SCHEMAS                   */}
      {/* ==================================================================== */}
      {activeTab === 'overview' && (
        <div className="space-y-6 w-full animate-in fade-in duration-200">
          
          {/* FAST ACTION ROUTER BUTTON STRIPS */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-3xs">
            <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 block mb-3">Instant Operational Triggers</span>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button onClick={() => setActiveModal({ type: 'add_money' })} className="p-3 border rounded-xl bg-blue-50/40 text-blue-700 font-black text-xs uppercase tracking-wider text-center group border-blue-200 hover:bg-blue-600 hover:text-white transition-all">+ Load Capital</button>
              <button onClick={() => setActiveModal({ type: 'pay_fee' })} className="p-3 border rounded-xl bg-slate-900 text-amber-400 font-black text-xs uppercase tracking-wider text-center hover:bg-slate-800 transition-all">Pay Court / Bar Fee</button>
              <button onClick={() => setActiveModal({ type: 'upi_scan' })} className="p-3 border rounded-xl bg-white text-slate-700 font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 border-slate-200 hover:bg-slate-50 transition-all"><QrCode size={14} /> Simulate UPI QR</button>
              <button onClick={() => alert("System Action: Complete dynamic account balance statement spreadsheet generated into download logs.")} className="p-3 border rounded-xl bg-white text-slate-700 font-black text-xs uppercase tracking-wider text-center border-slate-200 hover:bg-slate-50 transition-all">Statement Sheet</button>
            </div>
          </div>

          {/* SPLIT TWIN DASHBOARD BLOCKS SHEET CANVAS */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
            
            {/* Left Hand Block Card: Professional Transaction Ledger Audit Sheet */}
            <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-3xs space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b pb-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5"><Activity size={14} className="text-blue-600" /> Transaction Audit Trail & Clearing Settlement Log</h4>
                <div className="flex gap-2 w-full sm:w-auto">
                  <input type="text" placeholder="Search parameters..." value={txnSearch} onChange={e => setTxnSearch(e.target.value)} className="p-1 px-2 border rounded-lg bg-slate-50 font-semibold text-xs text-slate-700" />
                  <select value={txnFilter} onChange={e => setTxnFilter(e.target.value)} className="p-1 border rounded-lg text-xs font-bold text-slate-600"><option value="All">All types</option><option value="Credit">Credits</option><option value="Debit">Debits</option></select>
                </div>
              </div>

              <div className="overflow-x-auto w-full rounded-xl border border-slate-100">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b text-slate-400 uppercase text-[9px] font-black tracking-wider">
                      <th className="p-3">Reference Token / Date</th>
                      <th className="p-3">Allocation Group</th>
                      <th className="p-3">Financial Outflow</th>
                      <th className="p-3">Gateway Mode</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                    {activeFilteredTransactions.map(txn => (
                      <tr key={txn.id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="p-3">
                          <span className="font-mono font-black text-slate-900 block">{txn.id}</span>
                          <span className="text-[10px] text-slate-400 block mt-0.5">{txn.date}</span>
                        </td>
                        <td className="p-3 text-slate-800 font-bold">{txn.category}</td>
                        <td className="p-3 font-mono font-black">
                          <span className={txn.type === 'Credit' ? 'text-emerald-600' : 'text-slate-900'}>
                            {txn.type === 'Credit' ? '+' : '-'} ₹{txn.amount.toFixed(2)}
                          </span>
                        </td>
                        <td className="p-3"><span className="text-[10px] bg-slate-100 px-1.5 py-0.5 rounded border font-bold text-slate-600">{txn.method}</span></td>
                        <td className="p-3 text-right">
                          <button onClick={() => executeReceiptDownload(txn)} className="p-1 border bg-white text-slate-500 rounded hover:bg-slate-50 hover:text-slate-800" title="Export PDF Receipt"><Receipt size={13} /></button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right Hand Side Control Panel block: Automations Settings Configuration Sheets */}
            <div className="space-y-4">
              <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-3xs text-left space-y-3">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b pb-2">Central Automated Mandate Controls</h4>
                {[
                  { key: 'barCouncilRenewal', tag: 'Annual Bar Council Standing Renewal', desc: 'Auto-debited via NFC baseline registers.' },
                  { key: 'subscriptionCharges', tag: 'Central ERP SaaS License Subscription', desc: 'Secure monthly clearing allocation portal.' }
                ].map(setting => (
                  <div key={setting.key} className="p-2.5 bg-slate-50 rounded-lg flex items-center justify-between gap-4 border">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-slate-900 leading-tight">{setting.tag}</p>
                      <p className="text-[10px] text-slate-400 font-medium mt-0.5">{setting.desc}</p>
                    </div>
                    <button 
                      onClick={() => setAutoPay({ ...autoPaySettings, [setting.key]: !autoPaySettings[setting.key] })}
                      className="text-slate-400 hover:text-slate-900 shrink-0"
                    >
                      {autoPaySettings[setting.key] ? <ToggleRight size={28} className="text-emerald-600" /> : <ToggleLeft size={28} className="text-slate-300" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ==================================================================== */}
      {/* INVOICE HUB RENDER SEGMENT SHEET CANVAS                              */}
      {/* ==================================================================== */}
      {activeTab === 'invoices' && (
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-3xs space-y-4 animate-in fade-in duration-200">
          <div className="flex justify-between items-center border-b pb-3">
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">Enterprise CRM Chamber Billing Invoice Index</h4>
              <p className="text-xs text-slate-400 font-medium">Firms level statutory GST tracking pipelines configuration logs.</p>
            </div>
            <button onClick={() => setActiveModal({ type: 'create_invoice' })} className="bg-blue-600 text-white font-black text-xs px-3 py-1.5 rounded-lg flex items-center gap-1 uppercase tracking-wide shadow-xs"><Plus size={13} /> Draft New Invoice</button>
          </div>

          <div className="overflow-x-auto w-full border border-slate-100 rounded-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b text-slate-400 uppercase text-[9px] font-black tracking-wider">
                  <th className="p-3">Invoice ID token</th>
                  <th className="p-3">Client Destination</th>
                  <th className="p-3">Service Allocation</th>
                  <th className="p-3">Base Amount</th>
                  <th className="p-3">GST (18%)</th>
                  <th className="p-3">Clearance Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                {invoices.map(inv => (
                  <tr key={inv.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-3 font-mono font-black text-slate-900">{inv.id}</td>
                    <td className="p-3 text-slate-800 font-bold">{inv.clientName}</td>
                    <td className="p-3 text-slate-500 font-medium">{inv.service}</td>
                    <td className="p-3 font-mono">₹{inv.amount.toLocaleString('en-IN')}</td>
                    <td className="p-3 font-mono text-slate-400">₹{inv.gst.toLocaleString('en-IN')}</td>
                    <td className="p-3">
                      <span className={`text-[10px] font-black uppercase px-2 py-0.5 border rounded-xs ${inv.status === 'Paid' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-amber-50 border-amber-200 text-amber-800'}`}>{inv.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* CHAMBER EXPENSES MANAGEMENT TAB LAYER                                */}
      {/* ==================================================================== */}
      {activeTab === 'expenses' && (
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-3xs space-y-4 animate-in fade-in duration-200">
          <div className="border-b pb-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">Administrative Cost & Docket Expense Book</h4>
            <p className="text-xs text-slate-400 font-medium">Localized expenditure records synchronized to client billing pools.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expenses.map(exp => (
              <div key={exp.id} className="p-3 rounded-xl bg-slate-50/60 border border-slate-200 flex justify-between items-center text-left font-sans shadow-3xs">
                <div>
                  <p className="text-xs font-bold text-slate-900">{exp.title}</p>
                  <span className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider block mt-1">{exp.category} • {exp.date}</span>
                </div>
                <span className="font-mono font-black text-sm text-slate-900">₹{exp.amount.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================================== */}
      {/* MASTER CENTRAL INTERACTIVE FLOATING OVERLAY MODAL HUB INTERFACES     */}
      {/* ==================================================================== */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl w-full max-w-md p-5 shadow-2xl text-left animate-in zoom-in-95 duration-150">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5"><Activity size={13} className="text-blue-600" /> FinTech Command Operational Token Task</h3>
              <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400 font-bold text-sm">✕</button>
            </div>

            <div className="text-xs font-semibold text-slate-600 max-h-[400px] overflow-y-auto pr-1">
              
              {/* Form Option 1: Top-up / Add Money Allocation UI Overlay form */}
              {activeModal.type === 'add_money' && (
                <form onSubmit={e => {
                  e.preventDefault();
                  const targetVolume = parseFloat(fundsAmount);
                  if (!isNaN(targetVolume) && targetVolume > 0) { addWalletFunds(targetVolume, payMethod); setActiveModal(null); setFundsAmount(''); }
                }} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Top-Up Capital Volume (INR)</label>
                    <input type="number" placeholder="e.g. 5000" required value={fundsAmount} onChange={e => setFundsAmount(e.target.value)} className="w-full p-2 bg-slate-50 border rounded-lg text-sm font-bold focus:outline-hidden" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Authorized Gateway Framework Channel</label>
                    <select value={payMethod} onChange={e => setPayMethod(e.target.value)} className="w-full p-2 bg-slate-50 border rounded-lg font-bold text-slate-600"><option value="UPI">UPI Hub</option><option value="Debit Card">Debit Card Node</option><option value="Credit Card">Credit Card Portal</option><option value="Net Banking">Net Banking Channels</option></select>
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-black p-2.5 rounded-lg text-xs uppercase tracking-wide">Authorize Transaction Clearing</button>
                </form>
              )}

              {/* Form Option 2: Pay Custom Fees Registry Portal */}
              {activeModal.type === 'pay_fee' && (
                <form onSubmit={e => {
                  e.preventDefault();
                  const parsedFeeVolume = parseFloat(courtFeeAmount);
                  if (!isNaN(parsedFeeVolume) && parsedFeeVolume > 0) {
                    if (commitDirectPayment(parsedFeeVolume, targetFeeCategory, 'Wallet Core Ledger')) { setActiveModal(null); setCourtFeeAmount(''); }
                  }
                }} className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Allocation Destination Type</label>
                    <select value={targetFeeCategory} onChange={e => setTargetFeeCategory(e.target.value)} className="w-full p-2 bg-slate-50 border rounded-lg font-bold text-slate-600"><option value="Court Fees">Court Fees</option><option value="Bar Council Fees">Bar Council Fees</option><option value="Membership Fees">Membership Fees</option><option value="Government Charges">Government Charges</option></select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Payment Net Volume (INR)</label>
                    <input type="number" placeholder="Enter amount" required value={courtFeeAmount} onChange={e => setCourtFeeAmount(e.target.value)} className="w-full p-2 bg-slate-50 border rounded-lg text-sm font-bold focus:outline-hidden" />
                  </div>
                  <button type="submit" className="w-full bg-slate-900 text-amber-400 font-black p-2.5 rounded-lg text-xs uppercase tracking-wide">Commit Instant Clearing</button>
                </form>
              )}

              {/* Form Option 3: Create Chamber Billing Invoice profile */}
              {activeModal.type === 'create_invoice' && (
                <form onSubmit={e => {
                  e.preventDefault();
                  if (!invoiceForm.clientName || !invoiceForm.amount) return;
                  registerNewInvoice({ ...invoiceForm, amount: parseFloat(invoiceForm.amount) });
                  setActiveModal(null);
                  setInvoiceForm({ clientName: '', service: '', amount: '', dueDate: '2026-06-30' });
                }} className="space-y-3">
                  <input type="text" placeholder="Client Legal Name" required value={invoiceForm.clientName} onChange={e => setInvoiceForm({ ...invoiceForm, clientName: e.target.value })} className="w-full p-2 border bg-slate-50 rounded-lg font-bold" />
                  <input type="text" placeholder="Service Classification (e.g. Arbitration representation)" required value={invoiceForm.service} onChange={e => setInvoiceForm({ ...invoiceForm, service: e.target.value })} className="w-full p-2 border bg-slate-50 rounded-lg font-bold" />
                  <input type="number" placeholder="Net Retainer Volume Fee" required value={invoiceForm.amount} onChange={e => setInvoiceForm({ ...invoiceForm, amount: e.target.value })} className="w-full p-2 border bg-slate-50 rounded-lg font-bold" />
                  <button type="submit" className="w-full bg-blue-600 text-white font-black p-2.5 rounded-lg text-xs uppercase tracking-wide">Publish Retainer Invoice Profile</button>
                </form>
              )}

              {/* Form Option 4: UPI Scan Overlay Simulation QR */}
              {activeModal.type === 'upi_scan' && (
                <div className="text-center py-4 space-y-4">
                  <div className="w-40 h-40 border border-slate-200 rounded-xl bg-slate-50 mx-auto flex items-center justify-center p-2">
                    {/* Simulated vector graphic engine mesh structure */}
                    <div className="w-full h-full bg-slate-200 flex flex-col justify-center items-center text-slate-500 font-mono text-[9px] font-black rounded-lg">UPI_DYNAMIC_QR_GATEWAY</div>
                  </div>
                  <p className="text-slate-500 leading-normal max-w-xs mx-auto text-[11px] font-medium">Scan token address points utilizing banking infrastructure handlers to clear instant retainers parameters directly into secure node cells.</p>
                  <button onClick={() => { addWalletFunds(1500.00, 'UPI (QR Code)'); setActiveModal(null); }} className="p-2 border border-blue-200 bg-blue-50 text-blue-700 rounded-lg font-black text-[11px] uppercase tracking-wide">Simulate 1500 INR Top-Up Success</button>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}