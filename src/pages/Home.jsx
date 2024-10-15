import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Animal Adoption Site</h1>
      <Link to="/add-animal"> Add Animal </Link>
      <Link to="/animal-listings"> View Animal Listings </Link>
      <Link to="/admin-delete">DELETE</Link>
      
    </div>
  );
};

export default Home;
