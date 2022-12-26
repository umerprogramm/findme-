import React from 'react'
import Navbar from '../Navbar/Navbar'
import Loader from './Loader'

export default function Chat_room() {
  return (
    <>
    <Navbar/>
    <main className='chat_room'>
      <div className='loader'>
       <Loader/>
      <h1>connecting to the Server</h1>
      </div>
      <div className='input'>
        <button>ESC</button>
    <input/>
    <button>send</button>
      </div>
    </main>
    </>
    
  )
}
