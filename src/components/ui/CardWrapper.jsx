import React from 'react';

export default function CardWrapper({ title, children, badge }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-xs overflow-hidden flex flex-col h-full">
      <div className="px-4 py-3 bg-slate-50/70 border-b border-slate-200 flex items-center justify-between">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">
          {title}
        </h3>
        {badge && (
          <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] px-2 py-0.5 rounded-md font-bold uppercase">
            {badge}
          </span>
        )}
      </div>
      <div className="p-4 flex-1">
        {children}
      </div>
    </div>
  );
}