import { useSelector } from "react-redux";
import Chat_room from "../components/Chat_room/Chat_room";
import Login from "../components/Login/Login";

export default function Home() {
  const Username = useSelector((state)=>state.ChangeState.name)
  return (
    <>
    {
      Username == 'login'?<Chat_room/>:
      <Login/>

    }
   
    </>
  )
}
