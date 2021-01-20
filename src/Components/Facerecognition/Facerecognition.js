import React from 'react';
import './Facerecognition.css';

const Facerecognition = ({imageURL, box}) => {
    return(
        <div className='centre ma mt2'>
            <div className='absolute mt2' >
                <img 
                    id='inputimage'
                    width='500px' height='auto'
                    src={imageURL}
                ></img>
                <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
            </div>
        </div>
    )
}

export default Facerecognition;