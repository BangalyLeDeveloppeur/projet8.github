import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";


 


const Logement= () => {
    const {id} = useParams()
    return (
        <div>
            <Navigation/>
            <p>Voici le logoment avec id {id}</p>
        </div>
    );
};

export default Logement;