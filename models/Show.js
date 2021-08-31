const mongoose = require('../db/connection')

const ShowSchema = new mongoose.Schema({
    id: Number,
    url: String,
    name: String,
    type: String,
    language: String,
    genres: [String, String, String],
    status: String,
    runtime: Number,
    premiered: String,
    officialSite: String,
    schedule: { time: Number, days: [String] },
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
    webChannel: Number,
    externals: { tvrage: Number, thetvdb: Number, imdb: String },
    image: {
      medium: String,
      original: String
    },
    summary: String,
    updated: Number,
    _links: {
      self: { href: String },
      previousepisode: { href: String}
    }
},
{timestamps: true}
)

const Show = mongoose.model("Show", ShowSchema)

module.exports = Show