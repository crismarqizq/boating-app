const { Port } = require('../models')
const context = require('./context')


async function getPorts() {


    const all = await Port.find()



    return all

}

module.exports = getPorts


