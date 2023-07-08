import React from 'react'
import './StarFavorites.css'
import { Link } from 'react-router-dom'
import starFavorites from '../../assets/img-starFavorites.svg'

function StarFavorites() {
  return (
    <Link to="/favorites" className = "Star_container">
    <img className="star-favorites" src= {starFavorites} alt= "Icono de favoritos" />
  </Link>
  )
}

export default StarFavorites