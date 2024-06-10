import PropTypes from "prop-types";

const Cadre = ({ livres }) => {
  return livres.slice(0, 6).map((livre) => (
    <div className="" key={livre.id}>
      <img src={livre.cover} alt={livre.title} />
      <h4>{livre.title}</h4>
    </div>
  ));
};
Cadre.propTypes = {
  livres: PropTypes.array.isRequired,
};

export default Cadre;
