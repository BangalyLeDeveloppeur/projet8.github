import PropTypes from "prop-types";
import OneCadre from "./OneCadre";

const Cadre = ({ livres }) => {
  return livres.map((Logement) => (
    <OneCadre key={Logement.id} logemen={Logement} />
  ));
};

Cadre.propTypes = {
  livres: PropTypes.array.isRequired,
};

export default Cadre;
