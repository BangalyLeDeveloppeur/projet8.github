import React from "react";

const LogementDescription = ({ logement }) => {
  return (
    <div className="logemen ">
      <p>Voici le logoment avec id {logement.id} </p>
      <div className="logementDescription">
        <div className="description-contenair">
          <div className="chevron">
            <div className="chevron-conteneur">
              <p>Description</p>
              <span>
                <i className="fa-solid fa-chevron-up"></i>
              </span>
            </div>
            <p className="chevron-parag"> {logement.description} </p>
          </div>
        </div>

        <div className="description-contenair">
          <div className="chevron">
            <div className="chevron-conteneur">
              <p>Equipement</p>
              <span>
                <i className="fa-solid fa-chevron-up"></i>
              </span>
            </div>
            <p className="chevron-parag">{logement.equipments}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogementDescription;
