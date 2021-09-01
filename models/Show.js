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
   
}},
{timestamps: true}
)

const Show = mongoose.model("Show", ShowSchema)

module.exports = Show