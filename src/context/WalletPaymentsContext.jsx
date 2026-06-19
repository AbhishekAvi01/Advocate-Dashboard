import React, { createContext, useContext, useState, useEffect } from 'react';

const WalletPaymentsContext = createContext();

const initialTransactionsMock = [
  { id: 'TXN-984102', date: '2026-06-19', category: 'Court Fees', amount: 1750.00, type: 'Debit', status: 'Success', method: 'UPI (NFC Tap)', gst: 'Exempt' },
  { id: 'TXN-984103', date: '2026-06-18', category: 'Membership Fees', amount: 2000.00, type: 'Debit', status: 'Success', method: 'Debit Card', gst: '₹360.00 (18%)' },
  { id: 'TXN-984104', date: '2026-06-15', category: 'Bar Council Fees', amount: 1200.00, type: 'Debit', status: 'Success', method: 'Net Banking', gst: 'Exempt' },
  { id: 'TXN-984105', date: '2026-06-10', category: 'Wallet Top-up', amount: 5000.00, type: 'Credit', status: 'Success', method: 'UPI', gst: 'None' },
  { id: 'TXN-984106', date: '2026-06-05', category: 'Other Payments', amount: 3000.00, type: 'Debit', status: 'Failed', method: 'Credit Card', gst: '₹54.00 (18%)' }
];

const initialInvoicesMock = [
  { id: 'INV-2026-041', clientName: 'Sandeep Malhotra', service: 'Writ Brief Drafting', amount: 15000.00, gst: 2700.00, dueDate: '2026-06-30', status: 'Unpaid' },
  { id: 'INV-2026-042', clientName: 'Kiran Joshi', service: 'Tribunal Representation', amount: 45000.00, gst: 8100.00, dueDate: '2026-06-15', status: 'Paid' }
];

const initialExpensesMock = [
  { id: 'EXP-101', title: 'High Court Transit filings', category: 'Travel Expenses', amount: 450.00, date: '2026-06-19' },
  { id: 'EXP-102', title: 'Notary Stamp Papers', category: 'Documentation Charges', amount: 1200.00, date: '2026-06-17' }
];

export function WalletPaymentsProvider({ children }) {
  const [balance, setBalance] = useState(() => {
    const saved = localStorage.getItem('fin_wallet_balance');
    return saved ? parseFloat(saved) : 5250.00;
  });

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem('fin_wallet_txns');
    return saved ? JSON.parse(saved) : initialTransactionsMock;
  });

  const [invoices, setInvoices] = useState(() => {
    const saved = localStorage.getItem('fin_wallet_invs');
    return saved ? JSON.parse(saved) : initialInvoicesMock;
  });

  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem('fin_wallet_exps');
    return saved ? JSON.parse(saved) : initialExpensesMock;
  });

  const [autoPaySettings, setAutoPay] = useState({ barCouncilRenewal: true, subscriptionCharges: false });
  const [notifications, setNotifications] = useState([]);

  useEffect(() => { localStorage.setItem('fin_wallet_balance', balance.toString()); }, [balance]);
  useEffect(() => { localStorage.setItem('fin_wallet_txns', JSON.stringify(transactions)); }, [transactions]);
  useEffect(() => { localStorage.setItem('fin_wallet_invs', JSON.stringify(invoices)); }, [invoices]);
  useEffect(() => { localStorage.setItem('fin_wallet_exps', JSON.stringify(expenses)); }, [expenses]);

  const pushAlert = (text, type = 'success') => {
    setNotifications(prev => [{ id: Date.now(), text, type, read: false }, ...prev]);
  };

  const addWalletFunds = (amount, method) => {
    setBalance(prev => prev + amount);
    const newTxn = {
      id: `TXN-${Math.floor(100000 + Math.random() * 899999)}`,
      date: new Date().toISOString().split('T')[0],
      category: 'Wallet Top-up',
      amount: amount,
      type: 'Credit',
      status: 'Success',
      method,
      gst: 'None'
    };
    setTransactions(prev => [newTxn, ...prev]);
    pushAlert(`₹${amount.toLocaleString('en-IN')} successfully added to wallet via ${method}.`);
  };

  const commitDirectPayment = (amount, category, method) => {
    if (balance < amount) {
      pushAlert(`Payment failed: Insufficient wallet balance for ${category}.`, 'failed');
      return false;
    }
    setBalance(prev => prev - amount);
    const newTxn = {
      id: `TXN-${Math.floor(100000 + Math.random() * 899999)}`,
      date: new Date().toISOString().split('T')[0],
      category,
      amount: amount,
      type: 'Debit',
      status: 'Success',
      method,
      gst: 'Exempt'
    };
    setTransactions(prev => [newTxn, ...prev]);
    pushAlert(`Successfully paid ₹${amount} for ${category}.`);
    return true;
  };

  const registerNewInvoice = (invForm) => {
    const prepped = {
      id: `INV-2026-${Math.floor(100 + Math.random() * 899)}`,
      ...invForm,
      gst: parseFloat((invForm.amount * 0.18).toFixed(2)),
      status: 'Unpaid'
    };
    setInvoices(prev => [prepped, ...prev]);
    pushAlert(`Invoice generated successfully for ${invForm.clientName}.`);
  };

  const clearAlert = (id) => setNotifications(prev => prev.filter(n => n.id !== id));

  return (
    <WalletPaymentsContext.Provider value={{
      balance, transactions, invoices, expenses, autoPaySettings, notifications,
      addWalletFunds, commitDirectPayment, registerNewInvoice, setAutoPay, clearAlert, pushAlert
    }}>
      {children}
    </WalletPaymentsContext.Provider>
  );
}

export const useFinTechEngine = () => useContext(WalletPaymentsContext);