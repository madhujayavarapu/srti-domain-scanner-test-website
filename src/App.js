import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home } from './pages/HomePage';
import { About } from './pages/About';
import { Profile } from './pages/Profile'
import { EditProfile } from './pages/EditProfile';
import { setCookie } from './utils/cookie';
import './App.css';

const NotFound = () => <h1>404 - Page Not Found</h1>;


const RoutesList = () => (
  <ul>
    <li><Link to="/en">Home</Link></li>
    <li><Link to="/en/about">About</Link></li>
    <li><Link to="/en/profile">Profile</Link></li>
  </ul>
);

// App component with routing
const App = () => {
    const dropCookie = setCookie('manualCookie', 'true', 1);

    return (
        <div className='wrapper'>
            <Router>
                <nav>
                    <RoutesList />
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/en" element={<Home />} />
                    <Route path="/en/about" element={<About />} />
                    <Route path="/en/profile" element={<Profile />} />
                    <Route path="/en/profile/:id/edit" element={<EditProfile />} />
                    <Route path="/en/profile/:id/:name/edit" element={<EditProfile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>

                <div style={{ height: '30vh', padding: '20px', backgroundColor: '#f1f7f8' }}>
                    <h2>Section Heading</h2>
                    <p>Scroll to the bottom of the page or click the button to drop a cookie!</p>
                </div>
                <div style={{ height: '30vh', padding: '20px', backgroundColor: '#fff' }}>
                    <h2>Section Heading</h2>
                    <p>Scroll to the bottom of the page or click the button to drop a cookie!</p>
                </div>
                <div style={{ height: '30vh', padding: '20px', backgroundColor: '#f1f7f8' }}>
                    <h2>Section Heading</h2>
                    <p>Scroll to the bottom of the page or click the button to drop a cookie!</p>
                </div>
                <div style={{ height: '30vh', padding: '20px', backgroundColor: '#fff' }}>
                    <h2>Section Heading</h2>
                    <p>Scroll to the bottom of the page or click the button to drop a cookie!</p>
                </div>
                <div style={{ height: '30vh', padding: '20px', backgroundColor: '#f1f7f8' }}>
                    <h2>Section Heading</h2>
                    <p>Scroll to the bottom of the page or click the button to drop a cookie!</p>
                </div>
                <div style={{ height: '30vh', padding: '20px', backgroundColor: '#fff' }}>
                    <h2>Section Heading</h2>
                    <p>Scroll to the bottom of the page or click the button to drop a cookie!</p>
                </div>

                <button onClick={dropCookie}>Drop Cookie</button>
            </Router>
        </div>
    );
};

export default App;
