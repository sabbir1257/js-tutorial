import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
     const [countries, setCountries] = useState([]);
     const [visitedCountries, setVisitedCountries] = useState([]);
     const [visitedFlags, setVisitedFlags] = useState([]);

     useEffect(() => {
          fetch('https://restcountries.com/v3.1/all')
               .then(res => res.json())
               .then(data => setCountries(data))
     }, [])
     

     const handleVisitedCountry = (country) => {
          console.log('add this to your visited country');
          const newVisitedCountries = [...visitedCountries, country];
          setVisitedCountries(newVisitedCountries);
     }

     const handleVisitedFlags = (flag) => {
          const newVisitedFlag = [...visitedFlags, flag];
          setVisitedFlags(newVisitedFlag);
     }

     // remove item from an array in a state 
     // use filter to select all the elements except the one you want to remove 
     

     return (
          <div>
               <h3>Countries: {countries.length}</h3>
               {/* visited country */}
               <div>
                    <h5>Visited Countries: {visitedCountries.length}</h5>
                    <ul>
                         {
                              visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                         }
                    </ul>
               </div>
               <div className='flag-container'>
                    {
                         visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                    }
               </div>
               {/* display countries */}
               <div className='country-container'>
                    {
                         countries.map(country => <Country
                              handleVisitedCountry={handleVisitedCountry}
                              handleVisitedFlags={handleVisitedFlags}
                              key={country.cca3}
                              country={country}
                         ></Country>)
                    }
               </div>
          </div>
     );
};

export default Countries;