import React from 'react'
import { Link } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
const Home = () => {
  return (
    <div className='home '>
        
        <div>
        <h1>Welcome User</h1>
        <div>
          <Link to='/register' element={<Register />}><div>Register</div></Link>
          <Link to='/login' element={<Login />}><div>Login</div></Link>
        </div>
        
        </div>
    </div>
  )
}

export default Home