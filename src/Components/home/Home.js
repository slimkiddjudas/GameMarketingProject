import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <h2>Home</h2>
        <ul>
            <li><Link to="/" >Home Page</Link></li>
            <li><Link to="/login" >Login</Link></li>
            <li><Link to="/games" >Games</Link></li>
            <li><Link to="/cart" >Go To Your Cart</Link></li>
        </ul>
    </div>
  )
}
