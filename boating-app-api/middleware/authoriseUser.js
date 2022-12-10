const ObjectId = require('mongodb').ObjectId;
const { Booking } = require('../models')

module.exports = async (req, res, next) => {
    try {

        const userId = req.user.id

        if (req.params.bookingId) {
            const bookingId = req.params.bookingId
            console.log('Checking bookingId ownership')

            const booking = await Booking.findOne({ _id: new ObjectId(bookingId), user: new ObjectId(userId) })

            if (!booking) {
                console.log('Booking ownership condition could not be satisfied')
                return res.status(401).send({ error: 'Not authorised' })
            }
        }

        if (req.params.boatId) {
            console.log('Checking boatId ownership')
        }

        return next();
    } catch (error) {
        console.log(error)
        res.status(401).send({ error: 'Not authorised' })
    }
}