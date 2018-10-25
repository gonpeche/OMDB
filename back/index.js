// HOMEPAGE
let express = require('express')
let app = express()
var bodyParser = require('body-parser')

app.use(express.static('../front/dist'))
app.use(bodyParser.json())
app.get('/', function(req,res) {
    res.sendFile('/Users/gonzalo/Desktop/Bootcamp/OMDB/front/index.html')
})

//--------- MONGO SETUP--------------//

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/omdb');
// check connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log('Tamo conectados!')});


var FavouriteSchema = new mongoose.Schema({
    Poster: String,
    Title: String,
    Type: String,
    Year: Number,
    imdbID: String
});
const Favourite = mongoose.model('Favourite', FavouriteSchema)

app.post('/favourites/new', function(req,res) {
    Favourite.create(req.body, function (err, movie) {
        if (err) return handleError(err);
        console.log('Movie creada')
        res.json(movie)
    });
})

// app.get('/favourites', function(req,res) {
//     Favourite.find()
// })

app.listen(3000, function() {console.log('Listening port 3000')})
