import React from "react";

const Logementtitle = ({logement}) => {
  return (
    <div className="logement">
      <h2 className="logoement-title">{logement.title}</h2>
      <p className="logement-ville">{logement.location}</p>
   
    </div>
  );
};

export default Logementtitle;
