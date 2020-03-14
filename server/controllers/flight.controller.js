const flight = require('../models/flight')
const flightCtrl = {}

flightCtrl.getFlights = async (req, res) => {
    const flights = await flight.find()
    res.json(flights)
}

flightCtrl.createFlights = async (req, res) => {
    const plane = new flight(req.body)
    await plane.save()
    res.json({
        'status': 'Flight saved'
    })
}

flightCtrl.getFlight = async (req, res) => {
    const plane = await flight.findById(req.params.id)
    res.json(plane)
}

flightCtrl.updateFlight = async (req, res) => {
    const plane = {
        airline: req.body.airline,
        date: req.body.date,
        originPlace: req.body.originPlace,
        destinationPlace: req.body.destinationPlace,
        tickets: req.body.tickets,
        price: req.body.price,
        items: req.body.items 
    }
    await flight.findByIdAndUpdate(req.params.id, {$set: plane}, {new:true})
    res.json({
        'status':'Flight updated'
    })
}

flightCtrl.deleteFlight = async (req, res) => {
    await flight.findByIdAndRemove(req.params.id)
    res.json({
        'status': 'Flight deleted'
    })
}

module.exports = flightCtrl