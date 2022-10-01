const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
	res.render("index")
})

router.get("/view", (req, res) => {
	res.render("view")
})
module.exports = router