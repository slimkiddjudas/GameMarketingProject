import React from 'react'

export default function GameUser({game, handleAddToCart, handleViewDetails}) {
  return (
    <div>
        <p>
            {game.id} - {game.gameName} - Fiyat : {game.price}TL
            <button onClick={() => handleAddToCart(game)} >Add To Cart</button>
            <button onClick={() => handleViewDetails(game)} >View Details</button>
        </p>
    </div>
  )
}
