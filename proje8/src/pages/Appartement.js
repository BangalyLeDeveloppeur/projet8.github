import React from 'react';
import Navigation from '../components/Navigation';
import Logement from '../components/Logementimage';
import Logementtitle from '../components/Logementtitle';
import Tag from '../components/Tag';
import Logementhost from '../components/Logementhost';



const Appartement = () => {
    return (
        <div>
           <Navigation />
           <Logement />
           <Logementtitle />
           <Tag />
           <Logementhost />
         
        </div>
    );
};

export default Appartement;