import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Loader from './Loader'
import io from 'socket.io-client'
let socket;


export default function Chat_room() {
  const [data , setData] = useState([])
  const [input, setInput] = useState('')
  const [sender , setsender ] = useState(false)
    useEffect(() => {
    const socketInitializer = async () => {
      await fetch('/api/hello');
      socket = io()
  
      socket.on('connect', () => {
        console.log('connected')
      })
      socket.on('update-input',(msg )=>{
        setData(msg)
   
      })
     
    }
    socketInitializer();
   
  },[])
  const Message_sender = ()=>{

    socket.emit('input-change',[...data,input] )
    setData([...data,input])
   
    setInput('')
    setsender(true)
  }
  const onChangeHandler = (e) => {
    setInput(e.target.value)
  }
  return (
    <>
    <Navbar/>
    <main className='chat_room'>
      <div className='loader'>
       <Loader/>
      <h1>connecting to the Server</h1>
      </div>
      {/* {
        chat.map(value =>{
          return(
            <ul>
            <li>
             
  
             
            {sender ? <span style={{textAlign  : 'right'}}>{value}</span>:<span>{value}</span>}
            </li>
          </ul>
          )
         
        })
        

      }
       */}
       {data.map((data) => (
        <li>{data}</li>
      ))}
      <div className='input'>
        <button>ESC</button>
        <input
      placeholder="Type something"
      value={input}
      onChange={onChangeHandler}
    />
    <button onClick={Message_sender}>send</button>
      </div>
    </main>
    </>
    
  )
}
