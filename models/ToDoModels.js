const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    text:{
        type: String,
        require: true
    },
    lastEdit:{
        type: String,
        require: true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('ToDo',todoSchema);