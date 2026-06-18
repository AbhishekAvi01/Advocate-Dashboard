import React from 'react';
import { 
  LayoutDashboard, User, Scale, FolderOpen, Briefcase, 
  Wallet, Users, Calendar, X, ShieldAlert 
} from 'lucide-react';

const menuItems = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { id: 'profile', icon: User, label: 'My Profile' },
  { id: 'court', icon: Scale, label: 'Court Access' },
  { id: 'documents', icon: FolderOpen, label: 'Documents' },
  { id: 'cases', icon: Briefcase, label: 'Cases' },
  { id: 'wallet', icon: Wallet, label: 'Wallet & Payments' },
  { id: 'clients', icon: Users, label: 'Clients' },
  { id: 'calendar', icon: Calendar, label: 'Calendar' },
];

export default function Sidebar({ isOpen, toggleSidebar, activeTab, setActiveTab }) {
  return (
    <>
      
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-40 lg:hidden w-full h-full"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#0a1128] text-slate-300 flex flex-col min-h-screen border-r border-slate-800 transition-transform duration-300 ease-in-out shrink-0
        lg:static lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        
        <div className="p-4 border-b border-slate-800 flex items-center justify-between bg-[#070d1f]">
          <div className="flex items-center gap-2.5">
            <div className="bg-blue-600 px-2 py-1 rounded text-white font-black text-sm tracking-wide">
              ADVOCATE
            </div>
            <div className="leading-none">
              <h1 className="text-xs font-black tracking-wider text-white uppercase">Advocate</h1>
              <p className="text-[9px] text-slate-500 uppercase tracking-tight mt-0.5 font-medium">Digital Identity</p>
            </div>
          </div>
          
          <button onClick={toggleSidebar} className="lg:hidden p-1 text-slate-400 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isTabActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (window.innerWidth < 1024) toggleSidebar();
                }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all text-left ${
                  isTabActive 
                    ? 'bg-blue-600 text-white font-bold shadow-xs' 
                    : 'hover:bg-slate-800/50 hover:text-white text-slate-400 font-medium'
                }`}
              >
                <Icon size={16} className={isTabActive ? 'text-white' : 'text-slate-400'} />
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </nav>

       
        <div className="p-3 border-t border-slate-800 bg-[#070d1f]">
          <div className="flex items-center gap-2.5 bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80">
            <ShieldAlert size={15} className="text-blue-500 shrink-0" />
            <div className="min-w-0">
              <p className="text-[11px] font-bold text-white leading-tight">NFC Node Secure</p>
              <p className="text-[9px] text-slate-500 font-medium truncate">Hardware Layer Active</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}