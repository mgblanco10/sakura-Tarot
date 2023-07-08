import { useEffect, useState } from 'react';
import './Card.css';
import { getAllCards } from '../../services/getAllCard';
import getRandom from '../../services/getRandom';

const Card = () => {
  const [cards, setCards] = useState([]);
  const [showDeck, setShowDeck] = useState(true);
  const [selectedCards, setSelectedCards] = useState([]);
  const [seleccionadas, setSeleccionadas] = useState([]);

  useEffect(() => {
    getAllCards().then((data) => {
      const updatedCards = data.map(({ cardsReverse, spanishName, meaning, sakuraCard }) => ({
        sakuraReverse: cardsReverse.sakuraReverse,
        sakuraCard: sakuraCard,
        spanishName: spanishName,
        meaning: meaning,
      }));
      setCards(updatedCards);
    });
  }, []);

  const handleDeckClick = () => {
    setShowDeck(false);
    setSelectedCards(getRandom(cards, 8));
  };

  const handleCardClick = (index) => {
    if (selectedCards.length === 5) {
      return;
    }

    setSelectedCards((prevSelectedCards) => {
      const updatedSelectedCards = [...prevSelectedCards];
      updatedSelectedCards.splice(index, 1);
      return updatedSelectedCards;
    });

    const cartaSeleccionada = selectedCards[index];
    cartaSeleccionada.id = index + 1;
    setSeleccionadas((prevSeleccionadas) => {
      const updatedSeleccionadas = [...prevSeleccionadas];
      updatedSeleccionadas.push(cartaSeleccionada);
      return updatedSeleccionadas;
    });
  };

  console.log('cartas seleccionadas', selectedCards);
  console.log('realmente seleccionadas', seleccionadas);

  return (
    <div className="card-reverse-container">
      {showDeck ? (
        <div className="card-reverse deck" onClick={handleDeckClick}></div>
      ) : (
        <div className="card-circle-reverse">
          {selectedCards.map((card, index) => (
            <div
              className="card-reverse"
              key={index}
              style={{
                transform: `rotate(${index * (360 / selectedCards.length)}deg) translateX(150px) rotate(-${
                  index * (360 / selectedCards.length)
                }deg)`,
              }}
              onClick={() => handleCardClick(index)}
            >
              <img src={card.sakuraReverse} className="card-reverse-img-top" alt="carta sakura reverse" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Card;




// import { useEffect, useState } from 'react';
// import './Card.css';
// import { getAllCards } from '../../services/getAllCard';
// import getRandom from '../../services/getRandom';
// import axios from 'axios';

// const Card = () => {
//   const [cards, setCards] = useState([]);
//   const [showDeck, setShowDeck] = useState(true);
//   const [selectedCards, setSelectedCards] = useState([]);
//   const [seleccionadas, setSeleccionadas] = useState([]);

//   useEffect(() => {
//     getAllCards().then((data) => {
//       const updatedCards = data.map(({ cardsReverse, spanishName, meaning, sakuraCard }) => ({
//         sakuraReverse: cardsReverse.sakuraReverse,
//         sakuraCard: sakuraCard,
//         spanishName: spanishName,
//         meaning: meaning,
//       }));
//       setCards(updatedCards);
//     });
//   }, []);

//   const handleDeckClick = () => {
//     setShowDeck(false);
//     setSelectedCards(getRandom(cards, 8));
//   };

//   const handleCardClick = (index) => {
//     if (selectedCards.length === 5) {
//       return;
//     }

//     setSelectedCards((prevSelectedCards) => {
//       const updatedSelectedCards = [...prevSelectedCards];
//       updatedSelectedCards.splice(index, 1);
//       return updatedSelectedCards;
//     });

//     const cartaSeleccionada = selectedCards[index];
//     cartaSeleccionada.id = index + 1;
//     setSeleccionadas((prevSeleccionadas) => {
//       const updatedSeleccionadas = [...prevSeleccionadas];
//       updatedSeleccionadas.push(cartaSeleccionada);
//       return updatedSeleccionadas;
//     });
//   };

//   const saveSelectedCards = async () => {
//     try {
//       await axios.post('http://localhost:3000/cards', seleccionadas);
//       console.log('Las cartas seleccionadas se guardaron correctamente.');
//     } catch (error) {
//       console.error('Error al guardar las cartas seleccionadas:', error);
//     }
//   };

//   useEffect(() => {
//     if (seleccionadas.length > 0) {
//       saveSelectedCards();
//     }
//   }, [seleccionadas]);

//   console.log('cartas seleccionadas', selectedCards);
//   console.log('realmente seleccionadas', seleccionadas);

//   return (
//     <div className="card-reverse-container">
//       {showDeck ? (
//         <div className="card-reverse deck" onClick={handleDeckClick}></div>
//       ) : (
//         <div className="card-circle-reverse">
//           {selectedCards.map((card, index) => (
//             <div
//               className="card-reverse"
//               key={index}
//               style={{
//                 transform: `rotate(${index * (360 / selectedCards.length)}deg) translateX(150px) rotate(-${
//                   index * (360 / selectedCards.length)
//                 }deg)`,
//               }}
//               onClick={() => handleCardClick(index)}
//             >
//               <img src={card.sakuraReverse} className="card-reverse-img-top" alt="carta sakura reverse" />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;


