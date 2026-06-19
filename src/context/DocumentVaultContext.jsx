import React, { createContext, useContext, useState, useEffect } from 'react';

const DocumentVaultContext = createContext();

const initialMockDocuments = [
  { id: 'DOC-2026-001', name: 'Bar_Council_Enrollment_Certificate.pdf', category: 'Enrollment Certificate', folder: 'Professional Documents', uploadDate: '2012-08-15', expiryDate: 'None', status: 'Verified', size: '2.4 MB', secureToken: 'sh_enc_9a8b7c' },
  { id: 'DOC-2026-002', name: 'Vakalatnama_Supreme_Court_Roster.pdf', category: 'Court Authorizations', folder: 'Court Records', uploadDate: '2026-01-10', expiryDate: '2026-12-31', status: 'Verified', size: '1.8 MB', secureToken: 'sh_enc_1d2e3f' },
  { id: 'DOC-2026-003', name: 'Chamber_Lease_Agreement_Mumbai.pdf', category: 'Identity Documents', folder: 'Personal Documents', uploadDate: '2025-05-20', expiryDate: '2026-06-30', status: 'Under Review', size: '4.2 MB', secureToken: 'sh_enc_5f6g7h' },
  { id: 'DOC-2026-004', name: 'Client_Retainer_NDA_Malhotra.pdf', category: 'Client Documents', folder: 'Client Records', uploadDate: '2026-06-18', expiryDate: '2027-06-18', status: 'Pending', size: '1.1 MB', secureToken: 'sh_enc_3x4y5z' },
  { id: 'DOC-2026-777', name: 'Brief_Docket_Ref_6918.pdf', category: 'Enrollment Certificate', folder: 'Professional Documents', uploadDate: '2026-06-19', expiryDate: 'None', status: 'Pending', size: '2.3 MB', secureToken: 'sh_enc_r777xx' },
  { id: 'DOC-2026-215', name: 'Brief_Docket_Ref_7569.pdf', category: 'Bar Council Certificate', folder: 'Professional Documents', uploadDate: '2026-06-19', expiryDate: '2026-04-06', status: 'Pending', size: '2.3 MB', secureToken: 'sh_enc_e215yy' }
];

const initialFolders = ['Personal Documents', 'Professional Documents', 'Court Records', 'Client Records'];

const initialActivities = [
  { id: 'act-1', text: 'Document "Brief_Docket_Ref_6918.pdf" committed to cryptographic vault block.', time: 'Just Now' },
  { id: 'act-2', text: 'Document "Brief_Docket_Ref_1206.pdf" truncated from storage blocks.', time: '5 mins ago' }
];

export function DocumentVaultProvider({ children }) {
  const [documents, setDocuments] = useState(() => {
    const saved = localStorage.getItem('vault_docs_prod');
    return saved ? JSON.parse(saved) : initialMockDocuments;
  });

  const [folders, setFolders] = useState(() => {
    const saved = localStorage.getItem('vault_folders_prod');
    return saved ? JSON.parse(saved) : initialFolders;
  });

  const [activities, setActivities] = useState(() => {
    const saved = localStorage.getItem('vault_acts_prod');
    return saved ? JSON.parse(saved) : initialActivities;
  });

  const [vaultNotifications, setVaultNotifications] = useState([]);

  useEffect(() => {
    localStorage.setItem('vault_docs_prod', JSON.stringify(documents));
  }, [documents]);

  useEffect(() => {
    localStorage.setItem('vault_folders_prod', JSON.stringify(folders));
  }, [folders]);

  useEffect(() => {
    localStorage.setItem('vault_acts_prod', JSON.stringify(activities));
  }, [activities]);

  const triggerAlert = (title, message) => {
    setVaultNotifications(prev => [{ id: Date.now(), title, message }, ...prev]);
  };

  const clearNotification = (id) => {
    setVaultNotifications(prev => prev.filter(n => n.id !== id));
  };

  const createFolder = (name) => {
    if (folders.includes(name)) return false;
    setFolders(prev => [...prev, name]);
    setActivities(prev => [{ id: Date.now(), text: `Created dynamic directory node "${name}".`, time: 'Just Now' }, ...prev]);
    triggerAlert('Upload Notification', `Folder "${name}" successfully allocated.`);
    return true;
  };

  const deleteFolder = (name) => {
    setFolders(prev => prev.filter(f => f !== name));
    setActivities(prev => [{ id: Date.now(), text: `Purged folder directory "${name}".`, time: 'Just Now' }, ...prev]);
  };

  const addDocument = (doc) => {
    const newDoc = {
      id: `DOC-2026-${Math.floor(100 + Math.random() * 899)}`,
      name: doc.name,
      category: doc.category,
      folder: doc.folder,
      uploadDate: new Date().toISOString().split('T')[0],
      expiryDate: doc.expiryDate || 'None',
      status: 'Pending',
      size: doc.size || '1.5 MB',
      secureToken: `sh_enc_${Math.random().toString(36).substring(2, 8)}`
    };
    setDocuments(prev => [newDoc, ...prev]);
    setActivities(prev => [{ id: Date.now(), text: `New document "${doc.name}" committed to cryptographic vault block.`, time: 'Just Now' }, ...prev]);
    triggerAlert('Upload Successful', `File "${doc.name}" synced to secure ledger.`);
  };

  const deleteDocument = (id) => {
    const doc = documents.find(d => d.id === id);
    setDocuments(prev => prev.filter(d => d.id !== id));
    if (doc) {
      setActivities(prev => [{ id: Date.now(), text: `Document "${doc.name}" truncated from storage blocks.`, time: 'Just Now' }, ...prev]);
      triggerAlert('Record Removed', `File link removed from terminal registry.`);
    }
  };

  const updateVerificationStatus = (id, status) => {
    setDocuments(prev => prev.map(d => d.id === id ? { ...d, status } : d));
    triggerAlert('Status Synchronized', `Verification code updated to ${status}.`);
  };

  return (
    <DocumentVaultContext.Provider value={{
      documents, folders, activities, vaultNotifications,
      createFolder, deleteFolder, addDocument, deleteDocument, updateVerificationStatus, clearNotification, triggerAlert
    }}>
      {children}
    </DocumentVaultContext.Provider>
  );
}

export const useDocumentVault = () => useContext(DocumentVaultContext);