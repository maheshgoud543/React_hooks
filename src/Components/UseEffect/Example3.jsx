//Using useEffect, build a component that fetches weather data for a specific city when the component is mounted.
// Use the API https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.4050&hourly=temperature_2m.

import { useEffect, useState } from "react";

const WeatherData = () => {
  const [data, setData] = useState(null); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.4050&hourly=temperature_2m"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); 
        setIsLoading(false); 
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false); 
      });
  }, []); 

  if (isLoading) {
    return <p>The weather data is loading...</p>; 
  }

  if (error) {
    return <p>Error occurred: {error}</p>;
  }

  return (
    <div>
      <h2>Weather Data for Berlin</h2>
      {data && data.hourly && data.hourly.temperature_2m ? (
        <div>
          <p>Temperature (hourly):</p>
          <ul>
            {data.hourly.temperature_2m.slice(0, 10).map((temp, index) => (
              <li key={index}>
                Hour {index + 1}: {temp}°C
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default WeatherData;
