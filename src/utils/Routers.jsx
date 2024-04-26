import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import Prediction from '../pages/Prediction'
import Signup from '../pages/auth/Signup'
import Login from '../pages/auth/Login'
import Confirm from '../pages/auth/Confirm'

const Routers = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Prediction />}  />
            <Route path='/prediction/deposite' element={<Prediction addNew={true}/>} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/confirm' element={<Confirm />} />
        </Routes>
    </div>
  )
}

export default Routers