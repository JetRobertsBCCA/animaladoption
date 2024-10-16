import React, { useEffect, useState } from 'react';
import './styles/AnimalListings.css';

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
    <div>
      <h2>Animal Listings</h2>
      {animals.length === 0 ? (
        <p>No animals available for adoption.</p>
      ) : (
        animals.map((animal) => (
          <div key={animal.id}>
            <h3>{animal.data_json.name} ({animal.data_json.type || animal.data_json.breed})</h3>
            {animal.data_json.imgUrl ? (
              <img src={animal.data_json.imgUrl} alt={animal.data_json.name} />
            ) : (
              <p>No image available</p>
            )}
            <p>Age: {animal.data_json.age}</p>
            <p>Sex: {animal.data_json.sex}</p>
            <p>Description: {animal.data_json.description}</p>
            <p>Email: {animal.data_json.email}</p>
            <p>Adoption Status: {animal.data_json.isAdopted}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default AnimalListings;
