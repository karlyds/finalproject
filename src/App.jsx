import React from 'react';
import Header from './Header';
import CityList from './CityList';
import CityDetails from './CityDetails';
import citiesData from './cities.json';
import './App.css'; 

function App() {
  return (
    <div className="App">
      <Header />
      <CityList cities={citiesData} />
      <CityDetails city={citiesData[0]} /> {/* Display details for the first city by default */}
    </div>
  );
}

export default App;
