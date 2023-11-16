import React from 'react';


const CityDetails = ({ city }) => {
  const { name, country, population, description, location, statistics } = city;

  return (
    <div className="city-details">
      <h2>{name}, {country}</h2>
      <p>Population: {population}</p>
      <p>Description: {description}</p>
      <p>Location: {location.latitude}, {location.longitude}</p>
      <p>Area: {statistics.area}</p>
      <p>Official Language: {statistics.officialLanguage}</p>
      <p>Currency: {statistics.currency}</p>
    </div>
  );
};

export default CityDetails;
