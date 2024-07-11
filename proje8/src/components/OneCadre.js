
import { Link } from 'react-router-dom'

const OneCadre = ({ logement }) => {
  return (
    <>
      {logement && (
        <Link to={`/Logement/${logement.id}`} key={logement.id}>
          <img src={logement.cover} alt={logement.title} />
          <h4>{logement.title}</h4>
        </Link>
      )}
    </>
  )
}

export default OneCadre///////////////////////////////////////////////////////////////
//////////////////les outils pour faire le site ////////////////

