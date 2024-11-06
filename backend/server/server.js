const express = require("express");

const app = express();

require("dotenv").config()

const PORT = process.env.PORT || 8000


const { connectDatabase } = require("../database/databaseConnection")


app.use(express.json());








app.listen(PORT, ()=>{

      connectDatabase().then(()=>{

        console.log('The database was successfully connected')

        console.log(`The server is running on PORT ${PORT}`)

      }).catch(error=> console.log(`There was an error  connecting the database error => ${error.message}`))


})