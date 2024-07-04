import React from "react";
import Navigation from "../components/Navigation";
import Photapropos from "../components/Photapropos";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
const paragrapheFiabilité = (
  
  <div className="annonce">
  <p>
    Les annonces postées sur kasa garantissent une fiabilité totale. Les photos
    sont conformes aux logements, et toutes les informations sont régulièrement
    vérifiées par nos équipes.
  </p>
  </div>
);
const paragrapheRespect = (
  <div className="annonce">
  <p>
    La bienveillance fait partie des valeurs fondactrices de kasa. Tout
    comportement discrimination de perturbation du voisinage entrainera une
    exclusion de notre plateforme.
  </p>
  </div>
);
const paragrapheService = (
  <div className="annonce">
  <p>
    La bienveillance fait partie des valeurs fondactrices de kasa. Tout
    comportement discrimination de perturbation du voisinage entrainera une
    exclusion de notre plateforme.
  </p>
  </div>
);
const paragrapheSecurite = (
  <div className="annonceSecurite">
  <p>
    La sécurité est la priorité de kasa. Aussi bien pour nos hotes que pour les
    voyageurs, chaque logement correspond aux de sécurité établis par nos
    services. En laissant une note aussi bien l'hote qu'au locataire, cela
    permet à nos équipes de vérifer que les standarts sont bien respectés. Nous
    organisons égalemnet des ateliers sur la sécurité domestique pour nos hotes.
  </p>
  </div>
);

const About = () => {
  return (
    <div>
      <Navigation />
      <Photapropos />
      <Collapse title={"Fiabilité"} content={paragrapheFiabilité} />
      <Collapse title={"Respect"} content={paragrapheRespect} />
      <Collapse title={"Service"} content={paragrapheService} />
      <Collapse title={"Sécurité"} content={paragrapheSecurite} />
      <Footer />
    </div>
  );
};

export default About;
