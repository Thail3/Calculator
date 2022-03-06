import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header custom-scroll">
      <div className="header_history">
        <p>10+2</p>
        <p>10+2</p>
        <p>10+2</p>
      </div>
      <br></br>
      <div className="header_expression custom-scroll">
        <p>10+50+89</p>
      </div>
      <p className="header_result">149</p>
    </div>
  );
}

export default Header;
