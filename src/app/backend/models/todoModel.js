const mongoose = require("mongoose")
mongoose.Promise = global.Promise;

const todoModel = new mongoose.Schema({
    todo: {
        type: String,
        require: true
    },
    status: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports =
    mongoose?.models?.Todos || mongoose.model("Todos", todoModel)