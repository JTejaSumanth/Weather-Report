import React from 'react';

const SearchForm = ({ city, setCity, onSubmit, isValid }) => {
  return (
    <form onSubmit={onSubmit} className="search-form">
      <div className="input-group">
        <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Enter a city name" />
        <button type="submit">Get Weather</button>
      </div>
    </form>
  );
};

export default SearchForm;
