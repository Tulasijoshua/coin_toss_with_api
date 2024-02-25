import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'
import { Getter } from '../utils/Getters';

const PrivateRoute = ({ element }) => {
    // const {user} = useAuthContext();
    const {user} = Getter()
  
    return user ? element : <Navigate to="/login" />;
  };

  export default PrivateRoute