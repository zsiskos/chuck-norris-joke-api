const request = require('request')
const jokeURL = 'https://api.chucknorris.io/jokes/random'

module.exports = {
    getJoke
}


function getJoke(req, res) {
    request(jokeURL, function(err, response, body) {
        const joke = JSON.parse(body);
        console.log(body);
        res.render('index', {joke: joke.value});
    });  
}

