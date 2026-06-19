import React, { createContext, useContext, useState, useEffect } from 'react';

const CaseManagementContext = createContext();


const initialCasesMock = [
  {
    id: 'CASE-2026-001',
    caseNumber: 'WP(C) 4589/2025',
    cnr: 'MHHCO10047892012',
    caseTitle: 'Rohit Sharma vs. State of Maharashtra',
    clientName: 'Sandeep Malhotra',
    clientPhone: '+91 98765 43210',
    clientEmail: 'sandeep@malhotralogistics.com',
    opponentName: 'Deputy Commissioner of Taxes',
    courtName: 'Bombay High Court',
    judgeName: 'Honble Mr. Justice G.S. Kulkarni',
    filingDate: '2025-08-15',
    nextHearing: '2026-06-19',
    caseType: 'Criminal Appeal',
    status: 'Active',
    priority: 'High',
    description: 'Constitutional writ challenge addressing unlawful summary commercial tax attachment parameters.',
    timeline: [
      { id: 't1', title: 'Case Filed', date: '2025-08-15', desc: 'Writ brief entered into registry blocks.' },
      { id: 't2', title: 'Notice Issued', date: '2025-09-01', desc: 'Show cause directives dispatched to tax nodes.' },
      { id: 't3', title: 'Order Passed', date: '2026-01-10', desc: 'Interim stay granted on revenue actions.' }
    ],
    documents: [
      { id: 'd1', name: 'Writ_Petition_Final_Signed.pdf', type: 'Petition', date: '2025-08-15', size: '4.2 MB' },
      { id: 'd2', name: 'Stay_Order_Interim_Certified.pdf', type: 'Court Orders', date: '2026-01-11', size: '1.8 MB' }
    ],
    notes: [
      { id: 'n1', text: 'Senior Counsel briefed regarding commercial tax sub-clause 4A limitations.', pinned: true }
    ],
    hearings: [
      { id: 'h1', date: '2025-09-01', hall: 'Court Room 12', judge: 'Honble Justice Pool', remarks: 'Notice issued returnable in 4 weeks.', outcome: 'Adjourned' },
      { id: 'h2', date: '2026-01-10', hall: 'Court Room 12', judge: 'Honble Justice Pool', remarks: 'Interim protective arguments heard.', outcome: 'Stay Granted' }
    ]
  },
  {
    id: 'CASE-2026-002',
    caseNumber: 'CA 1102/2026',
    cnr: 'DLCT010022342021',
    caseTitle: 'Malhotra Logistics vs. Union of India',
    clientName: 'Sandeep Malhotra',
    clientPhone: '+91 98765 43210',
    clientEmail: 'sandeep@malhotralogistics.com',
    opponentName: 'Ministry of Surface Transport',
    courtName: 'Delhi District Court',
    judgeName: 'Honble Ms. Justice Rekha Palli',
    filingDate: '2021-11-04',
    nextHearing: '2026-06-22',
    caseType: 'Commercial Suit',
    status: 'Pending',
    priority: 'Medium',
    description: 'Contract breach claims tracking liquidated losses allocation parameter schemas.',
    timeline: [
      { id: 't1', title: 'Suit Filed', date: '2021-11-04', desc: 'Plaint entered at original jurisdiction desk.' }
    ],
    documents: [
      { id: 'd1', name: 'Commercial_Agreement_Loss_Index.pdf', type: 'Evidence', date: '2021-11-10', size: '6.5 MB' }
    ],
    notes: [],
    hearings: []
  },
  {
    id: 'CASE-2026-003',
    caseNumber: 'SLP(C) 9951/2026',
    cnr: 'SCIA030011022025',
    caseTitle: 'S.K. Bansal vs. National Green Tribunal',
    clientName: 'Kiran Joshi',
    clientPhone: '+91 99887 76655',
    clientEmail: 'k.joshi@joshicorp.in',
    opponentName: 'State Pollution Control Board',
    courtName: 'Supreme Court of India',
    judgeName: 'Honble Chief Justice of India',
    filingDate: '2025-12-01',
    nextHearing: '2026-07-15',
    caseType: 'Special Leave Petition',
    status: 'Under Appeal',
    priority: 'High',
    description: 'Special leave appeal routing parameters against structural remediation fines.',
    timeline: [],
    documents: [],
    notes: [],
    hearings: []
  }
];

