import React from 'react';

const Card = ({country}) => {
    return (
        <li className="card">
            <img src={country.flags.svg} alt="drapeau" />
            <div className="infos">
                <h2>{country.name.common}</h2>
                <h2>{country.capital}</h2>
                <p>Pop. {country.population.toLocaleString()}</p>
            </div>
        </li>
    );
};

export default Card;