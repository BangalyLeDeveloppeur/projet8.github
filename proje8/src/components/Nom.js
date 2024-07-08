import React from "react";
import appartements from "../data/livres.json";

const Nom = () => {
  // Sélectionne le premier appartement dans le fichier JSON
  const selectedAppartement = appartements[0]; // U[tilisation du premier objet du tableau

  return (
    <div className="nom">
      <div className="nom-conteneur">
        <h2>{selectedAppartement.host.name}</h2>
        <img src={selectedAppartement.host.picture} />
      </div>
    </div>
  );
};

export default Nom;


