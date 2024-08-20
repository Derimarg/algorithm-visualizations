import React from 'react';
import './Home.css';
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <h1>Algorithm Visualizations</h1>
      <p>Select an algorithm to visualize:</p>
      <ul>
        <li><Link to="/sorting">Soritng Algorithms</Link></li>
        {/* add more links as you build more Visualizations */}
      </ul>
    </div >
  )
}

export default Home;