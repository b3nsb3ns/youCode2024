import React, { useState } from 'react';
import './AddVenture.css'; // Import the external CSS file

function LegoSet({ name, description, imageUrl }) {


    return (
        <div className="lego-set-container">
            <h2>{name}</h2>
            <p>{description}</p>
            <img className="lego-image" src={imageUrl} alt={`LEGO set ${name}`} />
        </div>
    );
}

export default LegoSet;