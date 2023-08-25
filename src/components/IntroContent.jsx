import React from 'react'
import SignInWithGoogle from './SignInWithGoogle'
import logo from '../images/logo.png'

const IntroContent = () => {
  return (
    <div className='text-[#7CC5D9] font-semibold flex flex-col items-center'>
        <h1 className='text-2xl'>Welcome to Fire Chat with React.</h1>
      <img src={logo} className='my-8 h-[120px] w-auto' alt="Logo" />
      <h1 className='text-lg mb-6'>Sign in with Google to chat with with your fellow React Developers.</h1>
      <SignInWithGoogle/>
    </div>
  )
}

export default IntroContent
