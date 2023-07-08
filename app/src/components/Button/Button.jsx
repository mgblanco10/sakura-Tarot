import React from 'react'
import './Button.css';
import { Link } from 'react-router-dom';

function Button(props) {
  return (
   
    <button className="button">
        <Link to={props.route} className='textButton'>{props.text}</Link>
    </button>

  )
}

export default Button