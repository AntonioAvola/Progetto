const mongoose      = require('mongoose')
const Schema        = mongoose.Schema
const user          = require('./User')

const spotSchema = new Schema({
    author: {
        username: user.username
    },
    title: {
        type: String
    },
    generalDescription: {
        type: String
    },
    body: [{
        structureName: {
            type: String
        },
        description: {
            type: String
        }
    }],
    coordinate: {
        x: {
            type: Number
        },
        y: {
            type: Number
        }
    },
    photo: {
        type: String
    }
})

const Spot = mongoose.model('Spot', spotSchema)
module.exports = Spot