const express = require('express')
const app = express()
const PORT = 3000;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.post('/', function (req, res) {
    const { password } = req.body;
    console.log(`Captured password: password: ${password}`);
    res.status(200);
})

app.listen(PORT, () => {
    console.log(`App runs on port ${PORT}`)
})