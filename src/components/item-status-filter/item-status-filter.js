import React from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({
  onAllFilterClick,
  onActiveFilterClick,
  onDoneFilterClick,
  activeFilter,
}) => {
  return (
    <div className="btn-group">
      <button
        type="button"
        className={
          activeFilter === 'all' ? 'btn btn-info' : 'btn btn-outline-secondary'
        }
        onClick={onAllFilterClick}
      >
        All
      </button>
      <button
        type="button"
        className={
          activeFilter === 'active' ? 'btn btn-info' : 'btn btn-outline-secondary'
        }
        onClick={onActiveFilterClick}
      >
        Active
      </button>
      <button
        type="button"
        className={
          activeFilter === 'done' ? 'btn btn-info' : 'btn btn-outline-secondary'
        }
        onClick={onDoneFilterClick}
      >
        Done
      </button>
    </div>
  );
};

export default ItemStatusFilter;
