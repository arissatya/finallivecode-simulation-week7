const express = require('express')
const app = express()
const cors = require('cors')
const Controller = require('./controllers')
const { authentic, authorize } = require('./middlewares/credentials')
const errorHandler =  require('./middlewares/errorHandler')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.post('/register', Controller.register)
app.post('/login', Controller.login)
app.get('/inventories', authentic, authorize, Controller.fetch)
// app.get('/inventories', Controller.fetch)

app.use(errorHandler)

app.listen(3000, () => {
  console.log('nyala: ' + 3000);
})