// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TeamPage from './TeamPage';
import './App.css'; // Import the CSS file

function HomePage() {
  return (
    <div className="home-page-container">
      <h1 className="home-title">Hello, this is my first Cloud Project</h1>
      <Link to="/team" className="continue-link"><button className="continue-button">Continue</button></Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={HomePage} />
        <Route path="/team" component={TeamPage} />
      </div>
    </Router>
  );
}

export default App;
