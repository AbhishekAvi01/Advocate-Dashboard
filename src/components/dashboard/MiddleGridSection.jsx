// import React from 'react';
// import CardWrapper from '../ui/CardWrapper';
// import { 
//   Scale, ShieldAlert, FileText, Users, Landmark, 
//   UserCheck, QrCode, ShieldCheck, Key, Ticket, 
//   Calendar, CheckSquare, MessageSquare 
// } from 'lucide-react';

// export default function MiddleGridSection() {
//   return (
    
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-stretch">
      
      
//       <CardWrapper title="Practice Areas">
//         <div className="grid grid-cols-1 gap-1.5">
//           {[
//             { label: 'Civil Law', icon: Scale, color: 'text-blue-600 bg-blue-50' },
//             { label: 'Criminal Law', icon: ShieldAlert, color: 'text-red-600 bg-red-50' },
//             { label: 'Corporate Law', icon: FileText, color: 'text-indigo-600 bg-indigo-50' },
//             { label: 'Family Law', icon: Users, color: 'text-emerald-600 bg-emerald-50' },
//             { label: 'Taxation Law', icon: Landmark, color: 'text-amber-600 bg-amber-50' },
//             { label: 'Cyber Law', icon: Key, color: 'text-purple-600 bg-purple-50' },
//           ].map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <div key={idx} className="flex items-center gap-2.5 p-1.5 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors">
//                 <div className={`p-1 rounded ${item.color}`}><Icon size={13} /></div>
//                 <span className="text-xs font-semibold text-slate-700">{item.label}</span>
//               </div>
//             );
//           })}
//         </div>
//       </CardWrapper>

    
//       <CardWrapper title="Judiciary Access">
//         <div className="space-y-1.5">
//           {[
//             { court: 'Supreme Court', status: 'Eligible' },
//             { court: 'High Court', status: 'Eligible' },
//             { court: 'District Court', status: 'All Districts' },
//             { court: 'Tribunal Access', status: 'Authorized' },
//             { court: 'Special Court', status: 'Authorized' },
//             { court: 'e-Courts Access', status: 'Enabled' },
//           ].map((row, idx) => (
//             <div key={idx} className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px]">
//               <span className="font-medium text-slate-700 truncate">{row.court}</span>
//               <span className="font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded text-[9px] shrink-0">{row.status}</span>
//             </div>
//           ))}
//         </div>
//       </CardWrapper>

      
//       <CardWrapper title="Digital Credentials">
//         <div className="space-y-2 text-xs">
//           {[
//             { name: 'QR Code Vert.', icon: QrCode, status: 'Enabled' },
//             { name: 'Digital Sign', icon: FileText, status: 'Verified' },
//             { name: 'e-KYC Check', icon: UserCheck, status: 'Verified' },
//             { name: 'Aadhaar Auth', icon: ShieldCheck, status: 'Verified' },
//             { name: 'Govt. ID Match', icon: Landmark, status: 'Verified' },
//           ].map((row, idx) => {
//             const Icon = row.icon;
//             return (
//               <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0 text-[11px]">
//                 <div className="flex items-center gap-2 text-slate-600 truncate">
//                   <Icon size={13} className="text-slate-400 shrink-0" />
//                   <span className="truncate">{row.name}</span>
//                 </div>
//                 <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1 py-0.5 rounded shrink-0">{row.status}</span>
//               </div>
//             );
//           })}
//         </div>
//       </CardWrapper>

    
//       <CardWrapper title="Court Access">
//         <div className="space-y-1.5">
//           {[
//             { service: 'Court Entry Pass', action: 'Active', color: 'text-emerald-600 bg-emerald-50' },
//             { service: 'Digital Attend.', action: 'Enabled', color: 'text-blue-600 bg-blue-50' },
//             { service: 'Chamber Access', action: 'Authorized', color: 'text-indigo-600 bg-indigo-50' },
//             { service: 'Parking Slot', action: 'Authorized', color: 'text-slate-600 bg-slate-100' },
//             { service: 'Visitor Auth', action: 'Enabled', color: 'text-emerald-600 bg-emerald-50' },
//             { service: 'Gate Pass NFC', action: 'Enabled', color: 'text-blue-600 bg-blue-50' },
//           ].map((row, idx) => (
//             <div key={idx} className="flex items-center justify-between p-1.5 rounded-lg border border-slate-100 text-[11px]">
//               <span className="font-medium text-slate-700 truncate">{row.service}</span>
//               <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 ${row.color}`}>{row.action}</span>
//             </div>
//           ))}
//         </div>
//       </CardWrapper>

    
//       <CardWrapper title="Client Services">
//         <div className="space-y-1.5">
//           {[
//             { label: 'Appointment Booking', desc: 'Schedule & Manage', icon: Calendar },
//             { label: 'Consultation Requests', desc: 'Manage Requests', icon: MessageSquare },
//             { label: 'Case Tracking', desc: 'Track Your Cases', icon: CheckSquare },
//             { label: 'Secure Comms', desc: 'Encrypted Routing', icon: ShieldCheck },
//             { label: 'Document Exchange', desc: 'Share & Receive', icon: FileText },
//           ].map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <div key={idx} className="p-1.5 rounded-lg bg-slate-50/60 border border-slate-100 flex items-center gap-2">
//                 <Icon size={13} className="text-blue-500 shrink-0" />
//                 <div className="min-w-0">
//                   <p className="text-[11px] font-bold text-slate-800 truncate leading-tight">{item.label}</p>
//                   <p className="text-[9px] text-slate-400 truncate font-medium">{item.desc}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </CardWrapper>

