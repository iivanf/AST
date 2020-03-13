const mongoose = require('mongoose')
const { Schema } = mongoose

const ticketSchema = new Schema({
    airline: {type: String, required:true},
    date: {type: String, required:true},
    originPlace: {type: String, required:true},
    destinationPlace: {type: String, required:true},
    places: {type: Number, required:true},
    price: {type: Number, required:true},
    items: {type: String}
})

module.exports = mongoose.model('Ticket', ticketSchema)