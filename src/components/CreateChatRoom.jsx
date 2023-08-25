import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router-dom';

const CreateChatRoom = () => {
    const navigate=useNavigate();
    const {room,setRoom}=useContext(AppContext);
    const [roomName,setRoomName]=useState('');
    const createRoomHandler=()=>{
        setRoom(roomName);
        navigate('/chat')
    }
  return (
    <div>
        <h1 className='mb-5 font-semibold text-2xl text-blue-500'>Create Chat Room</h1>
        <input  value={roomName} onChange={(e)=>setRoomName(e.target.value)}  placeholder='Enter Room Name...' className='outline-none py-2 px-4 rounded-lg border '  />
        <button onClick={createRoomHandler} className='block mx-auto mt-5 py-2 px-5 rounded-lg bg-blue-400'>Create Room</button>
    </div>
  )
}

export default CreateChatRoom
