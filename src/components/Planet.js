import React from 'react';


const Planet = ({planet}) => {
    return(
        <div style={{border: '2px solid teal', borderRadius: '15px', margin: '10px', padding: '10px'}}>
            <h3>{planet.name}</h3>
            <p>Population: {planet?.population}</p>
            <p>Terrain: {planet?.terrain}</p>
        </div>
    )
}

export default Planet;