import React, { useState } from 'react';
import PetsData from '../pets.json';

function Filter({ setSearchResults }) {
  const [query, setQuery] = useState('');

  const getFilteredItems = (query, items) => {
    if (!query) {
      return items;
    }

    const filteredItems = items.filter((item) => {
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.breed.toLowerCase().includes(query.toLowerCase()) ||
        item.age === parseInt(query) ||
        item.price === parseFloat(query)
        
      );
    });

    return filteredItems;
  };

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);
    const filteredItems = getFilteredItems(searchTerm, PetsData.pets);
    setSearchResults(filteredItems);
  };

  return (
    <div>
      <label>Search</label>
      <input type="text" value={query} onChange={handleSearch} />
    </div>
  );
}

export default Filter;
