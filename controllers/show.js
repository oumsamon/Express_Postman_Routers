const express = require('express')
const router = express.Router()
const Show = require('../models/Show')

router.get('/' , (req, res, next) => {
    Show.find({})
    .then(show => res.json(show))
    .catch(next)
})

router.get('/:id' , (req, res, next) => {
    Show.find({_id: req.params.id})
    .then(show => res.json(show))
    .catch(next)
})

router.post('/' , (req, res, next) => {
    Show.create(req.body)
    .then(show => res.json(show))
    .catch(next)
})

router.put('/:id', (req, res, next) => {
    Person.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(person => res.json(person))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
    Show.findOneAndDelete({_id: req.params.id})
    .then(show => res.json(show))
    .catch(next)
})

module.exports = router