import React from 'react';

function GameCard({ game }) {
  return (
    <div className="game-card">
      {game.background_image && (
        <img src={game.background_image} alt={game.name} />
      )}
      <div className="game-info">
        <h3>{game.name}</h3>
        <p>⭐ {game.rating} / 5</p>
        <p>📅 {game.released || 'Date inconnue'}</p>
        <p>🎮 {game.genres?.map(g => g.name).join(', ') || 'N/A'}</p>
      </div>
    </div>
  );
}

export default GameCard;