import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Appartement from "./pages/Appartement";
import Layout from "./components/Layout";

const Rooter = () => {
  
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            {/* la route pour ajouter id logement dans URL*/}
            <Route path="/Logement/:id" element={<Appartement />} />
            {/* La route pour la page d'erreur */}
            <Route path="/*" element={<Error />} />{' '}
          </Route>
          {/* La route pour la page apropos*/}
        </Routes>
      </BrowserRouter>
    )
  
};

export default Rooter;
