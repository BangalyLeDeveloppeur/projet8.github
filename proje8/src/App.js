import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Logement from "./components/Logement";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/*" element={<Error />} />{" "}
        {/* La route pour la page d'erreur */}
        <Route path="/Logement/:id" element={<Logement />} />
        {/* la route pour ajouter id logement dans URL*/}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
