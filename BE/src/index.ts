import { WebSocket, WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

const allSockets: WebSocket[] = [];

wss.on("connection", (socket,req) => {
  console.log("====================================");
  console.log("connection made!");
  console.log("====================================");
  const ip = req.socket.localAddress
  console.log('====================================');
  console.log(ip);
  console.log('====================================');
  allSockets.push(socket);
  socket.on("message", (e) => {
    for (let i = 0; i < allSockets.length; i++) {
      const s = allSockets[i];
      s.send(e.toString() + ": from the " + ip);
    }
  });
});
