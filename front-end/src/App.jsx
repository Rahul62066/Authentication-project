import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../Componenets/Home'
import Register from '../Componenets/Register'
import Login from '../Componenets/Login'

import '../Styles/home.scss'
import '../Styles/login.scss'
import '../Styles/register.scss'
const App = () => {
  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element ={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
    </Routes>
   </Router>
   </>
  )
}

export default App