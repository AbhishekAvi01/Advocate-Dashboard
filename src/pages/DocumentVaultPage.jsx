import React, { useState, useRef } from 'react';
import { useDocumentVault } from '../context/DocumentVaultContext';
import { 
  Eye, Download, Share2, Trash2, Folder, X, Copy, 
  Search, ArrowUpRight, Plus, Layers, ShieldCheck, FileText
} from 'lucide-react';

export default function DocumentVaultPage() {
  const {
    documents, folders, activities, vaultNotifications,
    createFolder, deleteFolder, addDocument, deleteDocument, updateVerificationStatus, clearNotification, triggerAlert
  } = useDocumentVault();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedFolder, setSelectedFolder] = useState('All');

  
  const [activeModal, setActiveModal] = useState(null); 
  const [isDragging, setIsDragging] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');
  const [copied, setCopied] = useState(false);

  
  const [uploadProgress, setUploadProgress] = useState(0);
  const [simulatedFileName, setSimulatedFileName] = useState('');
  const [uploadCategory, setUploadCategory] = useState('Enrollment Certificate');
  const [uploadFolder, setUploadFolder] = useState('Professional Documents');
  const [uploadExpiry, setUploadExpiry] = useState('');

  const fileInputTriggerRef = useRef(null);

  const categories = [
    'Enrollment Certificate', 'Bar Council Certificate', 'Practice Certificate',
    'Court Authorizations', 'Professional License', 'Identity Documents',
    'Client Documents', 'Case Documents'
  ];

  const todayStr = new Date('2026-06-19');

  
  const totalFiles = documents.length;
  const verifiedCount = documents.filter(d => d.status === 'Verified').length;
  const underReviewCount = documents.filter(d => d.status === 'Under Review' || d.status === 'Pending').length;
  
  const expiringCount = documents.filter(d => {
    if (d.expiryDate === 'None' || !d.expiryDate) return false;
    const exp = new Date(d.expiryDate);
    const diffDays = Math.ceil((exp.getTime() - todayStr.getTime()) / (1000 * 3600 * 24));
    return diffDays <= 30; 
  }).length;

 
  const filteredDocs = documents.filter(doc => {
    const queryMatch = doc.name.toLowerCase().includes(searchQuery.toLowerCase()) || doc.id.toLowerCase().includes(searchQuery.toLowerCase());
    const catMatch = selectedCategory === 'All' || doc.category === selectedCategory;
    const folderMatch = selectedFolder === 'All' || doc.folder === selectedFolder;
    return queryMatch && catMatch && folderMatch;
  });

  const checkExpiryStatus = (expiryDate) => {
    if (expiryDate === 'None' || !expiryDate) return { text: 'Permanent Valid', css: 'text-slate-600 bg-slate-100/70 border-slate-200' };
    const exp = new Date(expiryDate);
    const diff = Math.ceil((exp.getTime() - todayStr.getTime()) / (1000 * 3600 * 24));
    if (diff < 0) return { text: 'Expired', css: 'text-red-700 bg-red-50 border-red-200' };
    if (diff <= 30) return { text: `Expiring Soon (${diff}d)`, css: 'text-amber-700 bg-amber-50 border-amber-200 font-bold' };
    return { text: `Valid Till ${expiryDate}`, css: 'text-slate-600 bg-slate-50 border-slate-200' };
  };


  const executeDownload = (doc) => {
    try {
      triggerAlert('Secure Download', `Initializing file stream for: ${doc.name}`);

     
      const mockPdfContent = `%PDF-1.4\n1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R >>\nendobj\n4 0 obj\n<< /Length 55 >>\nstream\nBT\n/F1 12 Tf\n72 712 Td\n(ADVOCATE IDENTITY SECURE VAULT - FILE ACCESS) Tj\n72 690 Td\n(Document Name: ${doc.name}) Tj\nET\nendstream\nendobj\nxref\n0 5\n0000000000 65535 f\n0000000009 00000 n\n0000000056 00000 n\n0000000111 00000 n\n0000000212 00000 n\ntrailer\n<< /Size 5 /Root 1 0 R >>\nstartxref\n0000000325\n%%EOF`;

      const byteArray = new Uint8Array(mockPdfContent.length);
      for (let i = 0; i < mockPdfContent.length; i++) {
        byteArray[i] = mockPdfContent.charCodeAt(i);
      }

      const activeBlob = new Blob([byteArray], { type: 'application/pdf' });
      const binaryObjectDownloadUrl = URL.createObjectURL(activeBlob);

      const dynamicDownloadAnchor = document.createElement('a');
      dynamicDownloadAnchor.href = binaryObjectDownloadUrl;
      dynamicDownloadAnchor.download = doc.name.endsWith('.pdf') ? doc.name : `${doc.name}.pdf`;
      
      document.body.appendChild(dynamicDownloadAnchor);
      dynamicDownloadAnchor.click();
      
     
      document.body.removeChild(dynamicDownloadAnchor);
      URL.revokeObjectURL(binaryObjectDownloadUrl);
    } catch (err) {
      console.error("FileSystem Stream Failure Exception Code Log:", err);
    }
  };


  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDropEvent = (e) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processIncomingFile(e.dataTransfer.files[0]);
    }
  };

  const handleManualSelection = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      processIncomingFile(e.target.files[0]);
    }
  };

  const processIncomingFile = (file) => {
    const ext = file.name.split('.').pop().toLowerCase();
    if (!['pdf', 'png', 'jpg', 'jpeg'].includes(ext)) {
      alert("Invalid Extension: System protocol only authorizes PDF, PNG, and JPG formats.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert("Size Limit Breach: File data cannot cross the 10MB infrastructure threshold.");
      return;
    }

    setSimulatedFileName(file.name);
    setUploadProgress(20);
    
    let prog = 20;
    const interval = setInterval(() => {
      prog += 20;
      if (prog >= 100) {
        clearInterval(interval);
        setUploadProgress(100);
        setTimeout(() => {
          addDocument({
            name: file.name,
            category: uploadCategory,
            folder: uploadFolder,
            expiryDate: uploadExpiry || 'None',
            size: (file.size / (1024 * 1024)).toFixed(1) + ' MB'
          });
          setUploadProgress(0);
          setSimulatedFileName('');
          setActiveModal(null);
        }, 250);
      } else {
        setUploadProgress(prog);
      }
    }, 100);
  };

  return (
    <div className="space-y-6 w-full text-slate-800 select-none animate-in fade-in duration-300">
      <input type="file" ref={fileInputTriggerRef} className="hidden" accept=".pdf,.png,.jpg,.jpeg" onChange={handleManualSelection} />

    
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch w-full">
        <div className="p-4 border border-slate-200 rounded-xl bg-white shadow-3xs flex flex-col justify-between text-left">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">TOTAL VAULT FILES ATTACHED</span>
          <div className="flex items-baseline gap-2 mt-2"><span className="text-3xl font-black font-mono text-slate-900">{totalFiles}</span><span className="text-[9px] font-extrabold text-slate-400 uppercase tracking-wider">ACTIVE RECORDS</span></div>
        </div>
        <div className="p-4 border border-emerald-100 rounded-xl bg-emerald-50/20 shadow-3xs flex flex-col justify-between text-left">
          <span className="text-[10px] font-black uppercase tracking-wider text-emerald-600/80">BCI AUTHENTICATED SEALS</span>
          <div className="flex items-baseline gap-2 mt-2"><span className="text-3xl font-black font-mono text-emerald-800">{verifiedCount}</span><span className="text-[9px] font-extrabold text-emerald-600 uppercase tracking-wider">VERIFIED LEDGER</span></div>
        </div>
        <div className="p-4 border border-blue-100 rounded-xl bg-blue-50/20 shadow-3xs flex flex-col justify-between text-left">
          <span className="text-[10px] font-black uppercase tracking-wider text-blue-600/80">PENDING COMPLIANCE AUDITS</span>
          <div className="flex items-baseline gap-2 mt-2"><span className="text-3xl font-black font-mono text-blue-800">{underReviewCount}</span><span className="text-[9px] font-extrabold text-blue-800 uppercase tracking-wider">UNDER REVIEW</span></div>
        </div>
        <div className={`p-4 border rounded-xl shadow-3xs flex flex-col justify-between text-left ${expiringCount > 0 ? 'border-red-200 bg-red-50/40' : 'border-slate-200 bg-white'}`}>
          <span className="text-[10px] font-black uppercase tracking-wider text-red-500/80">EXPIRING LICENSING NODES</span>
          <div className="flex items-baseline gap-2 mt-2"><span className="text-3xl font-black font-mono text-red-700">{expiringCount}</span><span className="text-[9px] font-extrabold text-red-600 uppercase tracking-wider">ACTION NEEDED</span></div>
        </div>
      </div>

     
      <div className="bg-white border border-slate-200 rounded-xl p-3 flex flex-col lg:flex-row lg:items-center justify-between gap-3 w-full shadow-3xs">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
          <input type="text" placeholder="Search vault records by name or system document ID token..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="pl-9 pr-4 py-1.5 w-full bg-slate-50 border border-slate-200 rounded-lg text-xs font-semibold focus:outline-hidden" />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="p-1.5 bg-slate-50 border rounded-lg text-xs font-bold text-slate-600 focus:outline-hidden"><option value="All">All Categories</option>{categories.map(c => <option key={c} value={c}>{c}</option>)}</select>
          <select value={selectedFolder} onChange={e => setSelectedFolder(e.target.value)} className="p-1.5 bg-slate-50 border rounded-lg text-xs font-bold text-slate-600 focus:outline-hidden"><option value="All">All Folders</option>{folders.map(f => <option key={f} value={f}>{f}</option>)}</select>
        </div>
      </div>

     
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start w-full">
        
        <div className="space-y-4 text-left">
          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-3xs space-y-3">
            <div className="flex items-center justify-between border-b pb-2"><h4 className="text-xs font-black uppercase tracking-wider text-slate-800 flex items-center gap-1.5"><Layers size={13} className="text-blue-600" /> VIRTUAL FOLDERS</h4><button onClick={() => setActiveModal({ type: 'add_folder' })} className="text-[10px] font-black text-blue-600 hover:underline flex items-center gap-0.5"><Plus size={11} /> Add</button></div>
            <div className="space-y-1">
              <button onClick={() => setSelectedFolder('All')} className={`w-full text-left px-2.5 py-2 rounded-lg text-xs font-bold flex items-center justify-between ${selectedFolder === 'All' ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-slate-50'}`}><span>Root Directory</span><span className="font-mono text-[10px] opacity-60">{documents.length}</span></button>
              {folders.map(f => (
                <div key={f} className="flex items-center justify-between w-full group pr-1"><button onClick={() => setSelectedFolder(f)} className={`text-left px-2.5 py-1.5 text-xs font-bold truncate flex-1 ${selectedFolder === f ? 'text-blue-700 font-black' : 'text-slate-600'}`}>{f}</button><button onClick={() => deleteFolder(f)} className="text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 p-0.5 transition-opacity"><Trash2 size={11} /></button></div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-3xs space-y-2">
            <button onClick={() => setActiveModal({ type: 'upload' })} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs p-2.5 rounded-lg text-center transition-colors shadow-sm">Upload New Document</button>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-3xs space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-900 border-b pb-2">RECENT VAULT LOGS</h4>
            <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
              {activities.map(act => (
                <div key={act.id} className="text-[11px] leading-snug border-b border-slate-50 pb-2 last:border-none">
                  <p className="text-slate-600 font-semibold">{act.text}</p>
                  <span className="text-[9px] text-slate-400 font-mono block mt-0.5">{act.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="lg:col-span-3 bg-white border border-slate-200 rounded-xl p-4 shadow-3xs space-y-4">
          <div className="overflow-x-auto w-full rounded-xl border border-slate-100">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-400 uppercase text-[9px] font-black tracking-wider">
                  <th className="p-3">DOCUMENT PARTICULARS / TOKEN ID</th>
                  <th className="p-3">STATUTORY CATEGORY</th>
                  <th className="p-3">VALIDATION CHECK</th>
                  <th className="p-3">VERIFICATION BADGE</th>
                  <th className="p-3 text-right">ACTIONS MATRIX</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                {filteredDocs.map(doc => {
                  const warn = checkExpiryStatus(doc.expiryDate);
                  return (
                    <tr key={doc.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-3 text-left">
                        <p className="font-bold text-slate-900 max-w-[240px] truncate">{doc.name}</p>
                        <span className="text-[10px] font-mono text-slate-400 block mt-0.5">{doc.id} • {doc.size}</span>
                      </td>
                      <td className="p-3 text-left">
                        <p className="text-slate-800 font-bold">{doc.category}</p>
                        <span className="text-[9px] font-mono text-slate-400 block mt-0.5">{doc.folder}</span>
                      </td>
                      <td className="p-3 text-left"><span className={`text-[10px] px-2 py-0.5 rounded border ${warn.css}`}>{warn.text}</span></td>
                      <td className="p-3 text-left">
                        <span className={`text-[10px] px-2 py-0.5 rounded border font-black ${
                          doc.status === 'Verified' ? 'bg-emerald-50 border-emerald-200 text-emerald-700' : 'bg-blue-50 border-blue-200 text-blue-700'
                        }`}>{doc.status}</span>
                      </td>
                      <td className="p-3 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button onClick={() => setActiveModal({ type: 'view', data: doc })} className="p-1.5 border hover:bg-slate-50 rounded text-slate-500"><Eye size={12} /></button>
                          <button onClick={() => executeDownload(doc)} className="p-1.5 bg-blue-50 text-blue-600 border border-blue-100 hover:bg-blue-100 rounded transition-colors"><Download size={12} /></button>
                          <button onClick={() => deleteDocument(doc.id)} className="p-1.5 border border-red-100 text-red-500 bg-red-50 hover:bg-red-100 rounded"><Trash2 size={12} /></button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>

     
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-xl w-full max-w-md p-5 shadow-xl text-left animate-in zoom-in-95 duration-150">
            <div className="flex justify-between items-center border-b pb-2.5 mb-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">VAULT SECURITY CONTROL ACTION NODE</h3>
              <button onClick={() => setActiveModal(null)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            <div className="text-xs font-semibold text-slate-600 space-y-4">
              {activeModal.type === 'view' && activeModal.data && (
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-black text-slate-900 break-all">{activeModal.data.name}</h4>
                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 border px-1.5 py-0.5 rounded mt-1 inline-block">UID: {activeModal.data.id}</span>
                  </div>
                  <div className="w-full min-h-[100px] bg-slate-50 border border-dashed rounded-lg flex flex-col items-center justify-center p-4">
                    <p className="font-bold text-slate-700">Encrypted Byte Container Stream Verified</p>
                    <div className="flex gap-2 mt-4 w-full justify-center">
                      <button onClick={() => { updateVerificationStatus(activeModal.data.id, 'Verified'); setActiveModal(null); }} className="bg-emerald-600 text-white font-bold p-1 px-3 rounded text-[10px]">APPROVE VERIFY</button>
                      <button onClick={() => { updateVerificationStatus(activeModal.data.id, 'Under Review'); setActiveModal(null); }} className="bg-amber-600 text-white font-bold p-1 px-3 rounded text-[10px]">UNDER REVIEW</button>
                    </div>
                  </div>
                </div>
              )}

              {activeModal.type === 'add_folder' && (
                <form onSubmit={(e) => { e.preventDefault(); if (newFolderName.trim() && createFolder(newFolderName.trim())) { setNewFolderName(''); setActiveModal(null); } }} className="space-y-3">
                  <input type="text" placeholder="e.g. Appeal Briefs 2026" required value={newFolderName} onChange={e => setNewFolderName(e.target.value)} className="w-full p-2.5 bg-slate-50 border rounded-lg text-xs font-bold" />
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold p-2 rounded-lg text-center">Commit Directory Mapping</button>
                </form>
              )}

              {activeModal.type === 'upload' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3 text-left">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">TARGET CATEGORY</label>
                      <select className="w-full p-2 bg-slate-50 border rounded-lg font-bold text-[11px]" value={uploadCategory} onChange={e => setUploadCategory(e.target.value)}>{categories.map(c => <option key={c} value={c}>{c}</option>)}</select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">TARGET FOLDER</label>
                      <select className="w-full p-2 bg-slate-50 border rounded-lg font-bold text-[11px]" value={uploadFolder} onChange={e => setUploadFolder(e.target.value)}>{folders.map(f => <option key={f} value={f}>{f}</option>)}</select>
                    </div>
                  </div>

                  <div className="text-left">
                    <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">STATUTORY EXPIRY THRESHOLD DATE (OPTIONAL)</label>
                    <input type="date" value={uploadExpiry} onChange={e => setUploadExpiry(e.target.value)} className="w-full p-2 bg-slate-50 border rounded-lg font-mono font-bold text-[11px]" />
                  </div>

                  <div 
                    onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDropEvent}
                    className={`border-2 border-dashed rounded-xl p-7 text-center transition-all flex flex-col items-center justify-center ${isDragging ? 'border-blue-500 bg-blue-50/30' : 'border-slate-200 bg-slate-50/60'}`}
                  >
                    <ArrowUpRight size={22} className={`mb-1.5 ${isDragging ? 'text-blue-500 animate-bounce' : 'text-slate-400'}`} />
                    <p className="font-black text-slate-800 text-xs">Drag & Drop Document Brief file attachment</p>
                    <button onClick={() => fileInputTriggerRef.current.click()} className="mt-4 bg-white hover:bg-slate-50 border rounded-lg text-[10px] font-bold px-4 py-1.5 text-slate-700 shadow-3xs">Browse Device Storage</button>
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