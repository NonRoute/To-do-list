const express = require("express")
const router = express.Router()
const Todo = require('../models/todo')

router.get("/", (req, res) => {
	res.render("index")
})

router.get("/view", (req, res) => {
	Todo.find().exec((err,doc)=>{
		res.render("view", {todo: doc})
	})
})

router.get("/edit", (req, res) => {
	Todo.find().exec((err,doc)=>{
		res.render("edit", {todo: doc})
	})
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

router.post("/update", (req, res) => {
	const update_id = req.body.update_id
	let data = {
		title:req.body.title,
		datetime:req.body.datetime,
		text:req.body.text
	}
	Todo.findByIdAndUpdate(update_id, data, {useFindAndModify:false}).exec(err=>{
		res.redirect('/edit')
	})
})

router.post("/delete", (req, res) => {
	const delete_id = req.body.update_id
	Todo.findByIdAndDelete(delete_id,{useFindAndModify:false}).exec(err=>{
		if(err) console.log(err)
		res.redirect('/edit')
	})
})
module.exports = router