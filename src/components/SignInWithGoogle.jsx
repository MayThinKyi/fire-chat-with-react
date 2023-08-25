import React, { useContext } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app, provider } from '../firebase/firebase';
import { AppContext } from '../contexts/AppContext';
const SignInWithGoogle = () => {
    const {setUser}=useContext(AppContext);
    const auth = getAuth(app);
   const signInHandler=()=>{
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
      setUser(user)
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
   }

  return (
    <div >
      
       <button  onClick={signInHandler} className='bg-[#192741] text-sm sm:text-lg font-semibold py-2 px-4 rounded-lg text-[#88DDED]'>Sign In</button>
    </div>
  )
}

export default SignInWithGoogle
