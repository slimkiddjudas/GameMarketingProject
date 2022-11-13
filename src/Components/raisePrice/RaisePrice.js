import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../Context/AppContext'

export default function RaisePrice() {

  const navigate = useNavigate()

  const {games, setGames} = useContext(AppContext)

  const handleSubmitRaisePrice = (e) => {
    games.map(g => g.price = parseInt(g.price) + parseInt(g.price) * e.target.raiseAmount.value/100)
    setGames([
      ...games
    ])
    navigate("/adminpanel")
  }

  return (
    <div>
        <h2>RaisePrice</h2>
        <form onSubmit={handleSubmitRaisePrice}>
          <p><input id='raiseAmount' name='raiseAmount' placeholder='Raise Amount' /></p>
          <p><button type='submit' >Raise All</button></p>
        </form>
    </div>
  )
}
