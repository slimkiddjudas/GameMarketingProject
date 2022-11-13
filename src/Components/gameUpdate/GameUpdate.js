import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../Context/AppContext'

export default function GameUpdate() {

    const navigate = useNavigate()

    const {games, setGames, selectedGame, setSelectedGame} = useContext(AppContext)

    const onChange = (e) => {
        setSelectedGame({
            ...selectedGame,
            [e.target.name] : e.target.value
        })
    }

    const handleOnSubmitUpdate = (e) => {
        e.preventDefault()
        setGames([
            ...games.filter(g => g.id !== selectedGame.id),
            selectedGame
        ].sort((a,b)=>(a.id > b.id) ? 1 : -1))
        setSelectedGame({id:0, gameName:"", price:"", description:"", image:""})
        navigate("/adminpanel")
    }

  return (
    <div>
        <h2>GameUpdate</h2>
        <form onSubmit={handleOnSubmitUpdate} >
            <p><input id='gameName' name='gameName' type="text" placeholder='Game Name' value={selectedGame.gameName} onChange={onChange} /></p>
            <p><input id='price' name='price' type="text" placeholder='Price' value={selectedGame.price} onChange={onChange} /></p>
            <p><input id='description' name='description' type="text" placeholder='Description' value={selectedGame.description} onChange={onChange} /></p>
            <p><input id='image' name='image' type="text" placeholder='Image' value={selectedGame.image} onChange={onChange} /></p>
            <p><button type='submit' >Update</button></p>
        </form>
    </div>
  )
}
