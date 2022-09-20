import React from 'react';

const Navbar = ({setPage}) => {
    return(
        <div style={{width: '100%', color: 'white', textAlign: 'center'}}>
            <h1>Star Wars Info</h1>
            <button onClick={()=> setPage('planets')}>Planets</button>
            <button onClick={()=> setPage('people')}>People</button>
        </div>
    )
}

export default Navbar;