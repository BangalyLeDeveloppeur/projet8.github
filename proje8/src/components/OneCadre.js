
import { Link } from 'react-router-dom'

const OneCadre = ({ logemen }) => {
  return (
    <>
      {logemen && (
        <Link to={`/Logement/${logemen.id}`} key={logemen.id}>
          <img src={logemen.cover} alt={logemen.title} />
          <h4>{logemen.title}</h4>
        </Link>
      )}
    </>
  )
}

export default OneCadre///////////////////////////////////////////////////////////////
//////////////////les outils pour faire le site ////////////////

