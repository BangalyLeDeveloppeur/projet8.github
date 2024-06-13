import React from 'react';
import Navigation from '../components/Navigation';
import Logement from '../components/Logementimage';
import Logementtitle from '../components/Logementtitle';
import Tag from '../components/Tag';


const Appartement = () => {
    return (
        <div>
           <Navigation />
           <Logement />
           <Logementtitle />
           <Tag />
        </div>
    );
};

export default Appartement;