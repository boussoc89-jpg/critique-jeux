import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGames } from "./store/gamesSlice";
import SearchBar from "./components/SearchBar";
import Filters from "./components/Filters";
import GameList from "./components/GameList";

function App() {
  const dispatch = useDispatch();
  const { searchQuery, ordering, genre } = useSelector((s) => s.games);

  useEffect(() => {
    dispatch(fetchGames({ search: searchQuery, ordering, genre }));
  }, [searchQuery, ordering, genre, dispatch]);

  return (
    <div className="app">
      <h1>🎮 CritiqueJeux</h1>
      <SearchBar />
      <Filters />
      <GameList />
    </div>
  );
}

export default App;
