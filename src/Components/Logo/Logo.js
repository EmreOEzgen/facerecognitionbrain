import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brainlogo from './brainlogo.svg';

const Logo = () => {
    return (
        <div classname='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-5 ml4" options={{ max : 55 }} style={{ height: 183, width: 183 }} >
                 <div className="Tilt-inner"> <img src={brainlogo} alt='brainlogo' className='mt3'></img> </div>
            </Tilt>
        </div>
    );
}

export default Logo;