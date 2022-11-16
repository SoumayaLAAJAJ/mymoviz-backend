const { response } = require('express');
var express = require('express');
var router = express.Router();
const fetch = require("node-fetch");

const API_KEY = "1061afcd1a5eee4df1e3ad68031b62f2"

router.get('/movies', (req, res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`).then(res => res.json()).then(data => {
        res.json({movies: data.results});
    });
})


module.exports = router;
