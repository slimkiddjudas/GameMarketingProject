import React from 'react'

export default function Game({game, handleRemoveOne, handleRaiseOne, handleSelectOne}) {
  return (
    <div>
        <p>
          {game.id} - {game.gameName} - Fiyat : {game.price}TL
          <button onClick={() => handleSelectOne(game)} >Select And Update</button>
          <button onClick={() => handleRemoveOne(game.id)} >Remove</button>
          <button button onClick={()=> handleRaiseOne(game.id)} >Raise Price</button>
        </p>
    </div>
  )
}
