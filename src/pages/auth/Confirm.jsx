import React, { useState } from 'react'
import bgImg from '../../assets/predict02.jpg'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/authContext'
import { endpoint } from '../../utils/Endpoints'

const Confirm = () => {
    const navigate = useNavigate()

    const [state, setState] = useState({
        details: { email: '', verification_code: '' }
    })

    const submitConfirm = (e) => {
        e.preventDefault();

        axios.post(endpoint.confirm, state.details)
        .then(res=>{
            console.log(res.data)
            localStorage.setItem('user', JSON.stringify({
                email: res.data.user_data.Email,
                code:res.data.user_data.First_name,
                
            }))
            localStorage.setItem('token', res.data.access_token)
            localStorage.setItem('isLogin', 'true')

            navigate('/', {replace: true})
            // navigate('/')
        }).catch(err=>{
            console.log(err)
        })
    }


  return (
    <div className='w-full relative h-[100vh] overflow-hidden'>
            <div className='bgLogin w-full h-full flex text-white flex-col justify-center items-center z-10'>
                <div className='max-w-[30rem] w-[40%]  mx-auto  text-white overflow-auto'>
                    <div className='w-full h-full'>
                        <div className='w-full text-center pb-4'>
                            <h2 className='text-[3rem] capitalize font-semibold'>Confirm mail</h2>
                            <p className='text-[1.1rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eius.</p>
                        </div>
                        <section className="w-[80%] mx-auto py-[2rem]">
                            <form onSubmit={(e)=>submitConfirm(e)} className='w-full flex flex-col justify-center items-center'>
                                <div className='w-full mb-8 flex items-center gap-[0.7rem] py-[0.2rem] px-[1rem] border border-white'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div className='text-[2rem] font-light'>|</div>

                                    <input name='email' value={state.details.email} onChange={(e)=>setState({...state, details: {...state.details, email: e.target.value}})} type="email" className="w-[70%] text-[1.1rem] placeholder:text-white bg-transparent border-none outline-none" placeholder='Enter your email address' />
                                </div>
                                <div className='w-full mb-7 flex items-center gap-[0.7rem] py-[0.2rem] px-[1rem] border border-white'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </div>
                                    <div className='text-[2rem] font-light'>|</div>
                                    <input name='verification_code' value={state.details.verification_code} onChange={(e)=>setState({...state, details: {...state.details, verification_code: e.target.value}})} type="text" className="w-[70%] text-[1.1rem] placeholder:text-white bg-transparent border-none outline-none" placeholder='Enter your code' />
                                </div>

                                <div className='w-full flex justify-between items-center mb-10'>
                                    <div className='flex justify-center items-center gap-3'>
                                        <input type="checkbox" className='w-4 h-4 bg-transparent' />
                                        <div className='text-[1rem]'>Stay logged in</div>
                                    </div>
                                    <div className='text-[1rem]'>Don't have an account? <NavLink to='/signup'>Signup</NavLink> </div>
                                </div>

                                <button className='py-[0.5rem] px-[4rem] text-[1.2rem] font-medium uppercase border border-white'>Confirm</button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Confirm