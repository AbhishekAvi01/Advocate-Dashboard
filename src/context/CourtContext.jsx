// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CourtContext = createContext();

// // Mock Initial Production-Tier Schemas
// const initialCourts = [
//   { id: 'sc', name: 'Supreme Court of India', type: 'Supreme Court', jurisdiction: 'New Delhi', status: 'Active', activeJudges: 34, virtualLinks: 'https://sci.gov.in/virtual-courts' },
//   { id: 'bhc', name: 'Bombay High Court (Main Bench)', type: 'High Courts', jurisdiction: 'Mumbai, MH', status: 'Active', activeJudges: 65, virtualLinks: 'https://bombayhighcourt.nic.in' },
//   { id: 'dhc', name: 'Delhi District Courts (All Complexes)', type: 'District Courts', jurisdiction: 'Delhi NCR', status: 'Active', activeJudges: 120, virtualLinks: 'https://delhidistrictcourts.nic.in' },
//   { id: 'nclat', name: 'National Company Law Appellate Tribunal (NCLAT)', type: 'NCLAT', jurisdiction: 'New Delhi', status: 'Maintenance', activeJudges: 11, virtualLinks: 'https://nclat.nic.in' },
//   { id: 'nclt', name: 'National Company Law Tribunal', type: 'NCLT', jurisdiction: 'Mumbai Bench', status: 'Active', activeJudges: 16, virtualLinks: 'https://nclt.gov.in' },
//   { id: 'fcc', name: 'Family Courts Complex', type: 'Family Courts', jurisdiction: 'Bandra, Mumbai', status: 'Active', activeJudges: 8, virtualLinks: 'https://ecourts.gov.in' }
// ];

// const initialCases = [
//   { id: 'c1', caseNumber: 'WP(C) 4589/2025', cnr: 'MHHCO10047892012', clientName: 'Sandeep Malhotra', advocateName: 'Adv. Rohit Sharma', courtId: 'bhc', courtName: 'Bombay High Court', judge: 'Honble Mr. Justice G.S. Kulkarni', time: '10:30 AM', status: 'Today', type: 'Criminal Appeal', stage: 'Final Arguments' },
//   { id: 'c2', caseNumber: 'CA 1102/2026', cnr: 'DLCT010022342021', clientName: 'Malhotra Logistics Ltd.', advocateName: 'Adv. Rohit Sharma', courtId: 'dhc', courtName: 'Delhi District Court', judge: 'Honble Ms. Justice Rekha Palli', time: '11:15 AM', status: 'Upcoming', type: 'Commercial Suit', stage: 'Evidence' },
//   { id: 'c3', caseNumber: 'SLP(C) 9951/2026', cnr: 'SCIA030011022025', clientName: 'Kiran Joshi', advocateName: 'Adv. Rohit Sharma', courtId: 'sc', courtName: 'Supreme Court of India', judge: 'Honble Chief Justice of India', time: '02:00 PM', status: 'Pending Order', type: 'Special Leave Petition', stage: 'Admission Stage' }
// ];

// const initialNotifications = [
//   { id: 'n1', title: 'New Order Uploaded', desc: 'Certified order signed off in WP(C) 4589/2025 by Bombay High Court Bench.', read: false, time: '10 mins ago', date: '2026-06-19' },
//   { id: 'n2', title: 'Hearing Rescheduled', desc: 'Case CA 1102/2026 shifted from Court Room 4 to Court Room 12.', read: false, time: '1 hour ago', date: '2026-06-19' },
//   { id: 'n3', title: 'Filing Defect Raised', desc: 'Missing court fee index attachment in ledger token #REF8894.', read: true, time: '1 day ago', date: '2026-06-18' }
// ];

