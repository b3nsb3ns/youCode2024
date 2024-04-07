import React, { useState, useRef, useOptimistic } from 'react';
import './AddVenture.css'; // Import the external CSS file

function AddVenture({ name, description, imageUrl }) {

    return (
        <div className="challenge-box-container">
            <h2 style={{color:'black'}}>{name}</h2>
            <p style={{color:'black'}}>{description}</p>
            <img className="sport-image" src={imageUrl} alt={`SPORT ${name}`} />
        </div>
    );
}

export default AddVenture;