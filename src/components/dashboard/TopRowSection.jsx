import React, { useState, useRef } from 'react';
import CardWrapper from '../ui/CardWrapper';
import { 
  CheckCircle, Award, Scale, Landmark, FileText, 
  Shield, User, ShieldAlert, Wifi, ShieldX, QrCode, Camera 
} from 'lucide-react';

export default function TopRowSection({ isCardBlocked }) {
  
  const [profileImage, setProfileImage] = useState(
    "https://i.pinimg.com/originals/d1/81/e4/d181e44cf0a7d5f9190bc96939da4164.png" // Premium Corporate Portrait Link
  );
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  
  const advocateData = {
    firstName: "Rahul",
    lastName: "Singh",
    title: "Adv. Rahul Singh",
    enrollmentNo: "MH/4776/2014",
    barCouncilRegNo: "M/12354/2014",
    stateBarCouncil: "Delhi Bar Council",
    isVerified: true,
    metrics: {
      practiceSince: "2014",
      experience: "10+ Years",
      enrollDate: "15 Aug 2014",
      renewalValid: "31 Dec 27"
    }
  };

  const classifications = [
    { label: 'Advocate', sub: 'Enrolled', active: true, icon: User, color: 'text-amber-600 bg-amber-50/60 border-amber-200' },
    { label: 'Senior Advocate', sub: 'Not Enrolled', active: false, icon: Award, color: 'text-slate-400 bg-slate-50 border-slate-200' },
    { label: 'Advocate-on-Record', sub: 'Eligible', active: true, icon: Scale, color: 'text-blue-600 bg-blue-50/60 border-blue-200' },
    { label: 'Law Officer', sub: 'Registered', active: true, icon: Landmark, color: 'text-emerald-600 bg-emerald-50/60 border-emerald-200' },
    { label: 'Government Counsel', sub: 'Registered', active: true, icon: FileText, color: 'text-sky-600 bg-sky-50/60 border-sky-200' },
    { label: 'Public Prosecutor', sub: 'Not Regist.', active: false, icon: Shield, color: 'text-slate-400 bg-slate-50 border-slate-200' },
    { label: 'Legal Consultant', sub: 'Registered', active: true, icon: User, color: 'text-indigo-600 bg-indigo-50/70 border-indigo-200' },
    { label: 'Corporate Counsel', sub: 'Registered', active: true, icon: ShieldAlert, color: 'text-teal-600 bg-teal-50/70 border-teal-200' },
  ];

  const verificationChecks = [
    { label: 'Bar Council Verification', status: isCardBlocked ? 'Suspended' : 'Verified', variant: 'success' },
    { label: 'Enrollment Date', status: advocateData.metrics.enrollDate, variant: 'neutral' },
    { label: 'License Validity', status: advocateData.metrics.renewalValid, variant: 'neutral_bold' },
    { label: 'Renewal Status', status: isCardBlocked ? 'Hold' : 'Up To Date', variant: 'success' },
    { label: 'Continuing Legal Education', status: isCardBlocked ? 'Suspended' : 'Completed', variant: 'info' },
    { label: 'Disciplinary Record', status: isCardBlocked ? 'Review Pending' : 'No Record Found', variant: 'success' },
  ];

  const nfcCardSpecs = {
    cardId: "AIC-IND-2025-123456",
    cardType: "NFC + QR Hybrid",
    issueDate: "01 Jan 2025",
    securityLevel: "High"
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch w-full">
      
    
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleImageUpload} 
        accept="image/*" 
        className="hidden" 
      />

    
      <CardWrapper title="Advocate Profile">
        <div className="flex flex-col justify-between h-full min-h-[240px] w-full overflow-hidden">
          
          <div className="flex gap-4 items-start w-full">
            
            <div className="relative shrink-0 select-none group">
              <div 
                onClick={() => fileInputRef.current.click()}
                className="w-[84px] h-[104px] bg-slate-100 rounded-xl border border-slate-200/80 flex items-center justify-center overflow-hidden shadow-2xs relative cursor-pointer"
              >
                <img 
                  src={profileImage} 
                  alt="Advocate Passport Size Document Asset" 
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Camera size={16} />
                </div>
              </div>
              <span className={`absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] px-2.5 py-0.5 rounded font-extrabold uppercase tracking-wider shadow-3xs border ${
                isCardBlocked ? 'bg-red-100 border-red-200 text-red-700' : 'bg-emerald-50 border-emerald-200 text-emerald-700'
              }`}>
                {isCardBlocked ? 'Suspended' : 'Active'}
              </span>
            </div>
            
          
            <div className="space-y-1.5 min-w-0 flex-1 text-left">
              <div className="flex items-center gap-1 max-w-full">
                <h4 className="text-base font-bold text-slate-900 tracking-tight truncate">{advocateData.title}</h4>
                {advocateData.isVerified && !isCardBlocked && (
                  <CheckCircle size={14} className="text-blue-500 fill-blue-500 text-white shrink-0" />
                )}
              </div>
              
              <div className="text-[11px] text-slate-500 leading-tight">
                <p className="font-medium opacity-75">Enrollment No.</p>
                <p className="font-bold text-slate-800 font-mono mt-0.5">{advocateData.enrollmentNo}</p>
              </div>
              
              <div className="text-[11px] text-slate-500 leading-tight pt-0.5">
                <p className="font-medium opacity-75">Bar Council Reg. No.</p>
                <p className="font-bold text-slate-800 font-mono mt-0.5">{advocateData.barCouncilRegNo}</p>
              </div>

              <div className="text-[10px] text-slate-400 font-bold leading-tight pt-1">
                <p className="opacity-75">State Bar:</p>
                <span className="text-slate-700 font-semibold block truncate mt-0.5">{advocateData.stateBarCouncil}</span>
              </div>
            </div>
          </div>

          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-2 border-t border-slate-100 pt-3.5 mt-4 text-center text-[10px] w-full">
            <div className="min-w-0 border-r border-slate-100 pb-0.5 sm:pb-0 text-left sm:text-center pl-1 sm:pl-0">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Practice Since</p>
              <p className="font-extrabold text-slate-800 mt-0.5 text-xs">{advocateData.metrics.practiceSince}</p>
            </div>
            <div className="min-w-0 sm:border-r border-slate-100 pb-0.5 sm:pb-0 text-left sm:text-center pl-1 sm:pl-0">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Experience</p>
              <p className="font-extrabold text-slate-800 mt-0.5 text-xs">{advocateData.metrics.experience}</p>
            </div>
            <div className="min-w-0 border-r border-slate-100 text-left sm:text-center pl-1 sm:pl-0">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Date of Enroll</p>
              <p className="font-bold text-slate-800 mt-0.5 whitespace-nowrap truncate text-[11px]">{advocateData.metrics.enrollDate}</p>
            </div>
            <div className="min-w-0 text-left sm:text-center pl-1 sm:pl-0">
              <p className="text-[8px] text-slate-400 font-bold uppercase tracking-tight">Renewal Valid</p>
              <p className={`font-black mt-0.5 text-[11px] truncate ${isCardBlocked ? 'text-red-600 line-through' : 'text-amber-600'}`}>
                {advocateData.metrics.renewalValid}
              </p>
            </div>
          </div>
        </div>
      </CardWrapper>

      
      <CardWrapper title="Professional Classification">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full content-start overflow-y-auto max-h-[220px] pr-1">
          {classifications.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={idx} 
                className={`px-2.5 py-2 rounded-lg border flex items-center gap-2.5 justify-start transition-all min-w-0 ${item.color}`}
              >
                <IconComponent size={14} className="shrink-0 opacity-95" />
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-[10px] font-bold leading-tight text-slate-800 truncate w-full">{item.label}</p>
                  <p className="text-[9px] font-medium opacity-75 mt-0.5 truncate w-full">
                    {isCardBlocked && item.active ? 'Suspended' : item.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardWrapper>

      
      <CardWrapper title="Bar Council Verification" badge={isCardBlocked ? "Suspended" : "Verified"}>
        <div className="space-y-2 text-xs h-full flex flex-col justify-between min-h-[220px] w-full">
          {verificationChecks.map((row, idx) => {
            let statusColor = "text-slate-700 font-medium";
            if (isCardBlocked && row.label !== 'Enrollment Date') {
              statusColor = "text-slate-400 line-through";
            } else if (row.variant === 'success') {
              statusColor = isCardBlocked ? 'text-red-500' : 'text-emerald-600 font-semibold';
            } else if (row.variant === 'info') {
              statusColor = isCardBlocked ? 'text-slate-400' : 'text-blue-600 font-semibold';
            } else if (row.variant === 'neutral_bold') {
              statusColor = 'text-slate-700 font-bold';
            }

            return (
              <div key={idx} className="flex items-center justify-between py-1.5 border-b border-slate-100 last:border-0 text-[11px] w-full gap-2">
                <div className="flex items-center gap-2 text-slate-500 min-w-0 flex-1">
                  <CheckCircle size={13} className={`shrink-0 ${isCardBlocked ? 'text-slate-300' : 'text-emerald-500 fill-emerald-50'}`} />
                  <span className="truncate font-medium text-slate-600 text-left">{row.label}</span>
                </div>
                <span className={`text-[10px] shrink-0 font-mono text-right ${statusColor}`}>{row.status}</span>
              </div>
            );
          })}
        </div>
      </CardWrapper>

      
      <CardWrapper title="NFC Identity Card">
        <div className="flex flex-col h-full justify-between min-h-[220px] w-full">
          
          
          <div className={`w-full aspect-[1.586/1] rounded-xl p-3.5 text-white relative overflow-hidden shadow-xs flex flex-col justify-between transition-all duration-500 select-none ${
            isCardBlocked 
              ? 'from-[#2b080a] via-[#4a1014] to-[#1a0305] border border-red-900 shadow-sm' 
              : 'bg-linear-to-br from-[#061434] via-[#091f4d] to-[#040d24] border border-slate-900 shadow-sm'
          }`}>
            <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-linear-to-l from-white/[0.04] to-transparent skew-x-12 pointer-events-none transform origin-top-right" />
            
            
            <div className="flex justify-between items-start w-full relative z-10">
              <div className="flex items-center gap-2">
                <Landmark size={14} className={isCardBlocked ? 'text-red-400' : 'text-slate-100'} />
                <div className="leading-tight text-left">
                  <h5 className="text-[9px] font-black tracking-widest text-white uppercase">Advocate</h5>
                  <p className="text-[6px] text-white/50 tracking-wider font-bold uppercase">Identity Card</p>
                </div>
              </div>
              <div className={isCardBlocked ? 'text-red-500/40' : 'text-white/80'}>
                <Wifi size={16} className="rotate-90 transform" />
              </div>
            </div>

            
            <div className="relative h-12 w-full flex items-center justify-between z-10 px-0.5">
              <div className="shrink-0">
                <div className="w-7.5 h-6 rounded bg-linear-to-br from-[#ffe082] via-[#ffd54f] to-[#c69a1c] relative p-0.5 border border-[#d4af37]/40 shadow-xs overflow-hidden">
                  <div className="w-full h-[1px] bg-black/10 absolute top-1/2 left-0" />
                  <div className="w-[1px] h-full bg-black/10 absolute left-1/3 top-0" />
                </div>
              </div>

            
              <div className="absolute right-14 bottom-0">
                <div className={`w-11 h-11 rounded-full border-1.5 bg-slate-100 flex items-center justify-center overflow-hidden shadow-xs relative ${
                  isCardBlocked ? 'border-red-500/50' : 'border-white/90'
                }`}>
                  <img 
                    src={profileImage} 
                    alt="Mini Badge View" 
                    className="w-full h-full object-cover object-top"
                  />
                  {isCardBlocked && (
                    <div className="absolute inset-0 bg-red-950/60 flex items-center justify-center">
                      <ShieldX size={12} className="text-red-400" />
                    </div>
                  )}
                </div>
              </div>

              <div className="shrink-0">
                <div className="w-8.5 h-8.5 bg-white p-0.5 rounded flex items-center justify-center shadow-xs">
                  <QrCode size={30} className={isCardBlocked ? 'text-red-950' : 'text-[#061434]'} />
                </div>
              </div>
            </div>

      
            <div className="w-full relative z-10 flex justify-between items-end border-t border-white/10 pt-1 text-left">
              <div className="min-w-0 flex-1 pr-2">
                <h6 className="text-[10px] font-extrabold tracking-wide text-white leading-none uppercase truncate">
                  {advocateData.title}
                </h6>
                <p className="text-[7.5px] text-white/60 font-mono tracking-tight mt-0.5 truncate">
                  {advocateData.enrollmentNo}
                </p>
              </div>
              <span className={`text-[6px] font-black px-1.5 py-0.5 rounded-xs uppercase tracking-wider shrink-0 border ${
                isCardBlocked ? 'bg-red-500/10 border-red-500/30 text-red-300' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
              }`}>
                {isCardBlocked ? 'Blocked' : 'Active'}
              </span>
            </div>
          </div>

        
          <div className="space-y-1.5 mt-3 text-[11px] border-t border-slate-100 pt-2 font-medium w-full text-left">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
              <div>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card ID</span>
                <span className="font-mono text-slate-700 block truncate font-bold text-[10.5px]">{nfcCardSpecs.cardId}</span>
              </div>
              <div>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card Type</span>
                <span className="text-slate-700 block truncate font-bold text-[10.5px]">{nfcCardSpecs.cardType}</span>
              </div>
              
              <div>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Card Status</span>
                <span className={`font-black block truncate text-[10.5px] ${isCardBlocked ? 'text-red-600' : 'text-emerald-600'}`}>
                  {isCardBlocked ? 'Suspended' : 'Active'}
                </span>
              </div>
              <div>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Issue Date</span>
                <span className="text-slate-700 block truncate font-bold text-[10.5px]">{nfcCardSpecs.issueDate}</span>
              </div>

              <div>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Expiry Date</span>
                <span className={`font-bold block truncate text-[10.5px] ${isCardBlocked ? 'text-red-500/70 line-through' : 'text-slate-700'}`}>
                  {advocateData.metrics.renewalValid}
                </span>
              </div>
              <div>
                <span className="block text-[8px] text-slate-400 font-bold uppercase tracking-wide">Security Level</span>
                <span className={`font-black block truncate text-[10.5px] ${isCardBlocked ? 'text-red-600' : 'text-emerald-600'}`}>
                  {isCardBlocked ? 'REVOKED' : nfcCardSpecs.securityLevel}
                </span>
              </div>
            </div>
          </div>

        </div>
      </CardWrapper>

    </div>
  );
}