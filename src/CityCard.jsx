import React from 'react';

const CityCard = ({ city }) => {
  const { name, country, population, description, location, statistics } = city;

  return (
    <>
      <div className="city-card">
        <h3 className="city-name">{name}, {country}</h3>
        <p className="population">Population: {population}</p>
        <p className="description">Description: {description}</p>
        <p className="location">Location: {location.latitude}, {location.longitude}</p>
        <p className="area">Area: {statistics.area}</p>
        <p className="language">Official Language: {statistics.officialLanguage}</p>
        <p className="currency">Currency: {statistics.currency}</p>
      </div>
    </>
  );
};

export default CityCard;
