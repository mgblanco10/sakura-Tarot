import React from 'react'
import './Game.css'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'
import StarFavorites from '../../components/StarFavorites/StarFavorites'
import Card from '../../components/Card/Card'


function Game() {
  return (
    <div className='game'>
      <div className='headerGame'>
        <Logo />
        <StarFavorites />
      </div>
      <Card />
      <div className='buttonGame'>
        <Button route={'/result'} text={"RESULTADO"} />
        </div>
    </div>
  )
}

export default Game
