import React from 'react'
import { Template } from '../components/Template';


export const Singup = ({setIsLogin}) => {

  return (
    <div>
      <Template title="Join the millions learning to code with StuduNotion for free"
      desc1="Build Skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your carrer."
      image="https://studynotion.tech/static/media/signup.acaf50bcb11d9aec44b4.webp"
      formType="signup"
      setIsLogin={setIsLogin}
      >
      </Template>
    </div>
  )
}

export default Singup;