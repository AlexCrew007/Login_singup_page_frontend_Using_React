import React from 'react'
import { LoginForm } from './LoginForm'
import { SignupForm } from './SignupForm'
import bgImg from "../assets/bgImg.png"
import {FcGoogle} from "react-icons/fc"

export const Template = ({title,desc1,desc2,image,formType,setIsLogin}) => {

  return (
    <div className='flex w-11/12 justify-between max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0'>
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-slate-100 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className='text-[1.125rem] leading[1.625rem] mt-4'>
                <span className='text-slate-100'>{desc1}</span>
                <span className='text-blue-500 italic'>{desc2}</span>
            </p>
            {
                formType === 'signup' ? (<SignupForm setIsLogin={setIsLogin}></SignupForm>) : (<LoginForm setIsLogin={setIsLogin}></LoginForm>) 
            }
            <div className='flex w-full items-center my-4 gap-x-2'>
                <div className='w-full h-[1px] bg-slate-700'></div>
                <p className='text-slate-700 font-medium leading[1.375rem]'>or</p>
                <div className='w-full h-[1px] bg-slate-700'></div>
            </div>
            <button className='w-full flex justify-center items-center rounded-[8px] font-medium text-slate-100 border border-slate-700 px-[12px] py-[8px] gap-x-2 mt-6'>
                <FcGoogle></FcGoogle>
                <p>Sign up with Google</p>
            </button>
        </div>  
        <div className='relative w-11/12 max-w-[450px]'>
            <img src={bgImg} width={580} height={504} alt='pattern' loading='lazy'></img>
            <img className='absolute -top-2 right-3' src={image} alt='student image' widh={558} height={490} loading='lazy'></img>
        </div>
       
    </div>
  )
}
