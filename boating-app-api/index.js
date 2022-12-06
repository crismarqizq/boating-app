require('dotenv').config()
// const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// const authenticateUserMiddleware = require('./middleware/authenticateUser')

const authenticateUser = require('./controllers/authenticateUser')
const registerUser = require('./controllers/registerUser')
// const createnewPost = require('./handlers/createnewPost')
const getPorts = require('./controllers/getPorts')
// const updatePost = require('./handlers/updatePost')
// const deletePost = require('./handlers/deletePost')

const context = require('./logic/context')
// const authoriseUser = require('./middleware/authoriseUser')

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

        app.get('/ports', getPorts)
        // app.post('/posts', authenticateUserMiddleware, createnewPost)
        // app.patch('/posts/:postId', authenticateUserMiddleware, authoriseUser, updatePost)
        // app.delete('/posts/:postId', authenticateUserMiddleware, authoriseUser, deletePost)


        //app.get('/search', searchGet)

        const { PORT } = process.env
        app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })

    .catch(error => console.error(error))
