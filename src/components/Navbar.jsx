import React, { useContext } from 'react'
import { AppContext } from '../contexts/AppContext'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { provider } from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';
import SignInWithGoogle from './SignInWithGoogle';

const Navbar = () => {
    const navigate=useNavigate();
    const auth = getAuth();
    const {user,setUser}=useContext(AppContext);
   
    const signOutHandler=()=>{
        signOut(auth).then(() => {
            localStorage.removeItem('user');
            setUser(null);
            navigate('/')
          }).catch((error) => {
            // An error happened.
          });
          
    }
  return (
    <div className='bg-[#4C768D] cursor-pointer py-4 px-5 sm:px-10 flex flex-wrap gap-y-4 items-center justify-between'>

    <Link to={'/'} className='text-[#242461] text-xl sm:text-2xl font-bold'>Fire Chat With React</Link>
        {user ?<>
             <button onClick={()=>navigate('/')} className='bg-[#1C2C4C] text-md sm:text-lg font-semibold py-2 px-4 rounded-lg text-[#88DDED]'>Create new Chat Room</button>

                <button  onClick={signOutHandler} className='bg-[#1C2C4C] text-md sm:text-lg font-semibold py-2 px-4 rounded-lg text-[#88DDED]'>Sign Out</button>
                </> : 
                <SignInWithGoogle/>
        }
  </div>
  )
}

export default Navbar
