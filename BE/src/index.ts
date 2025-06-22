import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
  console.log("====================================");
  console.log("connection made!");
  console.log("====================================");
  allSockets.push(socket);
  socket.on("message", (e) => {
    for (let i = 0; i < allSockets.length; i++) {
      const s = allSockets[i];
      s.send(e.toString() + ": from the server");
    }
  });
});
