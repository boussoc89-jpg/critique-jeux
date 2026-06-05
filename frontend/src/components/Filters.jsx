import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setOrdering, setGenre } from '../store/gamesSlice';

function Filters() {
  const dispatch = useDispatch();
  const { ordering, genre } = useSelector(s => s.games);

  return (
    <div className="filters">
      <select value={ordering} onChange={(e) => dispatch(setOrdering(e.target.value))}>
        <option value="">Trier par...</option>
        <option value="-rating">Meilleure note</option>
        <option value="-released">Plus récent</option>
        <option value="name">Nom A-Z</option>
        <option value="-metacritic">Metacritic</option>
      </select>

      <select value={genre} onChange={(e) => dispatch(setGenre(e.target.value))}>
        <option value="">Tous les genres</option>
        <option value="action">Action</option>
        <option value="rpg">RPG</option>
        <option value="adventure">Aventure</option>
        <option value="simulation">Simulation</option>
        <option value="sports">Sports</option>
        <option value="puzzle">Puzzle</option>
      </select>
    </div>
  );
}

export default Filters;