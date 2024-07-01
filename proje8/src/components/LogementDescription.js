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
            
              <Collapse title={"Description"} content= {logement.description} />
            )}
          </div>
        </div>
        <div className="description-contenair">
          {logement.equipments && (
            <Collapse
              title={"Equipement"}
              content={
                <ul>
                  {logement ["equipments"].map((eq)  => (
                    <li key={(eq)}>{eq} </li>
                  ))}
                </ul>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default LogementDescription;
