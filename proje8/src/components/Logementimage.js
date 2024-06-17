import { useParams } from "react-router-dom";
import livres from "../data/livres.json";




const Logement = ({logement}) => {
  const pictures = logement.pictures;
  

  return (
    <div>
      <div className="loge-img">
      {pictures?.slice(0, 1).map((pictures, index) => {
        return (
          <img src={pictures} alt={pictures.title} key={(pictures, index)} />
          );
          })}
      <img src="./arrow.png" alt="image arrow" />
      <img src="./arrow.png" alt="image arrow" />
         </div>

      <p>Voici le logoment avec id {logement?.id} </p>
      
      <p> {logement?.equipments} </p>
      <p> {logement?.location} </p>
    </div>
  );
};

export default Logement;
