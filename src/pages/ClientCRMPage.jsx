import React, { useState } from 'react';
import { useClientCRM } from '../context/ClientCRMContext';
import { 
  Users, UserPlus, Search, Filter, Mail, Phone, MoreVertical, 
  Eye, Trash2, X, CheckCircle, Clock, Building, Shield, 
  FileText, CreditCard, Activity, ArrowUpRight, Download, Send
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export default function ClientCRMPage() {
  const { clients, createClient, deleteClient, updateClient } = useClientCRM();

  const [view, setView] = useState('grid'); // 'grid' | 'profile'
  const [selectedClient, setSelectedClient] = useState(null);
  const [searchTerm, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [isModalOpen, setModalOpen] = useState(false);


  const [formData, setFormData] = useState({ name: '', type: 'Individual', email: '', phone: '', company: '', status: 'Active' });

  
  const filteredClients = clients.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.id.includes(searchTerm);
    const matchesFilter = filterType === 'All' || c.type === filterType;
    return matchesSearch && matchesFilter;
  });

  // Analytics Data
  const chartData = [
    { name: 'Corporate', value: clients.filter(c => c.type === 'Corporate').length },
    { name: 'Individual', value: clients.filter(c => c.type === 'Individual').length },
    { name: 'Retainer', value: clients.filter(c => c.type === 'Retainer').length || 0 },
  ];
  const COLORS = ['#1e3a8a', '#10b981', '#f59e0b'];

  const handleCreate = (e) => {
    e.preventDefault();
    createClient(formData);
    setModalOpen(false);
    setFormData({ name: '', type: 'Individual', email: '', phone: '', company: '', status: 'Active' });
  };

  return (
    <div className="space-y-6 w-full animate-in fade-in duration-300 text-left">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Clients', count: clients.length, icon: Users, color: 'text-blue-600' },
          { label: 'Corporate Entities', count: clients.filter(c=>c.type==='Corporate').length, icon: Building, color: 'text-indigo-600' },
          { label: 'Active Retainers', count: clients.filter(c=>c.type==='Retainer').length, icon: Shield, color: 'text-emerald-600' },
          { label: 'Pending Follow-ups', count: 3, icon: Clock, color: 'text-amber-600' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-lg bg-slate-50 ${stat.color}`}><stat.icon size={24}/></div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">{stat.label}</p>
              <h3 className="text-2xl font-black text-slate-800">{stat.count}</h3>
            </div>
          </div>
        ))}
      </div>

      {view === 'grid' ? (
        <>
         
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col lg:flex-row justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-2.5 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search by name, ID, or company..." 
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border rounded-lg text-sm focus:ring-2 ring-blue-500 outline-none"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <select 
                className="bg-slate-50 border rounded-lg px-3 py-2 text-sm font-bold text-slate-600"
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All Types</option>
                <option value="Individual">Individual</option>
                <option value="Corporate">Corporate</option>
                <option value="Retainer">Retainer</option>
              </select>
              <button 
                onClick={() => setModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-all"
              >
                <UserPlus size={18} /> Onboard Client
              </button>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredClients.map(client => (
              <div key={client.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all overflow-hidden group">
                <div className="p-5 space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-black text-lg">
                      {client.name[0]}
                    </div>
                    <span className={`text-[10px] font-black px-2 py-1 rounded-full uppercase ${
                      client.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
                    }`}>
                      {client.status}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-black text-slate-800 text-lg group-hover:text-blue-600 transition-colors">{client.name}</h4>
                    <p className="text-xs font-bold text-slate-400">ID: {client.id} • {client.type}</p>
                  </div>
                  <div className="space-y-2 py-2">
                    <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                      <Mail size={14} /> {client.email}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                      <Phone size={14} /> {client.phone}
                    </div>
                  </div>
                  <div className="pt-4 border-t flex gap-2">
                    <button 
                      onClick={() => { setSelectedClient(client); setView('profile'); }}
                      className="flex-1 bg-slate-50 hover:bg-blue-50 hover:text-blue-700 text-slate-600 py-2 rounded-lg text-xs font-black uppercase transition-all"
                    >
                      View Profile
                    </button>
                    <button 
                      onClick={() => deleteClient(client.id)}
                      className="p-2 text-slate-300 hover:text-red-600 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        
        <div className="space-y-6 animate-in slide-in-from-right duration-300">
          <button onClick={() => setView('grid')} className="text-sm font-bold text-blue-600 flex items-center gap-1 hover:underline">
            ← Back to Directory
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
           
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                <div className="w-24 h-24 rounded-full bg-blue-600 mx-auto mb-4 flex items-center justify-center text-white text-3xl font-black">
                  {selectedClient.name[0]}
                </div>
                <h2 className="text-xl font-black text-slate-800">{selectedClient.name}</h2>
                <p className="text-sm font-bold text-slate-400 mb-6">{selectedClient.type} Client</p>
                <div className="space-y-3 text-left">
                   <div className="p-3 bg-slate-50 rounded-xl">
                      <p className="text-[10px] font-black text-slate-400 uppercase">Primary Contact</p>
                      <p className="text-sm font-bold text-slate-700">{selectedClient.phone}</p>
                      <p className="text-sm font-medium text-slate-500">{selectedClient.email}</p>
                   </div>
                   <div className="p-3 bg-slate-50 rounded-xl">
                      <p className="text-[10px] font-black text-slate-400 uppercase">Billing Address</p>
                      <p className="text-sm font-medium text-slate-700">{selectedClient.address || 'Not Provided'}</p>
                   </div>
                </div>
              </div>

              <div className="bg-[#0f172a] p-5 rounded-2xl text-white">
                <h4 className="text-xs font-black text-amber-400 uppercase tracking-widest mb-4">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-2">
                  <button className="p-3 bg-white/10 rounded-xl flex flex-col items-center gap-2 hover:bg-white/20 transition-all">
                    <Send size={20} /> <span className="text-[10px] font-bold">Email</span>
                  </button>
                  <button className="p-3 bg-white/10 rounded-xl flex flex-col items-center gap-2 hover:bg-white/20 transition-all">
                    <FileText size={20} /> <span className="text-[10px] font-bold">Invoice</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
            
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 border-b bg-slate-50/50 flex justify-between items-center">
                  <h4 className="text-sm font-black text-slate-800 flex items-center gap-2">
                    <Activity size={18} className="text-blue-600" /> Associated Litigation Briefs
                  </h4>
                </div>
                <div className="p-4">
                  {selectedClient.cases?.length > 0 ? (
                    selectedClient.cases.map(c => (
                      <div key={c.id} className="flex items-center justify-between p-3 border rounded-xl mb-2">
                        <div>
                          <p className="text-sm font-black text-slate-800">{c.number}</p>
                          <p className="text-xs font-bold text-slate-400">{c.court}</p>
                        </div>
                        <span className="text-[10px] font-black bg-blue-50 text-blue-700 px-2 py-1 rounded uppercase">{c.status}</span>
                      </div>
                    ))
                  ) : (
                    <p className="text-center py-8 text-slate-400 text-sm italic">No active cases associated with this profile.</p>
                  )}
                </div>
              </div>

              
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                 <h4 className="text-sm font-black text-slate-800 mb-6 flex items-center gap-2">
                    <Clock size={18} className="text-blue-600" /> Interaction Timeline
                 </h4>
                 <div className="space-y-6 relative before:absolute before:left-2.5 before:top-0 before:bottom-0 before:w-0.5 before:bg-slate-100">
                    {selectedClient.timeline?.map((t, idx) => (
                      <div key={idx} className="flex gap-6 relative">
                        <div className="w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-sm z-10"></div>
                        <div>
                          <p className="text-sm font-black text-slate-800">{t.event}</p>
                          <p className="text-xs font-bold text-slate-400">{t.date}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-5 border-b flex justify-between items-center bg-slate-50">
              <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Onboard New Legal Entity</h3>
              <button onClick={() => setModalOpen(false)} className="text-slate-400 hover:text-slate-600"><X /></button>
            </div>
            <form onSubmit={handleCreate} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Full Name / Entity Name</label>
                  <input required type="text" className="w-full p-2.5 bg-slate-50 border rounded-xl font-bold text-sm" 
                    onChange={e => setFormData({...formData, name: e.target.value})}/>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Email Address</label>
                  <input required type="email" className="w-full p-2.5 bg-slate-50 border rounded-xl font-bold text-sm"
                    onChange={e => setFormData({...formData, email: e.target.value})}/>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Phone Number</label>
                  <input required type="text" className="w-full p-2.5 bg-slate-50 border rounded-xl font-bold text-sm"
                    onChange={e => setFormData({...formData, phone: e.target.value})}/>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Client Type</label>
                  <select className="w-full p-2.5 bg-slate-50 border rounded-xl font-bold text-sm"
                    onChange={e => setFormData({...formData, type: e.target.value})}>
                    <option value="Individual">Individual</option>
                    <option value="Corporate">Corporate</option>
                    <option value="Retainer">Retainer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-slate-400 uppercase mb-1">Company (Optional)</label>
                  <input type="text" className="w-full p-2.5 bg-slate-50 border rounded-xl font-bold text-sm"
                    onChange={e => setFormData({...formData, company: e.target.value})}/>
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white font-black py-3 rounded-xl uppercase tracking-widest text-xs hover:bg-blue-700 transition-all mt-4">
                Register to Registry
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}