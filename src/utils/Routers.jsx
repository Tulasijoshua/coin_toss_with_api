import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import Prediction from '../pages/Prediction'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<PrivateRoute element={<Prediction />} />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    </div>
  )
}

export default Routers