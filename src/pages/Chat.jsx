import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../contexts/AppContext';
import { query,doc,onSnapshot ,addDoc,collection,serverTimestamp, where, orderBy} from "firebase/firestore";
import { db } from '../firebase/firebase';

const Chat = () => {
    const {room,user}=useContext(AppContext);
    const [message,setMessage]=useState('');
    const [messages,setMessages]=useState([]);
    const getMessages=async()=>{
        const q = query(collection(db, "messages"), where("room", "==", room.toLowerCase()),orderBy('timestamps'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const msgCopy = [];
            querySnapshot.forEach((doc) => {
                msgCopy.push({id:doc.id,...doc.data()});
            })
            setMessages([...msgCopy]);

        });
       return ()=> unsubscribe();
            
    }
    const sendMessageHandler=async()=>{
        // Add a new document with a generated id.
        if(message?.trim().length>0) {
            const docRef = await addDoc(collection(db, "messages"), {
                message,
                username: user?.displayName,
                room:room.toLowerCase(),
                timestamps:serverTimestamp()
            });
            console.log("Document written with ID: ", docRef.id);
            setMessage('');
            getMessages();
        }
    }
    useEffect(()=>{
        getMessages();
    },[ ])
  return (
    <div className='mx-auto my-10 bg-slate-100  border rounded-lg w-[300px] sm:w-[400px] h-[400px] '>
      <h1 className='text-xl px-2 sm:px-4 pt-2 font-bold text-slate-900'>Chat Room : {room}</h1>
      <div className='w-[100%] p-4 h-[90%] overflow-y-scroll'>
        {messages?.map((msg)=>{
            return <div key={msg?.id} className='mb-3 bg-white p-2 rounded-lg border flex flex-col'>
             
              <h1 className='font-semibold'>{msg?.username}</h1>
                {msg?.message}
            </div>
        })}
      </div>
      <div className='px-2 sm:px-4 z-[100] w-[301px] sm:w-[401px] flex items-center gap-5 rounded-b-lg bg-[#7CC5D9] h-[70px]'>
        <input className='p-2 outline-none w-[90%] sm:w-[100%]' value={message}  onChange={(e)=>setMessage(e.target.value)} placeholder='Enter Message...' />
        <button className='bg-[#1C2C4C] py-2 px-2 sm:px-4 text-white text-sm  rounded-lg' onClick={sendMessageHandler}>Send Message</button>
      </div>
    </div>
  )
}

export default Chat
