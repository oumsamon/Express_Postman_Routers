const mongoose = require('../connection')
const Schema = mongoose.Schema


const PersonSchema = new Schema(
    {
        url: String,
        name: String,
        country: { name: String, code: String, timezone: String },
        birthday: String,
        deathday: String,
        gender: String,
        image: { medium: String, original: String },
        _links: { self: { href: String } }
    }
)

const Person = mongoose.model("Person", PersonSchema)

module.exports = Person