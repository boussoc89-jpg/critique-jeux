import React from 'react';
import { useSelector } from 'react-redux';
import GameCard from './GameCard';

function GameList() {
  const { items, loading, error } = useSelector(s => s.games);

  if (loading) return <p className="status">⏳ Chargement...</p>;
  if (error) return <p className="status">❌ Erreur : {error}</p>;
  if (items.length === 0) return <p className="status">Aucun jeu trouvé.</p>;

  return (
    <div className="game-list">
      {items.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;