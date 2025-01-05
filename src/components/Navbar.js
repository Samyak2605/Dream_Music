import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-links">
        <div className="nav-link-wrapper">
          <a href="#" className="nav-link">
            Music
          </a>
        </div>
        <div className="nav-link-wrapper">
          <a href="#" className="nav-link">
            Podcast
          </a>
        </div>
        <div className="nav-link-wrapper">
          <a href="#" className="nav-link">
            Live
          </a>
        </div>
        <div className="nav-link-wrapper">
          <a href="#" className="nav-link">
            Radio
          </a>
        </div>
      </div>

      <div className="nav-search">
        <FaSearch className="search-icon" />
        <input
          type="search"
          placeholder="Search artists, songs, or podcasts..."
          className="search-input"
        />
      </div>
    </nav>
  );
}

export default Navbar;
