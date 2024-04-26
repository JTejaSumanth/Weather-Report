import React from 'react';

const WeatherInfo = ({ data }) => {
  const { name, weather, main: { temp, humidity }, wind: { speed } } = data;

  const { main: weatherType, description: weatherDescription } = weather[0];
  const imageUrl = `/images/${weatherType.toLowerCase()}.png`;

  return (
    <div className="weather-info">
      <h2>{name}</h2>
      <img src={imageUrl} alt={weatherType} />
      <p>Type of the day: {weatherDescription}</p>
      <p>Temperature: {temp.toFixed(1)} °C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {speed} m/s</p>
    </div>
  );
};

export default WeatherInfo;
