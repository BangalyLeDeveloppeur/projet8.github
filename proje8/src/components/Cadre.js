import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cadre = ({ livres }) => {
  return livres.slice(0, 6).map((Logement) => (
    <Link to={`/Logement/${Logement.id}`} key={Logement.id}>
      <img src={Logement.cover} alt={Logement.title} />
      <h4>{Logement.title}</h4>
    </Link>
  ));
};
Cadre.propTypes = {
  livres: PropTypes.array.isRequired,
};

export default Cadre;
