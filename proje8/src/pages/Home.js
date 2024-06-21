import React from "react";
import Navigation from "../components/Navigation";
import Partout from "../components/Partout";
import Footer from "../components/Footer";
import Cadre from "../components/Cadre";
import livres  from "../data/livres.json"



const Home = () => {

    console.log(livres)

  return (
    <div>
      <Navigation />
      <Partout />
      <div className="gallery">
      < Cadre livres=  {livres} />
      
      </div>
      <Footer />
    </div>
  );
};

export default Home;
