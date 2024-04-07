import React, { useState, useRef, useOptimistic } from 'react';
import './AddVenture.css'; // Import the external CSS file

function AddVenture({ name, description, imageUrl }) {

    return (
        <div className="lego-set-container">
            <h2 style={{color:'black'}}>{name}</h2>
            <p style={{color:'black'}}>{description}</p>
            <img className="lego-image" src={imageUrl} alt={`LEGO set ${name}`} />
        </div>
    );
}

export default AddVenture;