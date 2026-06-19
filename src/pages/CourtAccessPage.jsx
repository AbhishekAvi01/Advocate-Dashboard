import React, { useState, useRef } from 'react';
import { useCourtModuleEngine } from '../context/CourtContext';
import { 
  Building2, Search, Filter, Gavel, Calendar, FileText, Download, 
  Upload, Bell, ArrowUpDown, ChevronLeft, ChevronRight, X, AlertCircle, 
  ExternalLink, CheckCircle2, ShieldAlert, Plus, Layers, SlidersHorizontal, 
  HelpCircle, Link2, Copy, FilePlus, CalendarDays, Activity, Eye 
} from 'lucide-react';

export default function CourtAccessPage() {
  const { 
    courts, cases, alerts, documents,
    markAlertRead, purgeAlertNode, registerNewCaseDocket, commitDocUpload, purgeDocumentNode
  } = useCourtModuleEngine();

  
  const [directorySearch, setDirectorySearch] = useState('');
  const [selectedDirectoryType, setSelectedDirectoryType] = useState('All');
  const [activeModal, setActiveModal] = useState(null); // { type, data }
  
  
  const [rosterSearch, setRosterSearch] = useState('');
  const [rosterStatusFilter, setRosterStatusFilter] = useState('All');
  const [rosterSortField, setRosterSortField] = useState('time');
  const [rosterSortDir, setRosterSortDirection] = useState('asc');
  const [rosterCurrentPage, setRosterCurrentPage] = useState(1);
  const itemsPerPageLimit = 2;

 
  const [docSearch, setDocSearch] = useState('');
  const [docFilterType, setDocFilterType] = useState('All');
  const [isDragOverActive, setIsDragOverActive] = useState(false);

  const [caseForm, setCaseForm] = useState({ caseNumber: '', clientName: '', advocateName: 'Adv. Rohit Sharma', courtName: 'Bombay High Court', judge: '', time: '10:00 AM', date: '2026-06-19', status: 'Today', type: 'Civil Suit', stage: 'Admission Stage', notes: '' });
  const [fileUploadForm, setFileForm] = useState({ name: '', type: 'Orders', caseNumber: '' });
  const [selectedCalendarDay, setSelectedCalendarDay] = useState(19);
  const [shareFeedbackMsg, setShareFeedbackMsg] = useState(false);

  const hiddenFileInputTrigger = useRef(null);


  const countActiveTotal = cases.length;
  const countTodayHearings = cases.filter(c => c.status === 'Today').length;
  const countPendingDecisions = cases.filter(c => c.status === 'Pending Order').length;
  const countUpcomingTrials = cases.filter(c => c.status === 'Upcoming').length;
  const unreadAlertsCounter = alerts.filter(a => !a.read).length;


  const filteredCourtDirectory = courts.filter(court => {
    const matchQuery = court.name.toLowerCase().includes(directorySearch.toLowerCase()) || 
                       court.jurisdiction.toLowerCase().includes(directorySearch.toLowerCase());
    const matchType = selectedDirectoryType === 'All' || court.type === selectedDirectoryType;
    return matchQuery && matchType;
  });


  const processedRosterCases = cases
    .filter(c => {
      const matchSearch = c.caseNumber.toLowerCase().includes(rosterSearch.toLowerCase()) || 
                          c.cnr.toLowerCase().includes(rosterSearch.toLowerCase()) ||
                          c.clientName.toLowerCase().includes(rosterSearch.toLowerCase()) ||
                          c.advocateName.toLowerCase().includes(rosterSearch.toLowerCase());
      const matchStatus = rosterStatusFilter === 'All' || c.status === rosterStatusFilter;
      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      let comparison = a[rosterSortField].localeCompare(b[rosterSortField]);
      return rosterSortDir === 'asc' ? comparison : -comparison;
    });

  const paginationMaxPages = Math.ceil(processedRosterCases.length / itemsPerPageLimit);
  const paginatedRosterCases = processedRosterCases.slice(
    (rosterCurrentPage - 1) * itemsPerPageLimit, 
    rosterCurrentPage * itemsPerPageLimit
  );

  
  const filteredVaultDocuments = documents.filter(d => {
    const matchSearch = d.name.toLowerCase().includes(docSearch.toLowerCase()) || d.caseNumber.toLowerCase().includes(docSearch.toLowerCase());
    const matchType = docFilterType === 'All' || d.type === docFilterType;
    return matchSearch && matchType;
  });

  
  const handleTableSortToggle = (field) => {
    if (rosterSortField === field) {
      setRosterSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    } else {
      setRosterSortField(field);
      setRosterSortDirection('asc');
    }
  };

  
  const onFileDragOver = (e) => { e.preventDefault(); setIsDragOverActive(true); };
  const onFileDragLeave = () => setIsDragOverActive(false);
  const onFileDropCommitted = (e) => {
    e.preventDefault();
    setIsDragOverActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const targetDroppedFile = e.dataTransfer.files[0];
      commitDocUpload({ name: targetDroppedFile.name, type: 'Orders', caseNumber: 'Global Upload Drop' });
      alert(`Success: ${targetDroppedFile.name} successfully pushed to cryptographic archive slots.`);
    }
  };

  return (
    <div className="space-y-6 w-full text-slate-800 antialiased select-none font-sans pb-12">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">
        {[
          { text: 'Total Active Briefs Load', metric: countActiveTotal, desc: 'Synchronized Case Roster Nodes', color: 'border-slate-200 bg-white text-slate-900' },
          { text: 'Today Listed Hear Board', metric: countTodayHearings, desc: 'Immediate Court Appearances', color: 'border-amber-200 bg-amber-50/60 text-amber-800' },
          { text: 'Pending Judgments/Orders', metric: countPendingDecisions, desc: 'Awaiting Certified Signing', color: 'border-purple-200 bg-purple-50/50 text-purple-700' },
          { text: 'Upcoming Trial Schedules', metric: countUpcomingTrials, desc: 'Next Calendar Diary Dockets', color: 'border-blue-200 bg-blue-50/50 text-blue-700' }
        ].map((card, idx) => (
          <div key={idx} className={`p-4 border rounded-xl flex flex-col justify-between shadow-2xs text-left ${card.color}`}>
            <span className="text-[10px] font-black uppercase tracking-wider opacity-75">{card.text}</span>
            <div className="flex items-baseline gap-2 mt-2">
              <span className="text-3xl font-black font-mono tracking-tight">{card.metric}</span>
              <span className="text-[10px] font-bold opacity-80 uppercase">{card.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="text-left">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Building2 size={14} className="text-blue-600" /> Integrated National Judiciary Clearing Directory
            </h3>
            <p className="text-xs text-slate-500 font-medium mt-0.5">Real-time verification registry sync logs across statutory legal forums.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 w-3.5 h-3.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search by court name, location base..."
                value={directorySearch}
                onChange={(e) => setDirectorySearch(e.target.value)}
                className="pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-lg text-slate-700 focus:outline-hidden focus:border-blue-500"
              />
            </div>
            <select
              value={selectedDirectoryType}
              onChange={(e) => setSelectedDirectoryType(e.target.value)}
              className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 focus:outline-hidden"
            >
              {['All', 'Supreme Court', 'High Courts', 'District Courts', 'NCLT', 'NCLAT', 'Consumer Courts', 'Family Courts'].map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {directorySearch && (
              <button onClick={() => setDirectorySearch('')} className="text-[10px] font-black uppercase tracking-wide px-2.5 py-1.5 rounded-lg text-red-600 bg-red-50 border border-red-100">Clear</button>
            )}
          </div>
        </div>

       
        {filteredCourtDirectory.length === 0 ? (
          <div className="p-8 text-center border-2 border-dashed rounded-xl text-slate-400 font-medium text-xs">
            No verified jurisdiction directory nodes matches current query filter thresholds.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredCourtDirectory.map(court => (
              <div key={court.id} className="p-4 border border-slate-200 bg-slate-50/30 rounded-xl flex flex-col justify-between hover:border-slate-300 hover:bg-slate-50/50 transition-all text-left">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-xs font-black text-slate-900 tracking-tight leading-snug">{court.name}</h4>
                    <span className="text-[9px] font-black tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-200 rounded px-1.5 py-0.5 uppercase shrink-0">
                      {court.status}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-mono font-bold mt-1 uppercase tracking-tight">{court.type} • Jurisdiction: {court.jurisdiction}</p>
                </div>

                <div className="grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 mt-4">
                  <button 
                    onClick={() => setActiveModal({ type: 'court_directory_details', data: court })}
                    className="bg-white border text-slate-700 hover:bg-slate-50 text-[10px] font-black uppercase tracking-wider p-2 rounded-lg text-center transition-colors"
                  >
                    View Details
                  </button>
                  <a 
                    href={court.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-black uppercase tracking-wider p-2 rounded-lg text-center transition-colors flex items-center justify-center gap-1"
                  >
                    Open Court <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

     
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs">
        <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-3 mb-4 text-left">
          Core Digital Judiciary Services Checkpoints
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {[
            { tag: 'Case Status', modalType: 'srv_case_status' },
            { tag: 'Cause List Tracker', modalType: 'srv_cause_list' },
            { tag: 'Orders & Judgments', modalType: 'srv_orders' },
            { tag: 'Daily Board Stream', modalType: 'srv_daily_board' },
            { tag: 'Dynamic E-Filing', modalType: 'srv_efiling' },
            { tag: 'Fee Calculator', modalType: 'srv_fee_calc' },
            { tag: 'Certified Copies', modalType: 'srv_certified' },
            { tag: 'Virtual Hearing Node', modalType: 'srv_virtual' }
          ].map((srv, idx) => (
            <button
              key={idx}
              onClick={() => setActiveModal({ type: srv.modalType, data: null })}
              className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-center flex flex-col items-center justify-center gap-2.5 hover:border-blue-500 hover:bg-blue-50/10 transition-all group"
            >
              <Gavel size={15} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              <span className="text-[10px] font-black leading-tight text-slate-700 group-hover:text-slate-900 block tracking-tight">
                {srv.tag}
              </span>
            </button>
          ))}
        </div>
      </div>

     
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-3">
          <div className="text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Active Litigation Roster & Daily Cause List Sheet
            </h4>
            <p className="text-xs text-slate-500 font-medium">Sortable, filterable dynamic transactional docket mapping.</p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search docket, CNR, advocate..."
                value={rosterSearch}
                onChange={(e) => { setRosterSearch(e.target.value); setRosterCurrentPage(1); }}
                className="pl-8 pr-4 py-1.5 bg-slate-50 border border-slate-200 text-xs font-semibold rounded-lg text-slate-700"
              />
            </div>
            <select
              value={rosterStatusFilter}
              onChange={(e) => { setRosterStatusFilter(e.target.value); setRosterCurrentPage(1); }}
              className="p-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 focus:outline-hidden"
            >
              <option value="All">All Active Statuses</option>
              <option value="Today">Today Listed</option>
              <option value="Upcoming">Upcoming Trials</option>
              <option value="Pending Order">Reserved Orders</option>
            </select>
          </div>
        </div>

       
        <div className="overflow-x-auto w-full border border-slate-100 rounded-xl">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase text-[9px] font-black tracking-wider">
                <th className="p-3">Case Index Brief / CNR</th>
                <th className="p-3 cursor-pointer select-none hover:bg-slate-100" onClick={() => handleTableSortToggle('clientName')}>
                  Client Particulars <ArrowUpDown size={10} className="inline ml-0.5" />
                </th>
                <th className="p-3">Target Court Room Base</th>
                <th className="p-3">Presiding Bench Pool</th>
                <th className="p-3 cursor-pointer select-none hover:bg-slate-100" onClick={() => handleTableSortToggle('time')}>
                  Time Stamp <ArrowUpDown size={10} className="inline ml-0.5" />
                </th>
                <th className="p-3">Operational Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
              {paginatedRosterCases.length === 0 ? (
                <tr>
                  <td colSpan="6" className="p-12 text-center text-slate-400 font-medium">
                    No active case brief records matching current layout query filtration bounds.
                  </td>
                </tr>
              ) : (
                paginatedRosterCases.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-3 text-left">
                      <p className="font-bold text-slate-900">{item.caseNumber}</p>
                      <span className="text-[10px] font-mono font-bold text-slate-400 block mt-0.5">CNR: {item.cnr}</span>
                    </td>
                    <td className="p-3 text-left">
                      <p className="font-bold text-slate-800">{item.clientName}</p>
                      <span className="text-[10px] text-slate-400 font-medium block mt-0.5">Counsel: {item.advocateName}</span>
                    </td>
                    <td className="p-3 text-slate-600 font-bold text-left">{item.courtName}</td>
                    <td className="p-3 text-slate-500 max-w-[200px] truncate text-left">{item.judge}</td>
                    <td className="p-3 font-mono text-slate-900 text-left">{item.time}</td>
                    <td className="p-3 text-left">
                      <span className={`text-[10px] font-black uppercase tracking-tight px-2 py-0.5 rounded border ${
                        item.status === 'Today' ? 'bg-amber-50 border-amber-200 text-amber-800' :
                        item.status === 'Upcoming' ? 'bg-blue-50 border-blue-200 text-blue-700' : 'bg-purple-50 border-purple-200 text-purple-700'
                      }`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

       
        {paginationMaxPages > 1 && (
          <div className="flex items-center justify-between pt-1 font-semibold text-xs">
            <span className="text-slate-400 font-bold">Sheet {rosterCurrentPage} of {paginationMaxPages} entries</span>
            <div className="flex gap-1.5">
              <button 
                onClick={() => setRosterCurrentPage(p => Math.max(p - 1, 1))}
                disabled={rosterCurrentPage === 1}
                className="px-3 py-1 bg-slate-50 hover:bg-slate-100 border rounded-lg text-slate-700 disabled:opacity-40"
              >
                Prev
              </button>
              <button 
                onClick={() => setRosterCurrentPage(p => Math.min(p + 1, paginationMaxPages))}
                disabled={rosterCurrentPage === paginationMaxPages}
                className="px-3 py-1 bg-slate-50 hover:bg-slate-100 border rounded-lg text-slate-700 disabled:opacity-40"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>

     
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start w-full">
        
       
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2.5">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Bell size={14} className="text-blue-600 animate-pulse" /> Judiciary Alerts & Broad Feeds
            </h4>
            <span className="text-[9px] font-black bg-red-500 border border-red-600 text-white px-2 py-0.5 rounded-sm">
              {unreadAlertsCounter} Active
            </span>
          </div>

          <div className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1">
            {alerts.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-12">No current active telemetry notifications broadcasted.</p>
            ) : (
              alerts.map(node => (
                <div key={node.id} className={`p-3 rounded-lg border flex flex-col justify-between transition-all text-left ${
                  node.read ? 'bg-slate-50/60 border-slate-100 opacity-60' : 'bg-linear-to-r from-slate-50 to-blue-50/20 border-blue-100 shadow-3xs'
                }`}>
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs font-bold text-slate-900 leading-tight">{node.title}</p>
                      <span className="text-[8px] font-mono font-bold text-slate-400 shrink-0">{node.timestamp}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-medium leading-relaxed mt-1">{node.message}</p>
                  </div>
                  <div className="flex justify-end gap-3 mt-2 border-t border-slate-100/60 pt-2 text-[10px] font-black">
                    {!node.read && (
                      <button onClick={() => markAlertRead(node.id)} className="text-blue-600 hover:underline">Mark Read</button>
                    )}
                    <button onClick={() => purgeAlertNode(node.id)} className="text-red-500 hover:underline">Delete</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        
        <div className="xl:col-span-2 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-3">
          <div className="flex justify-between items-center border-b border-slate-100 pb-2">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <CalendarDays size={14} className="text-purple-600" /> Localized Chamber Agenda Diary Map
            </h4>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-slate-50 border rounded text-slate-600">June 2026</span>
          </div>

          <div className="grid grid-cols-7 gap-1 text-center text-[9px] font-black uppercase tracking-wider text-slate-400 py-1 border-b border-slate-50">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => <div key={day}>{day}</div>)}
          </div>

          <div className="grid grid-cols-7 gap-1.5">
            {Array.from({ length: 30 }).map((_, i) => {
              const currentDayIndex = i + 1;
              const dayHasHearing = currentDayIndex === 19 || currentDayIndex === 22;
              
              return (
                <div
                  key={i}
                  onClick={() => setSelectedCalendarDay(currentDayIndex)}
                  className={`min-h-[52px] p-1.5 border rounded-lg flex flex-col justify-between transition-all cursor-pointer select-none text-left ${
                    selectedCalendarDay === currentDayIndex 
                      ? 'ring-2 ring-blue-600 border-transparent bg-blue-50/40 font-black' 
                      : 'border-slate-100 bg-slate-50/40 hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-[10px] font-mono font-bold ${dayHasHearing ? 'text-blue-600 font-black' : 'text-slate-400'}`}>{currentDayIndex}</span>
                  {dayHasHearing && <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mx-auto block mb-0.5" />}
                </div>
              );
            })}
          </div>

         
          <div className="bg-slate-50 border border-slate-100 p-2.5 rounded-lg text-xs flex justify-between items-center gap-4 text-left">
            <div className="min-w-0 flex-1">
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wide">Target Inspection Slot: June {selectedCalendarDay}, 2026</p>
              <p className="font-bold text-slate-800 truncate mt-0.5">
                {selectedCalendarDay === 19 ? '2 Active Court Hearings Listed for Selection Area.' : 
                 selectedCalendarDay === 22 ? 'SLP Appeal Brief Scheduled in Supreme Court.' : 
                 'No regulatory case briefs files allocated for this target date node.'}
              </p>
            </div>
            {(selectedCalendarDay === 19 || selectedCalendarDay === 22) && (
              <button 
                onClick={() => setActiveModal({ type: 'calendar_day_inspect', data: selectedCalendarDay })}
                className="text-[10px] font-black text-blue-600 uppercase hover:underline shrink-0"
              >
                Inspect Details
              </button>
            )}
          </div>
        </div>

      </div>

      
      <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-3">
          <div className="text-left">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
              Judiciary Vault Archive & Cryptographic Document Center
            </h4>
            <p className="text-xs text-slate-500 font-medium">Drag-and-drop functional file token repository node.</p>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 w-3.5 h-3.5 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search archive..."
                value={docSearch}
                onChange={e => setDocSearch(e.target.value)}
                className="pl-8 pr-4 py-1 bg-slate-50 border text-xs font-semibold rounded-lg text-slate-700"
              />
            </div>
            <select
              value={docFilterType}
              onChange={e => setDocFilterType(e.target.value)}
              className="p-1 bg-slate-50 border text-xs font-bold text-slate-600 rounded-lg focus:outline-hidden"
            >
              <option value="All">All Types</option>
              {['Orders', 'Judgments', 'Cause Lists', 'Filing Receipts'].map(type => <option key={type} value={type}>{type}</option>)}
            </select>
            <button 
              onClick={() => setActiveModal({ type: 'cmd_upload_doc', data: null })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-[10px] px-3 py-1.5 rounded-lg flex items-center gap-1 uppercase tracking-wide shadow-3xs"
            >
              <Upload size={12} /> Upload File
            </button>
          </div>
        </div>

       
        <div 
          onDragOver={onFileDragOver}
          onDragLeave={onFileDragLeave}
          onDrop={onFileDropCommitted}
          className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-2 transition-all border-2 border-dashed rounded-xl ${
            isDragOverActive ? 'border-blue-500 bg-blue-50/20' : 'border-transparent'
          }`}
        >
          {filteredVaultDocuments.length === 0 ? (
            <div className="col-span-full p-8 text-center text-slate-400 font-semibold">No secure encrypted file records matched your active query filters.</div>
          ) : (
            filteredVaultDocuments.map(doc => (
              <div key={doc.id} className="p-3 rounded-xl border border-slate-200 bg-slate-50/50 flex items-center justify-between gap-4 min-w-0 hover:border-slate-300 transition-colors">
                <div className="flex items-center gap-3 min-w-0 flex-1 text-left">
                  <FileText size={18} className="text-red-500 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-slate-900 truncate leading-tight">{doc.name}</p>
                    <p className="text-[10px] text-slate-400 font-mono font-bold mt-1 uppercase tracking-tighter">{doc.type} • {doc.size}</p>
                  </div>
                </div>
                <div className="flex gap-1 shrink-0">
                  <button onClick={() => setActiveModal({ type: 'doc_preview_sheet', data: doc })} className="p-1 border bg-white rounded hover:bg-slate-50 text-slate-500" title="Preview"><Eye size={12} /></button>
                  <button onClick={() => alert(`Triggering download gateway stream for file metadata: ${doc.name}`)} className="p-1 border bg-white rounded hover:bg-slate-50 text-slate-500" title="Download"><Download size={12} /></button>
                  <button onClick={() => purgeDocumentNode(doc.id)} className="p-1 border border-red-100 bg-red-50 text-red-600 rounded hover:bg-red-100" title="Purge"><X size={12} /></button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      
      <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs text-left">
        <span className="text-[9px] font-black tracking-wider text-slate-400 uppercase block mb-3">Command Control Console</span>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: 'File New Case', action: 'cmd_file_case' },
            { label: 'Upload Document', action: 'cmd_upload_doc' },
            { label: 'Schedule Hearing', action: 'cmd_file_case' },
            { label: 'Generate Legal Notice', action: 'cmd_legal_notice' },
            { label: 'Contact Registry Desk', action: 'cmd_registry' }
          ].map((actionItem, idx) => (
            <button
              key={idx}
              onClick={() => setActiveModal({ type: actionItem.action, data: null })}
              className="p-3 bg-slate-50 hover:bg-slate-100 border border-dashed rounded-xl flex items-center justify-center gap-2 text-xs font-bold text-slate-700 select-none active:scale-95 transition-all"
            >
              <Plus size={13} className="text-blue-600" /> {actionItem.label}
            </button>
          ))}
        </div>
      </div>

     
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 select-none">
          <div className="bg-white border border-slate-200 rounded-xl w-full max-w-md p-5 shadow-2xl animate-in zoom-in-95 duration-150 text-left">
            
            
            <div className="flex justify-between items-center border-b border-slate-100 pb-2.5 mb-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <Activity size={14} className="text-blue-600" /> Judiciary Terminal Node Task
              </h3>
              <button onClick={() => setActiveModal(null)} className="p-1 text-slate-400 hover:text-slate-600 font-bold text-sm">✕</button>
            </div>

            
            <div className="text-xs font-semibold text-slate-600 max-h-[400px] overflow-y-auto pr-1">
              
              
              {activeModal.type === 'court_directory_details' && activeModal.data && (
                <div className="space-y-3">
                  <h4 className="text-sm font-black text-slate-900">{activeModal.data.name}</h4>
                  <div className="p-3 bg-slate-50 border rounded-lg font-mono text-[11px] space-y-2">
                    <p><strong>Jurisdiction Root:</strong> {activeModal.data.jurisdiction}</p>
                    <p><strong>Registry Classification:</strong> {activeModal.data.type}</p>
                    <p><strong>Active Working Judges:</strong> {activeModal.data.activeJudges} Members Pool</p>
                    <p><strong>Handshake Gateway Code:</strong> SECURE_JUD_NODE_PASS_OK</p>
                  </div>
                </div>
              )}

             
              {activeModal.type.startsWith('srv_') && (
                <div className="text-center py-6 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto">
                    <Layers size={18} />
                  </div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-wide">
                    {activeModal.type.replace('srv_', '').replace('_', ' ')} Portal Node
                  </h4>
                  <p className="text-slate-500 font-medium leading-relaxed max-w-xs mx-auto">
                    Secure channel connection listening on e-Courts centralized APIs data clusters for live client streams.
                  </p>
                  <div className="p-2.5 bg-slate-50 border font-mono text-slate-500 text-[10px] rounded inline-block">
                    LEDGER_HANDSHAKE_ESTABLISHED: PORT_SECURE
                  </div>
                </div>
              )}

             
              {activeModal.type === 'cmd_file_case' && (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  registerNewCaseDocket(caseForm);
                  setActiveModal(null);
                  alert("Success: New legal case brief committed into active context store ledger indices.");
                }} className="space-y-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Initialize Case Brief Docket</span>
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Case Number (WP 441)" required value={caseForm.caseNumber} onChange={e => setCaseForm({ ...caseForm, caseNumber: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold" />
                    <input type="text" placeholder="Petitioner / Client Name" required value={caseForm.clientName} onChange={e => setCaseForm({ ...caseForm, clientName: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold" />
                  </div>
                  <input type="text" placeholder="Presiding Judge Bench Name" required value={caseForm.judge} onChange={e => setCaseForm({ ...caseForm, judge: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full" />
                  <input type="text" placeholder="Target Court Name Group" required value={caseForm.courtName} onChange={e => setCaseForm({ ...caseForm, courtName: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full" />
                  <button type="submit" className="w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold p-2.5 rounded-lg mt-2 text-xs">Publish Roster Authorization</button>
                </form>
              )}

            
              {activeModal.type === 'cmd_upload_doc' && (
                <form onSubmit={(e) => {
                  e.preventDefault();
                  if (!fileUploadForm.name.trim()) return;
                  commitDocUpload(fileUploadForm);
                  setActiveModal(null);
                  alert(`Success: ${fileUploadForm.name} committed into vault blocks.`);
                }} className="space-y-3">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Commit Asset to Cryptographic Vault</span>
                  <input type="text" placeholder="File Name (e.g. Counter_Reply.pdf)" required value={fileUploadForm.name} onChange={e => setFileForm({ ...fileUploadForm, name: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full" />
                  <input type="text" placeholder="Associated Case Number brief tracking" required value={fileUploadForm.caseNumber} onChange={e => setFileForm({ ...fileUploadForm, caseNumber: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full" />
                  <select value={fileUploadForm.type} onChange={e => setFileForm({ ...fileUploadForm, type: e.target.value })} className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full">
                    {['Orders', 'Judgments', 'Cause Lists', 'Filing Receipts'].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                  <button type="submit" className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold p-2.5 rounded-lg mt-2 text-xs">Authorize Storage Block</button>
                </form>
              )}

              
              {activeModal.type === 'doc_preview_sheet' && activeModal.data && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 break-all">{activeModal.data.name}</h4>
                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 mt-1 inline-block">UID: {activeModal.data.id}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-lg font-mono text-[11px] space-y-1">
                    <p><strong>Associated Case Brief:</strong> {activeModal.data.caseNumber}</p>
                    <p><strong>File Classification:</strong> {activeModal.data.type}</p>
                    <p><strong>Committed Registry Date:</strong> {activeModal.data.uploadDate}</p>
                  </div>
                  <div className="w-full min-h-[100px] border border-dashed rounded-xl bg-slate-50 flex flex-col items-center justify-center text-center p-4 text-slate-400">
                    <FileText size={24} className="text-slate-300 mb-1" />
                    <p className="font-bold text-slate-700 text-[11px]">Secure Binary Document Container View Active</p>
                  </div>
                </div>
              )}

             
              {activeModal.type === 'calendar_day_inspect' && activeModal.data && (
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 border-b pb-1">Litigation Sheet Inspector: June {activeModal.data}, 2026</h4>
                  <div className="space-y-2">
                    {cases.filter(c => activeModal.data === 19 ? c.status === 'Today' : c.status === 'Upcoming').map(matchItem => (
                      <div key={matchItem.id} className="p-2.5 bg-slate-50 border rounded-lg">
                        <p className="font-bold text-slate-900">{matchItem.caseNumber} • <span className="text-blue-600 font-mono">{matchItem.time}</span></p>
                        <p className="text-[11px] text-slate-500 font-medium mt-0.5">{matchItem.clientName} vs. Opponent Particulars Node</p>
                        <p className="text-[10px] text-slate-400 italic mt-1 font-sans">Memo: {matchItem.notes}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

             
              {activeModal.type === 'cmd_legal_notice' && (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <input type="text" placeholder="Recipient Legal Entity / Target Name" className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full" />
                    <textarea placeholder="Outline cause of action parameters or draft breach details..." rows="3" className="p-2 border bg-slate-50 rounded-lg text-xs font-bold w-full focus:outline-hidden" />
                  </div>
                  <button onClick={() => { setActiveModal(null); alert("Notice processing: Cryptographic watermark dispatch template queued successfully."); }} className="w-full bg-blue-600 text-white font-bold p-2.5 rounded-lg text-xs uppercase tracking-wide">Generate Notarized Envelope</button>
                </div>
              )}

            
              {activeModal.type === 'cmd_registry' && (
                <div className="space-y-3 text-center py-2">
                  <HelpCircle size={32} className="text-slate-300 mx-auto mb-1" />
                  <p className="text-xs font-bold text-slate-800">Establish Registry Central Endpoint Patch</p>
                  <p className="text-[11px] text-slate-500 max-w-xs mx-auto">Click below to dispatch an automated communication token query request straight to the designated registrar system desk node rooms.</p>
                  <div className="pt-2 flex gap-2">
                    <button onClick={() => { setShareFeedbackMsg(true); setTimeout(() => setShareFeedbackMsg(false), 2000); }} className="flex-1 bg-slate-50 border hover:bg-slate-100 p-2 rounded-lg text-[11px] font-bold text-slate-700 flex items-center justify-center gap-1">
                      <Link2 size={12} /> {shareFeedbackMsg ? 'Secure Key Copied' : 'Generate Secure Link'}
                    </button>
                    <button onClick={() => { setActiveModal(null); alert("Terminal call: Encrypted registry desk chat line established."); }} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-lg text-[11px] font-bold uppercase tracking-wider">Initialize Dial</button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
