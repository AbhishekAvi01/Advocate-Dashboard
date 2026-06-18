import React from 'react';
import { 
  ShieldAlert, ShieldX, HelpCircle, LayoutGrid, FileText, 
  Layers, CheckCircle, RefreshCw, Smartphone, Phone, Mail, Lock, Unlock 
} from 'lucide-react';

export default function FooterSection({ isCardBlocked, onBlockToggle }) {
  return (
    <div className="space-y-5 mt-5">
      
      
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 items-stretch">
        
        
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
          <h4 className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-3 border-b border-purple-100 pb-2">
            Bar Council Admin Panel
          </h4>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            {[
              { label: 'Advocate Management', desc: 'Add / Update / Manage' },
              { label: 'Enrollment Approval', desc: 'Pending & Approved' },
              { label: 'Renewal Approval', desc: 'Review & Approve' },
              { label: 'Suspension Management', desc: 'Suspend / Activate' },
              { label: 'Digital Card Issuance', desc: 'Issue NFC Cards' },
              { label: 'Reports & Analytics', desc: 'State / National' },
            ].map((admin, idx) => (
              <div 
                key={idx} 
                onClick={() => alert(`Administrative Action Triggered: ${admin.label}`)}
                className="p-2 rounded-lg bg-purple-50/40 border border-purple-100 hover:bg-purple-50 cursor-pointer transition-colors"
              >
                <p className="font-bold text-slate-800 leading-tight">{admin.label}</p>
                <p className="text-[9px] text-slate-400 font-medium">{admin.desc}</p>
              </div>
            ))}
          </div>
        </div>

       
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-3 border-b border-blue-100 pb-2">
            Quick Actions
          </h4>
          <div className="grid grid-cols-4 gap-2 text-center h-[calc(100%-2rem)] items-center">
            {[
              { label: 'Share Profile', icon: LayoutGrid },
              { label: 'Download ID', icon: FileText },
              { label: 'Print ID Card', icon: Layers },
              { label: 'View QR Code', icon: HelpCircle },
              { label: 'Update Profile', icon: CheckCircle },
              { label: 'Change Photo', icon: RefreshCw },
              { label: 'Update Signature', icon: FileText },
              { label: 'More Actions', icon: Smartphone },
            ].map((action, idx) => {
              const Icon = action.icon;
              return (
                <button 
                  key={idx} 
                  onClick={() => alert(`Action Request Initiated: ${action.label}`)}
                  className="flex flex-col items-center justify-center p-1 hover:bg-slate-50 rounded-lg transition-colors group"
                >
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 text-slate-500 group-hover:text-blue-600 transition-colors">
                    <Icon size={16} />
                  </div>
                  <span className="text-[9px] font-bold text-slate-600 mt-1 leading-tight block w-full truncate">
                    {action.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 border-b border-slate-100 pb-2">
            System Features
          </h4>
          <div className="space-y-1.5 text-[11px]">
            {[
              'NFC + QR Hybrid Technology System',
              'Real-Time Verification System Gateway',
              'Multi-State Bar Council Active Integration',
              'Secure & Encrypted Database Ledger',
              'Operational Fraud Detection Mechanics',
              '24/7 Digital Operations Support Module',
              'Mobile App & Web Interoperable Portal Integration',
            ].map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-600 py-0.5 font-medium">
                <span className="w-1 h-1 bg-blue-500 rounded-full shrink-0" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        
        <div className={`bg-white border rounded-xl p-4 shadow-xs transition-all duration-300 ${
          isCardBlocked ? 'border-red-500 bg-red-50/20' : 'border-red-200'
        }`}>
          <h4 className="text-xs font-bold uppercase tracking-wider text-red-700 mb-3 border-b border-red-100 pb-2">
            Emergency & Security
          </h4>
          <div className="space-y-2 h-[calc(100%-2rem)] flex flex-col justify-center">
            
           
            <button 
              onClick={onBlockToggle}
              className={`w-full flex items-center justify-between p-2.5 rounded-lg border font-bold text-xs transition-colors shadow-xs ${
                isCardBlocked 
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white border-emerald-700' 
                  : 'bg-red-600 hover:bg-red-700 text-white border-red-700'
              }`}
            >
              <span className="flex items-center gap-2 mx-auto">
                {isCardBlocked ? <Unlock size={14} /> : <Lock size={14} />}
                {isCardBlocked ? 'UNBLOCK CARD INSTANTLY' : 'BLOCK CARD INSTANTLY'}
              </span>
            </button>
            
            <button 
              onClick={() => alert("Report protocol initiated. System security agents will contact you shortly.")}
              className="w-full flex items-center justify-center gap-2 p-2.5 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-bold text-xs transition-colors"
            >
              <ShieldAlert size={14} />
              Report Lost Card
            </button>
            
            <div className="text-[10px] text-center text-slate-400 font-medium pt-1">
              Status updates propagate automatically across servers.
            </div>
          </div>
        </div>

      </div>

      <footer className="bg-slate-900 text-slate-400 text-xs px-6 py-4 rounded-xl flex flex-col md:flex-row items-center justify-between gap-3 border border-slate-800">
        <p className="font-medium">
          © 2026 <span className="text-white font-bold">National Advocate Identity System</span>. All Rights Reserved.
        </p>
        <div className="flex flex-wrap items-center gap-6 text-[11px]">
          <div className="flex items-center gap-1.5">
            <Phone size={13} className="text-blue-400" />
            <span>Helpline: <strong className="text-white">1800-123-4567</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Mail size={13} className="text-blue-400" />
            <span>Email: <strong className="text-white">support@advocateid.gov.in</strong></span>
          </div>
          <span className="text-slate-600 font-semibold hidden md:inline">|</span>
          <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded border border-slate-700 font-mono">
            v2.4.0-Secure
          </span>
        </div>
      </footer>

    </div>
  );
}