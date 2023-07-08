// import React from 'react'
// import './Result.css'
// import Button from '../../components/Button/Button'
// import Logo from '../../components/Logo/Logo'
// import StarFavorites from '../../components/StarFavorites/StarFavorites'
// import CardResult from '../../components/CardResult/CardResult'
// import Message from '../../components/Message/Message'

// function Result() {
//   return (
//     <div className='result'>
//     <Logo />
//     <StarFavorites />
//     <CardResult />
//     <Message />
//     <Button route={"/favorites"} text={"RESULTADO"} />
//     </div>
//   )
// }

// export default Result


import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button/Button';
import Logo from '../../components/Logo/Logo';
import StarFavorites from '../../components/StarFavorites/StarFavorites';
import CardResult from '../../components/CardResult/CardResult';
import Message from '../../components/Message/Message';

function Result() {
  const [cardData, setCardData] = useState([]);
  const [message, setMessage] = useState('');

  const saveCardGroup = () => {
    const cardGroup = {
      cards: cardData,
      message: message,
    };

    axios.post('http://localhost:3000/cardGroups', cardGroup)
      .then((response) => {
        console.log('Grupo de cartas y mensaje guardados:', response.data);
        setCardData([]);
        setMessage('');
      })
      .catch((error) => {
        console.error('Error al guardar el grupo de cartas y mensaje:', error);
      });
  };

  return (
    <div className='result'>
      <Logo />
      <StarFavorites />
      <CardResult
        cardData={cardData}
        setCardData={setCardData}
      />
      <Button
        route={'/favorites'}
        text={'RESULTADO'}
        onClick={saveCardGroup}
      />
    </div>
  );
}

export default Result;
