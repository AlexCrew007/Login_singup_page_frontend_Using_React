import React from 'react'
import { Template } from '../components/Template';


export const Login = ({setIsLogin}) => {

  return (
      <Template title='Welcome Back'
      desc1="Build Skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your carrer."
      image="https://studynotion.tech/static/media/login.5eeb0b81544a40330d4b.webp"
      formType="login"
      setIsLogin={setIsLogin}>
      </Template>
  )
}

export default Login;