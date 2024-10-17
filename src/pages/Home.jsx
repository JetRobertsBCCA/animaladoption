import React from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.css';
import CreateTestListingButton from '../components/CreateTestListingButton';

const Home = () => {
  return (
    
    <div className="container">
      <CreateTestListingButton />
      <h1>Welcome to Paw Partners</h1>
      <h3>A trusted platform for pet adoption</h3>
      <div className="card-container">
        <Link to="/add-animal">
          <div className="card add-animal-card">
            <i className="fas fa-plus-circle"></i> {/* Example icon */}
            <h4>Add Animal</h4>
          </div>
        </Link>
        <Link to="/animal-listings">
          <div className="card view-listings-card">
            <i className="fas fa-list"></i> {/* Example icon */}
            <h4>View Animal Listings</h4>
          </div>
        </Link>
        <Link to="/admin-delete">
          <div className="card delete-animal-card">
            <i className="fas fa-trash-alt"></i> {/* Example icon */}
            <h4>Delete All Listings</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
