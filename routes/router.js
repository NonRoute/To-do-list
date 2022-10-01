const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	res.render("index")
})

router.get("/view", (req, res) => {
	res.render("view")
})

router.get("/edit", (req, res) => {
	res.render("edit")
})

router.get("/add", (req, res) => {
	res.render("add")
})

router.post("/insert", (req, res) => {
	console.log(JSON.stringify(req.body))
	res.redirect('/add')
})

module.exports = router