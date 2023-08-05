import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export const SignupForm = ({setIsLogin}) => {

  const [showPassword,setShowPassword] = useState(true)
  const [cshowPassword,csetShowPassword] = useState(true)
  const [accountType,setAccountType] = useState('student');
  const Navigator = useNavigate();
  const [formData, setFormData]= useState({
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    cPassword:'',
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
    if(formData.password!==formData.cPassword){
      toast.error('Passwrod not matched');
    }
    else{
      setIsLogin(true)
      Navigator('/dashboard')
      toast.success('Account Created');
      const accountData={
        ...formData
      }
      console.log(accountData)
    }
  }

  return (
    <div>
      <div className='flex bg-slate-800 p-1 gap-x-1 my-1 rounded-full max-w-max '>
        <button className={`${accountType ==="student"
         ? "bg-slate-900 text-slate-200"
         : "bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}>
          Student
        </button>
        <button  className={`${accountType ==="instructor"
         ? "bg-slate-900 text-slate-200"
         : "bg-transparent text-slate-200"} py-2 px-5 rounded-full transition-all duration-200`}
         onClick={() => setAccountType("instructor")}>
          Instructor
        </button>
      </div>
        <form onSubmit={submitHadnler} className='flex flex-col w-full gap-y-4 mt-6'>
        <div className='flex gap-x-4 mt-[8px]'>
          <label className='w-full'>
            <p  className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375rem]' >First Name<sup className='text-pink-500'>*</sup></p>
            <input className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]' type='text' name='firstName' onChange={changeHandler} required placeholder='Enter first name' value={FormData.firstName} />
          </label>
          <label className='w-full'>
            <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-500'>*</sup></p>
            <input className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]' type='text' name='lastName' onChange={changeHandler} required placeholder='Enter last name' value={FormData.lastName} />
          </label>
        </div>
          <label className='w-full mt-[12px]'>
            <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375rem]'>Email Address<sup  className='text-pink-500'>*</sup></p>
            <input className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]' name='email' type='email' onChange={changeHandler} required placeholder='Enter email address' value={FormData.email} />
          </label>
          <div className='w-full flex gap-x-4 mt-[10px]'>
          <label className='relative w-full'>
            <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375rem]' >Create Password<sup  className='text-pink-500'>*</sup></p>
            <input className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]' name='password' type={ showPassword ? 'password': 'text' } onChange={changeHandler} required placeholder='Enter Password' value={FormData.password} />
            <span 
            className='absolute right-3 top-[38px]'
            onClick={ () => setShowPassword( (prev) => !prev )}>{ showPassword ? <AiFillEyeInvisible fontSize={24} fill='#AFB2BF'></AiFillEyeInvisible>:<AiFillEye fontSize={24} fill='#AFB2BF'></AiFillEye>  }</span>
          </label>
          <label className='relative w-full'>
            <p className='text-[0.875rem] text-slate-200 mb-1 leading-[1.375rem]' >Confirm Password<sup className='text-pink-500'>*</sup></p>
            <input className='bg-slate-800 rounded-[0.5rem] text-slate-200 w-full p-[12px]' name='cPassword' type={ cshowPassword ? 'password': 'text' } onChange={changeHandler} required placeholder='Confirm Password' value={FormData.cPassword} />
            <span 
            className='absolute right-3 top-[38px]'
            onClick={ () => csetShowPassword( (prevd) => !prevd )}>{ cshowPassword ? <AiFillEyeInvisible fontSize={24} fill='#AFB2BF'></AiFillEyeInvisible> :<AiFillEye fontSize={24} fill='#AFB2BF'></AiFillEye> }</span>
          </label>
          </div>
          <button className='w-full bg-yellow-400 rounded-[8px] font-medium text-slate-900 px-[12px] py-[8px] mt-3'>
            Create Account
          </button>
        </form>
    </div>
  )
}

