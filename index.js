const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const peopleController = require('./controllers/persons.js')
app.use('/people', peopleController)

const showController = require('./controllers/show.js')
app.use('/show', showController)

app.get('/', (req, res) => {res.send('tv browser')})
const port = 3000
app.listen(port, () => {console.log(`running on port: ${port}`)})