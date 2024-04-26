import React, { useState } from 'react';
import HeaderBar from './components/HeaderBar';
import SearchForm from './components/SearchForm';
import WeatherInfo from './components/WeatherInfo';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleThemeToggle = () => setIsDarkMode(!isDarkMode);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setWeatherData(null);
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    } 
    try {
      const apiKey = 'd9706f473bb9db8e8dabf12443cf0db7';
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!response.ok) throw new Error('Network response was not ok.');
      const data = await response.json();
      if (data.cod !== 200) {
        throw new Error(data.message);
      } 
      setWeatherData(data);
    } catch (error) {
      setError('City not found. Please enter a valid city name.');
    } 
  };

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>
      <HeaderBar onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />
      <div className="content">
        <SearchForm city={city} setCity={setCity} onSubmit={handleSubmit} />
        {error && !weatherData && <p className="error">{error}</p>}
        {weatherData && <WeatherInfo data={weatherData} />}
      </div>
    </div>
  );
}

export default App;
