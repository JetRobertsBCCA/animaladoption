import React from 'react';


const Navbar = () => {
    return (
        <div class="topnav">
        <a href="../pages/Home.jsx">Home</a>
        <a href="../components/AddAnimalForm.jsx">Add</a>
        <a href="../components/AnimalListings.jsx">View</a>
        <a href="../components/DeleteAllRecords.jsx">Delete</a>
      </div>
    );
};
export default Navbar;