// const initialDocuments = [
//   { id: 'd1', name: 'Final_Injunction_Order_4589.pdf', type: 'Orders', caseNumber: 'WP(C) 4589/2025', date: '2026-06-15', size: '2.4 MB' },
//   { id: 'd2', name: 'Certified_Judgment_SC_9951.pdf', type: 'Judgments', caseNumber: 'SLP(C) 9951/2026', date: '2026-06-10', size: '4.8 MB' },
//   { id: 'd3', name: 'Cause_List_June_19_BHC.pdf', type: 'Cause Lists', caseNumber: 'Global Registry', date: '2026-06-19', size: '1.1 MB' }
// ];

// export function CourtProvider({ children }) {
//   const [courts] = useState(initialCourts);
//   const [cases, setCases] = useState(() => {
//     const saved = localStorage.getItem('adv_cases');
//     return saved ? JSON.parse(saved) : initialCases;
//   });
//   const [notifications, setNotifications] = useState(() => {
//     const saved = localStorage.getItem('adv_notifications');
//     return saved ? JSON.parse(saved) : initialNotifications;
//   });
//   const [documents, setDocuments] = useState(() => {
//     const saved = localStorage.getItem('adv_documents');
//     return saved ? JSON.parse(saved) : initialDocuments;
//   });

//   useEffect(() => {
//     localStorage.setItem('adv_cases', JSON.stringify(cases));
//   }, [cases]);

//   useEffect(() => {
//     localStorage.setItem('adv_notifications', JSON.stringify(notifications));
//   }, [notifications]);

//   useEffect(() => {
//     localStorage.setItem('adv_documents', JSON.stringify(documents));
//   }, [documents]);

//   // Action Methods
//   const markNotificationRead = (id) => {
//     setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
//   };

//   const deleteNotification = (id) => {
//     setNotifications(prev => prev.filter(n => n.id !== id));
//   };

//   const addCase = (newCase) => {
//     setCases(prev => [{ ...newCase, id: `case_${Date.now()}` }, ...prev]);
//   };

//   const uploadDocument = (newDoc) => {
//     setDocuments(prev => [{ ...newDoc, id: `doc_${Date.now()}`, date: new Date().toISOString().split('T')[0] }, ...prev]);
//   };

//   return (
//     <CourtContext.Provider value={{
//       courts, cases, notifications, documents,
//       markNotificationRead, deleteNotification, addCase, uploadDocument
//     }}>
//       {children}
//     </CourtContext.Provider>
//   );
// }

// export const useCourtSystem = () => {
//   const context = useContext(CourtContext);
//   if (!context) throw new Error('useCourtSystem must be within a CourtProvider');
//   return context;
// };




// import React, { createContext, useContext, useState, useEffect } from 'react';

// const CourtContext = createContext();

// // Full Mock Database simulating real-world Indian Courts Grid Architecture
// const initialMasterCauseList = [
//   { id: 'item-2026-c1', itemNo: 1, caseDetails: 'PIL 4892/2024 - Rohit Sharma vs. State of Maharashtra', cnr: 'MHHCO10047892012', stage: 'Final Arguments', advocate: 'Self / Abhishek Kumar', courtType: 'High Court', courtName: 'Bombay High Court', room: 'Court Room 12', judge: 'Honble Mr. Justice Devendra K.', status: 'Active' },
//   { id: 'item-2026-c2', itemNo: 5, caseDetails: 'COMAS 2234/2021 - Malhotra Logistics vs. Union of India', cnr: 'DLCT010022342021', stage: 'Evidence Tracking', advocate: 'Adv. Sandeep Malhotra', courtType: 'District Court', courtName: 'Delhi District Court', room: 'Chamber 402', judge: 'Ms. Shalini Saxena (ADJ)', status: 'Active' },
//   { id: 'item-2026-c3', itemNo: 3, caseDetails: 'SLP(C) 1102/2025 - S.K. Bansal vs. National Green Tribunal', cnr: 'SCIA030011022025', stage: 'Admission Stage', advocate: 'Self / Abhishek Kumar', courtType: 'Supreme Court', courtName: 'Supreme Court of India', room: 'Chief Justice Court (Bench 1)', judge: 'Honble The Chief Justice', status: 'Passed Over' },
//   { id: 'item-2026-c4', itemNo: 14, caseDetails: 'WP 9951/2023 - Adani Power Ltd. vs. MERC Tribunal', cnr: 'MHHCO10099512023', stage: 'Interim Order Review', advocate: 'Adv. Kiran Joshi', courtType: 'High Court', courtName: 'Bombay High Court', room: 'Court Room 19', judge: 'Honble Mr. Justice G.S. Patel', status: 'Adjourned' },
//   { id: 'item-2026-c5', itemNo: 2, caseDetails: 'CA 7104/2025 - Devendra Kumar vs. Commercial Tax Officer', cnr: 'KACO020055122025', stage: 'Fresh Admission', advocate: 'Self / Abhishek Kumar', courtType: 'District Court', courtName: 'Bengaluru Family Court', room: 'Court Room 3', judge: 'Shri R. Raghavan', status: 'Active' }
// ];

