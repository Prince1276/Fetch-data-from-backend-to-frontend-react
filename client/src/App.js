// src/components/NewlyRequestedPage.js
import React, { useState, useEffect } from 'react';

const NewlyRequestedPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    fetch('/newlyRequested') // Replace with your backend route
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const dataCount = data.length;

  return (
    <div>
      <h2>Newly Requested Page</h2>
      <p>Total count: {dataCount}</p>
    </div>
  );
};

export default NewlyRequestedPage;
