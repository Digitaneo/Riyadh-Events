import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Calendar from './pages/Calendar';
import Qiddiya from './pages/Qiddiya';
import About from './pages/About';
import Contact from './pages/Contact';
import Order from './pages/Order';
import EventDetails from './pages/EventDetails';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="font-body text-right min-h-screen flex flex-col">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:id" element={<EventDetails />} />
            <Route path="/events/:id/order" element={<Order />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/qiddiya" element={<Qiddiya />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Keeping generic order route as fallback if needed, though mostly replaced by the dynamic one above */}
            <Route path="/order" element={<Order />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;