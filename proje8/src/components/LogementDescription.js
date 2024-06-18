import React from "react";

const LogementDescription = ({ logement }) => {
  const pictures = logement.pictures;
  return (
    <div>
      <div className="loge-img">
        {pictures?.slice(0, 1).map((pictures, index) => {
          return (
            <div className=" ">
              <p>Voici le logoment avec id {logement?.id} </p>
              <div>
                <p> {logement?.equipments} </p>
              </div>
              <div>
                <p> {logement?.description} </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LogementDescription;
