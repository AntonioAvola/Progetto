const Spot      = require('../models/Spot')

/**
 * Metodo di ricerca di tutti gli spot inerenti ad un posto in 
 * particolare, che sia una città o una struttura;
 * senza paginazione
 */
const search = (req, res, next) => {
    let place = req.body.place.toString
    Spot.find({ $or: [{title: place}, {structureName: place}] })
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured: ', error
        })
    })
}

/**
 * Metodo di visualizzazione del singolo spot
 */
const showSingle = (req, res, next) => {
    let autore = req.body.author
    let titolo = req.body.title
    Spot.find({ $and: [{author}, {title}] })
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'An error occured: ', error
        })
    })
}

module.exports = {
    search, showSingle
}
