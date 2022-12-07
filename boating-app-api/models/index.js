const mongoose = require('mongoose')
const model = mongoose.model

const user = require('./schemas/user')
const boat = require('./schemas/boat')
const port = require('./schemas/port')

// const booking = require('./schemas/booking')


const User = model('User', user, 'User')
const Boat = model('Boat', boat, 'Boat')
const Port = model('Port', port, 'Port')
// const Booking = model('User', user)


module.exports = {
    User,
    Boat,
    Port,
    // Booking
}
