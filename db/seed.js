const showsSeed = require('./shows.json')
const Person = require('../models/Person')
const peopleSeed = require('./people.json')
const Show = require('../models/Show')

Person.deleteMany({})
    .then(() => {
        return Person.insertMany(peopleSeed)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {process.exit()})

Show.deleteMany({})
    .then(() => {
        return Show.insertMany(showsSeed)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {process.exit()})
