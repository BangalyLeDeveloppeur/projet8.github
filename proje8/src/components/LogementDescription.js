import React from "react";

const LogementDescription = ({ logement }) => {
  const pictures = logement.pictures;
  return (
    <div>
      <div className="">
        {pictures?.slice(0, 1).map((pictures, index) => {
          return (
            <div className="logemen ">
              <p>Voici le logoment avec id {logement?.id} </p>
              <div className="logementDescription">
                <div className="description-contenair">
                  <div className="chevron ">
                    <p>Description</p>
                    <span>
                      <i className="fa-solid fa-chevron-up"></i>
                    </span>
                  </div>
                  <p> {logement?.description} </p>
                </div>

                <div className="description-contenair">
                  <div className="chevron ">
                    <p>Equipement</p>
                    <span>
                      <i className="fa-solid fa-chevron-up"></i>
                    </span>
                  </div>
                   <li>{logement?.equipments.join(" .")}</li> 
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogementDescription;
