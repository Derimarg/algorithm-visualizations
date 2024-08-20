import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Algorithm Visualizer</h2>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        {/* Add more links if needed */}
      </ul>
    </nav>
  )
}

export default Navbar;