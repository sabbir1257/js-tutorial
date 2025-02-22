import React, { use } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function UserDetails() {
    const user = useLoaderData();
    const {name,website } = user;
  return (  
    <div>
        <h2>Details about user: {name}</h2>
        <p>Website: {website}</p>
    </div>
  ) 
}
