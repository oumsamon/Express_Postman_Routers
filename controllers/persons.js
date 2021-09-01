const express = require('express')
const router = express.Router()
const Person = require('../models/Person')

router.get('/' , (req, res, next) => {
    Person.find({})
    .then(person => res.json(person))
    .catch(next)
})

router.get('/:id' , (req, res, next) => {
    Person.find({_id: req.params.id})
    .then(person => res.json(person))
    .catch(next)
})

router.post('/' , (req, res, next) => {
    Person.create(req.body)
    .then(person => res.json(person))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
    Person.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(person => res.json(person))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Person.findOneAndDelete({_id: req.params.id})
    .then(person => res.json(person))
    .catch(next)
})

module.exports = router