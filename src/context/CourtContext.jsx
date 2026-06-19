import React, { createContext, useContext, useState, useEffect } from 'react';

const CourtContext = createContext();


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