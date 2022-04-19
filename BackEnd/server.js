const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')

const cors = require('cors')
const whiteList = ['http://localhost:9000' , 'http://localhost:8080' , 'http://192.168.1.25:9000' , 'http://192.168.1.25:8080']


var usuarios = require('./usuarios')
var preguntasQ1 = require('./preguntasQ1')
var preguntasQ2 = require('./preguntasQ2')

const app = express()
app.set('port' , process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'proyecto'
}

//midlewares
app.use(myconn(mysql,dbOptions, 'single'))
app.use(express.json())

//Rutas
app.use(cors({origin: whiteList})) //Acceso desde varias URL
app.get('/', (req,res)=>{
    res.send('Bienvenido a mi API')
})

app.use('/usuarios', usuarios)
app.use('/preguntasQ1', preguntasQ1)
app.use('/preguntasQ2',preguntasQ2)

//Corriendo Server
app.listen(app.get('port'), ()=>{
    console.log('Corriendo puerto', app.get('port'))
})