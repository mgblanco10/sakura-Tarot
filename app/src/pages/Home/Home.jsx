import React from 'react'
import './Home.css'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'
import Logo from '../../components/Logo/Logo'
import StarFavorites from '../../components/StarFavorites/StarFavorites'
import InformationHome from '../../components/InformationHome/InformationHome'

function Home() {
  return (
    <div className='home'>
      <div className='header'>
        <Logo />
        <StarFavorites />
      </div>
      <InformationHome />
      <div className="butonHome" >
      <Button route={"/game"} text = {"CONSULTAR CARTAS CLOW"}/>
      </div>
    </div>
  )
}

export default Home