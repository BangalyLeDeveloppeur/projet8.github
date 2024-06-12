import { useParams } from "react-router-dom";
import livres from "../data/livres.json";
import Navigation from "./Navigation";
import Footer from "./Footer";

const findlLivreID = (id) => {
  return livres.find((Logement) => Logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logement = findlLivreID(id);
  const pictures = logement.pictures;
  return (
    <div>
      <Navigation/>
      {pictures.slice(0, 1).map((pictures, index) => {
        return (
          <img src={pictures} alt={pictures.title} key={(pictures, index)} />
          );
          })}
      <p>Voici le logoment avec id {id} </p>
      <p>Voici la description {logement.description} </p>
        <Footer />
    </div>
  );
};

export default Logement;
