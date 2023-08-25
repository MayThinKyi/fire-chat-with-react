import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext';
import CreateChatRoom from '../components/CreateChatRoom';
import IntroContent from '../components/IntroContent';

const Home = () => {
    const {user}=useContext(AppContext);

  return (
    <div className='flex items-center justify-center flex-col p-10 sm:p-20'>
      {user?
        <CreateChatRoom/>
      : <IntroContent/>}
    </div>
  )
}

export default Home
