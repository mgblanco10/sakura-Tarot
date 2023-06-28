import React from 'react';

function CardResult({ selectedCards }) {
  return (
    <div>
      <h1>Cartas seleccionadas:</h1>
      <div>
        {selectedCards.slice(0, 3).map((card) => (
          <div key={card.id}>
            <img src={card.sakuraCard} alt="Carta" />
            <h2>{card.spanishName}</h2>
            <p>{card.meaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardResult;
