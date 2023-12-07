/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ciao', (req, res) => {
    res.send('Hello ciao!')
  })

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/

const express       = require('express') // Express is a framework of node.js
const mongoose      = require('mongoose') //Mongoose is required to work with MongoDB: MondoDB connections, declaring mongo models, queries... 
const morgan        = require('morgan') //Morgan is used to login console 
const bodyParser    = require('body-parser') //Body-parser is used to parse the request incoming bodies. it is used to get submitted input value 


//Aggiunta di 2 valori per cercare di intercettare qualcuni errori comuni
mongoose.connect('mongodb://localhost:27017/ApplicazioniWeb'/*, {useNewUrlParser: true, useUnifiedTopology: true}*/)
const db = mongoose.connection

//Se trova quasiasi tipo di errore durante la connessione, mostrerà l'errore
db.on('error', (err)=> {
    console.log(err)
})

//Altrienti mostrerà "Database Connection Established"
db.once('open', ()=> {
    console.log('Database Connection Established')
})