require('dotenv').config()
// const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const authenticateUserMiddleware = require('./middleware/authenticateUser')

const authenticateUser = require('./controllers/authenticateUser')
const registerUser = require('./controllers/registerUser')

const getPorts = require('./controllers/getPorts')
const registerBoat = require('./controllers/registerBoat')
const getBoats = require('./controllers/getBoats')

const createBooking = require('./controllers/createBooking')
const getBookings = require('./controllers/getBookings')
// const updatePost = require('./handlers/updatePost')
const deleteBooking = require('./controllers/deleteBooking')

const context = require('./logic/context')
const authoriseUser = require('./middleware/authoriseUser')

const { MONGODB_URL } = process.env


mongoose.connect(MONGODB_URL)

    .then(() => {

        console.log(`db connected to ${MONGODB_URL}`)
        context.db = mongoose.connection


        const app = express()
        app.use(cors())
        app.use(bodyParser.json())


        app.post('/auth', authenticateUser)
        app.post('/register', registerUser)

        app.get('/ports', authenticateUserMiddleware, getPorts)
        app.get('/boats', authenticateUserMiddleware, getBoats)
        app.post('/boats', authenticateUserMiddleware, registerBoat)

        app.post('/bookings', authenticateUserMiddleware, createBooking)
        app.get('/bookings', authenticateUserMiddleware, getBookings)
        // app.patch('/posts/:postId', authenticateUserMiddleware, authoriseUser, updatePost)
        app.delete('/bookings/:bookingId', authenticateUserMiddleware, authoriseUser, deleteBooking)


        const { PORT } = process.env
        app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })

    .catch(error => console.error(error))
