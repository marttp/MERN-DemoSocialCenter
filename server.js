const express = require('express')
const app = express()


// Basic configuration server
const port = process.env.PORT || 5000

// app.get('/', (req, res) => {
//     res.send({
//         test: '12',
//         hello: 'asdsad'
//     })
// })

app.use('/social-center', require('./routes/api.router'))

// Start Server on Port
app.listen(port, () => {
    console.log('Start Server at port:',port)
})