const initialDeadlinesMock = [
  { id: 'dl-1', title: 'Writ Rejoinder Filing', date: '2026-06-25', caseId: 'CASE-2026-001', type: 'Filing Deadline', urgent: true },
  { id: 'dl-2', title: 'NCLAT Statutory Limitation Appeal', date: '2026-07-04', caseId: 'CASE-2026-003', type: 'Appeal Deadline', urgent: false }
];

const initialAlertsMock = [
  { id: 'al-1', text: 'Writ Petition Listed for Hearing Tomorrow before Bench 3.', date: '2026-06-18', read: false },
  { id: 'al-2', title: 'Certified Registry Notice Received', text: 'Filing defect flagged on Malhotra replication index entry block.', date: '2026-06-15', read: true }
];

export function CaseManagementProvider({ children }) {
  const [cases, setCases] = useState(() => {
    const data = localStorage.getItem('legal_erp_cases');
    return data ? JSON.parse(data) : initialCasesMock;
  });

  const [deadlines, setDeadlines] = useState(() => {
    const data = localStorage.getItem('legal_erp_deadlines');
    return data ? JSON.parse(data) : initialDeadlinesMock;
  });

  const [notifications, setNotifications] = useState(() => {
    const data = localStorage.getItem('legal_erp_alerts');
    return data ? JSON.parse(data) : initialAlertsMock;
  });

  useEffect(() => { localStorage.setItem('legal_erp_cases', JSON.stringify(cases)); }, [cases]);
  useEffect(() => { localStorage.setItem('legal_erp_deadlines', JSON.stringify(deadlines)); }, [deadlines]);
  useEffect(() => { localStorage.setItem('legal_erp_alerts', JSON.stringify(notifications)); }, [notifications]);

  
  const insertCaseRecord = (form) => {
    const prepped = {
      ...form,
      id: `CASE-2026-${Math.floor(100 + Math.random() * 899)}`,
      timeline: [{ id: 't_init', title: 'Case Formally Filed', date: form.filingDate, desc: 'Initial registry record generated.' }],
      documents: [],
      notes: [],
      hearings: form.hearingDate ? [{ id: 'h_init', date: form.hearingDate, hall: 'TBD', judge: form.judgeName || 'Honble Bench', remarks: 'First listing session scheduled.', outcome: 'Awaiting' }] : []
    };
    setCases(prev => [prepped, ...prev]);
    setNotifications(prev => [{ id: Date.now(), text: `New Case record ${form.caseNumber} inserted dynamically.`, date: '2026-06-19', read: false }, ...prev]);
  };

  const modifyCaseRecord = (id, updatedFields) => {
    setCases(prev => prev.map(c => c.id === id ? { ...c, ...updatedFields } : c));
  };

  const purgeCaseRecord = (id) => {
    setCases(prev => prev.filter(c => c.id !== id));
  };

  
  const appendCaseEvent = (caseId, item, arrayKey) => {
    setCases(prev => prev.map(c => {
      if (c.id === caseId) {
        const targetList = c[arrayKey] || [];
        return { ...c, [arrayKey]: [{ id: `item_${Date.now()}`, ...item }, ...targetList] };
      }
      return c;
    }));
  };

  const removeCaseSubItem = (caseId, itemId, arrayKey) => {
    setCases(prev => prev.map(c => {
      if (c.id === caseId) {
        return { ...c, [arrayKey]: (c[arrayKey] || []).filter(item => item.id !== itemId) };
      }
      return c;
    }));
  };

  const clearAlertNode = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <CaseManagementContext.Provider value={{
      cases, deadlines, notifications,
      insertCaseRecord, modifyCaseRecord, purgeCaseRecord, appendCaseEvent, removeCaseSubItem, clearAlertNode
    }}>
      {children}
    </CaseManagementContext.Provider>
  );
}

export const useCaseEngine = () => {
  const context = useContext(CaseManagementContext);
  if (!context) throw new Error('useCaseEngine requires consumption inside a CaseManagementProvider envelope node.');
  return context;
};