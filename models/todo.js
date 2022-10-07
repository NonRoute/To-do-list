const mongoose = require('mongoose')

const dbUrl = 'mongodb://localhost:27017/todoDB'
mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err=>console.log(err))

let todoSchema = mongoose.Schema({
    title:String,
    datetime:String,
    text:String
})

let Todo = mongoose.model("todo", todoSchema)

module.exports = Todo

module.exports.saveTodo = function(model, data) {
    model.save(data)
}