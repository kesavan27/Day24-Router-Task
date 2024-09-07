import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CyberSecurity from './pages/CyberSecurity';
import FullStack from './pages/FullStack';
import Career from './pages/career';
import DataScience from './pages/DataScience';
import All from './pages/All';
import './pages/HomePageStyle.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">EduWebNet</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/CyberSecurity">Cyber Security</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/FullStack">Full Stack</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/DataScience">Data Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/career">Career</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container">
          <Routes>
            <Route path="/" element={<All />} />
            <Route path="/CyberSecurity" element={<CyberSecurity />} />
            <Route path="/FullStack" element={<FullStack />} />
            <Route path="/DataScience" element={<DataScience />} />
            <Route path="/career" element={<Career />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
