import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'

export default function Cart() {

    const {cartList} = useContext(AppContext)

    let totalPrice = 0
    cartList.map(c => totalPrice += parseInt(c.price))

  return (
    <div>
        <h2>Cart</h2>
        {cartList.map(c => <p>{c.id} - {c.gameName} - Fiyat : {c.price}TL</p>)}
        <p>Total Cart Price : {totalPrice}TL</p>
    </div>
  )
}
