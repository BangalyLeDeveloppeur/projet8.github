import { useParams } from "react-router-dom"; {/* pour récuperer id logement dans URL*/}


const Logement= () => {
    const {id} = useParams()
    return (
        <div>
            <p>Voici le logoment avec id {id}</p>
        </div>
    );
};

export default Logement;