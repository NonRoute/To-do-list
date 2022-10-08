const express = require('express')
const path = require("path")
const cookieParser = require('cookie-parser')
const session = require('express-session')
const router = require('./routes/router')
const app = express()

app.set('view engine', 'ejs')

app.use(cookieParser())
app.use(express.urlencoded({extended: false}))
app.use(session({secret:"mysession", resave:false, saveUninitialized:false}))
app.use(router)
app.use(express.static(path.join(__dirname, "public")))

app.listen(3000, () => {
    console.log('start server at port 3000');
})