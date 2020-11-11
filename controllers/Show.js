const express = require('express')
const router = express.Router()
const Show = require('../db/models/Show')


router.get('/', (req, res) => {
    Show.find({}).then(shows => {
        res.json(shows)
    })
})

router.get('/:id', (req, res) => {
    Show.findById({ _id: req.params.id }).then(show => {
        res.json(show)
    })
})

router.get('/shows/:name', (req, res) => {
    Show.findOne({ name: req.params.name }).then(show => {
        res.json(show)
    })
})

router.post('/', (req, res) => {
    Show.create(req.body).then(show => {
        res.json(show)
    })
})

router.put('/:id', (req, res) => {
    Show.findByIdAndUpdate({ _id: req.params.id }, req.body, {new: true}).then(show => {
        res.json(show)
    })
})

router.delete('/:id', (req, res) => {
    Show.findByIdAndDelete({ _id: req.params.id }).then(delShow => {
        res.json(delShow)
    })
})


module.exports = router;