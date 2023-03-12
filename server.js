const espress =  require('express')
const http = require('http');
const WebSocket  = require('ws');

const port = 6969;
const server = http.createServer(espress);
const wss = new WebSocket.Server({server})

wss.on('connection',function connection(ws){
    ws.on('message', function incoming (data){

        wss.clients.forEach( function each(client){


            if (client != ws && client.readyState == WebSocket.OPEN ){
                client.send(data);
            }
        }) 

          ;
    })
})

server.listen(port,function(){
    console.log("Server is listening  on ${port}");
    console.log(port);
})