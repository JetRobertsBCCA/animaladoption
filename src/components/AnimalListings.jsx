import React, { useEffect, useState } from 'react';
import './styles/AnimalListings.css'; // Ensure this path matches your actual file location

const AnimalListings = () => {
  const [animals, setAnimals] = useState([]);

  const fetchAnimals = async () => {
    try {
      const response = await fetch('https://unit-4-project-app-24d5eea30b23.herokuapp.com/get/all?teamId=1');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data); // Log the response to see the structure
      setAnimals(data.response || []); // Access the 'response' array
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  return (
    <div className="listings-container">
      <h2>Animal Listings</h2>
      {animals.length === 0 ? (
        <p>No animals available for adoption.</p>
      ) : (
        animals.map((animal) => (
          <div key={animal.id} className="card">
            {animal.data_json.imgUrl ? (
              <img src={animal.data_json.imgUrl} alt={animal.data_json.name} />
            ) : (
              <p>No image available</p>
            )}
            <div className="card-content">
              <h3 className="card-title">{animal.data_json.name} ({animal.data_json.type || animal.data_json.breed})</h3>
              <p className="card-info">Age: {animal.data_json.age}</p>
              <p className="card-info">Sex: {animal.data_json.sex}</p>
              <p className="card-info">Description: {animal.data_json.description}</p>
              <p className="card-info">Email: {animal.data_json.email}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AnimalListings;
