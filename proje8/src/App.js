import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Appartement from "./pages/Appartement";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* La route pour la page apropos*/}
        <Route path="/About" element={<About />} />
        {/* La route pour la page d'erreur */}
        <Route path="/*" element={<Error />} />{" "}
        {/* la route pour ajouter id logement dans URL*/}
        <Route path="/Logement/:id" element={<Appartement />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
