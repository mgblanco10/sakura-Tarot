import React from 'react'
import './InformationHome.css';

function InformationHome() {
  return (
    <>
    <div className='informationHome'>
      <h1 className='titleInformation'>¡Bienvenid@!</h1>
      <h2 className='subtitleHome'> Tirada de TAROT</h2>
        <span className='homeInformation'>Nuestra tirada de Tarot es una tirada simple pasado, presente y futuro gratis de tres cartas.</span> 
        <p className='homeInformation'>Carta N° 1: Pasado.</p>
        <p className='homeInformation'> Carta N° 2: Presente.</p>
        <p className='homeInformation'>Carta N° 3:  Futuro.</p>
      <h2 className='subtitleHome'>¡Realiza tu tirada!</h2>
    </div>
</>
  )
}

export default InformationHome