// export function CourtProvider({ children }) {
//   const [causeList, setCauseList] = useState(() => {
//     const saved = localStorage.getItem('court_cause_list_prod');
//     return saved ? JSON.parse(saved) : initialMasterCauseList;
//   });

//   const [selectedCourtType, setSelectedCourtType] = useState('All'); 
//   const [activeDate, setActiveDate] = useState('2026-06-19'); // Synced with platform calendar timeline node
//   const [searchFilter, setSearchFilter] = useState('');
//   const [liveCourtLogs, setLiveCourtLogs] = useState([]);

//   useEffect(() => {
//     localStorage.setItem('court_cause_list_prod', JSON.stringify(causeList));
//   }, [causeList]);

//   const updateCaseStatus = (id, newStatus) => {
//     setCauseList(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c));
//     const targetCase = causeList.find(c => c.id === id);
//     if (targetCase) {
//       setLiveCourtLogs(prev => [
//         { id: Date.now(), text: `Case Reference ${targetCase.cnr} status mutated to ${newStatus}.`, timestamp: 'Just Now' },
//         ...prev
//       ]);
//     }
//   };

//   const addManualCauseItem = (newItem) => {
//     const formatted = {
//       id: `item-2026-gen-${Math.floor(100 + Math.random() * 899)}`,
//       itemNo: parseInt(newItem.itemNo) || 1,
//       caseDetails: newItem.caseDetails,
//       cnr: newItem.cnr || 'GEN-CNR-' + Math.floor(10000 + Math.random() * 90000),
//       stage: newItem.stage || 'Mentioning',
//       advocate: newItem.advocate || 'Self',
//       courtType: newItem.courtType,
//       courtName: newItem.courtName,
//       room: newItem.room || 'Court Room 1',
//       judge: newItem.judge || 'Honble Bench Pool',
//       status: 'Active'
//     };
//     setCauseList(prev => [formatted, ...prev]);
//   };

//   return (
//     <CourtContext.Provider value={{
//       causeList, selectedCourtType, setSelectedCourtType,
//       activeDate, setActiveDate, searchFilter, setSearchFilter,
//       liveCourtLogs, updateCaseStatus, addManualCauseItem
//     }}>
//       {children}
//     </CourtContext.Provider>
//   );
// }

// export const useCourtSystem = () => useContext(CourtContext);



import React, { createContext, useContext, useState, useEffect } from 'react';

const CourtContext = createContext();

