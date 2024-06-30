import React from "react";
import Collapse from './Collapse'


const LogementDescription = ({ logement }) => {
  return (
    <div className="logemen ">
      <p>Voici le logoment avec id {logement.id} </p>
      <div className="logementDescription">
        <div className="description-contenair">
          <div className="chevron">
            <div className="chevron-conteneur">
              <p>Description</p>
              <button>
                <i className="fa-solid fa-chevron-up"></i>
              </button>
            </div>
            <p className="chevron-parag"> {logement.description} </p>
          </div>
        </div>

        {logement.equipments && (
          <Collapse
            title ={'Equipement'}
            content ={
              <ul>
                {logement['equipments'].map((eq) => (
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
