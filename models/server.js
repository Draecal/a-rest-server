const express = require('express')
const cors = require('cors')

class Server{
    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.usersPath = '/api/users'
        //Middleware
        this.middlewares()
        //Routes
        this.routes()
    }
    middlewares() {
        //CORS
        this.app.use(cors())
        //Body Read > Parse
        this.app.use(express.json())
        //Public path
        this.app.use(express.static('public'))
    }
    routes() {
      this.app.use(this.usersPath,require('../routes/users'))
    }
    listener() { 
        this.app.listen(this.port)
    }
}
module.exports = Server