import React, { useEffect, useState } from "react";
import "./styles/AnimalListings.css";
import UpdateAnimalButton from "./UpdateAnimalButton"; // Import the UpdateAnimalButton component

const AnimalListings = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch the animal data from the server
  const fetchAnimals = async () => {
    try {
      const response = await fetch(
        "https://unit-4-project-app-24d5eea30b23.herokuapp.com/get/all?teamId=1"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setAnimals(data.response || []); // Set the fetched animals once
    } catch (error) {
      console.error("Error fetching animals:", error);
    }
  };

  // Only fetch the data once when the component mounts
  useEffect(() => {
    fetchAnimals();
  }, []);

  // Function to handle deleting an animal
  const handleDelete = async (animalId) => {
    const password = prompt(
      "Please enter the admin password to delete this listing:"
    );
    if (password !== "ADMIN123") {
      alert("Incorrect password. Access denied.");
      return;
    }

    if (
      !window.confirm(
        "Are you sure you want to delete this animal? This action cannot be undone."
      )
    ) {
      return;
    }

    try {
      const deleteUrl = `https://unit-4-project-app-24d5eea30b23.herokuapp.com/delete/data`;
      const response = await fetch(deleteUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: animalId,
          team: 1,
        }),
      });

      if (response.ok) {
        alert("Animal deleted successfully!");
        // After deletion, refetch the animals
        fetchAnimals(); // Refetch the updated list of animals
      } else {
        alert("Error deleting animal. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting animal:", error);
      alert("Error deleting animal. Check the console for details.");
    }
  };

  // Function to handle updating the animal data (adopted status)
  const handleUpdate = async (animalId, updatedAnimalData) => {
    try {
      // Fetch the current data of the animal before updating
      const currentAnimalResponse = await fetch(
        `https://unit-4-project-app-24d5eea30b23.herokuapp.com/get/${animalId}?teamId=1`
      );
      if (!currentAnimalResponse.ok) {
        throw new Error("Failed to fetch current animal data");
      }

      const currentAnimal = await currentAnimalResponse.json();

      // Flatten the structure and ensure all fields are sent in the update request
      const currentAnimalData =
        currentAnimal.data_json.body || currentAnimal.data_json; // Handle potential nesting
      const updatedAnimal = {
        id: animalId,
        team: 1,
        name: currentAnimalData.name || updatedAnimalData.name,
        imgUrl: currentAnimalData.imgUrl || updatedAnimalData.imgUrl,
        age: currentAnimalData.age || updatedAnimalData.age,
        sex: currentAnimalData.sex || updatedAnimalData.sex,
        description:
          currentAnimalData.description || updatedAnimalData.description,
        email: currentAnimalData.email || updatedAnimalData.email,
        isAdopted: updatedAnimalData.isAdopted, // Updated status
      };

      const updateUrl = `https://unit-4-project-app-24d5eea30b23.herokuapp.com/update/animal`;
      const response = await fetch(updateUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedAnimal),
      });

      if (response.ok) {
        alert("Animal updated successfully!");
        // Refetch the updated list of animals after the update
        fetchAnimals(); // Refreshes the data without reloading the whole page
      } else {
        alert("Error updating animal. Please try again.");
      }
    } catch (error) {
      console.error("Error updating animal:", error);
      alert("Error updating animal. Check the console for details.");
    }
  };

  return (
    <div className="listings-container">
      <h2>Animal Listings</h2>
      {animals.length === 0 ? (
        <p>No animals available for adoption.</p>
      ) : (
        animals.map((animal) => {
          const animalData = animal.data_json.body || animal.data_json; // Handle potential nesting of 'body'
          return (
            <div
              key={animal.id}
              className={`card ${animalData.isAdopted ? "adopted" : ""}`}
            >
              {animalData.isAdopted && (
                <div className="adopted-overlay">
                  <span>ADOPTED</span>
                </div>
              )}
              {animalData.imgUrl ? (
                <img src={animalData.imgUrl} alt={animalData.name} />
              ) : (
                <p>No image available</p>
              )}
              <div className="card-content">
                <h3 className="card-title">
                  {animalData.name} ({animalData.type || animalData.breed})
                </h3>
                <p className="card-info">Age: {animalData.age}</p>
                <p className="card-info">Sex: {animalData.sex}</p>
                <p className="card-info">
                  Description: {animalData.description}
                </p>
                <p className="card-info">Email: {animalData.email}</p>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(animal.id)}
                  className="card-button"
                >
                  Delete
                </button>

                {/* Mark as Adopted Button */}
                {!animalData.isAdopted && (
                  <UpdateAnimalButton
                    animalId={animal.id}
                    onUpdate={handleUpdate} // Pass the handler to refetch after update
                    animal={animal}
                  />
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default AnimalListings;
