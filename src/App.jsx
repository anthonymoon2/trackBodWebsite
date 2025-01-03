import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import '../styles/index.css';

import { Link, useLocation } from 'react-router-dom';

function App(){
    return(
        <div>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={<Terms />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
            </Router>

            <Footer />
        </div>
    )
}

function Header() {
    const location = useLocation(); // Hook to get the current path 

    return(
        <header>
            <nav>
                <Link to="/"> trackBod </Link>

                <div className="nav-right">
                    <Link to="/" className={location.pathname === '/' ? 'current-nav' : ''}>
                        Terms and Conditions
                    </Link>
                    <Link to="/privacy" className={location.pathname === '/privacy' ? 'current-nav' : ''}>
                        Privacy Policy
                    </Link>
                </div>
            </nav>
        </header>
    );
}

function Footer() {
    return(
        <footer>
            <section>
            <a href="/">
                TERMS AND CONDITIONS
                <img src="images/arrow.png" alt="Arrow" />
            </a>
            <a href="/privacy">
                PRIVACY POLICY
                <img src="images/arrow.png" alt="Arrow" />
            </a>
            </section>
        </footer>
    )
}
export default App;