import { WebSocket, WebSocketServer } from "ws";

interface User {
    socket : WebSocket;
    room : string
}

const wss = new WebSocketServer({ port: 8080 });

const allSockets: User[] = []; 

wss.on("connection", (socket,req) => {
  console.log("====================================");
  console.log("connection made!");
  console.log("====================================");
  socket.on("message", (e) => {
      const parsedMessage = JSON.parse(e as unknown as string)
      if(parsedMessage.type === "join"){
        allSockets.push({
            socket,
            room : parsedMessage.payload.roomId
        })
      }

  });
});
