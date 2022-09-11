import "./Navbar.css";

import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  function hclick() {
    navigate("/");
  }
  function pclick() {
    navigate("/projects");
  }
  return (
    <div className="nav">
      <nav className="navbar ">
        <li className="navcomp" onClick={hclick} style={{ cursor: "pointer" }}>
          Home
        </li>
        <li className="navcomp" onClick={pclick} style={{ cursor: "pointer" }}>
          {" "}
          Projects
        </li>
        <li className="navcomp" style={{ cursor: "pointer" }}>
          {" "}
          contact
        </li>
        <li className="navcomp" style={{ cursor: "pointer" }}>
          {" "}
          xyz
        </li>
      </nav>
      <br />
    </div>
  );
}

export default Navbar;
