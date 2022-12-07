const { Boat } = require('../models')
const ObjectId = require('mongodb').ObjectId;

async function getUserBoats(userId) {

    const userBoats = await Boat.find({ owner: new ObjectId(userId) })
    return userBoats

}

module.exports = getUserBoats


