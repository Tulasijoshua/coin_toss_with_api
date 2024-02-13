import React, { useState } from 'react'
import bgImg from '../../assets/predict02.jpg'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/authContext'

const Signup = () => {
    const navigate = useNavigate()
    const { signup } = useAuthContext();
    const [formValues, setFormValues] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ 
            ...formValues, 
            [name]: value 
        });
      };

    const handleSignup = (e) => {
        e.preventDefault();
        signup(formValues);
        navigate('/login')
    }
    return (
        <div className='w-full relative h-[100vh] overflow-hidden'>
            <div className='bgLogin w-full h-full flex text-white flex-col justify-center items-center z-10 '>
                <div className='max-w-[30rem] w-[40%] py-[1rem]  mx-auto  text-white overflow-auto'>
                    <div className='w-full h-full'>
                        <div className='w-full text-center pb-4'>
                            <h2 className='text-[3rem] font-semibold'>Sign up now</h2>
                            <p className='text-[1.1rem]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, eius.</p>
                        </div>
                        <section className="w-[80%] mx-auto py-[2rem]">
                            <form onSubmit={handleSignup} className='w-full flex flex-col justify-center items-center'>
                                <div className='w-full mb-8 flex items-center gap-[0.7rem] py-[0.2rem] px-[1rem] border border-white'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                        </svg>
                                    </div>
                                    <div className='text-[2rem] font-light'>|</div>

                                    <input type="text" name='fullName' value={formValues.fullName} onChange={handleChange} className="w-[70%] text-[1.1rem] placeholder:text-white bg-transparent border-none outline-none" placeholder='Enter your Name' />
                                </div>
                                <div className='w-full mb-8 flex items-center gap-[0.7rem] py-[0.2rem] px-[1rem] border border-white'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                    </div>
                                    <div className='text-[2rem] font-light'>|</div>

                                    <input name='username' value={formValues.username} onChange={handleChange} type="text" className="w-[70%] text-[1.1rem] placeholder:text-white bg-transparent border-none outline-none" placeholder='Enter username' />
                                </div>
                                <div className='w-full mb-8 flex items-center gap-[0.7rem] py-[0.2rem] px-[1rem] border border-white'>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </div>
                                    <div className='text-[2rem] font-light'>|</div>

                                    <input name='email' value={formValues.email} onChange={handleChange} type="text" className="w-[70%] text-[1.1rem] placeholder:text-white bg-transparent border-none outline-none" placeholder='Enter your email address' />
                                </div>
                                <div className='w-full mb-7 flex items-center gap-[0.7rem] py-[0.2rem] px-[1rem] border border-white'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </div>
                                    <div className='text-[2rem] font-light'>|</div>
                                    <input name='password' value={formValues.password} onChange={handleChange} type="password" className="w-[70%] text-[1.1rem] placeholder:text-white bg-transparent border-none outline-none" placeholder='Enter your password' />
                                </div>
                                <div className='w-full mb-10 flex items-center gap-[0.7rem] py-[0.2rem] px-[1rem] border border-white'>
                                    <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </div>
                                    <div className='text-[2rem] font-light'>|</div>
                                    <input name='confirmPassword' value={formValues.confirmPassword} onChange={handleChange} type="password" className="w-[70%] text-[1.1rem] placeholder:text-white bg-transparent border-none outline-none" placeholder='Confirm your Password' />
                                </div>

                                <div className='w-full flex justify-between items-center mb-10'>
                                    <div className='flex justify-center items-center gap-3'>
                                        <input type="checkbox" className='w-4 h-4 bg-transparent' />
                                        <div className='text-[1rem]'>Stay logged in</div>
                                    </div>
                                    <div className='text-[1rem]'>Already have an account? <NavLink to='/login'>Login</NavLink></div>
                                </div>

                                <button className='py-[0.5rem] px-[4rem] text-[1.2rem] font-medium uppercase border border-white'>Sign up</button>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup