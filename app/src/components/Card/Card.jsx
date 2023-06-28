import React, { useEffect, useState } from 'react';
import './Card.css';



function Card() {

  const [cards, setCards] = useState([]);
  const [showDeck, setShowDeck] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
      .then(response => response.json())
      .then(data => {
        const updatedCards = data.map(card => ({ ...card, isFlipped: false }));
        setCards(updatedCards);
      })
      .catch(error => console.log(error));
  }, []);

  const handleDeckClick = () => {
    setShowDeck(false);
    setSelectedCards(shuffleArray(cards).slice(0, 8));
  };

  const deckStyle = showDeck ? { '--deck-background-color': cards[0]?.cardsReverse?.sakuraReverse } : null;

  const handleCardClick = (cardId) => {
    setSelectedCards(prevCards => {
      return prevCards.map(card => {
        if (card.id === cardId) {
          return { ...card, isFlipped: !card.isFlipped };
        }
        return card;
      });
    });
  };

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div className="card-container">
      {showDeck ? (
        <div
          className="card deck"
          onClick={handleDeckClick}
          style={deckStyle}
        >
          <span className='text-card'>Click para mostrar las cartas</span>
        </div>
      ) : (
        <div className="card-circle">
          {selectedCards.map((card, index) => (
            <div
              className={`card ${card.isFlipped ? 'flipped' : ''}`}
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              style={{
                transform: `rotate(${index * (360 / selectedCards.length)}deg) translateX(150px) rotate(-${index * (360 / selectedCards.length)}deg)`
              }}
            >
              <div className="card-inner">
                <div className={`card-front ${card.isFlipped ? 'hidden' : ''}`}>
                  <img src={card.cardsReverse.sakuraReverse} className="card-img-top" alt="..." />
                </div>
                <div className={`card-back ${card.isFlipped ? '' : 'hidden'}`}>
                  <img src={card.sakuraCard} className="card-img-top" alt="..." />
                  <div className={`card-body ${card.isFlipped ? 'visible' : 'hidden'}`}>
                    <h5 className="card-title">{card.spanishName}</h5>
                    <p className="card-text">{card.meaning}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;

