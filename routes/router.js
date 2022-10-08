const express = require("express")
const router = express.Router()
const Todo = require('../models/todo')

router.get("/", (req, res) => {
	res.render("index")
})

router.get("/view", (req, res) => {
	Todo.find().sort( { datetime : 1 } ).exec((err,doc)=>{
		res.render("view", {todo: doc})
	})
})

router.get("/edit", (req, res) => {
	if (req.session.login) {
		Todo.find().sort( { datetime : 1 } ).exec((err,doc)=>{
			res.render("edit", {todo: doc})
		})
	} else {
		res.render('login', {success: ""})
	}
})

router.get("/add", (req, res) => {
	res.render("add")
})

router.get("/login", (req, res) => {
	res.render("login", {success: ""})
})

router.get("/logout", (req, res) => {
	req.session.destroy((err)=>{
		res.redirect('/')
	})
})

router.get('/:id',(req,res)=>{
	const todo_id = req.params.id
	Todo.findOne({_id:todo_id}).exec((err,doc)=>{
		res.render('todo',{item:doc})
	})
})

router.post("/insert", (req, res) => {
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

router.post('/signin',(req,res)=>{
	const username = req.body.username
	const password = req.body.password
	const timeExpire = 30 * 60 * 1000 //30 min

	if (username === "admin" && password === "pass") {
		req.session.username = username
		req.session.password = password
		req.session.login = true
		req.session.cookie.maxAge = timeExpire
		res.redirect('/edit')
	} else {
		res.render('login', {success: "Wrong username or password!"})
	}
})
module.exports = router