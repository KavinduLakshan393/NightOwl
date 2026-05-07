import React from 'react';
import Topbar from '../components/layout/Topbar';
import Sidebar from '../components/layout/Sidebar';
import PDFCanvasView from '../components/reader/PDFCanvasView';
import EasyReadingView from '../components/reader/EasyReadingView';

const Viewer = () => {
  const [mode, setMode] = React.useState('original'); // 'original' or 'easy'

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col relative">
        <Topbar mode={mode} setMode={setMode} />
        
        <main className="flex-1 overflow-auto bg-slate-950 flex justify-center">
          {mode === 'original' ? <PDFCanvasView /> : <EasyReadingView />}
        </main>
      </div>
    </div>
  );
};

export default Viewer;
