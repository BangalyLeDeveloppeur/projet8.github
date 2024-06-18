import { useParams } from "react-router-dom";

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
            <i className="fa-solid fa-chevron-up"></i>
          </span>
          <span>
            <i className="fa-solid fa-chevron-right chevron-droite"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Logement;
