import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminPanel() {
  return (
    <div>
        <h2>AdminPanel</h2>
        <ul>
            <li><Link to="/adminpanel/games" >Game List</Link></li>
            <li><Link to="/adminpanel/games/add" >Game Add</Link></li>
            <li><Link to="/adminpanel/games/raiseprices" >Raise Prices</Link></li>
        </ul>
    </div>
  )
}
