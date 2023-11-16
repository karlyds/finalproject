import React from 'react';
import CityCard from './CityCard';

const CityList = ({ cities, searchQuery }) => {
  const filteredCities = cities.filter(city =>
    `${city.name}, ${city.country}`.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="city-list">
      {filteredCities.map(city => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
};

export default CityList;
