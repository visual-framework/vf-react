import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Chatbot from './components/Chatbot';
import VFBadge from './components/VFBadge';
import VFBackToTop from './components/VFBackToTop';
import VFButton from './components/VFButton';
import VFCard from './components/VFCard';
import VFBlockquote from './components/VFBlockquote';
import VFHero from './components/VFHero';
import VFBanner from './components/VFBanner';
import VFTabs from './components/VFTabs';

// Create a wrapper component to handle route changes
function RouteChangeHandler({ children }) {
  const location = useLocation();

  useEffect(() => {
    // This runs on every route change
    const vfMegaMenuContent = document.querySelector('.vf-mega-menu__content');
    if (vfMegaMenuContent) {
      vfMegaMenuContent.setAttribute('aria-hidden', 'true');
      // Remove expanded state from any active menu items
      const expandedLinks = document.querySelectorAll('.vf-mega-menu__link.is-expanded');
      expandedLinks.forEach(link => link.click());
    }
  }, [location]); // Dependency on location triggers this effect on route changes

  return children;
}

function App() {
  // Use HashRouter instead of BrowserRouter for GitHub Pages
  return (
    <Router basename="/vf-react">
      <RouteChangeHandler>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/components/vf-badge" element={<VFBadge />} />
          <Route path="/components/vf-back-to-top" element={<VFBackToTop />} />
          <Route path="/components/vf-button" element={<VFButton />} />
          <Route path="/components/vf-card" element={<VFCard />} />
          <Route path="/components/vf-blockquote" element={<VFBlockquote />} />
          <Route path="/components/vf-hero" element={<VFHero />} />
          <Route path="/components/vf-banner" element={<VFBanner />} />
          <Route path="/components/vf-tabs" element={<VFTabs />} />
        </Routes>
        <Footer />
      </RouteChangeHandler>
    </Router>
  );
}

export default App;
