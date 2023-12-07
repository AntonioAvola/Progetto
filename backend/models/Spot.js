const mongoose      = require('mongoose')
const Schema        = mongoose.Schema
const user          = require('./User')

const spotSchema = new Schema({
    autore: {
        username: user.username
    },
    titolo: {
        type: String
    },
    corpo: [{
        nomeStruttura: {
            type: String
        },
        descrizione: {
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
    foto: {
        type: String
    }
})

const Spot = mongoose.model('Spot', spotSchema)
module.exports = Spot