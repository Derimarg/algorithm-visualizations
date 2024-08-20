import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SortingVisualizer from "./components/SortingVisualizer/SortingVisualizer";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/sorting" Component={SortingVisualizer} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
