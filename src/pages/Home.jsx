import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Paw Partners</h1>
      <h3>A trusted platform for pet adoption</h3>
      <div className="button-container">
        <Link to="/add-animal">
          <button className="button add-animal">Add Animal</button>
        </Link>

        <Link to="/animal-listings">
          <button className="button view-listings">View Animal Listings</button>
        </Link>

        <Link to="/admin-delete">
          <button className="button delete-animal">Delete</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;