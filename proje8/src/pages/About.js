import React from "react";

import Photapropos from "../components/Photapropos";
import Collapse from "../components/Collapse";
import Data from "../data/data";


const About = () => {
  return (
    <div>
      <Photapropos />
      <Collapse title={"Fiabilité"} content={Data.paragrapheFiabilit } />
      <Collapse title={"Respect"} content={Data.paragrapheRespect} />
      <Collapse title={"Service"} content={Data.paragrapheService} />
      <Collapse title={"Sécurité"} content={Data.paragrapheSecurite} />

    </div>
  );
};

export default About;
