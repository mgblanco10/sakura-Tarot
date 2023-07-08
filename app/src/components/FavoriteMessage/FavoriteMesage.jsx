// // import React, { useState, useEffect } from 'react';
// // import './FavoriteMessage.css'
// // import axios from 'axios';

// // function FavoriteMesage() {
// //   const [cardData, setCardData] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:3000/cardGroups')
// //       .then(response => {
// //         const data = response.data;
// //         setCardData(data);
// //       })
// //       .catch(error => {
// //         console.error('Error al obtener los datos:', error);
// //       });
// //   }, []);

// //   return (
// //     <div className='favoritePage'>
// //       {cardData.map((cardGroup, index) => (
// //         <div key={index}>
// //           <h3>Meanings:</h3>
// //           <ul>
// //             {cardGroup.cards.map((card, index) => (
// //               <li key={index}>{card.meaning}</li>
// //               ))}
// //           </ul>
// //               <h3>Message:</h3>
// //               <p>{cardGroup.message}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default FavoriteMesage;




// import React, { useState, useEffect } from 'react';
// import './FavoriteMessage.css';
// import axios from 'axios';

// function FavoriteMessage() {
//   const [cardData, setCardData] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:3000/cardGroups')
//       .then((response) => {
//         const data = response.data;
//         setCardData(data);
//       })
//       .catch((error) => {
//         console.error('Error al obtener los datos:', error);
//       });
//   }, []);

//   function formatDate(timestamp) {
//     const date = new Date(timestamp);
//     const day = date.getDate();
//     const month = date.getMonth() + 1;
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   }

//   return (
//     <div className="favoritePage">
//       {cardData.map((cardGroup, index) => (
//         <div key={index}>
//           <h3>Date: {formatDate(cardGroup.date)}</h3>
//           <h3>Meanings:</h3>
//           <ul>
//             {cardGroup.cards.map((card, index) => (
//               <li key={index}>{card.meaning}</li>
//             ))}
//           </ul>
//           <h3>Message:</h3>
//           <p>{cardGroup.message}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default FavoriteMessage;



import React, { useState, useEffect } from 'react';
import './FavoriteMessage.css';
import axios from 'axios';

function FavoriteMessage() {
  const [cardData, setCardData] = useState([]);

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

  return (
    <div className="favoritePage">
      {cardData.map((cardGroup, index) => (
        <div key={index} className="cardGroupContainer">
          <div className="cardGroupWindow">
            <h3>Date: {formatDate(cardGroup.date)}</h3>
            <h3>Meanings:</h3>
            <ul>
              {cardGroup.cards.map((card, index) => (
                <li key={index}>{card.meaning}</li>
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


