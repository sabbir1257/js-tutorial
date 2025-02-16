import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
     return (
          <div>
               <Header/>
               <h2>This is the home comp</h2>
               <Outlet/>
          </div>
     );
};

export default Home;