import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../Context/AppContext'

export default function Register() {

    const navigate = useNavigate()

    const {users, setUsers} = useContext(AppContext)

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        setUsers([
            ...users,
            {id:users.length +1, userName:e.target.userName.value, password:e.target.password.value}
        ])
        navigate("/login")
    }

  return (
    <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmitRegister} >
            <p><input id='userName' name='userName' placeholder='User Name' type="text" /></p>
            <p><input id='password' name='password' placeholder='Password' type="password" /></p>
            <p><button type='submit' >Register</button></p>
        </form>
    </div>
  )
}
