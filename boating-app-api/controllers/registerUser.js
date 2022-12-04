const registerUser = require('../logic/registerUser')

module.exports = async (req, res) => {

    try {
        const newUser = await registerUser(req.body)
        const userInfo = newUser.toObject()
        delete userInfo.password
        res.status(201).send(userInfo)

    } catch (error) {
        console.log(error)
        res.status(500)
        res.json({ error: error.message })
    }
}