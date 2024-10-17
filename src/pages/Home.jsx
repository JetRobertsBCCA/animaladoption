import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to Paw Partners</h1>
      <h3 className="home-subtext">A trusted platform for pet adoption</h3>
      <div className="button-container">
        <Link to="/add-animal">
          <button className="home-button add-animal">Add Animal</button>
        </Link>
        <Link to="/animal-listings">
          <button className="home-button view-listings">View Animal Listings</button>
        </Link>
        <Link to="/admin-delete">
          <button className="home-button delete-animal">Delete</button>
        </Link>
      </div>
      
      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Paw Partners. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
