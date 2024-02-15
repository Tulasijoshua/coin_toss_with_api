import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [signMsg, setSignMsg] = useState(null);
  const [loginMsg, setLoginMsg] = useState(null)
  const [tokens, setTokens] = useState('')
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  
  const login = (userData) => {
    axios.post(`${BASE_URL}api/auth/login/`, userData).then(response => {
      console.log(response.data);
      setLoginMsg(response.data.message)
      const user = response.data.tokens.User_info
      const tokens = response.data.tokens.access
      localStorage.setItem("user", JSON.stringify(user));
      setUser(user)
      localStorage.setItem("tokens", JSON.stringify(tokens));
      setTokens(tokens)
      navigate('/')
    }).catch(err => {
      console.error(err)
    })
    
  };

  const signup = (userData) => {
    axios.post(`${BASE_URL}api/auth/register/`, userData)
      .then(response => {
        console.log(response.data)
        setSignMsg(response.data)
      }).catch(err => {
        console.error(err)
      })
  };

  const logout = () => {
    navigate('/login')
    sessionStorage.removeItem('user');
    setUser(null);
    setIsLogin(false)
  };

  return <AuthContext.Provider value={{user, login, signup, logout, isLogin}}>
        {children}
    </AuthContext.Provider>
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
