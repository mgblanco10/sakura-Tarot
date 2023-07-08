import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import '../index.css'
import Result from '../pages/Result/Result.jsx'
import Game from '../pages/Game/Game.jsx'
import Favorites from '../pages/Favorites/Favorites';


export const Router = createBrowserRouter ([
    {
      path: '/',
      element: <App />,
    },
    {
      path: '/result',
      element: <Result />
    },
    {
      path: '/game',
      element: <Game />
    },
    {
        path: '/favorites',
        element: <Favorites />
      }
   
  ])

