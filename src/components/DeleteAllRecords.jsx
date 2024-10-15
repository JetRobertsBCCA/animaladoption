// src/components/DeleteAllRecords.jsx

import React from 'react';
import axios from 'axios';

const DeleteAllRecords = () => {
  const handleDeleteAll = async () => {
    if (!window.confirm('Are you sure you want to delete all records? This action cannot be undone.')) {
      return;
    }

    try {
      // Step 1: Fetch all records from the API
      const response = await axios.get('https://unit-4-project-app-24d5eea30b23.herokuapp.com/get/all?teamId=1');
      const records = response.data.response; 

      if (Array.isArray(records) && records.length > 0) {
        // Step 2: Delete each record by id
        await Promise.all(
          records.map(async (record) => {
            await axios.delete('https://unit-4-project-app-24d5eea30b23.herokuapp.com/delete/data', {
              data: {
                id: record.id, 
                team: 1, 
              },
            });
          })
        );
        alert('All records deleted successfully!');
      } else {
        alert('No records found to delete.');
      }
    } catch (error) {
      console.error('Error deleting records:', error);
      alert('Error deleting records. Check the console for details.');
    }
  };

  return (
    <div>
      <h2>Delete All Records</h2>
      <button onClick={handleDeleteAll}>Delete All</button>
    </div>
  );
};

export default DeleteAllRecords;