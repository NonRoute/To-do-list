const express = require('express')
const router = express.Router()
const ejs = require('ejs')
const app = express()

app.set('view engine', 'ejs')

app.use(router)
app.use('/', (req, res) => {
    res.render("index")
})

app.listen(3000, () => {
    console.log('start server at port 3000');
})