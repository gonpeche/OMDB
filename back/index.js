let express = require('express')
let app = express()
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/omdb")

app.use(express.static('../front/dist'))

app.get('/*', function(req,res) {
    res.sendFile('/Users/gonzalo/Desktop/Bootcamp/OMDB/front/index.html')
})

app.listen(3000, function(){
    console.log('Listening port 3000')
})