// --- Production Mock Datasets & Schemas ---
const initialDirectoryCourts = [
  { id: 'sc', name: 'Supreme Court of India', type: 'Supreme Court', jurisdiction: 'New Delhi', status: 'Active', activeJudges: 34, link: 'https://sci.gov.in' },
  { id: 'bhc', name: 'Bombay High Court (Main Bench)', type: 'High Courts', jurisdiction: 'Mumbai, MH', status: 'Active', activeJudges: 65, link: 'https://bombayhighcourt.nic.in' },
  { id: 'dhc', name: 'Delhi District Courts Complex', type: 'District Courts', jurisdiction: 'Delhi NCR', status: 'Active', activeJudges: 142, link: 'https://delhidistrictcourts.nic.in' },
  { id: 'nclt', name: 'National Company Law Tribunal', type: 'NCLT', jurisdiction: 'Bench-3 Mumbai', status: 'Active', activeJudges: 14, link: 'https://nclt.gov.in' },
  { id: 'nclat', name: 'National Company Law Appellate Tribunal', type: 'NCLAT', jurisdiction: 'New Delhi', status: 'Maintenance', activeJudges: 9, link: 'https://nclat.nic.in' },
  { id: 'cc-1', name: 'National Consumer Disputes Redressal Commission', type: 'Consumer Courts', jurisdiction: 'New Delhi', status: 'Active', activeJudges: 12, link: 'http://ncdrc.nic.in' },
  { id: 'fc-1', name: 'Family Courts Complex Maharashtra', type: 'Family Courts', jurisdiction: 'Bandra, Mumbai', status: 'Active', activeJudges: 8, link: 'https://ecourts.gov.in' }
];

const initialCaseRoster = [
  { id: 'lit-1', caseNumber: 'WP(C) 4589/2025', cnr: 'MHHCO10047892012', clientName: 'Sandeep Malhotra', advocateName: 'Adv. Rohit Sharma', courtName: 'Bombay High Court', judge: 'Honble Mr. Justice G.S. Kulkarni', time: '10:30 AM', date: '2026-06-19', status: 'Today', type: 'Criminal Appeal', stage: 'Final Arguments', notes: 'Civil injunction matter final arguments.' },
  { id: 'lit-2', caseNumber: 'CA 1102/2026', cnr: 'DLCT010022342021', clientName: 'Malhotra Logistics Ltd.', advocateName: 'Adv. Rohit Sharma', courtName: 'Delhi District Court', judge: 'Honble Ms. Justice Rekha Palli', time: '11:15 AM', date: '2026-06-19', status: 'Today', type: 'Commercial Suit', stage: 'Cross Examination', notes: 'Submission of localized warehouse transit bills.' },
  { id: 'lit-3', caseNumber: 'SLP(C) 9951/2026', cnr: 'SCIA030011022025', clientName: 'Kiran Joshi', advocateName: 'Adv. Amit Shah', courtName: 'Supreme Court of India', judge: 'Honble Chief Justice of India', time: '02:00 PM', date: '2026-06-22', status: 'Upcoming', type: 'Special Leave Petition', stage: 'Admission Stage', notes: 'Interim stay petition on green tribunal directives.' },
  { id: 'lit-4', caseNumber: 'CRL(A) 203/2024', cnr: 'MHHCO10055112024', clientName: 'Devendra Kumar', advocateName: 'Adv. Rohit Sharma', courtName: 'Bombay High Court', judge: 'Honble Justice Nitin Sambre', time: '12:00 PM', date: '2026-06-18', status: 'Pending Order', type: 'Anticipatory Bail', stage: 'Order Reserved', notes: 'Order parameters reserved.' }
];

const initialAlerts = [
  { id: 'al-1', title: 'New Order Uploaded', message: 'Certified interim stay order signed off in case brief WP(C) 4589/2025.', type: 'order', timestamp: '10 mins ago', read: false },
  { id: 'al-2', title: 'Hearing Rescheduled', message: 'Case CA 1102/2026 shifted to post-lunch assembly session (Court Room 12).', type: 'hearing', timestamp: '1 hour ago', read: false },
  { id: 'al-3', title: 'Filing Defect Raised', message: 'Defect index flags missing stamp fee parameters on proxy ledger token #7789.', type: 'defect', timestamp: '1 day ago', read: true },
  { id: 'al-4', title: 'Cause List Published', message: 'Daily cause board list published by Bombay High Court registry for June 19, 2026.', type: 'causelist', timestamp: '2 days ago', read: true }
];

