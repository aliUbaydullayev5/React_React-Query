import React from 'react';
import {useQuery} from "react-query";
import Planet from "./Planet";

const fetchPlanets = async ()=>{
    const res = await fetch('https://swapi.dev/api/planets');
    return res.json();
}
const Planets = () => {

    const {data, status} = useQuery('planets', fetchPlanets);
    console.log(data)

    return(
        <div>
            <h1>Planets</h1>
            {status === 'error' && (
                <div style={{textAlign: 'center'}}>
                    <h1>Error 404</h1>
                </div>
            )}
            {status === 'loading' && (
                <div style={{textAlign: 'center'}}>
                    <h1>Loading ...</h1>
                </div>
            )}
            {status === 'success' && (
                <div>
                    {data.results.map((value, index)=> <Planet planet={value} key={index} />)}
                </div>
            )}
        </div>
    )
}

export default Planets;