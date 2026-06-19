import React, { createContext, useContext, useState, useEffect } from 'react';

const ClientCRMContext = createContext();

const initialClientsMock = [
  {
    id: 'CL-7701',
    name: 'Sandeep Malhotra',
    type: 'Corporate',
    status: 'Active',
    company: 'Malhotra Logistics Ltd.',
    email: 'sandeep@malhotralogistics.com',
    phone: '+91 98765 43210',
    address: 'Sector 15, Gurgaon, HR',
    pan: 'ABCDE1234F',
    gst: '06ABCDE1234F1Z5',
    joinedDate: '2026-01-10',
    retainer: { fee: 50000, renewalDate: '2027-01-10' },
    cases: [
      { id: 'CASE-2026-001', number: 'WP(C) 4589/2025', court: 'Bombay High Court', status: 'Ongoing' }
    ],
    timeline: [
      { id: 1, event: 'Client Registered', date: '2026-01-10' },
      { id: 2, event: 'Retainer Agreement Signed', date: '2026-01-12' }
    ],
    documents: [
      { id: 'd1', name: 'Incorporation_Cert.pdf', type: 'Agreement' }
    ],
    payments: [
      { id: 'p1', amount: 50000, status: 'Paid', date: '2026-01-15' }
    ]
  },
  {
    id: 'CL-8802',
    name: 'Priyanjali Sharma',
    type: 'Individual',
    status: 'Active',
    company: 'N/A',
    email: 'priya.sharma@outlook.com',
    phone: '+91 91122 33445',
    joinedDate: '2026-05-20',
    timeline: [{ id: 1, event: 'Consultation Conducted', date: '2026-05-21' }],
    cases: [],
    documents: [],
    payments: []
  }
];

export function ClientCRMProvider({ children }) {
  const [clients, setClients] = useState(() => {
    const saved = localStorage.getItem('legal_crm_clients_v1');
    return saved ? JSON.parse(saved) : initialClientsMock;
  });

  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    localStorage.setItem('legal_crm_clients_v1', JSON.stringify(clients));
  }, [clients]);

  const addNotification = (text) => {
    setNotifications(prev => [{ id: Date.now(), text, read: false }, ...prev]);
  };

  const createClient = (formData) => {
    const newClient = {
      ...formData,
      id: `CL-${Math.floor(1000 + Math.random() * 9000)}`,
      joinedDate: new Date().toISOString().split('T')[0],
      cases: [],
      timeline: [{ id: Date.now(), event: 'Client Onboarded', date: new Date().toISOString().split('T')[0] }],
      documents: [],
      payments: []
    };
    setClients(prev => [newClient, ...prev]);
    addNotification(`New client ${formData.name} added to registry.`);
  };

  const deleteClient = (id) => {
    setClients(prev => prev.filter(c => c.id !== id));
    addNotification(`Client record ${id} removed.`);
  };

  const updateClient = (id, updatedData) => {
    setClients(prev => prev.map(c => c.id === id ? { ...c, ...updatedData } : c));
  };

  return (
    <ClientCRMContext.Provider value={{ clients, notifications, createClient, deleteClient, updateClient, setNotifications }}>
      {children}
    </ClientCRMContext.Provider>
  );
}

export const useClientCRM = () => useContext(ClientCRMContext);