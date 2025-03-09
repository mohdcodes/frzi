import LoginPage from './pages/LoginPage';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import StatusPage from './pages/StatusPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Link to={'/'} className="flex items-center space-x-2">
                <img
                  src="logo.png"
                  alt="République Française"
                  className="h-20"
                />
              </Link>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-blue-900">
                  France-Visas
                </span>
                <span className="text-xs text-gray-600">
                  Liberté Égalité Fraternité
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <span className="mr-2">Language:</span>
              <select className="border rounded px-4 py-1 ">
                <option>English</option>
                <option>العربية</option>
                <option>中文</option>
                <option>Español</option>
                <option>Français</option>
                <option>Русский</option>
              </select>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/status" element={<StatusPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
