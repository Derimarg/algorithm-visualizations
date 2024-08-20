import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sorting" element={<SortingVisualizer />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
