import React, { useState } from 'react';
import Header from './Header';
import CityList from './CityList';
import CityDetails from './CityDetails';
import citiesData from './cities.json';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filterOptions = [...Array.from(new Set(citiesData.map((city) => city.country)))];
  const filteredCities = citiesData.filter((city) =>
    filter === 'All' ? true : city.country === filter
  );

  return (
    <div className="App">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filterOptions={filterOptions}
        selectedFilter={filter}
        setFilter={setFilter}
      />
      <CityList cities={filteredCities} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
