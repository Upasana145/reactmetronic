const express = require('express');
const app = express();
const cors = require('cors');
const dotEnv = require('dotenv');
const mongoose = require('mongoose');
const connection = require("./config/db")

//confugure cors with express
app.use(cors());
app.set('veiw engine', 'ejs')

//configure express to accpt the form data
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//configure dotenv

dotEnv.config({path:'./config/config.env'})

const port = process.env.PORT
const hostname = process.env.HOSTNAME


//basic url
app.get ('/', (request, response)=>{
    //console.log('dfgvdfv');
    response.send(`<h2>Welcome to BrainsKart Express server</h2>`)
})


//Router configuration
app.use('/student',require('./routers/userRouters'))

app.listen(port , hostname , ()=>{
    console.log(`Server start at http://${hostname}:${port}`)
})


