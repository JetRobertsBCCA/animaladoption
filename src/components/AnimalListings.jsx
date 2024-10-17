import React, { useEffect, useState } from 'react';
import './styles/AnimalListings.css';

const AnimalListings = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchAnimals = async () => {
    try {
      const response = await fetch('https://unit-4-project-app-24d5eea30b23.herokuapp.com/get/all?teamId=1');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setAnimals(data.response || []);
      setLoading(false);
    } catch (error) {
      setError('Could not fetch animals, please try again later.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimals();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="listings-container">
      <h2>Animal Listings</h2>
      <div className="cards-container">
        {animals.length === 0 ? (
          <p>No animals available for adoption at the moment.</p>
        ) : (
          animals.map((animal) => (
            <div key={animal.id} className="card">
              <img
                className="card-img"
                src={animal.data_json.imgUrl || 'https://via.placeholder.com/300x200.png?text=No+Image'}
                alt={animal.data_json.name}
              />
              <div className="card-content">
                <h3 className="card-title">
                  {animal.data_json.name} ({animal.data_json.type || animal.data_json.breed})
                </h3>
                <p className="card-info">Age: {animal.data_json.age}</p>
                <p className="card-info">Sex: {animal.data_json.sex}</p>
                <p className="card-info">Description: {animal.data_json.description}</p>
                <p className="card-info">Email: {animal.data_json.email}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AnimalListings;
