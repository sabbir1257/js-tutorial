import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';
import './Users.css';
import PropTypes from 'prop-types';

const Users = () => {

     const users = useLoaderData() || []; 
     console.log(users);

     return (
          <div>
               <h2>Our Users: {users.length}</h2>
               <p>Fantastic and vodro Users</p>
               <div className='users'>
                    {
                         users.map(user => <User key={user.id} user={user}/>)
                    }
               </div>
          </div>
     );
};

Users.propTypes = {
     users: PropTypes.arrayOf(
       PropTypes.shape({
         id: PropTypes.number.isRequired,
         // Add other user properties here
       })
     ),
   };
   
   Users.defaultProps = {
     users: [],
   };

export default Users;