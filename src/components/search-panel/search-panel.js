import React from 'react';

import './search-panel.css';

const SearchPanel = ({ onSearchRequest}) => {
  const onSearchChange = (e) => {
    onSearchRequest(e.target.value);
  }
  
  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Search"
      onChange={onSearchChange} />
  );
};

export default SearchPanel;
