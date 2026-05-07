import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 hidden md:flex flex-col">
      <div className="h-14 flex items-center px-4 border-b border-slate-800">
        <span className="font-heading font-bold text-lg tracking-wider text-accent-color">NightOwl</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Outline</h3>
        <ul className="space-y-2 text-sm text-slate-300">
          <li className="hover:text-white cursor-pointer py-1">1. Introduction</li>
          <li className="hover:text-white cursor-pointer py-1 pl-4">1.1 Background</li>
          <li className="hover:text-white cursor-pointer py-1">2. Methodology</li>
          <li className="hover:text-white cursor-pointer py-1">3. Results</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
