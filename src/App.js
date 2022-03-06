import React, { useState } from "react";
import "./App.css";
import moonIcon from "./assets/moon.png";
import sunIcom from "./assets/sun.png";
import Header from "./Component/Header/Header";
import KeyPad from "./Component/KeyPad/KeyPad";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className="app" data-theme={isDarkMode ? "dark" : ""}>
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div
            className="app_calculator_navbar_toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            <div
              className={`app_calculator_navbar_toggle_circle ${
                isDarkMode ? "app_calculator_navbar_toggle_circle_active" : ""
              }`}
            ></div>
          </div>
          <img src={isDarkMode ? moonIcon : sunIcom} alt="mode"></img>
        </div>
        <Header />
        <KeyPad />
      </div>
    </div>
  );
}

export default App;
