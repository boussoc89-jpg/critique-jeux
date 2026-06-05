import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../store/gamesSlice';

function SearchBar() {
  const dispatch = useDispatch();
  const searchQuery = useSelector(s => s.games.searchQuery);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Rechercher un jeu..."
        value={searchQuery}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
    </div>
  );
}

export default SearchBar;