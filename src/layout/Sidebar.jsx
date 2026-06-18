
import React from 'react';
import { 
  LayoutDashboard, User, Scale, FolderOpen, Briefcase, 
  Wallet, Users, Calendar, X, RefreshCw
} from 'lucide-react';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: User, label: 'My Profile' },
  { icon: Scale, label: 'Court Access' },
  { icon: FolderOpen, label: 'Documents' },
  { icon: Briefcase, label: 'Cases' },
  { icon: Wallet, label: 'Wallet & Payments' },
  { icon: Users, label: 'Clients' },
  { icon: Calendar, label: 'Calendar' },
];

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
    
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#0a1128] text-slate-300 flex flex-col min-h-screen border-r border-slate-800 transition-transform duration-300 ease-in-out shrink-0
        lg:static lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Brand Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 px-2.5 py-1.5 rounded text-white font-bold text-base tracking-wider">
              ADVOCATE
            </div>
            <div>
              <h1 className="text-xs font-bold tracking-widest text-white">ADVOCATE</h1>
              <p className="text-[10px] text-slate-400 uppercase tracking-tight">Digital Identity</p>
            </div>
          </div>
          
        
          <button 
            onClick={toggleSidebar}
            className="lg:hidden p-1 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Layer */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={index}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                  item.active 
                    ? 'bg-blue-600 text-white font-semibold' 
                    : 'hover:bg-slate-800/60 hover:text-white'
                }`}
              >
                <Icon size={18} className={item.active ? 'text-white' : 'text-slate-400'} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        
        <div className="p-4 border-t border-slate-800 bg-[#070d1f]">
          <div className="flex items-center gap-3 bg-slate-900/80 p-3 rounded-lg border border-slate-800">
            <RefreshCw size={16} className="text-blue-400" />
            <div>
              <p className="text-xs font-semibold text-white">NFC System</p>
              <p className="text-[10px] text-slate-400">Card Standby Active</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}