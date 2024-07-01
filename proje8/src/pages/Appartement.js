import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Logement from "../components/Slide";
import Logementtitle from "../components/Logementtitle";
import Tag from "../components/Tag";
import Logementhost from "../components/Logementhost";
import LogementDescription from "../components/LogementDescription";
import appartements from "../data/livres.json";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Nom from "../components/Nom";



const Appartement = () => {
  const { id } = useParams();
  const [appartement, setAppartement] = useState({});

  useEffect(() => {
    const itemAppartement = appartements.find((logement) => logement.id === id);
    setAppartement({ ...itemAppartement });
  }, []);

  return (
    <div>
      <Navigation />
      <Logement logement={appartement} />
      <Logementtitle />
      <Tag />
      <Nom/>
      <Logementhost />
      <LogementDescription logement={appartement} />
      <Footer />
    </div>
  );
};

export default Appartement;
