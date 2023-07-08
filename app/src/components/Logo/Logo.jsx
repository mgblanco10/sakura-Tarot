import React from 'react'
import logo from '../../assets/img-logo.svg'
import './Logo.css'
import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link to="/">
      <img className="logo-img" src={logo} alt="Logo Womans Destiny" />
    </Link>
  )
}

export default Logo