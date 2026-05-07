import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-4xl font-heading font-bold mb-8">NightOwl Library</h1>
      <div className="w-full max-w-2xl h-64 border-2 border-dashed border-slate-600 rounded-xl flex items-center justify-center hover:bg-slate-800 transition-colors cursor-pointer group">
        <div className="text-center">
          <p className="text-slate-400 group-hover:text-slate-200">Drag and drop your PDF here</p>
          <p className="text-sm text-slate-500 mt-2">or click to browse</p>
        </div>
      </div>
      
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-2xl font-heading font-semibold mb-4 border-b border-slate-700 pb-2">Recently Read</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholder for recent documents */}
          <div className="bg-slate-800 rounded-lg p-4 h-48 flex items-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
            <div className="relative z-10 w-full">
              <h3 className="text-lg font-medium truncate">Sample Document.pdf</h3>
              <div className="w-full bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-accent-color h-full w-1/3 rounded-full"></div>
              </div>
              <p className="text-xs text-slate-400 mt-1">33% completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
