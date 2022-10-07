// Import the mongoose module
const mongoose = require('mongoose')

// Set up default mongoose connection
const dbUrl = 'mongodb://localhost:27017/todoDB'
mongoose.connect(dbUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(err=>console.log(err))

// Define a schema
let todoSchema = mongoose.Schema({
    title:String,
    datetime:String,
    text:String
})

// Compile model from schema
let Todo = mongoose.model("todo", todoSchema)

module.exports = Todo

module.exports.saveTodo = function(model, data) {
    model.save(data)
}