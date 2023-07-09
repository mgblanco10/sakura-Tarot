// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { getAllCards } from '../../services/getAllCard';
// import getRandom from '../../services/getRandom';
// import Message from '../Message/Message';
// import './CardResult.css';


// function CardResult() {
//   const [cardData, setCardData] = useState([]);
//   const [cardGroupId, setCardGroupId] = useState('');
//   const [cardGroups, setCardGroups] = useState([]);
//   const [groupCount, setGroupCount] = useState(0);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     getAllCards().then((data) => {
//       const randomCards = getRandom(data, 3);
//       setCardData(randomCards);
//       setCardGroupId(generateCardGroupId());
//     });
//   }, []);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/cardGroups')
//       .then((response) => {
//         const groups = response.data;
//         setCardGroups(groups);
//         setGroupCount(groups.length);
//       })
//       .catch((error) => {
//         console.error('Error al obtener los grupos de cartas:', error);
//       });
//   }, []);

//   function generateCardGroupId() {
//     return `group_${Date.now()}`;
//   }

//   function saveCardGroup(cardGroup) {
//     axios
//       .post('http://localhost:3000/cardGroups', cardGroup)
//       .then((response) => {
//         console.log('Grupo de cartas guardado:', response.data);
//         setCardGroups((prevCardGroups) => [...prevCardGroups, response.data]);
//         setCardGroupId(response.data.id); 
//         setMessage(''); 
//       })
//       .catch((error) => {
//         console.error('Error al guardar el grupo de cartas:', error);
//       });
//   }

//   function saveMessage(message) {
//     const cardGroup = cardGroups.find((group) => group.id === cardGroupId);

//     if (cardGroup) {
//       const updatedCardGroup = {
//         ...cardGroup,
//         message: message,
//       };

//       axios
//         .put(`http://localhost:3000/cardGroups/${cardGroupId}`, updatedCardGroup)
//         .then((response) => {
//           console.log('Mensaje guardado en el grupo de cartas:', response.data);
//           setMessage('');
//         })
//         .catch((error) => {
//           console.error('Error al guardar el mensaje en el grupo de cartas:', error);
//         });
//     }
//   }

//   function handleCardFlip(cardId) {
//     const updatedCardData = cardData.map((card) => {
//       if (card.id === cardId) {
//         const flippedCard = {
//           ...card,
//           isFlipped: !card.isFlipped,
//         };
//         return flippedCard;
//       }
//       return card;
//     });
//     setCardData(updatedCardData);

//     if (updatedCardData.every((card) => card.isFlipped)) {
//       const isCardGroupSaved = cardGroups.some((group) => group.id === cardGroupId);
//       if (!isCardGroupSaved) {
//         const currentDate = new Date();
//         const cardGroup = {
//           id: cardGroupId,
//           cards: updatedCardData,
//           date: currentDate.getTime() 
//         };
//         saveCardGroup(cardGroup);
//       }
//     }
//   }
//   const position = ["PRESENTE", "PASADO", "FUTURO"]

//   return (
//     <div className="container-result">
//       {cardData.map((card) => (
//         <div
//           className={`card ${card.isFlipped ? 'flipped' : ''}`}
//           key={card.id}
//           onClick={() => handleCardFlip(card.id)}
//         >
//           <div className="card-front">
//             <img
//               src={card.isFlipped ? card.sakuraCard : card.cardsReverse.sakuraReverse}
//               className="card-img-top"
//               alt="..."
//             />
//           </div>
//           <div className={`card-body ${!card.isFlipped ? '' : 'hidden'}`}>
//             {card.isFlipped && (
//               <>
//               <h2 className="position">{position}</h2>
//                 <h5 className="card-title">{card.spanishName}</h5>
//                 <p className="card-text">{card.meaning}</p>
//               </>
//             )}
//           </div>
//         </div>
//       ))}
//       {cardData.every((card) => card.isFlipped) && (
//         <Message onSave={saveMessage} cardGroupId={cardGroupId} />
//       )}
//     </div>
//   );
// }

// export default CardResult;



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getAllCards } from '../../services/getAllCard';
import getRandom from '../../services/getRandom';
import Message from '../Message/Message';
import './CardResult.css';

function CardResult() {
  const [cardData, setCardData] = useState([]);
  const [cardGroupId, setCardGroupId] = useState('');
  const [cardGroups, setCardGroups] = useState([]);
  const [groupCount, setGroupCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    getAllCards().then((data) => {
      const randomCards = getRandom(data, 3);
      setCardData(randomCards);
      setCardGroupId(generateCardGroupId());
    });
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3000/cardGroups')
      .then((response) => {
        const groups = response.data;
        setCardGroups(groups);
        setGroupCount(groups.length);
      })
      .catch((error) => {
        console.error('Error al obtener los grupos de cartas:', error);
      });
  }, []);

  function generateCardGroupId() {
    return `group_${Date.now()}`;
  }

  function saveCardGroup(cardGroup) {
    axios
      .post('http://localhost:3000/cardGroups', cardGroup)
      .then((response) => {
        console.log('Grupo de cartas guardado:', response.data);
        setCardGroups((prevCardGroups) => [...prevCardGroups, response.data]);
        setCardGroupId(response.data.id); 
        setMessage(''); 
      })
      .catch((error) => {
        console.error('Error al guardar el grupo de cartas:', error);
      });
  }

  function saveMessage(message) {
    const cardGroup = cardGroups.find((group) => group.id === cardGroupId);

    if (cardGroup) {
      const updatedCardGroup = {
        ...cardGroup,
        message: message,
      };

      axios
        .put(`http://localhost:3000/cardGroups/${cardGroupId}`, updatedCardGroup)
        .then((response) => {
          console.log('Mensaje guardado en el grupo de cartas:', response.data);
          setMessage('');
        })
        .catch((error) => {
          console.error('Error al guardar el mensaje en el grupo de cartas:', error);
        });
    }
  }

  function handleCardFlip(cardId) {
    const updatedCardData = cardData.map((card) => {
      if (card.id === cardId) {
        const flippedCard = {
          ...card,
          isFlipped: !card.isFlipped,
        };
        return flippedCard;
      }
      return card;
    });
    setCardData(updatedCardData);

    if (updatedCardData.every((card) => card.isFlipped)) {
      const isCardGroupSaved = cardGroups.some((group) => group.id === cardGroupId);
      if (!isCardGroupSaved) {
        const currentDate = new Date();
        const cardGroup = {
          id: cardGroupId,
          cards: updatedCardData,
          date: currentDate.getTime() 
        };
        saveCardGroup(cardGroup);
      }
    }
  }

  const positions = ["PRESENTE", "PASADO", "FUTURO"];

  return (
    <div className="container-result">
      {cardData.map((card, index) => (
        <div
          className={`card ${card.isFlipped ? 'flipped' : ''}`}
          key={card.id}
          onClick={() => handleCardFlip(card.id)}
        >
          <div className="card-front">
            <img
              src={card.isFlipped ? card.sakuraCard : card.cardsReverse.sakuraReverse}
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className={`card-body ${!card.isFlipped ? '' : 'hidden'}`}>
            {card.isFlipped && (
              <>
                <h2 className="position">{positions[index]}</h2>
                <h5 className="card-title">{card.spanishName}</h5>
                <p className="card-text">{card.meaning}</p>
              </>
            )}
          </div>
        </div>
      ))}
      {cardData.every((card) => card.isFlipped) && (
        <Message onSave={saveMessage} cardGroupId={cardGroupId} />
      )}
    </div>
  );
}

export default CardResult;
