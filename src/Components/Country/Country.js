import React from 'react';
import './Country.css'

const Country = (props) => {

    const { name, flag, capital, population, region } = props.country;

    console.log(props.country);

    return (
        <div className="country">
            <h2>This is: {name}</h2>
            <img src={flag} width="200px" alt="Flag" />
            <h4>Capital: {capital}</h4>
            <h6>Region: {region}</h6>
            <h6>Population: {population}</h6>
        </div>
    );
};

export default Country;