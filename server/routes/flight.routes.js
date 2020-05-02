const express = require ('express')
const router = express.Router()

const flightCtrl = require('../controllers/flight.controller')

router.get('/', flightCtrl.getFlights)
router.post('/', flightCtrl.createFlights)
router.put('/', flightCtrl.updateFlightByNumber)
router.delete('/',flightCtrl.deleteFlights)
router.get('/:id', flightCtrl.getFlight)
router.put('/:id', flightCtrl.updateFlight)
router.delete('/:id', flightCtrl.deleteFlight)


module.exports = router