require('dotenv').config()
const Server = require('./models/server')

//Server instance
const server = new Server()
//Server up
server.listener()