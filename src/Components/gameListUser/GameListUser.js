import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../Context/AppContext'
import GameUser from '../gameUser/GameUser'

export default function GameListUser() {

    const navigate = useNavigate()

    const {games, cartList, setCartList, setSelectedGame} = useContext(AppContext)

    const handleAddToCart = (game) => {
        if (cartList.find(g => g.id === game.id)) {
            alert("Zort")
        }
        else {
            setCartList([
            ...cartList,
            game
        ])
        }
    }

    const handleViewDetails = (game) => {
        navigate("/games/details/" + game.id)
        setSelectedGame(game)
    }

  return (
    <div>
        <h2>GameList</h2>
        <p>{games.map(g => <GameUser game={g} handleAddToCart={handleAddToCart} handleViewDetails={handleViewDetails} />)}</p>
    </div>
  )
}
