import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';
import GenreList from './pages/GenreList';
import SubCategoryDetail from './pages/SubCategoryDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VerifyEmail from './pages/VerifyEmail';
import Dashboard from './pages/Dashboard';
import { genres } from './data/genres';

import LandingPage from './pages/LandingPage';

// Wrapper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === '/';

  return (
    <AuthProvider>
      <ScrollToTop />
      <div className="flex bg-[var(--color-cinematic-bg)] min-h-screen text-slate-200 font-sans selection:bg-[var(--color-cinematic-cyan)] selection:text-slate-900">
        {!isLandingPage && (
          <Sidebar
            genres={genres}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}

        <div className={`flex-1 flex flex-col min-w-0 transition-opacity ${isLandingPage ? 'w-full' : ''}`}>
          {!isLandingPage && (
            <Header
              onMenuClick={() => setSidebarOpen(true)}
              genres={genres}
            />
          )}

          <main className="flex-1 relative">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/browse" element={<Home genres={genres} />} />
              <Route path="/genre/:genreId" element={<GenreList genres={genres} />} />
              <Route path="/genre/:genreId/:subId" element={<SubCategoryDetail genres={genres} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/verify-email" element={<VerifyEmail />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<div className="p-10 text-center text-slate-500">Page not found</div>} />
            </Routes>
          </main>

          {!isLandingPage && (
            <footer className="border-t border-slate-800 p-8 text-center text-slate-500 text-sm mt-auto bg-slate-950">
              <p>© {new Date().getFullYear()} PromptSymphonyAI. All rights reserved.</p>
              <p className="mt-1 text-slate-600">Designed for Prompt Engineering & Theory Learning</p>
            </footer>
          )}
        </div>
      </div>
    </AuthProvider>
  );
};

export default App;
