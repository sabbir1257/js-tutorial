import React, { useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'

const Bottles = () => {
     const [bottles, setBottles] = useState([]);

     useEffect(() => {
          fetch('bottles.json')
               .then(res => res.json())
               .then(data => setBottles(data))
     }, [])

     return (
          <div>
               <h2>Bottles Hera: {bottles.length}</h2>
               <div className='bottle-container'>
                    {
                         bottles.map(bottle => <Bottle bottle={bottle} key={bottle.id}></Bottle>)
                    }
               </div>
          </div>
     );
};

export default Bottles;