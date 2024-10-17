import React from 'react';

const CreateTestListingButton = () => {
  const handleCreateTestListing = async () => {
    try {
      const response = await fetch('https://unit-4-project-app-24d5eea30b23.herokuapp.com/post/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          team: 1,
          body: {
            name: 'Test Animal',
            type: 'Dog',
            age: '3',
            sex: 'M',
            description: 'This is a test listing.',
            email: 'test@example.com',
            imgUrl: 'https://via.placeholder.com/150',
            isAdopted: false,
          },
        }),
      });

      if (response.ok) {
        alert('Test listing created successfully!');
      } else {
        alert('Error creating test listing.');
      }
    } catch (error) {
      console.error('Error creating test listing:', error);
      alert('An error occurred while creating the test listing.');
    }
  };

  return (
    <button onClick={handleCreateTestListing} className="create-test-listing-button">
      Create Test Listing
    </button>
  );
};

export default CreateTestListingButton;
