import React from 'react'
import Loader from './Loader'

export default function Chat_room() {
  return (
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
  )
}
