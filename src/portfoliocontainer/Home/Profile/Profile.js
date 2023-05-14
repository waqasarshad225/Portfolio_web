import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">

        <div className="profile-details-role">
        <div className="profile-details-name">
          <span className="primary-text">
            {" "}
            Hello, I'M <span className="highlighted-text">WAQAS</span>
          </span>
        </div>
          <span className="primary-text">
            {" "}
            <h1>
              {""}
              <Typical
                loop={Infinity}
                steps={[
                  "Ethusiastic Dev 😡 ",
                  1000,
                  "Full Stack Developer 💻",
                  1000,
                  "MERN Stack Dev 😎",
                  1000,
                  "Cross Platform Dev 🌍",
                  1000,
                  "React/React Native Dev 📱",
                  1000,
                ]}
              />
            </h1>
            <span className="profile-role-tagline">
              Knac of building applications with front and back end operations.
            </span>
          </span>
          <div className="profile-options">
          <button className="btn primary-btn">
            {""}
            Hire Me{" "}
            <a href="ehizcv.pdf" download="Ehiedu ehizcv.pdf">
            </a>
          </button>
          <button className="btn highlighted-btn">Get Resume</button>
        </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
        
      </div>
    </div>
  </div>
  );
}
