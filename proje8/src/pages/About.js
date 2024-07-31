import React from "react";

import Photapropos from "../components/Photapropos";
import Collapse from "../components/Collapse";


const paragrapheFiabilite = (
  <div className="annonce">
    <p>
      Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
    </p>
  </div>
);
const paragrapheRespect = (
  <div className="annonce">
    <p>
      La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement de discrimination ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
    </p>
  </div>
);

const paragrapheService = (
  <div className="annonce">
    <p>
      Nos services sont disponibles 24/7 pour répondre à toutes vos questions. Nous nous assurons que chaque logement correspond aux standards de qualité établis par nos équipes.
    </p>
  </div>
);

const paragrapheSecurite = (
  <div className="annonceSecurite">
    <p>
      La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux normes de sécurité établies par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
    </p>
  </div>
);
const About = () => {
  return (
    <div>
      <Photapropos />
      <Collapse title={"Fiabilité"} content={paragrapheFiabilite} />
      <Collapse title={"Respect"} content={paragrapheRespect} />
      <Collapse title={"Service"} content={paragrapheService} />
      <Collapse title={"Sécurité"} content={paragrapheSecurite} />

    </div>
  );
};

export default About;
