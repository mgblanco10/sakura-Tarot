import React from 'react'
import './Game.css'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'
import StarFavorites from '../../components/StarFavorites/StarFavorites'
import Card from '../../components/Card/Card'


function Game() {
  return (
    <div className='game'>
      <Logo />
      <StarFavorites />
      <Card />
        <Button route={'/result'} text={"RESULTADO"} />
    </div>
  )
}

export default Game
