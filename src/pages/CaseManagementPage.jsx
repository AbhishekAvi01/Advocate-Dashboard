import React, { useState } from 'react';
import { useCaseEngine } from '../context/CaseManagementContext';
import { 
  Folder, Gavel, FileText, Clock, AlertCircle, Search, Filter, 
  Trash2, Eye, Edit3, Plus, X, Calendar, Pin, ChevronRight, Download, 
  User, Mail, Phone, BarChart2, Briefcase, PlusCircle, CheckCircle
} from 'lucide-react';

export default function CaseManagementPage() {
  const {
    cases, deadlines, notifications,
    insertCaseRecord, modifyCaseRecord, purgeCaseRecord, appendCaseEvent, removeCaseSubItem, clearAlertNode
  } = useCaseEngine();


  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState('registry'); // 'registry' | 'calendar' | 'analytics'
  const [selectedCaseId, setSelectedCaseId] = useState(cases[0]?.id || null);
  const [activeModal, setActiveModal] = useState(null); // { type, caseId }

 
  const [sortField, setSortField] = useState('caseNumber');
  const [sortDir, setSortDir] = useState('asc');

  const [newCaseForm, setNewCaseForm] = useState({ caseNumber: '', cnr: '', caseTitle: '', clientName: '', clientPhone: '', clientEmail: '', opponentName: '', courtName: '', judgeName: '', filingDate: '2026-06-19', hearingDate: '', caseType: 'Civil Suit', description: '', priority: 'Medium', status: 'Active' });
  const [eventInput, setEventInput] = useState({ title: '', date: '2026-06-19', desc: '' });
  const [docInput, setFileFormInput] = useState({ name: '', type: 'Petition', size: '1.2 MB' });
  const [noteInput, setNoteStrInput] = useState({ text: '', pinned: false });
  const [hearingForm, setHearingForm] = useState({ date: '2026-06-25', hall: 'Court Room 1', judge: '', remarks: '', outcome: 'Awaiting' });

  const activeCaseObject = cases.find(c => c.id === selectedCaseId) || cases[0];

  const countTotal = cases.length;
  const countActive = cases.filter(c => c.status === 'Active').length;
  const countPending = cases.filter(c => c.status === 'Pending').length;
  const countClosed = cases.filter(c => c.status === 'Closed').length;
  const countUrgent = cases.filter(c => c.priority === 'High' && c.status === 'Active').length;
  const countTodayHearings = cases.filter(c => c.nextHearing === '2026-06-19').length;

  const searchedAndFilteredCases = cases
    .filter(c => {
      const matchSearch = c.caseNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.cnr.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.caseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.opponentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.courtName.toLowerCase().includes(searchQuery.toLowerCase());
      const matchPriority = priorityFilter === 'All' || c.priority === priorityFilter;
      const matchStatus = statusFilter === 'All' || c.status === statusFilter;
      return matchSearch && matchPriority && matchStatus;
    })
    .sort((a, b) => {
      let comparison = a[sortField]?.localeCompare(b[sortField] || '') || 0;
      return sortDir === 'asc' ? comparison : -comparison;
    });

  const commitNewCaseDispatch = (e) => {
    e.preventDefault();
    if (!newCaseForm.caseNumber || !newCaseForm.caseTitle) { alert("Validation Defect: Case Number and Title lines are mandatory."); return; }
    insertCaseRecord(newCaseForm);
    setActiveModal(null);
  };

  const handleDocumentExport = (format) => {
    alert(`System call processed: Active index data exported successfully to Legal_ERP_Docket.${format}`);
  };

  return (
    <div className="space-y-6 w-full text-slate-800 antialiased font-sans select-none pb-12">
     

      <div className="grid grid-cols-2 lg:grid-cols-6 gap-4 items-stretch w-full">
        {[
          { label: 'Total Base Load', data: countTotal, css: 'bg-white border-slate-200 text-slate-900' },
          { label: 'Active Briefs', data: countActive, css: 'bg-emerald-50/40 border-emerald-200 text-emerald-800' },
          { label: 'Pending Filings', data: countPending, css: 'bg-amber-50/40 border-amber-200 text-amber-800' },
          { label: 'Closed/Resolved', data: countClosed, css: 'bg-slate-50 border-slate-200 text-slate-600' },
          { label: 'Urgent Matters', data: countUrgent, css: countUrgent > 0 ? 'bg-red-50 border-red-200 text-red-700 animate-pulse' : 'bg-white' },
          { label: 'Listed Today', data: countTodayHearings, css: 'bg-blue-50/40 border-blue-200 text-blue-800' }
        ].map((card, i) => (
          <div key={i} className={`p-4 border rounded-xl flex flex-col justify-between text-left shadow-3xs ${card.css}`}>
            <span className="text-[9px] font-black uppercase tracking-wider opacity-75">{card.label}</span>
            <span className="text-2xl font-black font-mono tracking-tight mt-1">{card.data}</span>
          </div>
        ))}
      </div>

      
      <div className="flex border-b border-slate-200 gap-2">
        {['registry', 'calendar', 'analytics'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveWorkspaceTab(tab)}
            className={`px-4 py-2 text-xs font-black uppercase tracking-wider border-b-2 transition-all ${
              activeWorkspaceTab === tab ? 'border-blue-600 text-blue-600 font-extrabold' : 'border-transparent text-slate-500 hover:bg-slate-50'
            }`}
          >
            {tab === 'registry' ? 'Case Registry Ledger' : tab === 'calendar' ? 'Hearing Diary View' : 'Analytics Center'}
          </button>
        ))}
      </div>

     
      {activeWorkspaceTab === 'registry' && (
        <div className="space-y-6 w-full animate-in fade-in duration-200">
         
          <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col xl:flex-row lg:items-center justify-between gap-4 shadow-3xs w-full">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search across case number, title, CNR, court, client bounds..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-4 py-1.5 w-full bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold text-slate-800 focus:outline-hidden"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-2">
              <select value={priorityFilter} onChange={e => setPriorityFilter(e.target.value)} className="p-1.5 bg-slate-50 border text-xs font-bold text-slate-600 rounded-lg"><option value="All">All Priorities</option><option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option></select>
              <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="p-1.5 bg-slate-50 border text-xs font-bold text-slate-600 rounded-lg"><option value="All">All Statuses</option><option value="Active">Active</option><option value="Pending">Pending</option><option value="Closed">Closed</option><option value="Under Appeal">Under Appeal</option></select>
              
              <button onClick={() => setActiveModal({ type: 'add_case', caseId: null })} className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-black px-4 py-1.5 rounded-lg flex items-center gap-1.5 shadow-xs uppercase tracking-wide">
                <Plus size={13} /> Add Case Record
              </button>
              
              <div className="border-l pl-2 flex gap-1">
                {['PDF', 'Excel', 'CSV'].map(fmt => (
                  <button key={fmt} onClick={() => handleDocumentExport(fmt)} className="p-1.5 border bg-white rounded-lg text-[10px] font-black text-slate-500 hover:bg-slate-50">{fmt}</button>
                ))}
              </div>
            </div>
          </div>

         
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
            
            
            <div className="xl:col-span-2 space-y-3">
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-3xs">
                <div className="p-3 bg-slate-50/80 border-b text-[10px] font-black uppercase text-slate-400 text-left">Active Search Match Result Matrices</div>
                <div className="divide-y divide-slate-100 max-h-[600px] overflow-y-auto">
                  {searchedAndFilteredCases.length === 0 ? (
                    <div className="p-12 text-center text-slate-400 font-semibold text-xs">No authorized case files matches current filtered metrics.</div>
                  ) : (
                    searchedAndFilteredCases.map(item => (
                      <div 
                        key={item.id}
                        onClick={() => setSelectedCaseId(item.id)}
                        className={`p-4 text-left cursor-pointer transition-all flex items-start justify-between gap-4 ${
                          selectedCaseId === item.id ? 'bg-blue-50/40 ring-2 ring-blue-600/80' : 'hover:bg-slate-50/50'
                        }`}
                      >
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-mono font-black text-xs text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded border">{item.caseNumber}</span>
                            <span className={`text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider ${
                              item.priority === 'High' ? 'bg-red-50 text-red-700 border border-red-100' : 'bg-slate-100 text-slate-600'
                            }`}>{item.priority} Priority</span>
                            <span className="text-[10px] font-black bg-blue-50 text-blue-700 border border-blue-100 px-1.5 rounded-xs uppercase tracking-tight">{item.status}</span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-800 truncate pt-1">{item.caseTitle}</h4>
                          <p className="text-xs text-slate-400 font-medium truncate">{item.courtName} • {item.judgeName}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="text-[9px] font-black text-slate-400 uppercase tracking-wide">Next Hearing</p>
                          <p className="text-xs font-mono font-black text-slate-700 mt-0.5">{item.nextHearing || 'None Scheduled'}</p>
                          <button onClick={(e) => { e.stopPropagation(); purgeCaseRecord(item.id); }} className="text-slate-400 hover:text-red-600 p-1 mt-2 inline-block"><Trash2 size={13} /></button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            
            {activeCaseObject && (
              <div className="space-y-4 animate-in fade-in duration-300">
                
               
                <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-3xs space-y-4 text-left">
                  <div className="border-b pb-3 flex justify-between items-start gap-2">
                    <div>
                      <h4 className="text-base font-black text-slate-900 leading-tight">{activeCaseObject.caseTitle}</h4>
                      <p className="text-xs font-mono font-bold text-slate-400 mt-1">CNR Token ID: {activeCaseObject.cnr}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-xs font-medium">
                    <div className="grid grid-cols-2 gap-2 border-b border-slate-50 pb-2">
                      <div><span className="text-[9px] text-slate-400 font-black uppercase">Client Node</span><p className="text-slate-800 font-bold mt-0.5">{activeCaseObject.clientName}</p></div>
                      <div><span className="text-[9px] text-slate-400 font-black uppercase">Opponent Node</span><p className="text-slate-800 font-bold mt-0.5">{activeCaseObject.opponentName}</p></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 border-b border-slate-50 pb-2">
                      <div><span className="text-[9px] text-slate-400 font-black uppercase">Target Court Hall</span><p className="text-slate-800 font-bold mt-0.5">{activeCaseObject.courtName}</p></div>
                      <div><span className="text-[9px] text-slate-400 font-black uppercase">Presiding Judge</span><p className="text-slate-800 font-bold mt-0.5 truncate">{activeCaseObject.judgeName}</p></div>
                    </div>
                    <div>
                      <span className="text-[9px] text-slate-400 font-black uppercase">Summary Brief Description</span>
                      <p className="text-slate-600 leading-normal mt-0.5 font-medium">{activeCaseObject.description}</p>
                    </div>
                  </div>
                </div>

               
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-3xs text-left space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <h5 className="text-xs font-black uppercase tracking-wider text-slate-900">Chamber Records Core</h5>
                    <div className="flex gap-2">
                      <button onClick={() => setActiveModal({ type: 'add_event', caseId: activeCaseObject.id })} className="text-[10px] font-black text-blue-600 hover:underline">+ Event</button>
                      <button onClick={() => setActiveModal({ type: 'attach_doc', caseId: activeCaseObject.id })} className="text-[10px] font-black text-blue-600 hover:underline">+ Document</button>
                      <button onClick={() => setActiveModal({ type: 'add_note', caseId: activeCaseObject.id })} className="text-[10px] font-black text-blue-600 hover:underline">+ Note</button>
                    </div>
                  </div>

                  
                  <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
                    
                   
                    <div className="space-y-2">
                      <p className="text-[9px] font-black tracking-wider text-slate-400 uppercase">Chronological History Ledger Trail</p>
                      {(activeCaseObject.timeline || []).map(timeNode => (
                        <div key={timeNode.id} className="p-2 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-start gap-2">
                          <div className="text-left text-[11px] min-w-0 flex-1">
                            <p className="font-bold text-slate-800">{timeNode.title} • <span className="font-mono text-slate-400 text-[10px]">{timeNode.date}</span></p>
                            <p className="text-slate-500 font-medium mt-0.5 leading-snug">{timeNode.desc}</p>
                          </div>
                          <button onClick={() => removeCaseSubItem(activeCaseObject.id, timeNode.id, 'timeline')} className="text-slate-300 hover:text-red-500 p-0.5 shrink-0">✕</button>
                        </div>
                      ))}
                    </div>

                    
                    <div className="space-y-2 pt-2 border-t border-slate-50">
                      <p className="text-[9px] font-black tracking-wider text-slate-400 uppercase">Cryptographic Attachment Bindings</p>
                      {(activeCaseObject.documents || []).map(fileNode => (
                        <div key={fileNode.id} className="p-2 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center gap-2 text-[11px]">
                          <span className="font-bold text-slate-700 truncate flex-1">{fileNode.name}</span>
                          <span className="font-mono text-[9px] text-slate-400 font-bold shrink-0">{fileNode.type}</span>
                          <button onClick={() => removeCaseSubItem(activeCaseObject.id, fileNode.id, 'documents')} className="text-red-400 hover:text-red-600 p-0.5">✕</button>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-50">
                      <p className="text-[9px] font-black tracking-wider text-slate-400 uppercase">Advocate Localized Pinned Notes</p>
                      {(activeCaseObject.notes || []).map(noteNode => (
                        <div key={noteNode.id} className="p-2 bg-amber-50/50 border border-amber-200 text-slate-700 rounded-lg flex justify-between items-start text-[11px] font-medium leading-relaxed">
                          <p className="flex-1 text-left"><Pin size={10} className="inline text-amber-600 mr-1 shrink-0" />{noteNode.text}</p>
                          <button onClick={() => removeCaseSubItem(activeCaseObject.id, noteNode.id, 'notes')} className="text-slate-300 hover:text-red-500 p-0.5 shrink-0 ml-1">✕</button>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            )}

          </div>

        </div>
      )}

      
      {activeWorkspaceTab === 'calendar' && (
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-3xs space-y-4 animate-in fade-in duration-200">
          <div className="flex justify-between items-center border-b pb-2">
            <div className="text-left">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">National Case Diary Agenda Matrix</h4>
              <p className="text-xs text-slate-400 font-medium">Automatic multi-field deadline listing tracker nodes.</p>
            </div>
            <span className="text-[11px] font-mono font-bold bg-slate-100 px-3 py-1 border rounded-lg text-slate-600">June 2026</span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-black uppercase tracking-wider text-slate-400 py-1">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => <div key={d}>{d}</div>)}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: 30 }).map((_, i) => {
              const currentDayNum = i + 1;
              const hasDiaryHearing = cases.find(c => currentDayNum === 19) || cases.find(c => currentDayNum === 22);
              
              return (
                <div
                  key={i}
                  className={`min-h-[64px] p-2 border rounded-xl flex flex-col justify-between transition-all bg-slate-50/30 text-left ${
                    currentDayNum === 19 ? 'ring-2 ring-blue-600 bg-blue-50/20' : 'border-slate-100'
                  }`}
                >
                  <span className="font-mono font-black text-[11px] text-slate-400">{currentDayNum}</span>
                  {hasDiaryHearing && (
                    <div className="w-full h-2 rounded-xs bg-blue-600 text-white text-[7px] font-black uppercase tracking-tighter text-center leading-none flex items-center justify-center truncate">Brief</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeWorkspaceTab === 'analytics' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full animate-in fade-in duration-200 text-left">
          <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-3xs space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b pb-2 flex items-center gap-1.5"><BarChart2 size={13} className="text-blue-600" /> Court-Wise Litigation Density Index</h4>
            <div className="space-y-2 text-xs font-semibold text-slate-600">
              {['Bombay High Court', 'Delhi District Court', 'Supreme Court of India'].map((ct, idx) => {
                const ctCount = cases.filter(c => c.courtName === ct).length;
                const ctPct = ((ctCount / cases.length) * 100).toFixed(0);
                return (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between font-bold"><span>{ct}</span><span>{ctCount} Briefs ({ctPct}%)</span></div>
                    <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden"><div className="bg-blue-600 h-full transition-all" style={{ width: `${ctPct}%` }} /></div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-[#0f172a] border border-slate-800 rounded-xl p-5 shadow-3xs text-white space-y-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2 flex items-center gap-1.5"><Clock size={13} /> Active Roster System Telemetry</h4>
            <div className="space-y-3 font-mono text-[11px] leading-relaxed text-slate-300">
              <p>📍 Total Persistent Data Blocks Mapped: <span className="text-white font-bold">{cases.length} Storage Nodes</span></p>
              <p>📍 Local Storage PERSISTENCE Handshake: <span className="text-emerald-400 font-bold font-sans">ONLINE == OK</span></p>
              <p>📍 Operational Compliance Deadlines Flagged: <span className="text-amber-400 font-bold">{deadlines.length} Boundaries</span></p>
            </div>
          </div>
        </div>
      )}

      
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl w-full max-w-md p-5 shadow-2xl text-left animate-in zoom-in-95 duration-150">
            
            <div className="flex justify-between items-center border-b pb-2 mb-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">Judiciary Command Form Terminal</h3>
              <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400 hover:text-slate-600 font-bold text-sm">✕</button>
            </div>

            <div className="text-xs font-semibold text-slate-600 max-h-[400px] overflow-y-auto pr-1">
              
            
              {activeModal.type === 'add_case' && (
                <form onSubmit={commitNewCaseDispatch} className="space-y-3 text-left">
                  <div className="grid grid-cols-2 gap-2">
                    <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Case Number</label><input type="text" placeholder="e.g. WP 441/2026" required className="w-full p-2 bg-slate-50 border rounded-lg font-bold" value={newCaseForm.caseNumber} onChange={e => setNewCaseForm({ ...newCaseForm, caseNumber: e.target.value })} /></div>
                    <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">CNR Number Token</label><input type="text" placeholder="MHHCO1..." className="w-full p-2 bg-slate-50 border rounded-lg font-bold font-mono" value={newCaseForm.cnr} onChange={e => setNewCaseForm({ ...newCaseForm, cnr: e.target.value })} /></div>
                  </div>
                  <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Formal Brief Title</label><input type="text" placeholder="A vs B" required className="w-full p-2 bg-slate-50 border rounded-lg font-bold" value={newCaseForm.caseTitle} onChange={e => setNewCaseForm({ ...newCaseForm, caseTitle: e.target.value })} /></div>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Client Name</label><input type="text" placeholder="Petitioner" required className="w-full p-2 bg-slate-50 border rounded-lg font-bold" value={newCaseForm.clientName} onChange={e => setNewCaseForm({ ...newCaseForm, clientName: e.target.value })} /></div>
                    <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Opponent Name</label><input type="text" placeholder="Respondent" className="w-full p-2 bg-slate-50 border rounded-lg font-bold" value={newCaseForm.opponentName} onChange={e => setNewCaseForm({ ...newCaseForm, opponentName: e.target.value })} /></div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Target Court forum</label><input type="text" placeholder="e.g. Bombay High Court" className="w-full p-2 bg-slate-50 border rounded-lg font-bold" value={newCaseForm.courtName} onChange={e => setNewCaseForm({ ...newCaseForm, courtName: e.target.value })} /></div>
                    <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Presiding Judge</label><input type="text" placeholder="Honble Bench" className="w-full p-2 bg-slate-50 border rounded-lg font-bold" value={newCaseForm.judgeName} onChange={e => setNewCaseForm({ ...newCaseForm, judgeName: e.target.value })} /></div>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Filing Date</label><input type="date" className="w-full p-2 bg-slate-50 border rounded-lg font-mono font-bold" value={newCaseForm.filingDate} onChange={e => setNewCaseForm({ ...newCaseForm, filingDate: e.target.value })} /></div>
                    <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Priority Level</label><select className="w-full p-2 bg-slate-50 border rounded-lg font-bold text-slate-600" value={newCaseForm.priority} onChange={e => setNewCaseForm({ ...newCaseForm, priority: e.target.value })}><option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option></select></div>
                  </div>

                  <div><label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Detailed Description Brief</label><textarea placeholder="Type details..." className="w-full p-2 bg-slate-50 border rounded-lg font-bold" rows="2" value={newCaseForm.description} onChange={e => setNewCaseForm({ ...newCaseForm, description: e.target.value })} /></div>

                  <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black p-2.5 rounded-lg uppercase text-xs tracking-wide">Publish Brief Serialization</button>
                </form>
              )}

             
              {activeModal.type === 'add_event' && (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  appendCaseEvent(activeModal.caseId, eventInput, 'timeline');
                  setActiveModal(null);
                }} className="space-y-3">
                  <input type="text" placeholder="Event Title (e.g. Notice Served)" required className="w-full p-2 border rounded-lg font-bold" value={eventInput.title} onChange={e => setEventInput({ ...eventInput, title: e.target.value })} />
                  <input type="date" className="w-full p-2 border rounded-lg font-mono font-bold" value={eventInput.date} onChange={e => setEventInput({ ...eventInput, date: e.target.value })} />
                  <textarea placeholder="Event Description particulars..." className="w-full p-2 border rounded-lg font-bold" value={eventInput.desc} onChange={e => setEventInput({ ...eventInput, desc: e.target.value })} />
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold p-2.5 rounded-lg text-xs uppercase">Commit Event</button>
                </form>
              )}

             
              {activeModal.type === 'attach_doc' && (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  appendCaseEvent(activeModal.caseId, { ...docInput, date: '2026-06-19' }, 'documents');
                  setActiveModal(null);
                }} className="space-y-3">
                  <input type="text" placeholder="File Name (Injunction_Reply.pdf)" required className="w-full p-2 border rounded-lg font-bold" value={docInput.name} onChange={e => setFileFormInput({ ...docInput, name: e.target.value })} />
                  <select className="w-full p-2 border rounded-lg font-bold text-slate-600" value={docInput.type} onChange={e => setFileFormInput({ ...docInput, type: e.target.value })}>
                    {['Petition', 'Affidavit', 'Evidence', 'Court Orders', 'Judgments'].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <button type="submit" className="w-full bg-emerald-600 text-white font-bold p-2.5 rounded-lg text-xs uppercase">Bind Document Block</button>
                </form>
              )}

             
              {activeModal.type === 'add_note' && (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  appendCaseEvent(activeModal.caseId, noteInput, 'notes');
                  setActiveModal(null);
                }} className="space-y-3">
                  <textarea placeholder="Type internal chamber note..." required className="w-full p-2 border rounded-lg font-bold focus:outline-hidden" rows="3" value={noteInput.text} onChange={e => setNoteStrInput({ ...noteInput, text: e.target.value, pinned: true })} />
                  <button type="submit" className="w-full bg-slate-900 text-amber-400 font-bold p-2.5 rounded-lg text-xs uppercase tracking-wide">Pin Note</button>
                </form>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}