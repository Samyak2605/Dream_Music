import {
  Home,
  TrendingUp,
  Library,
  Compass,
  Settings,
  LogOut,
} from "lucide-react";

import "./Sidebar.css";
import "./Navbar";

export function Sidebar() {
  return (
    <div className="sidebar">
      <img src="/Logo.png" alt="Logo" className="logo-image" />

      <nav className="navs-links">
        <p>Menu</p>
        <a href="/" className="nav-item-top">
          <Home size={20} color="red" />
          Home
        </a>
        <a href="/trends" className="nav-item-top">
          <TrendingUp size={20} color="red" />
          Trends
        </a>
        <a href="/library" className="nav-item-top">
          <Library size={20} color="red" />
          Library
        </a>
        <a href="/discover" className="nav-item-top">
          <Compass size={20} color="red" />
          Discover
        </a>
      </nav>

      <div className="footer-links">
        <p>General</p>
        <a href="/settings" className="nav-item">
          <Settings size={20} color="red" />
          Settings
        </a>
        <a href="/logout" className="nav-item">
          <LogOut size={20} color="red" />
          Log Out
        </a>
      </div>
    </div>
  );
}
