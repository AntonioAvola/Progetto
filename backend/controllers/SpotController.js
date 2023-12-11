const Spot      = require('../models/Spot')

/**
 * Metodo di ricerca di tutti gli spot inerenti ad un posto in 
 * particolare, che sia una città o una struttura;
 * senza paginazione
 */
const ricerca = (req, res, next) => {
    let posto = req.body.posto.toString
    Spot.find({ $or: [{titolo: posto}, {nomeStruttura: posto}] })
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
const visualizza = (req, res, next) => {
    let autore = req.body.autore
    let titolo = req.body.titolo
    Spot.find({ $and: [{autore}, {titolo}] })
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
    ricerca, visualizza
}
