import React from "react";


const Nom = ({ logement }) => {
  console.log(logement)
  // Sélectionne le premier appartement dans le fichier JSON
  //const selectedAppartement = appartements[0]; // U[tilisation du premier objet du tableau

  return (
    <div className="nom">
      <div className="nom-conteneur">
        <p>{logement.host.name}</p>
        <img src={logement.host.picture} alt= {logement.host.name} />
      </div>
    </div>
  );
};

export default Nom;


