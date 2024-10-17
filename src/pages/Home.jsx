import React from "react";
import { Link } from "react-router-dom";
import "../pages/Home.css";
import CreateTestListingButton from "../components/CreateTestListingButton";

const Home = () => {
  return (
    <div className="container">
      <CreateTestListingButton />
      <h1>Welcome to Paw Partners</h1>
      <h3>A trusted platform for pet adoption</h3>
      <div className="card-container">
        <Link to="/add-animal">
          <button className="home-button add-animal">Add Animal</button>
        </Link>
        <Link to="/animal-listings">
          <button className="home-button view-listings">View Animal Listings</button>
        </Link>
        <Link to="/admin-delete">
          <div className="card delete-animal-card">
            <i className="fas fa-trash-alt"></i> {/* Example icon */}
            <h4>Delete All Listings</h4>
          </div>
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
