import React from 'react';
import logoblan from "../assets/images/Logoblanc.png"

const Footer = () => {
    return (
        <div >
            <div className="footerstyles">
            <img  src={logoblan}/>
            <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;