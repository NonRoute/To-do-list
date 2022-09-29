const express = require('express')
const app = express()

app.use((req, res) => {
    res.send("Hello Express.js")
})

app.listen(3000, () => {
    console.log('start server at port 3000');
})