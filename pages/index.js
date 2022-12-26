import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Chat_room from "../components/Chat_room/Chat_room";
import Login from "../components/Login/Login";

export default function Home() {
  const [ state , setstate] = useState('')
  useEffect(()=>{
    setstate(localStorage.getItem("jwt"))
  },[])

  const Username = useSelector((state)=>state.ChangeState.name)
  return (
    <>
    {
    Username === 'login' ||state ?<Chat_room/>:
      <Login/>

    }
   
    </>
  )
}
