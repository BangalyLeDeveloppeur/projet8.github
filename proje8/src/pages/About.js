import React from "react";
import Navigation from "../components/Navigation";
import Photapropos from "../components/Photapropos";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Collapse from "../components/Collapse";
const paragraphe = (
  <p>
    Les annonces postées sur kasa garantissent une fiabilité totale. Les photos
    sont conformes aux logements, et toutes les informations sont régulièrement
    vérifiées par nos équipes.
  </p>
);

const About = () => {
  return (
    <div>
      <Navigation />
      <Photapropos />
      <Collapse title={"Fiabilité"} content= {paragraphe}/>
      <Description />
      <Footer />
    </div>
  );
};

export default About;
