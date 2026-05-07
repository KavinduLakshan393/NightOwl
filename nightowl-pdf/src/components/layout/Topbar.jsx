import React from 'react';

const Topbar = ({ mode, setMode }) => {
  return (
    <header className="absolute top-0 left-0 right-0 h-14 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between px-4 z-20 opacity-0 hover:opacity-100 transition-opacity duration-300">
      <div className="flex items-center space-x-4">
        <span className="font-heading font-semibold">Document Title.pdf</span>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={() => setMode('original')}
          className={`px-3 py-1 rounded text-sm ${mode === 'original' ? 'bg-slate-700' : 'hover:bg-slate-800'}`}
        >
          Original
        </button>
        <button 
          onClick={() => setMode('easy')}
          className={`px-3 py-1 rounded text-sm ${mode === 'easy' ? 'bg-slate-700' : 'hover:bg-slate-800'}`}
        >
          Easy Reading
        </button>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-slate-800">
          <span className="text-sm">Theme</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
