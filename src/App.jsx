import { useNavigate } from 'react-router-dom';
import './App.css'

import Routers from './utils/Routers';
import { Getter } from './utils/Getters';
import { useEffect } from 'react';

function App() {

  const navigate = useNavigate()
  const get = Getter()
  useEffect(()=>{
    if(!get.isLogin){
      navigate('/login', {replace: true})
    }
  }, [])

  return (
    <>
      <Routers />
    </>
  )
}

export default App