import React, { useEffect, useState } from "react";
import Logement from "../components/Slide";
import Logementtitle from "../components/Logementtitle";
import Tag from "../components/Tag";
import Logementhost from "../components/Logementhost";
import LogementDescription from "../components/LogementDescription";
import appartements from "../data/livres.json";
import Nom from "../components/Nom";
console.log(appartements);

const Appartement = ({logement}) => {

  return (
    <div>
      <Logement logement={logement} />
      <Logementtitle />
      <Tag logement={logement} />
      <Nom logement={logement} />
      <Logementhost note={logement.rating} />
      <LogementDescription
        logement={logement } /*ici je passe a ma prop le contenant dedu fichier json.rating pour afficher le nombre d'étoils disponible dans appartement */
      />
    </div>
  );
};

export default Appartement;
