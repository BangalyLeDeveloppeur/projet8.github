import { useParams } from "react-router-dom";
import livres from "../data/livres.json";

const findlLivreID = (id) => {
  return livres.find((Logement) => Logement.id === id);
};

const Logement = () => {
  const { id } = useParams();
  const logement = findlLivreID(id);
  const pictures = logement.pictures;
  return (
    <div>
      {pictures.slice(0, 1).map((pictures, index) => {
        return (
          <img src={pictures} alt={pictures.title} key={(pictures, index)} />
        );
      })}
      <img src="./arrow.png" alt="image arrow" />
      <img src="./arrow.png" alt="image arrow" />

      <p>Voici le logoment avec id {id} </p>
      
      <p> {logement.equipments} </p>
      <p> {logement.location} </p>
    </div>
  );
};

export default Logement;