const initialVaultDocs = [
  { id: 'V-DOC-001', name: 'Interim_Injunction_Order_BHC_4589.pdf', type: 'Orders', caseNumber: 'WP(C) 4589/2025', uploadDate: '2026-06-15', size: '2.4 MB' },
  { id: 'V-DOC-002', name: 'Certified_Judgment_SC_SLP_9951.pdf', type: 'Judgments', caseNumber: 'SLP(C) 9951/2026', uploadDate: '2026-06-10', size: '4.8 MB' },
  { id: 'V-DOC-003', name: 'Daily_Cause_List_June_19_Bombay.pdf', type: 'Cause Lists', caseNumber: 'Global Registry', uploadDate: '2026-06-19', size: '1.2 MB' },
  { id: 'V-DOC-004', name: 'Filing_Receipt_Chamber_Fee_1102.pdf', type: 'Filing Receipts', caseNumber: 'CA 1102/2026', uploadDate: '2026-06-17', size: '840 KB' }
];

export function CourtProvider({ children }) {
  const [courts] = useState(initialDirectoryCourts);
  
  // Persistent State Sync via localStorage
  const [cases, setCases] = useState(() => {
    const data = localStorage.getItem('court_cases_v2');
    return data ? JSON.parse(data) : initialCaseRoster;
  });

  const [alerts, setAlerts] = useState(() => {
    const data = localStorage.getItem('court_alerts_v2');
    return data ? JSON.parse(data) : initialAlerts;
  });

  const [documents, setDocuments] = useState(() => {
    const data = localStorage.getItem('court_docs_v2');
    return data ? JSON.parse(data) : initialVaultDocs;
  });

  useEffect(() => {
    localStorage.setItem('court_cases_v2', JSON.stringify(cases));
  }, [cases]);

  useEffect(() => {
    localStorage.setItem('court_alerts_v2', JSON.stringify(alerts));
  }, [alerts]);

  useEffect(() => {
    localStorage.setItem('court_docs_v2', JSON.stringify(documents));
  }, [documents]);

  // --- Core State Mutation Actions ---
  const markAlertRead = (id) => {
    setAlerts(prev => prev.map(item => item.id === id ? { ...item, read: true } : item));
  };

  const purgeAlertNode = (id) => {
    setAlerts(prev => prev.filter(item => item.id !== id));
  };

  const registerNewCaseDocket = (form) => {
    const preparedNode = {
      ...form,
      id: `lit_gen_${Date.now()}`,
      cnr: form.cnr || 'MHHCO1' + Math.floor(100000 + Math.random() * 899999)
    };
    setCases(prev => [preparedNode, ...prev]);
    // Inject automated upload trail success notification
    setAlerts(prev => [{
      id: `al_${Date.now()}`,
      title: 'Upload Successful',
      message: `New case brief ${form.caseNumber} registered into active roster indices.`,
      type: 'hearing',
      timestamp: 'Just Now',
      read: false
    }, ...prev]);
  };

  const commitDocUpload = (fileObj) => {
    const preppedDoc = {
      id: `V-DOC-${Math.floor(100 + Math.random() * 899)}`,
      name: fileObj.name,
      type: fileObj.type || 'Orders',
      caseNumber: fileObj.caseNumber || 'Global Registry',
      uploadDate: new Date().toISOString().split('T')[0],
      size: fileObj.size || '1.5 MB'
    };
    setDocuments(prev => [preppedDoc, ...prev]);
  };

  const purgeDocumentNode = (id) => {
    setDocuments(prev => prev.filter(d => d.id !== id));
  };

  return (
    <CourtContext.Provider value={{
      courts, cases, alerts, documents,
      markAlertRead, purgeAlertNode, registerNewCaseDocket, commitDocUpload, purgeDocumentNode
    }}>
      {children}
    </CourtContext.Provider>
  );
}

export const useCourtModuleEngine = () => {
  const context = useContext(CourtContext);
  if (!context) throw new Error('useCourtModuleEngine must be consumed within a CourtProvider boundary.');
  return context;
};