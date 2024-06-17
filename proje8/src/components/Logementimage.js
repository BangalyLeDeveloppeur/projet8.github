import { useParams } from "react-router-dom";
import livres from "../data/livres.json";

const Logement = ({ logement }) => {
  const pictures = logement.pictures;

  return (
    <div>
      <div className="loge-img">
        {pictures?.slice(0, 1).map((pictures, index) => {
          return (
            <img src={pictures} alt={pictures.title} key={(pictures, index)} />
          );
        })}

        <div className="logement-arrow">
          <span>
            <i class="fa-solid fa-chevron-up"></i>
          </span>
          <span>
            <i class="fa-solid fa-chevron-right chevron-droite"></i>
          </span>
        </div>
      </div>

      <p>Voici le logoment avec id {logement?.id} </p>

      <p> {logement?.equipments} </p>
      <p> {logement?.description} </p>
      <p> {logement?.location} </p>
    </div>
  );
};

export default Logement;
