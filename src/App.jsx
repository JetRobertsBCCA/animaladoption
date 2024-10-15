import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddAnimalForm from './components/AddAnimalForm';
import AnimalListings from './components/AnimalListings';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-animal" element={<AddAnimalForm />} />
        <Route path="/animal-listings" element={<AnimalListings />} />
      </Routes>
    </Router>
  );
}

export default App;
