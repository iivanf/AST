const flight = require('../models/flight')
const flightCtrl = {}

flightCtrl.getFlights = async (req, res) => {
    const flightNumber = req.query.flightNumber;
    var condition = flightNumber ? { flightNumber: { $regex: new RegExp(flightNumber)} } : {};
    const flights = await flight.find(condition)
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
        flightNumber: req.body.flightNumber,
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

flightCtrl.updateFlightByNumber = async (req, res) => {
    const plane = {
        flightNumber: req.body.flightNumber,
        airline: req.body.airline,
        date: req.body.date,
        originPlace: req.body.originPlace,
        destinationPlace: req.body.destinationPlace,
        tickets: req.body.tickets,
        price: req.body.price,
        items: req.body.items 
    }
    const flightNumber = req.body.flightNumber;
    var condition = flightNumber ? { flightNumber: { $regex: new RegExp(flightNumber)} } : {};
    await flight.findOneAndUpdate(condition, {$set: plane}, {new:true})
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

flightCtrl.deleteFlights = async (req, res) => {
    const flightNumber = req.query.flightNumber;
    var condition = flightNumber ? { flightNumber: { $regex: new RegExp(flightNumber)} } : {};
    console.log(condition)
    await flight.deleteMany(condition)
    res.json({
        'status': 'Flights deleted'
    })    
}

module.exports = flightCtrl