import React, { useState, useEffect } from 'react';
import './FavoriteMessage.css';
import axios from 'axios';

function FavoriteMessage() {
  const [cardData, setCardData] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/cardGroups')
      .then((response) => {
        const data = response.data;
        setCardData(data);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
      });
  }, []);

  function formatDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const handleDelete = async (index) => {
    try {
      await axios.delete(`http://localhost:3000/cardGroups/${cardData[index].id}`);
      const updatedCardData = [...cardData];
      updatedCardData.splice(index, 1);
      setCardData(updatedCardData);
    } catch (error) {
      console.error('Error al eliminar los datos:', error);
    }
  };

  const filteredCardData = cardData.filter((_, index) => !selectedCards.includes(index));

  return (
    <div className="favoritePage">
      {filteredCardData.map((cardGroup, index) => (
        <div key={index} className="cardGroupContainer">
          <button className="buttonDeleteFavorites"  onClick={() => handleDelete(index)}>X</button>
          <div className="cardGroupWindow">
            <h3>Date: {formatDate(cardGroup.date)}</h3>
            <h3>Meanings:</h3>
            <ul className='meaningList'>
              {cardGroup.cards.map((card, index) => (
                <li className='meaningList' key={index}>{card.meaning}</li>
              ))}
            </ul>
            <h3>Message:</h3>
            <p>{cardGroup.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FavoriteMessage;
