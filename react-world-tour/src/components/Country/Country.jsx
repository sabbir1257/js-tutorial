import React, { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';

const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
     const { name, flags, population, area, cca3 } = country;
     const [visited, setVisited] = useState(false);

     const handleVisited = () => {
          setVisited(!visited);
     };

     const passWhitParams = () => handleVisitedCountry(country);

     return (
          <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
               <h3 style={{ color: visited ? 'purple' : 'white' }}>{name?.common}</h3>
               <img src={flags.png} alt="" />
               <p>Population: {population}</p>
               <p>Area: {area}</p>
               <button onClick={passWhitParams}>Mark visited</button>
               <br /><br />
               <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flag</button>
               <br /><br />
               <p><small>Code: {cca3}</small></p>
               <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
               {visited ? 'I have visited this country' : 'I want to visited'}
               <hr />
               <CountryDetail
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags} 
               ></CountryDetail>
          </div>
     );
};

export default Country;