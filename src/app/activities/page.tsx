'use client'
import React, { useState, useEffect } from 'react';
export function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/activity-pages?populate[0]=card.img_url');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setLoading(true);
      } catch (e) {
        setError(`An error occurred while fetching the data: ${e.message}`);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <div>
          <ul>
            {data &&
              data.map((item) => (
                <li key={item.id}>
                  <img src={item.card.img_url.data.url} alt="Activity Image" />
                  {item.title}
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
