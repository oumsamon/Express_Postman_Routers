const express = require('express')
const Person = require('../db/models/Person')

const router = express.Router()


router.get('/', (req, res) => {
    Person.find({}).then(people => {
        res.json(people)
    })
})

router.get('/:id', (req, res) => {
    Person.findById({ _id: req.params.id }).then(person => {
        res.json(person)
    })
})

router.get('/names/:name', (req, res) => {
    Person.findOne({ name: req.params.name }).then(person => {
        res.json(person)
    })
})

router.post('/', (req, res) => {
    Person.create(req.body).then((person) => {
        res.json(person)
    })
})

router.put('/:id', (req, res) => {
    Person.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(person => {
            res.json(person)
        })
})

router.delete('/:id', (req, res) => {
    Person.findByIdAndDelete({ _id: req.params.id }).then((delPerson) => {
        res.json(delPerson)
    })
})

module.exports = router;