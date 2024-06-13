import React from 'react';
import Navigation from '../components/Navigation';
import Logement from '../components/Logementimage';
import Logementtitle from '../components/Logementtitle';


const Appartement = () => {
    return (
        <div>
           <Navigation />
           <Logement />
           <Logementtitle />
        </div>
    );
};

export default Appartement;