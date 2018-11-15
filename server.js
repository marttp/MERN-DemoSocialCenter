const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const config = require('./configs/config.js')

// ! Implement CORS
const cors = require('cors')

mongoose.connect(config.mongoPath, {
  useNewUrlParser: true
})

// ! Basic configuration server
const port = process.env.PORT || 5000

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
  console.log('Connecting MongoAtlas Cloud')
});

app.use(cors())

// ! Use for received input and parse to JSON
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());

app.use('/social-center', require('./routes/api.router'))


// ! Start Server on Port
app.listen(port, () => {
  console.log('Start Server at port:', port)
})