import React from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="topnav">
            <Link to="/">Home</Link>
            <Link to="/add-animal">Add Animal</Link>
            <Link to="/animal-listings">View Listings</Link>
            <Link to="/admin-delete">Delete All</Link>
        </div>
    );
};

export default Navbar;
