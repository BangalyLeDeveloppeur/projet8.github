import { useParams } from "react-router-dom";

const Slide = ({ logement }) => {
  const pictures = logement.pictures;

  return (
    <div>
      <div className="loge-img">
        <div className="logement-arrow">
          <span>
            <i className="fa-solid fa-chevron-up"></i>
          </span>
          <span>
            <i className="fa-solid fa-chevron-right chevron-droite"></i>
          </span>
        </div>
        {pictures?.map((pictures, index) => {
          return (
            <img src={pictures} alt={pictures.title} key={(pictures, index)} />
          );
        })}

      </div>
    </div>
  );
};

export default Slide;
