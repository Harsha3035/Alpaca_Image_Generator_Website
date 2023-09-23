import React from 'react'

function AlpacaArt({ attr }) {
    const { bg, neck, nose, mouth, eyes, hair, leg, ears, accessories } = attr;
    return (
        <div id='alpaca'>
            <img src={bg} alt="Background" className="background" />
            <img src={ears} alt="Ears" className="ears" />
            <img src={neck} alt="Neck" className="neck" />
            <img src={nose} alt="Nose" className="nose" />
            <img src={mouth} alt="Mouth" className="mouth" />
            <img src={hair} alt="Hair" className="hair" />
            <img src={eyes} alt="Eyes" className="eyes" />
            <img src={leg} alt="Leg" className="leg" />
            <img src={accessories} alt="Accessories" className="accessories" />
        </div>
    )
}

export default AlpacaArt;
