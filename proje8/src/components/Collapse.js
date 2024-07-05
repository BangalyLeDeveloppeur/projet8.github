import React, { useState } from "react";


const Collapse = ({ title, content }) => {
    const [open, setOpen] = useState(false);
  // collapse pour la fermeture et ouverture au click sur les chevrons//
    const handleChangeOpen = () => {
        setOpen(!open);
    };
   
  return (
    <div>
      <div className="description">
        <h2>{title}</h2>
        <button onClick={() => handleChangeOpen()}>
          <i className="fa-solid fa-chevron-up"></i>
        </button>
      </div>
      {open ? content : ""}
    </div>
  );
};

export default Collapse;
