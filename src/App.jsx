import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

import Home from './components/Home';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import '../styles/index.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: '#151515',
        padding: '10px 20px',
        color: '#FFFFFF',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 9999,
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)', 
      }}
    >
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div className={`nav-right ${menuOpen ? 'open' : ''}`}>
          <Link
            to="/"
            className={location.pathname === '/' ? 'current-nav' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/terms"
            className={location.pathname === '/terms' ? 'current-nav' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Terms and Conditions
          </Link>
          <Link
            to="/privacy"
            className={location.pathname === '/privacy' ? 'current-nav' : ''}
            onClick={() => setMenuOpen(false)}
          >
            Privacy Policy
          </Link>
        </div>

        {/* Here's the button with both icons layered */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`menu-button ${menuOpen ? 'open' : ''}`}
        >
          <Menu className="icon-hamburger" size={28} />
          <X className="icon-x" size={28} />
        </button>
      </nav>

      <style>
        {`
          /* Basic reset for the button */
          .menu-button {
            position: relative; /* needed for absolute-positioned icons inside */
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            width: 32px;
            height: 32px;
            display: none; /* hidden on large screens by default */
            outline: none;
          }

          /* We'll overlap the two icons exactly */
          .icon-hamburger,
          .icon-x {
            position: absolute;
            top: 0;
            left: 0;
            transition: 
              opacity 0.25s ease-in-out,
              transform 0.25s ease-in-out;
          }

          /* Start with X icon hidden */
          .icon-x {
            opacity: 0;
            transform: rotate(90deg); 
          }

          /* When .open is toggled, hide the hamburger and show the X */
          .menu-button.open .icon-hamburger {
            opacity: 0;
            transform: rotate(90deg);
          }
          .menu-button.open .icon-x {
            opacity: 1;
            transform: rotate(0deg);
          }

          /* By default, show links horizontally */
          .nav-right {
            display: flex;
            gap: 20px;
          }
          .nav-right a {
            color: white;
            text-decoration: none;
          }

          /* Current tab in green */
          .current-nav {
            color: #00ff00;
          }

          /* Mobile styles */
          @media (max-width: 768px) {
            .menu-button {
              display: block; /* show hamburger on smaller screens */
            }

            .nav-right {
              display: none;
              flex-direction: column;
              position: fixed;
              top: 60px; 
              left: 0;
              width: 100%;
              height: calc(100% - 60px);
              background-color: rgba(21, 21, 21, 0.9);
              padding: 20px;
              z-index: 500; /* below the nav bar's 9999 */
            }
            .nav-right.open {
              display: flex;
            }

            .nav-right a {
              padding: 15px;
              text-align: left;
              display: block;
              font-size: 1.1rem;
            }
          }

          /* Larger screens: always show the nav horizontally */
          @media (min-width: 769px) {
            .nav-right {
              display: flex !important;
              position: static;
              background: none;
              width: auto;
              height: auto;
            }
          }
        `}
      </style>
    </header>
  );
}

function Footer() {
  return (
    <footer style={{ marginTop: '80px' }}>
      <section>
        <a href="/terms">
          TERMS AND CONDITIONS
          <img src="images/arrow.png" alt="Arrow" />
        </a>
        <a href="/privacy">
          PRIVACY POLICY
          <img src="images/arrow.png" alt="Arrow" />
        </a>
      </section>
    </footer>
  );
}

export default App;
