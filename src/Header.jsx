import React from 'react';

const Header = ({ searchQuery, setSearchQuery, filterOptions, selectedFilter, setFilter }) => {
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <header>
      <h1>Top 25 Cities Explorer</h1>
      <div>
        {
      }
        <select value={selectedFilter} onChange={handleFilterChange}>
          <option value="All">All</option>
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;
