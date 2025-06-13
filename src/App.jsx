import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Clubs from './pages/Clubs';
import ClubDetail from './pages/ClubDetail'; // ✅ Tambahkan ini
import About from './pages/About';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clubs" element={<Clubs />} />
        <Route path="/clubs/:clubId" element={<ClubDetail />} /> {/* ✅ Tambahkan ini */}
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
