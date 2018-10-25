// HOMEPAGE
let express = require('express')
let app = express()

app.use(express.static('../front/dist'))
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

// var ObjectId = mongoose.Schema.Types.ObjectId; // defino el Object Type
// var favouritesSchema = new Schema({ movie: ObjectId }); // defino el Schema
// var Favourite = mongoose.model('Favourite', favouritesSchema); // y el Model

var FavouriteSchema = new mongoose.Schema({
    Poster: String,
    Title: String,
    Type: String,
    Year: Number,
    imdbID: String
});
const Favourite = mongoose.model('Favourite', FavouriteSchema)

app.get('/favourites', function(req,res) {
    Favourite.create({
        Poster: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
        Title: "Batman Begins",
        Type: "movie",
        Year: "2005",
        imdbID: "tt0372784"
    }, function (err, small) {
        if (err) return handleError(err);
        console.log('creado')
    });
})

app.listen(3000, function() {console.log('Listening port 3000')})
