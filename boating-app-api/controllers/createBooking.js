const createBooking = require('../logic/createBooking')

module.exports = async (req, res) => {

    try {
        const userId = req.user.id
        const newBooking = await createBooking(userId, req.body)
        const bookingInfo = newBooking.toObject()

        res.status(201).send(bookingInfo)

    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({ error: error.message })
    }
}