
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Viewer from './pages/Viewer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-slate-100 font-body transition-colors duration-300">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/viewer" element={<Viewer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
