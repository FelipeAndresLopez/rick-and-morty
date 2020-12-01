import React from 'react';

export const SearchBox = ({ searchInput, search, handleSearch }) => {
  return (
    <div>
      <input ref={searchInput} type="text" name="search" value={search} onChange={handleSearch} />
    </div>
  )
}
