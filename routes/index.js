const express = require('express');
const router = express.Router();

const Movie = require('./../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => res.render('movies', { movies }))
        .catch(err => console.log(err))

})
router.get('/movie/:id', (req, res) => {

    const { id } = req.params
    //console.log('prueba', id)

    Movie
        .findById(id)
        .then(theMovie => res.render("movie", theMovie))
        .catch(err => console.log(err))
})

module.exports = router;
