import React, { useState } from 'react';
import { useLegalCalendar } from '../context/LegalCalendarContext';
import { 
  CalendarDays, Gavel, Users, Clock, AlertTriangle, Plus, X, Search, Filter, 
  ChevronLeft, ChevronRight, CheckSquare, Square, Trash2, Download, Bell, Activity, FileText, CheckCircle2
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function LegalCalendarPage() {
  const {
    events, tasks, availability, notifications,
    setAvailability, scheduleEventNode, purgeEventNode, insertTaskNode, toggleTaskState, purgeTaskNode, clearNotificationNode
  } = useLegalCalendar();


  const [calendarViewMode, setCalendarViewMode] = useState('Month'); 
  const [selectedDayNum, setSelectedDayNum] = useState(19); 
  const [activeModal, setActiveModal] = useState(null); 
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUrgencyFilter, setSelectedUrgencyFilter] = useState('All');

  
  const [eventForm, setEventForm] = useState({ 
    type: 'Hearing', 
    title: '', 
    date: '2026-06-19', 
    time: '10:00 AM', 
    caseNumber: '', 
    clientName: '', 
    courtName: '', 
    judgeName: '', 
    notes: '', 
    urgency: 'Normal' 
  });
  
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('2026-06-19');

 
  const countTodayHearings = events.filter(e => e.type === 'Hearing' && e.date === '2026-06-19').length;
  const countTotalUpcoming = events.filter(e => new Date(e.date) >= new Date('2026-06-19')).length;
  const countPendingTasks = tasks.filter(t => !t.completed).length;
  const countDeadlines = events.filter(e => e.type === 'Deadline').length;

  
  const filteredTimelineEvents = events.filter(e => {
    const matchesSearch = e.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          (e.caseNumber && e.caseNumber.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (e.clientName && e.clientName.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          (e.courtName && e.courtName.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesUrgency = selectedUrgencyFilter === 'All' || e.urgency === selectedUrgencyFilter;
    return matchesSearch && matchesUrgency;
  });


  const triggerEventSubmission = (e) => {
    e.preventDefault();
    if (!eventForm.title.trim()) { alert("Validation Defect: Title text field cannot be empty."); return; }
    scheduleEventNode(eventForm);
    setActiveModal(null);
    setEventForm({ type: 'Hearing', title: '', date: '2026-06-19', time: '10:00 AM', caseNumber: '', clientName: '', courtName: '', judgeName: '', notes: '', urgency: 'Normal' });
  };

  const triggerTaskFormSubmit = (e) => {
    e.preventDefault();
    if (!taskTitle.trim()) return;
    insertTaskNode(taskTitle, taskDueDate);
    setTaskTitle('');
    setActiveModal(null);
  };

  const handleProgrammaticPdfExport = (reportType) => {
    try {
    
      const mockPdfContent = `%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R >>\nendobj\n4 0 obj\n<< /Length 180 >>\nstream\nBT\n/F1 14 Tf\n72 760 Td\n(NATIONAL ADVOCATE DIGITAL MANAGEMENT SYSTEM) Tj\n/F1 11 Tf\n72 730 Td\n(Report Segment Ledger Type: ${reportType.toUpperCase()}) Tj\n72 710 Td\n(System Synchronization Timestamp: June 19, 2026) Tj\n72 690 Td\n(Active Log Volume: ${events.length} Synchronized Telemetry Roster Items) Tj\nET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f\n0000000009 00000 n\n0000000056 00000 n\n0000000111 00000 n\n0000000212 00000 n\ntrailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n0000000445\n%%EOF`;

      const byteArray = new Uint8Array(mockPdfContent.length);
      for (let i = 0; i < mockPdfContent.length; i++) {
        byteArray[i] = mockPdfContent.charCodeAt(i);
      }

      const activeFileBlob = new Blob([byteArray], { type: 'application/pdf' });
      const downloadBlobStringUrl = URL.createObjectURL(activeFileBlob);

      const dynamicDownloadAnchor = document.createElement('a');
      dynamicDownloadAnchor.href = downloadBlobStringUrl;
      dynamicDownloadAnchor.download = `${reportType.toLowerCase()}_export_2026.pdf`;
      
      document.body.appendChild(dynamicDownloadAnchor);
      dynamicDownloadAnchor.click();
      
    
      document.body.removeChild(dynamicDownloadAnchor);
      URL.revokeObjectURL(downloadBlobStringUrl);
    } catch (err) {
      console.error("FileSystem Stream Failure Exception Code Log:", err);
    }
  };

  const analyticsBarChartMock = [
    { name: 'Hearings', count: events.filter(e => e.type === 'Hearing').length },
    { name: 'Meetings', count: events.filter(e => e.type === 'Meeting').length },
    { name: 'Deadlines', count: countDeadlines },
    { name: 'Tasks Left', count: countPendingTasks }
  ];

  return (
    <div className="space-y-6 w-full text-slate-800 antialiased font-sans select-none text-left">
      
    
      <div className="fixed bottom-5 right-5 z-50 space-y-2 max-w-sm w-full">
        {notifications.map(toast => (
          <div key={toast.id} className="bg-slate-900 text-white p-3.5 rounded-xl shadow-lg border border-slate-800 flex items-start justify-between gap-3 animate-in slide-in-from-bottom-5">
            <div className="text-xs">
              <span className="text-blue-400 font-black block text-[9px] uppercase tracking-wider">{toast.type} REGISTER LOCK</span>
              <p className="font-semibold text-slate-200 mt-0.5">{toast.text}</p>
            </div>
            <button onClick={() => clearNotificationNode(toast.id)} className="text-slate-400 hover:text-white shrink-0"><X size={14} /></button>
          </div>
        ))}
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">
        {[
          { label: 'Listed Hearings Today', value: countTodayHearings, css: 'bg-amber-50/50 border-amber-200 text-amber-800' },
          { label: 'Total Scheduled Briefs', value: countTotalUpcoming, css: 'bg-white border-slate-200 text-slate-900' },
          { label: 'Pending Task Checklist', value: countPendingTasks, css: 'bg-blue-50/40 border-blue-200 text-blue-800' },
          { label: 'Statutory Deadlines Flagged', value: countDeadlines, css: countDeadlines > 0 ? 'bg-red-50 border-red-200 text-red-700 animate-pulse' : 'bg-white border-slate-200' }
        ].map((card, i) => (
          <div key={i} className={`p-4 border rounded-xl flex flex-col justify-between shadow-2xs ${card.css}`}>
            <span className="text-[10px] font-black uppercase tracking-wider opacity-75">{card.label}</span>
            <span className="text-2xl font-black font-mono tracking-tight mt-1">{card.value}</span>
          </div>
        ))}
      </div>

    
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs flex flex-col xl:flex-row items-center justify-between gap-4 w-full">
        <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
          <div className="relative max-w-xs w-full">
            <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search docket, client, bench parameters..." 
              value={searchQuery} 
              onChange={e => setSearchQuery(e.target.value)} 
              className="pl-8 pr-4 py-1.5 w-full border text-xs bg-slate-50 border-slate-200 rounded-lg font-semibold focus:outline-hidden focus:border-blue-500 text-slate-800" 
            />
          </div>
          
          <div className="flex bg-slate-100 p-1 rounded-lg border">
            {['Month', 'Week', 'Day'].map(mode => (
              <button 
                key={mode} 
                onClick={() => setCalendarViewMode(mode)} 
                className={`px-3 py-1 rounded-md text-xs font-black uppercase tracking-tight transition-all ${calendarViewMode === mode ? 'bg-white text-blue-600 shadow-2xs font-extrabold' : 'text-slate-500 hover:text-slate-800'}`}
              >
                {mode}
              </button>
            ))}
          </div>

          <select 
            value={availability} 
            onChange={e => setAvailability(e.target.value)} 
            className="p-1.5 bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 rounded-lg focus:outline-hidden"
          >
            <option value="Available">🟢 Status: Available</option>
            <option value="Busy">🔴 Status: Busy</option>
            <option value="In Court">⚖️ Status: In Court</option>
          </select>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full xl:w-auto justify-end">
          <button onClick={() => setActiveModal({ type: 'schedule_event' })} className="bg-blue-600 hover:bg-blue-700 text-white font-black text-xs px-3 py-1.5 rounded-lg uppercase shadow-xs flex items-center gap-1 transition-colors"><Plus size={13} /> Schedule Agenda</button>
          <button onClick={() => setActiveModal({ type: 'add_task' })} className="bg-slate-900 hover:bg-slate-800 text-white font-black text-xs px-3 py-1.5 rounded-lg uppercase flex items-center gap-1 transition-colors"><Plus size={13} /> Inject Task</button>
          <button onClick={() => handleProgrammaticPdfExport('Chamber_Diary')} className="bg-white border text-slate-600 font-bold text-xs p-1.5 rounded-lg flex items-center justify-center shadow-2xs hover:bg-slate-50" title="Export Statement Sheet"><Download size={13} /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
        
        
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
          <div className="flex justify-between items-center border-b pb-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5"><CalendarDays size={14} className="text-blue-600" /> Dynamic Litigation Cause Board Matrix Grid</h4>
            <span className="text-[11px] font-mono font-bold text-slate-400">June 2026 Grid Layout</span>
          </div>

          {calendarViewMode === 'Month' && (
            <>
              <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-black uppercase tracking-wider text-slate-400 border-b border-slate-50 pb-1.5">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
              </div>
              <div className="grid grid-cols-7 gap-1.5">
                {Array.from({ length: 30 }).map((_, i) => {
                  const dayNum = i + 1;
                  const targetDayEvents = filteredTimelineEvents.filter(e => parseInt(e.date.split('-')[2]) === dayNum);
                  
                  return (
                    <div 
                      key={i} 
                      onClick={() => setSelectedDayNum(dayNum)}
                      className={`min-h-[64px] p-2 border rounded-xl flex flex-col justify-between cursor-pointer transition-all text-left ${
                        selectedDayNum === dayNum ? 'ring-2 ring-blue-600 bg-blue-50/20 border-transparent font-black' : 'border-slate-100 bg-slate-50/20 hover:bg-slate-50'
                      }`}
                    >
                      <span className="font-mono font-black text-[10px] text-slate-400">{dayNum}</span>
                      <div className="space-y-0.5">
                        {targetDayEvents.slice(0, 2).map(ev => (
                          <span 
                            key={ev.id} 
                            className={`w-full text-[7px] font-black p-0.5 rounded-sm block truncate text-center uppercase tracking-tighter text-white ${
                              ev.type === 'Hearing' ? 'bg-blue-600' : ev.type === 'Meeting' ? 'bg-emerald-600' : 'bg-amber-500 text-slate-900'
                            }`}
                          >
                            {ev.type}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {calendarViewMode !== 'Month' && (
            <div className="p-16 text-center text-slate-400 font-semibold border-2 border-dashed rounded-xl text-xs">
              ERP Sub-sheet matrix initialized on workspace cluster. Focus target day cells context to stream ledger logs pipelines.
            </div>
          )}
        </div>

     
        <div className="space-y-5">
          
        
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
            <h4 className="text-xs font-black uppercase text-slate-900 border-b pb-2">Agendas Queue: June {selectedDayNum}, 2026</h4>
            <div className="space-y-2 max-h-[240px] overflow-y-auto pr-1">
              {filteredTimelineEvents.filter(e => parseInt(e.date.split('-')[2]) === selectedDayNum).length === 0 ? (
                <div className="p-8 text-center text-slate-400 font-medium italic text-xs">No active briefs allocated for this target timeline node.</div>
              ) : (
                filteredTimelineEvents.filter(e => parseInt(e.date.split('-')[2]) === selectedDayNum).map(ev => (
                  <div key={ev.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex flex-col gap-1 text-left hover:border-slate-300 transition-colors">
                    <div className="flex justify-between items-center gap-2">
                      <span className={`text-[8px] font-black text-white px-1.5 py-0.5 rounded-xs uppercase tracking-tight ${
                        ev.type === 'Hearing' ? 'bg-blue-600' : ev.type === 'Meeting' ? 'bg-emerald-600' : 'bg-amber-500 text-slate-900'
                      }`}>{ev.type}</span>
                      <span className="font-mono font-bold text-[10px] text-slate-400">{ev.time}</span>
                    </div>
                    <p className="text-xs font-black text-slate-900 mt-1 leading-snug">{ev.title}</p>
                    {ev.courtName && <p className="text-[10px] text-slate-500 font-bold font-mono uppercase tracking-tight">{ev.courtName} • {ev.judgeName}</p>}
                    {ev.notes && <p className="text-[11px] text-slate-400 italic font-medium mt-1">Note: {ev.notes}</p>}
                    <div className="flex justify-end gap-2 border-t pt-1.5 mt-2">
                      <button onClick={() => purgeEventNode(ev.id)} className="text-[10px] font-black text-red-500 hover:underline">Cancel</button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

       
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-3">
            <h4 className="text-xs font-black uppercase text-slate-900 border-b pb-2 flex items-center gap-1.5"><CheckSquare size={13} className="text-blue-600" /> Chamber Tasks Checklist Board</h4>
            <div className="space-y-1.5 max-h-[180px] overflow-y-auto pr-1">
              {tasks.length === 0 ? (
                <p className="p-4 text-center text-slate-400 italic text-xs">All core operational tasks resolved.</p>
              ) : (
                tasks.map(tsk => (
                  <div key={tsk.id} className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-100 flex items-center justify-between gap-3 text-xs font-semibold">
                    <div className="flex items-center gap-2 min-w-0 flex-1 cursor-pointer" onClick={() => toggleTaskState(tsk.id)}>
                      <span className="text-slate-400 shrink-0">{tsk.completed ? '✅' : '⬜'}</span>
                      <span className={`truncate text-left ${tsk.completed ? 'line-through text-slate-400 font-medium' : 'text-slate-800'}`}>{tsk.title}</span>
                    </div>
                    <button onClick={() => purgeTaskNode(tsk.id)} className="text-slate-300 hover:text-red-500 p-0.5 shrink-0 transition-colors">✕</button>
                  </div>
                ))
              )}
            </div>
          </div>

         
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs space-y-2">
            <span className="text-[9px] font-black tracking-wider uppercase text-slate-400 block text-left">Chamber Agenda Load Density</span>
            <div className="w-full h-24">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={analyticsBarChartMock} margin={{ top: 5, right: 5, left: -25, bottom: 5 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 8 }} />
                  <YAxis tick={{ fontSize: 8 }} />
                  <Tooltip />
                  <Bar dataKey="count" fill="#1e3a8a" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

      </div>

      
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl w-full max-w-md p-5 shadow-2xl animate-in zoom-in-95 duration-150 text-left">
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5"><Activity size={13} className="text-blue-600" /> Judiciary Agenda Task Node</h3>
              <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400 hover:text-slate-600 font-bold text-sm">✕</button>
            </div>

            <div className="text-xs font-semibold text-slate-600 max-h-[400px] overflow-y-auto pr-1">
              
              {activeModal.type === 'schedule_event' && (
                <form onSubmit={triggerEventSubmission} className="space-y-3 text-left">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Agenda Type</label>
                      <select className="w-full p-2 bg-slate-50 border rounded-lg font-bold text-slate-600" value={eventForm.type} onChange={e => setEventForm({ ...eventForm, type: e.target.value })}>
                        <option value="Hearing">Court Hearing</option>
                        <option value="Meeting">Client Meeting</option>
                        <option value="Deadline">Filing Deadline</option>
                      </select>
                    </div>
                    <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Time Block</label><input type="text" placeholder="e.g. 10:30 AM" required className="w-full p-2 bg-slate-50 border rounded-lg font-bold focus:outline-hidden" value={eventForm.time} onChange={e => setEventForm({ ...eventForm, time: e.target.value })} /></div>
                  </div>

                  <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Event Header Title</label><input type="text" placeholder="WP(C) 4589 - Arguments" required className="w-full p-2 bg-slate-50 border rounded-lg font-bold focus:outline-hidden" value={eventForm.title} onChange={e => setEventForm({ ...eventForm, title: e.target.value })} /></div>

                  <div className="grid grid-cols-2 gap-2">
                    <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Target Date</label><input type="date" className="w-full p-2 bg-slate-50 border rounded-lg font-mono font-bold focus:outline-hidden" value={eventForm.date} onChange={e => setEventForm({ ...eventForm, date: e.target.value })} /></div>
                    <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Client Name</label><input type="text" placeholder="Sandeep Malhotra" className="w-full p-2 bg-slate-50 border rounded-lg font-bold focus:outline-hidden" value={eventForm.clientName} onChange={e => setEventForm({ ...eventForm, clientName: e.target.value })} /></div>
                  </div>

                  {eventForm.type === 'Hearing' && (
                    <div className="grid grid-cols-2 gap-2">
                      <input type="text" placeholder="Court Forum (Bombay HC)" className="p-2 border rounded-lg bg-slate-50 font-bold focus:outline-hidden" value={eventForm.courtName} onChange={e => setEventForm({ ...eventForm, courtName: e.target.value })} />
                      <input type="text" placeholder="Presiding Judge Bench" className="p-2 border rounded-lg bg-slate-50 font-bold focus:outline-hidden" value={eventForm.judgeName} onChange={e => setEventForm({ ...eventForm, judgeName: e.target.value })} />
                    </div>
                  )}

                  <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Case Notes / Remarks Details</label><textarea placeholder="Type operational brief parameters..." rows="2" className="w-full p-2 border bg-slate-50 rounded-lg font-bold focus:outline-hidden" value={eventForm.notes} onChange={e => setEventForm({ ...eventForm, notes: e.target.value })} /></div>

                  <button type="submit" className="w-full bg-blue-600 text-white font-black py-2.5 rounded-lg text-xs uppercase tracking-wide shadow-xs mt-2 hover:bg-blue-700">Publish Roster Authorization</button>
                </form>
              )}

              {activeModal.type === 'add_task' && (
                <form onSubmit={triggerTaskFormSubmit} className="space-y-3 text-left">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Task Particulars</label>
                    <input type="text" placeholder="e.g. Draft Replication Plaint" required className="w-full p-2 border bg-slate-50 rounded-lg font-bold text-sm focus:outline-hidden" value={taskTitle} onChange={e => setTaskTitle(e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Due Threshold Date</label>
                    <input type="date" className="w-full p-2 border bg-slate-50 rounded-lg font-mono font-bold focus:outline-hidden" value={taskDueDate} onChange={e => setTaskDueDate(e.target.value)} />
                  </div>
                  <button type="submit" className="w-full bg-slate-900 text-amber-400 font-black py-2.5 rounded-lg uppercase tracking-wider text-xs mt-2 hover:bg-slate-800">Inject Task Item</button>
                </form>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}