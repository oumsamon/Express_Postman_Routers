const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/tv-browser', { useNewUrlParser: true, useUnifiedTopology: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error('connection failed!', err)
})


module.exports = mongoose