//     </div>
//   );
// }



//-------------------------------------------------------
import React, { useMemo } from 'react';
import CardWrapper from '../ui/CardWrapper';
import { 
  Scale, ShieldAlert, FileText, Users, Landmark, 
  UserCheck, QrCode, ShieldCheck, Key, Ticket, 
  Calendar, CheckSquare, MessageSquare, HelpCircle 
} from 'lucide-react';

const masterPracticeAreas = [
  { label: 'Civil Law', icon: Scale, color: 'text-blue-600 bg-blue-50' },
  { label: 'Criminal Law', icon: ShieldAlert, color: 'text-red-600 bg-red-50' },
  { label: 'Corporate Law', icon: FileText, color: 'text-indigo-600 bg-indigo-50' },
  { label: 'Family Law', icon: Users, color: 'text-emerald-600 bg-emerald-50' },
  { label: 'Taxation Law', icon: Landmark, color: 'text-amber-600 bg-amber-50' },
  { label: 'Cyber Law', icon: Key, color: 'text-purple-600 bg-purple-50' },
];

export default function MiddleGridSection({ searchQuery }) {
  // Dynamic Real-time filtering engine logic
  const filteredPracticeAreas = useMemo(() => {
    return masterPracticeAreas.filter(area => 
      area.label.toLowerCase().includes((searchQuery || '').toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-stretch">
      
      {/* 1. DYNAMIC PRACTICE AREAS WITH SEARCH MATCHING */}
      <CardWrapper title="Practice Areas">
        <div className="space-y-1.5 h-full flex flex-col justify-between">
          <div className="space-y-1.5">
            {filteredPracticeAreas.length > 0 ? (
              filteredPracticeAreas.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2.5 p-1.5 rounded-lg border border-slate-100 hover:bg-slate-50 transition-colors animate-in fade-in duration-200">
                    <div className={`p-1 rounded ${item.color}`}><Icon size={13} /></div>
                    <span className="text-xs font-semibold text-slate-700">{item.label}</span>
                  </div>
                );
              })
            ) : (
              <div className="text-center py-6 text-slate-400 text-xs flex flex-col items-center justify-center gap-1">
                <HelpCircle size={18} className="text-slate-300" />
                <p className="font-medium">No practice area matches your search.</p>
              </div>
            )}
          </div>
          <button className="text-[11px] font-bold text-blue-600 text-center mt-2 hover:underline w-full block">
            View All Specialized Sectors
          </button>
        </div>
      </CardWrapper>

      {/* 2. JUDICIARY ACCESS */}
      <CardWrapper title="Judiciary Access">
        <div className="space-y-1.5">
          {[
            { court: 'Supreme Court', status: 'Eligible' },
            { court: 'High Court', status: 'Eligible' },
            { court: 'District Court', status: 'All Districts' },
            { court: 'Tribunal Access', status: 'Authorized' },
            { court: 'Special Court', status: 'Authorized' },
            { court: 'e-Courts Access', status: 'Enabled' },
          ].map((row, idx) => (
            <div key={idx} className="flex items-center justify-between p-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[11px]">
              <span className="font-medium text-slate-700 truncate">{row.court}</span>
              <span className="font-bold text-emerald-600 bg-emerald-50 px-1 py-0.5 rounded text-[9px] shrink-0">{row.status}</span>
            </div>
          ))}
        </div>
      </CardWrapper>

      {/* 3. DIGITAL CREDENTIALS */}
      <CardWrapper title="Digital Credentials">
        <div className="space-y-2 text-xs">
          {[
            { name: 'QR Code Vert.', icon: QrCode, status: 'Enabled' },
            { name: 'Digital Sign', icon: FileText, status: 'Verified' },
            { name: 'e-KYC Check', icon: UserCheck, status: 'Verified' },
            { name: 'Aadhaar Auth', icon: ShieldCheck, status: 'Verified' },
            { name: 'Govt. ID Match', icon: Landmark, status: 'Verified' },
          ].map((row, idx) => {
            const Icon = row.icon;
            return (
              <div key={idx} className="flex items-center justify-between py-1 border-b border-slate-100 last:border-0 text-[11px]">
                <div className="flex items-center gap-2 text-slate-600 truncate">
                  <Icon size={13} className="text-slate-400 shrink-0" />
                  <span className="truncate">{row.name}</span>
                </div>
                <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1 py-0.5 rounded shrink-0">{row.status}</span>
              </div>
            );
          })}
        </div>
      </CardWrapper>

      {/* 4. COURT ACCESS SERVICES */}
      <CardWrapper title="Court Access">
        <div className="space-y-1.5">
          {[
            { service: 'Court Entry Pass', action: 'Active', color: 'text-emerald-600 bg-emerald-50' },
            { service: 'Digital Attend.', action: 'Enabled', color: 'text-blue-600 bg-blue-50' },
            { service: 'Chamber Access', action: 'Authorized', color: 'text-indigo-600 bg-indigo-50' },
            { service: 'Parking Slot', action: 'Authorized', color: 'text-slate-600 bg-slate-100' },
            { service: 'Visitor Auth', action: 'Enabled', color: 'text-emerald-600 bg-emerald-50' },
            { service: 'Gate Pass NFC', action: 'Enabled', color: 'text-blue-600 bg-blue-50' },
          ].map((row, idx) => (
            <div key={idx} className="flex items-center justify-between p-1.5 rounded-lg border border-slate-100 text-[11px]">
              <span className="font-medium text-slate-700 truncate">{row.service}</span>
              <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded shrink-0 ${row.color}`}>{row.action}</span>
            </div>
          ))}
        </div>
      </CardWrapper>

      {/* 5. CLIENT SERVICES */}
      <CardWrapper title="Client Services">
        <div className="space-y-1.5">
          {[
            { label: 'Appointment Booking', desc: 'Schedule & Manage', icon: Calendar },
            { label: 'Consultation Requests', desc: 'Manage Requests', icon: MessageSquare },
            { label: 'Case Tracking', desc: 'Track Your Cases', icon: CheckSquare },
            { label: 'Secure Comms', desc: 'Encrypted Routing', icon: ShieldCheck },
            { label: 'Document Exchange', desc: 'Share & Receive', icon: FileText },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="p-1.5 rounded-lg bg-slate-50/60 border border-slate-100 flex items-center gap-2 cursor-pointer hover:bg-slate-50 transition-colors">
                <Icon size={13} className="text-blue-500 shrink-0" />
                <div className="min-w-0">
                  <p className="text-[11px] font-bold text-slate-800 truncate leading-tight">{item.label}</p>
                  <p className="text-[9px] text-slate-400 truncate font-medium">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </CardWrapper>

    </div>
  );
}