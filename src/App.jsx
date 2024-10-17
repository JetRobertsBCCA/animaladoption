import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddAnimalForm from "./components/AddAnimalForm";
import AnimalListings from "./components/AnimalListings";
import DeleteAllRecords from "./components/DeleteAllRecords";
import Navbar from "../src/components/Navbar";
import Home from "./pages/Home";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
      <Navbar/>
        <Route path="/" element={<Home />} />
        <Route path="/add-animal" element={<AddAnimalForm />} />
        <Route path="/animal-listings" element={<AnimalListings />} />
        <Route path="admin-delete" element={<DeleteAllRecords />} />
      </Routes>
    </Router>
  );
}

export default App;
