import React from "react";
import appartements from "../data/livres.json";

const Logementtitle = () => {
  const selectedAppartementTittl = appartements[0]
  return (
    <div className="logement">
      <h2 className="logoement-title">{selectedAppartementTittl.title}</h2>
      <p className="logement-ville">{selectedAppartementTittl.location}</p>
   
    </div>
  );
};

export default Logementtitle;
