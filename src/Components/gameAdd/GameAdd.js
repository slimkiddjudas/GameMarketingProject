import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../Context/AppContext'

export default function GameAdd() {

    const navigate = useNavigate()

    const {games, setGames} = useContext(AppContext)

    const [values, setValues] = useState({id:0, gameName:"", price:"", description:"", image:""})

    const handleSubmitAdd = (e) => {
        e.preventDefault()
        if (games.find(g => g.gameName === e.target.gameName.value)) {
            alert("ANANI SIKIM")
        }
        else {
            setGames([
                ...games,
                {...values,id:games.length+1}
            ])
        }
        setValues({id:0, gameName:"", price:"", description:"", image:""})
        navigate("/adminpanel")
    }

    const onChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleClearAdd = () => {
        setValues({id:0, gameName:"", price:"", description:"", image:""})
    }

  return (
    <div>
        <h2>Game Add</h2>
        <form onSubmit={handleSubmitAdd} >
            <p><input id='gameName' name='gameName' type="text" placeholder='Game Name' value={values.gameName} onChange={onChange} /></p>
            <p><input id='price' name='price' type="text" placeholder='Price' value={values.price} onChange={onChange} /></p>
            <p><input id='description' name='description' type="text" placeholder='Description' value={values.description} onChange={onChange} /></p>
            <p><input id='image' name='image' type="text" placeholder='Image' value={values.image} onChange={onChange} /></p>
            <p><button type='submit'>Add a Game</button> <button type='button' onClick={handleClearAdd}>Clear</button></p>
        </form>
    </div>
  )
}
