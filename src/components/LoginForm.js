
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export const LoginForm = ({setIsLogin}) => {

    const navigate = useNavigate()
    const [showPassword,setShowPassword]=useState(false)
    const [formData,setFormData]=useState({
        email:'',
        password:'',
    })

    function changeHandler(e){
        setFormData( (prevData) => (
           { ...prevData,
            [e.target.name]:e.target.value
           }
        ))
    }

    function submitHadnler(e){
        e.preventDefault()  
        setIsLogin(true)
        navigate('/dashboard')
        toast.success("Logged in")
        const accountData={
            ...formData
          }
          console.log(accountData)
    }

    
  return (

        <form onSubmit={submitHadnler} className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375rem]'>Email address<sup className='text-pink-500'>*</sup></p>
                <input className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]' required name='email' onChange={changeHandler} type='email' value={formData.email} placeholder='Enter email address' />
            </label>
            <label className='w-full relative'>
                <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375rem]'>Password<sup className='text-pink-500'>*</sup></p>
                <input className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]' required onChange={changeHandler}  name='password' type = { showPassword ? 'text' : 'password'} value={formData.password} placeholder='Enter Password' />
            <span 
            className='absolute right-3 top-[38px]'
            onClick={ () => setShowPassword((prev)=>!prev)}>
                {showPassword ?<AiFillEye fontSize={24} fill='#AFB2BF'></AiFillEye> :  <AiFillEyeInvisible fontSize={24} fill='#AFB2BF'></AiFillEyeInvisible>  }
            </span>
                <Link to='#'><p className='text-xs mt-1 text-blue-500 max-w-max ml-auto'>Forget Password</p></Link>
            </label>
            <button className='bg-yellow-400 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-3'>
                Sign In
            </button>
        </form>

  )
}
