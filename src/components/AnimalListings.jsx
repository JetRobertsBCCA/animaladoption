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
      setAnimals(data.response || []);
    } catch (error) {
      console.error('Error fetching animals:', error);
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  const handleDelete = async (animalId) => {
    const password = prompt('Please enter the admin password to delete this listing:');
    if (password !== 'ADMIN123') {
      alert('Incorrect password. Access denied.');
      return;
    }

    if (!window.confirm('Are you sure you want to delete this animal? This action cannot be undone.')) {
      return;
    }

    try {
      const deleteUrl = `https://unit-4-project-app-24d5eea30b23.herokuapp.com/delete/data`;
      const response = await fetch(deleteUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: animalId,
          team: 1, 
        }),
      });

      if (response.ok) {
        alert('Animal deleted successfully!');
        setAnimals(animals.filter(animal => animal.id !== animalId)); // Removes the animal
      } else {
        alert('Error deleting animal. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting animal:', error);
      alert('Error deleting animal. Check the console for details.');
    }
  };

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
              <h3 className="card-title">
                {animal.data_json.name} ({animal.data_json.type || animal.data_json.breed})
              </h3>
              <p className="card-info">Age: {animal.data_json.age}</p>
              <p className="card-info">Sex: {animal.data_json.sex}</p>
              <p className="card-info">Description: {animal.data_json.description}</p>
              <p className="card-info">Email: {animal.data_json.email}</p>
              <button onClick={() => handleDelete(animal.id)} className="card-button">
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default AnimalListings;
