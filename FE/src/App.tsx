import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [msg,setMsg] = useState("");
  const [socket,setSocket] = useState()
  const [srvMsg,setSrvMsg] = useState(["hii there"])
  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080")
    setSocket(ws)
    ws.onmessage = (ev) =>{
      setSrvMsg(m=>[...m,ev.data])
    }
  },[])
  function sendMessage(){
    //@ts-ignore
    socket.send(msg)
  }
  return (
    <>
    <div>
      <div>{srvMsg.map((m)=>(
        <span>{m}</span>
      ))}</div>
      <input type="text" placeholder='msg....' onChange={(e)=>{
        setMsg(e.target.value);
      }}/>
      <button onClick={sendMessage}>Send</button>
    </div>      
    </>
  )
}

export default App
