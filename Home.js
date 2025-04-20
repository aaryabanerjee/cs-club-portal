import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="matrix-content">
      <h1 className="matrix-header">Welcome to the CS Club!</h1>
      <div className="matrix-buttons">
        <Link to="/projects">
          <button className="matrix-button">Open Projects</button>
        </Link>
        <Link to="/submit-project">
          <button className="matrix-button">Submit Project</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;