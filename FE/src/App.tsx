import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [msg,setMsg] = useState("");
  const [socket,setSocket] = useState()
  const [srvMsg,setSrvMsg] = useState("")
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080")
    setSocket(ws)
    ws.onmessage = (ev) =>{
      setSrvMsg(ev.data)
    }
  },[])
  function sendMessage(){
    //@ts-ignore
    socket.send(msg)
  }
  return (
    <>
    <div>
      <input type="text" placeholder='msg....' onChange={(e)=>{
        setMsg(e.target.value);
      }}/>
      <button onClick={sendMessage}>Send</button>
      <span>{srvMsg}</span>
    </div>      
    </>
  )
}

export default App
