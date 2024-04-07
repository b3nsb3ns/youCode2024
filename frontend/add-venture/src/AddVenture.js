import React, { useState, useRef, useOptimistic } from 'react';
import './AddVenture.css'; // Import the external CSS file

function AddVenture({ name, description, time, imageUrl }) {

    return (
        <div className="challenge-box-container">
            <h2 style={{color:'black'}}>
                {name}<br/>
                {description}<br/>
                {time}
            </h2>
            <img className="sport-image" src={imageUrl} alt={`SPORT ${name}`} />
        </div>
    );
}

export default AddVenture;