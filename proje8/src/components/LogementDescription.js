import React from "react";
import Collapse from "./Collapse";

const LogementDescription = ({ logement }) => {
  return (
    <div className="logemen ">
      <p>Voici le logoment avec id {logement.id} </p>
      <div className="logementDescription">
        <div className="description-contenair">
          <div className="chevron">
            {logement.description && (
              <Collapse
                title={"Description"}
                content={logement.description}
              />
            )}
          </div>
        </div>

        {logement.equipments && (
          <Collapse
            title ={"Equipement"}
            content={
              <ul>
                {logement["equipments"].map((eq) => (
                  <li>{eq}</li>
                ))}
              </ul>
            }
          />
        )}
      </div>
    </div>
  );
};

export default LogementDescription;
