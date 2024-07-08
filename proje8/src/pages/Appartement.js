import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Logement from "../components/Slide";
import Logementtitle from "../components/Logementtitle";
import Tag from "../components/Tag";
import Logementhost from "../components/Logementhost";
import LogementDescription from "../components/LogementDescription";
import appartements from "../data/livres.json";
import Nom from "../components/Nom";
console.log(appartements);

const Appartement = () => {
  const { id } = useParams();
  const [appartement, setAppartement] = useState({});

  useEffect(() => {
    const itemAppartement = appartements.find((logement) => logement.id === id);
    setAppartement({ ...itemAppartement });
  }, []);
  const selectedLogement = appartements[0];/// je selection le premier element de mon tableaux


  return (
    <div>
      <Logement logement={appartement} />
      <Logementtitle />
      <Tag logement={selectedLogement} />
      <Nom />
      <Logementhost note={appartement.rating} />
      <LogementDescription
        logement={appartement } /*ici je passe a ma prop le contenant dedu fichier json.rating pour afficher le nombre d'étoils disponible dans appartement */
      />
    </div>
  );
};

export default Appartement;
