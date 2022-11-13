import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../Context/AppContext'
import data from '../../Data/Data'
import Game from '../game/Game'

export default function GameList() {

    const navigate = useNavigate()

    const {games, setGames, setSelectedGame} = useContext(AppContext)

    const handleRemoveOne = (id) => {
        setGames([...games.filter(g => g.id !== id)])
    }

    const handleRemoveAll = () => {
        setGames([])
    }

    const handleGetAll = () => {
        setGames(data)
    }

    const handleRaiseOne = (id) => {
        const [gameToRaisePrice] = games.filter(g=>g.id === id)
        gameToRaisePrice.price *= 1.2
        setGames([
            ...games
        ])
    }

    const handleRaiseAll = () => {
        games.map(g => g.price *= 1.2)
        setGames([...games])
    }

    const handleSelectOne = (game) => {
        navigate("/adminpanel/games/update/" + game.id)
        setSelectedGame(game)
    }
 
  return (
    <div>
        <h2>GameListAdmin</h2>
        <p>{games.map(g => <Game key={g.id} game={g} handleRemoveOne={handleRemoveOne} handleRaiseOne={handleRaiseOne} handleSelectOne={handleSelectOne} />)}</p>
        <p><button onClick={handleRemoveAll} >Remove All</button> 
        <button onClick={handleGetAll} >Get All</button> 
        <button onClick={handleRaiseAll} >Raise Prices %20</button></p>
    </div>
  )
}
