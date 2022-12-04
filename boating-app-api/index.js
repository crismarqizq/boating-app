require('dotenv').config()
// const { MongoClient } = require('mongodb')
const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
// const authenticateUserMiddleware = require('./middleware/authenticateUser')

// const authUser = require('./handlers/authUser')
const registerUser = require('./controllers/registerUser')
// const createnewPost = require('./handlers/createnewPost')
// const getPosts = require('./handlers/getPosts')
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


        // app.post('/auth', authUser)
        app.post('/register', registerUser)

        // app.get('/posts', authenticateUserMiddleware, getPosts)
        // app.post('/posts', authenticateUserMiddleware, createnewPost)
        // app.patch('/posts/:postId', authenticateUserMiddleware, authoriseUser, updatePost)
        // app.delete('/posts/:postId', authenticateUserMiddleware, authoriseUser, deletePost)


        //app.get('/search', searchGet)

        const { PORT } = process.env
        app.listen(PORT, () => console.log(`server listening on port ${PORT}`))
    })

    .catch(error => console.error(error))
