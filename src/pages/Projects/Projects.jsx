import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Projcard from "../../components/ProjCard/Projcard";
import "./Projects.css";
import Pdat from "../../requesits/Projdata.json";

function Projects() {
  return (
    <div>
      <Navbar />
      <div className="Projectcard">
        {Pdat.map((dati, index) => {
          return <Projcard dat={dati} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
