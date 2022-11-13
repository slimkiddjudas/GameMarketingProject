import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContext from '../../Context/AppContext'

export default function Login() {

    const navigate = useNavigate()

    const {users} = useContext(AppContext)

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        if (users.filter(u => u.userName === e.target.userName.value && u.password === e.target.password.value).length > 0) {
            alert("Login Succesed")
            navigate("/adminpanel")
        }
        else {
            alert("Login Failed")
        }
    }

    const handleRegister = () => {
        navigate("/login/register")
    }

  return (
    <div>
        <h2>Login</h2>
        <form onSubmit={handleSubmitLogin} >
            <p><input id='userName' name='userName' type="text" placeholder='User Name' /></p>
            <p><input id='password' name='password' type="password" placeholder='Password' /></p>
            <p><button type='submit'>Login</button> <button onClick={handleRegister} type='button'>Register</button></p>
        </form>
    </div>
  )
}
