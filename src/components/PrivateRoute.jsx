import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const PrivateRoute = ({ element }) => {
    const {user} = useAuthContext();
  
    return user ? element : <Navigate to="/login" />;
  };

  export default PrivateRoute