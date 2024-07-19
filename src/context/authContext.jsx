import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/config";
import Alert from "../common/Alerts/Alert";

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
  const [isAlert, setAlert] = useState({
    status: false,
    text: '',
    bigText: '',
    type: '',
    button: '',
    action: ()=>{},
    button1: '',
    action1: ()=>{},
})

  useEffect(() => {
    sessionStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  
  const login = (userData) => {
    axios.post(`${BASE_URL}api/auth/login/`, userData).then(response => {
      console.log(response.data);
      setLoginMsg(response.data.message)
      const user = response.data.user_data
      const tokens = response.data.tokens
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
    axios.post(`${BASE_URL}api/register/`, userData)
      .then(response => {
        console.log(response.data)
        setSignMsg(response.data)
        setAlert({...isAlert, status: true, text:"Signup successful!", type: 'success'})

        navigate('/confirm')
      }).catch(err => {
        console.error(err)
        const errMsg = err.response.data.error;
        if(err.response.data.error) {
          setAlert({...isAlert, status: true, text: errMsg, type: 'error'})

        } else {
          setAlert({...isAlert, status: true, text:"All fields are required and maybe case sensitive", type: 'error'})
        }

      })
  };

  const logout = () => {
    navigate('/login')
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('isLogin');
    setUser(null);
    setIsLogin(false)
  };

  return <AuthContext.Provider value={{user, login, signup, logout, isLogin}}>
          <Alert big={isAlert.bigText} button1={isAlert.button} action1={()=>isAlert.action()} isON={isAlert.status} type={isAlert.type} message={isAlert.text} setON={(val)=>setAlert({...isAlert, status: false, text: ''})}/>
          {children}
    </AuthContext.Provider>
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
