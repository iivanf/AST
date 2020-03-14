const mongoose = require('mongoose')
const { Schema } = mongoose

const flightSchema = new Schema({
    airline: {type: String, required:true},
    date: {type: String, required:true},
    originPlace: {type: String, required:true},
    destinationPlace: {type: String, required:true},
    tickets: {type: Number, required:true},
    price: {type: Number, required:true},
    items: {type: String}
})

module.exports = mongoose.model('Flight', flightSchema)