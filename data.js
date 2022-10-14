const mongoose = require("mongoose");
const dataSchema = mongoose.Schema({
    name:String,
    mail:String,
    password:{ type: String, required: true }
})

module.exports = mongoose.model("ressodata",dataSchema)
