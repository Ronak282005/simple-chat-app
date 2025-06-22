import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080})


wss.on("connection",(socket)=>{
    console.log('====================================');
    console.log("connection made!");
    console.log('====================================');
    socket.onmessage = (ev)=>{
        console.log('====================================');
        console.log(ev.data);
        console.log('====================================');
    }
})