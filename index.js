const express = require('express')
const app = express()
const cors = require('cors')
const personController = require('./controllers/Person')
const showController = require('./controllers/Show')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// Controllers
app.use('/people', personController)
app.use('/shows', showController)

app.listen(3000, () => {
    console.log('TV Browser API up and running..')
})

