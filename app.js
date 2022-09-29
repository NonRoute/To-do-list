const express = require('express')
const path = require("path")
const router = require('./routes/router')
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs')

app.use(router)
app.use(express.static(path.join(__dirname, "public")))

app.listen(3000, () => {
    console.log('start server at port 3000');
})