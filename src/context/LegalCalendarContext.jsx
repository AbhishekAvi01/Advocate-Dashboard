import React, { createContext, useContext, useState, useEffect } from 'react';

const LegalCalendarContext = createContext();

const initialEventsMock = [
  { id: 'ev-1', type: 'Hearing', title: 'WP(C) 4589/2025 - Final Arguments', date: '2026-06-19', time: '10:30 AM', caseNumber: 'WP(C) 4589/2025', clientName: 'Sandeep Malhotra', courtName: 'Bombay High Court', judgeName: 'Honble Mr. Justice G.S. Kulkarni', notes: 'Constitutional tax sub-clause 4A arguments briefing.', urgency: 'Urgent' },
  { id: 'ev-2', type: 'Meeting', title: 'Client Consultation - Malhotra Retainer', date: '2026-06-19', time: '04:00 PM', clientName: 'Sandeep Malhotra', location: 'Chamber 4B', notes: 'Pre-evidence review meeting.' },
  { id: 'ev-3', type: 'Deadline', title: 'Filing Due: Rejoinder Affidavit', date: '2026-06-22', time: '04:30 PM', caseNumber: 'CA 1102/2026', notes: 'Statutory limitation timeline threshold boundary.', urgency: 'High' },
  { id: 'ev-4', type: 'Hearing', title: 'SLP(C) 9951/2026 - Admission Stage', date: '2026-07-15', time: '11:00 AM', caseNumber: 'SLP(C) 9951/2026', clientName: 'Kiran Joshi', courtName: 'Supreme Court of India', judgeName: 'Honble Chief Justice of India', notes: 'Stay petition mentioning list.', urgency: 'Normal' }
];

const initialTasksMock = [
  { id: 'tsk-1', title: 'Draft Replication Plaint - CA 1102', completed: false, dueDate: '2026-06-20' },
  { id: 'tsk-2', title: 'Compile Certified Evidence Exhibits', completed: true, dueDate: '2026-06-18' },
  { id: 'tsk-3', title: 'Deposit Ad-Valorem Court Fee', completed: false, dueDate: '2026-06-19' }
];

export function LegalCalendarProvider({ children }) {
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('legal_erp_calendar_events');
    return saved ? JSON.parse(saved) : initialEventsMock;
  });

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('legal_erp_calendar_tasks');
    return saved ? JSON.parse(saved) : initialTasksMock;
  });

  const [availability, setAvailability] = useState('In Court'); // 'Available' | 'Busy' | 'In Court'
  const [notifications, setNotifications] = useState([]);

  useEffect(() => { localStorage.setItem('legal_erp_calendar_events', JSON.stringify(events)); }, [events]);
  useEffect(() => { localStorage.setItem('legal_erp_calendar_tasks', JSON.stringify(tasks)); }, [tasks]);

  const dispatchAlert = (text, type = 'Hearing') => {
    setNotifications(prev => [{ id: Date.now(), text, type, read: false }, ...prev]);
  };

  const scheduleEventNode = (newEvent) => {
    const prepped = { id: `ev-${Date.now()}`, ...newEvent };
    setEvents(prev => [prepped, ...prev]);
    dispatchAlert(`Successfully scheduled ${newEvent.type}: "${newEvent.title}"`, newEvent.type);
  };

  const purgeEventNode = (id) => {
    setEvents(prev => prev.filter(e => e.id !== id));
    dispatchAlert('Event tracking reference removed from roster records.', 'System');
  };

  const insertTaskNode = (title, dueDate) => {
    const prepped = { id: `tsk-${Date.now()}`, title, completed: false, dueDate };
    setTasks(prev => [prepped, ...prev]);
    dispatchAlert(`Task allocated to registry checklists: ${title}`, 'Task');
  };

  const toggleTaskState = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const purgeTaskNode = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const clearNotificationNode = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <LegalCalendarContext.Provider value={{
      events, tasks, availability, notifications,
      setAvailability, scheduleEventNode, purgeEventNode, insertTaskNode, toggleTaskState, purgeTaskNode, clearNotificationNode
    }}>
      {children}
    </LegalCalendarContext.Provider>
  );
}

export const useLegalCalendar = () => useContext(LegalCalendarContext);