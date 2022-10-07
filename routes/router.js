const express = require("express")
const router = express.Router()
const Todo = require('../models/todo')

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
	let data = new Todo({
		title:req.body.title,
		datetime:req.body.datetime,
		text:req.body.text
	})
	Todo.saveTodo(data, (err)=> {
		if (err) console.log(err)
		res.redirect('/add')
	})
})

module.exports = router