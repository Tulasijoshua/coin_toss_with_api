import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [signMsg, setSignMsg] = useState(null);
  const [user, setUser] = useState(() => {
    const storedUser = sessionStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [isLogin, setIsLogin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  // const login = (userData) => {
  //   const storedUser = JSON.parse(localStorage.getItem("user"));
  //   if (storedUser && userData.password === storedUser.password && userData.username === storedUser.username && userData.email === storedUser.email) {
  //     setUser(userData);
  //     setIsLogin(true)
  //     navigate('/')
  //     localStorage.setItem("isLogin", JSON.stringify(isLogin));
  //   } else if (userData.username !== storedUser.username) {
  //     alert("Invalid username. Please try again.");
  //   } else if (userData.email !== storedUser.email) {
  //     alert("Invalid email. Please try again.");
  //   } else if (userData.password !== storedUser.password) {
  //     alert("Invalid password. Please try again.");
  //   } else {
  //     alert("All fields are required.");

  //   }
  // };
  const login = (userData) => {
    axios.post(`${BASE_URL}api/auth/login/`, userData).then(response => {
      console.log(response)
    }).catch(err => {
      console.error(err)
    })
    
  };

  // const signup = (userData) => {
  //   localStorage.setItem("user", JSON.stringify(userData));
  //   setUser(userData);
  // };

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
