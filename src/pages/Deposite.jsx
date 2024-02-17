import React, { useState } from 'react'
import ModalLoading from '../components/modal/ModalLoading'
import { endpoint } from '../utils/Endpoints'
import { Getter } from '../utils/Getters'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Deposite = () => {
  const {user, headers} = Getter()
  const navigate = useNavigate()
  const [state, setState] = useState({
    details: {
      balance: '',
    },
    isRequesting: false,
  })

  const SubmitAdd = (e) => {
    e.preventDefault()
    setState({...state, isRequesting: true})
    axios.post(endpoint.updateBalance(user.id), state.details, headers)
    .then(res=>{
        setState({...state, isRequesting: false})
        console.log(res.data)
        // close()
        navigate(-1, {replace: true})
    }).catch(err=>{
        setState({...state, isRequesting: false})
        console.log(err)
    })
  }
  
  return (
    <form onSubmit={(e)=>SubmitAdd(e)} className='w-full flex flex-col'>
        {state.isRequesting && <ModalLoading/>}
        <h1 className='text-2xl font-semibold mb-5'>Deposit Amount</h1>

        <section className="w-full flex flex-col mb-3">
            <p className='text-[1.2rem]'>Amount</p>
            <input value={state.details.balance} onChange={(e)=>setState({...state, details:{...state.details, balance: e.target.value}})} type="text" className='w-full h-[40px] px-2 text-[1.2rem] font-semibold border border-gray-500'/>
        </section>
        <br /><br />
        <div className="w-full flex justify-center">
            <button className='text-white bg-indigo-500 px-10 h-[45px] rounded-lg text-lg'>Add Amount</button>
        </div><br /><br /><br />
    </form>
  )
}

export default Deposite