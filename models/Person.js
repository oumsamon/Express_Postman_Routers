const mongoose = require('../db/connection')

const PersonSchema = new mongoose.Schema({
    url: String,
    name: String,
    country: {name: String, code: String, timezone: String},
    birthday: String,
    deathday: String,
    gender: String,
    image: {medium: String, original: String},
    _links: {self:{href: String}}
},
{timestamps: true}
)

const Person = mongoose.model("Person", PersonSchema)

module.exports = Person