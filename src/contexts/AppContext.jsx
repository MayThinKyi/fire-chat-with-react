import React, { createContext, useEffect, useState } from 'react'
export const AppContext=createContext();
const AppContextProvider = ({children}) => {
    const [room,setRoom]=useState('');
    const [user,setUser]=useState(JSON.parse(localStorage.getItem('user'))|| null);
    useEffect(()=>{
      localStorage.setItem('user',JSON.stringify(user))
    },[user])
  return (
    <AppContext.Provider value={{room,setRoom,user,setUser}}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
