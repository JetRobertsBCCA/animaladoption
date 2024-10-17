import React from "react";

const UpdateAnimalButton = ({animalId, animal}) => {
  const handleUpdate = async () => {
    const password = prompt('Please enter the admin password to update this listing:');
    if (password !== 'ADMIN123') {
      alert('Incorrect password. Access denied.');
      return;
    }

    if (window.confirm('Update this listing?')) {
      try {
        const updateUrl = `https://unit-4-project-app-24d5eea30b23.herokuapp.com/update/data/teamId=1&recordId=${animalId}`;

        const response = await fetch(updateUrl, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ body: animal.data_json }),
        });

        if (response.ok) {
          alert('Updated Successfully');
        } else {
          alert('Error updating listing. Please try again.');
        }
      } catch (error) {
        console.error('Error updating:', error);
        alert('An error occured.')
      }
    }
  };

  return <button onClick={handleUpdate} className="card-button">Update Animal</button>;
}

export default UpdateAnimalButton;