//1)import json library
const jsonServer = require('json-server')

//2) create the server
const mediaPlayerServer = jsonServer.create()

//middleware to parse the json formate

const middleware = jsonServer.defaults()


//setup path to store data

const router = jsonServer.router('db.json')

mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)




//3) port for server
const PORT = 4000 || process.env.PORT

// || statement is to incase of 4000 port is not available assign any other port which is available in that environment

//4) To listen to the request from the frontend for resolting that request

mediaPlayerServer.listen(PORT, ()=>{
    console.log(`server running successfully at port number ${PORT}`);
    
})