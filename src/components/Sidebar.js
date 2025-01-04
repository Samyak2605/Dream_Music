// import { Link } from "react-router-dom";
// import {
//   Home,
//   TrendingUp,
//   Library,
//   Compass,
//   Settings,
//   LogOut,
// } from "lucide-react";

// import "./Sidebar.css";

// export function Sidebar() {
//   return (
//     <div className="sidebar">
//       <img src="/Logo.png" alt="Logo" className="logo-image" />

//       <nav className="navs-links">
//         Menu
//         <Link to="/" className="nav-item-top">
//           <Home size={20} color="red" />
//           Home
//         </Link>
//         <Link to="/trends" className="nav-item-top">
//           <TrendingUp size={20} color="red" />
//           Trends
//         </Link>
//         <Link to="/library" className="nav-item-top">
//           <Library size={20} color="red" />
//           Library
//         </Link>
//         <Link to="/discover" className="nav-item-top">
//           <Compass size={20} color="red" />
//           Discover
//         </Link>
//       </nav>
//       <div className="footer-links">
//         General
//         <Link to="/settings" className="nav-item">
//           <Settings size={20} color="red" />
//           Settings
//         </Link>
//         <Link to="/logout" className="nav-item">
//           <LogOut size={20} color="red" />
//           Log Out
//         </Link>
//       </div>
//     </div>
//   );
// }

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

// import React from "react";
// import {
//   Home,
//   TrendingUp,
//   Library,
//   Compass,
//   Settings,
//   LogOut,
//   Music2,
// } from "lucide-react";
// import "./Sidebar.css";

// export function Sidebar() {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <Music2 size={24} className="logo-icon" />
//         <span className="logo-text">DreamMusic</span>
//       </div>

//       <nav className="nav-links">
//         <p className="nav-section-title">Menu</p>
//         <a href="/" className="nav-item">
//           <Home size={20} />
//           <span>Home</span>
//         </a>
//         <a href="/trends" className="nav-item">
//           <TrendingUp size={20} />
//           <span>Trends</span>
//         </a>
//         <a href="/library" className="nav-item">
//           <Library size={20} />
//           <span>Library</span>
//         </a>
//         <a href="/discover" className="nav-item">
//           <Compass size={20} />
//           <span>Discover</span>
//         </a>
//       </nav>

//       <div className="footer-links">
//         <p className="nav-section-title">General</p>
//         <a href="/settings" className="nav-item">
//           <Settings size={20} />
//           <span>Settings</span>
//         </a>
//         <a href="/logout" className="nav-item">
//           <LogOut size={20} />
//           <span>Log Out</span>
//         </a>
//       </div>
//     </div>
//   );
// }
