import { useState } from 'react'
import './App.css'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Prediction from './pages/Prediction';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import ResultModal from './components/ResultModal'
import PrivateRoute from './components/PrivateRoute'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<PrivateRoute element={<Prediction />} />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </>
  )
}

export default App