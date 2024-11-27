import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Card() {
  const [city, setCity] = useState('');
  const [data, setData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=5ecd70d2b9124b5e986181845243105&q=${city}&aqi=yes`
      )
      .then((response) => {
        setData(response.data);
        setCity('');
      })
      .catch((error) => console.error('Error fetching weather data:', error));
  }

  function getLocationData(lat, lon) {
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=5ecd70d2b9124b5e986181845243105&q=${lat},${lon}&aqi=yes`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching location weather data:', error));
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        getLocationData(latitude, longitude);
      },
      (error) => console.error('Error getting location:', error)
    );
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-red-300 p-5">
      <div className="card bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl flex flex-col items-center gap-8">
        <h1 className="text-3xl font-bold text-indigo-700 text-center">Weather App</h1>

        {/* Search Section */}
        <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-4 w-full"
          >
            <input
              type="text"
              placeholder="Enter City Name"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full sm:w-auto flex-1 py-2 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Enter City Name"
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition-all duration-300"
            >
              Search
            </button>
          </form>
        </div>

        {/* Weather Data Section */}
        <div className="data flex flex-col items-center text-gray-700 text-center gap-4">
          {data ? (
            <>
              {data.current?.condition?.icon && (
                <img
                  src={data.current.condition.icon}
                  alt={data.current.condition.text || 'Weather condition'}
                  className="w-20 h-20"
                />
              )}
              <h2 className="text-2xl font-semibold">
                {data.location?.name}, {data.location?.region}, {data.location?.country}
              </h2>
              <div className="grid grid-cols-2 gap-4 text-lg">
                <div>
                  <h3 className="font-bold">Temperature</h3>
                  <p>{data.current?.temp_c} °C</p>
                </div>
                <div>
                  <h3 className="font-bold">Feels Like</h3>
                  <p>{data.current?.feelslike_c} °C</p>
                </div>
                <div>
                  <h3 className="font-bold">Wind Speed</h3>
                  <p>{data.current?.wind_kph} kph</p>
                </div>
                <div>
                  <h3 className="font-bold">Humidity</h3>
                  <p>{data.current?.humidity}%</p>
                </div>
              </div>
            </>
          ) : (
            <p className="text-gray-500">Fetching weather data...</p>
          )}
        </div>

        {/* Footer */}
        <p className="text-gray-500 text-sm">Made By Ujjwal Mishra</p>
      </div>
    </div>
  );
}