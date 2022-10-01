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
module.exports = router