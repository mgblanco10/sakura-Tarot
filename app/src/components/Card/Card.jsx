import React, { useEffect, useState } from 'react';
import './Card.css'

function Card() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
      .then(response => response.json())
      .then(data => {
        const updatedCards = data.map(card => ({ ...card, isFlipped: false }));
        setCards(updatedCards);
      })
      .catch(error => console.log(error));
  }, []);

  const handleCardClick = (cardId) => {
    setCards(prevCards => {
      return prevCards.map(card => {
        if (card.id === cardId) {
          return { ...card, isFlipped: !card.isFlipped };
        }
        return card;
      });
    });
  };

  return (
    <div className="card-container">
      {cards.map(card => (
        <div
          className={`card ${card.isFlipped ? 'flipped' : ''}`}
          key={card.id}
          style={{ width: 'calc(100% / 19)' }}
          onClick={() => handleCardClick(card.id)}
        >
          <div className="card-inner">
            <div className={`card-front ${card.isFlipped ? 'hidden' : ''}`}>
              <img src={card.cardsReverse.sakuraReverse} className="card-img-top" alt="..." />
            </div>
            <div className={`card-back ${card.isFlipped ? '' : 'hidden'}`}>
              <img src={card.sakuraCard} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{card.spanishName}</h5>
                <p className="card-text">{card.meaning}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;


