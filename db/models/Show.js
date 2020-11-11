const mongoose = require('mongoose')
const Schema = mongoose.Schema


const ShowSchema = new Schema(
    {
        url: String,
        name: String,
        language: String,
        genres: [String],
        status: String,
        runtime: Number,
        premiered: String,
        officialSite: String,
        schedule: { time: String, days: [String] },
        rating: { average: Number },
        weight: Number,
        network: { 
            id: Number, 
            name: String,
             country: {
                name: String,
                code: String,
                timezone: String
            }
        },
        externals: { tvrage: Number, thetvdb: Number, imdb: String },
        image: { medium: String, original: String },
        summary: String,
        updated: Number,
        _link: { self: { href: String }, previousepisode: { href: String }, nextepisode: { href: String } }
    }
)

const Show = mongoose.model("Show", ShowSchema)

module.exports = Show;
