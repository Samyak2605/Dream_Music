import React from "react";
import { BadgeCheck } from "lucide-react";
import "./Main.css";
import MusicPlayer from "./MusicPlayer";

const Main = () => {
  return (
    <div className="main-content">
      <div className="artist-banner">
        <img src="/Background.png" alt="Background" className="back-image" />
        <div className="banner-gradient">
          <img src="/Michael.png" alt="Michael" className="artist-image" />
          <div className="banner-content">
            <div className="verified-badge">
              <BadgeCheck className="verified-icon" />
              <span>Verified Artist</span>
            </div>
            <h1>Michael Jackson</h1>
            <p className="monthly-listeners">27,852,501 monthly listeners</p>
          </div>
        </div>
      </div>
      <MusicPlayer />
    </div>
  );
};

export default Main;
