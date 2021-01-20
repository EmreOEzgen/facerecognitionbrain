import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className='f3 '>{'Give me the link to an image and I will detect faces:'}</p>
            <div className='centre'>
                <div className='pa4 br3 shadow-5 centre form'>
                    <input type='text' className='f4 pa2 w-70 center br3' onChange={onInputChange} /> 
                    <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple center br3' onClick={onButtonSubmit}>{'Detect'}</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;