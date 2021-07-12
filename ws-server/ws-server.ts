import * as WebSocket from "ws";

const wss = new WebSocket.Server({ port: 8080 });

console.log('WebSocket server is running on Port: 8080');

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message => ${message}`);
        wss.clients.forEach(client => {
            if(client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        })
    })
   
})