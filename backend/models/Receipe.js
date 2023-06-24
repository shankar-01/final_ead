const mongoose = require('mongoose')
const receipeSchema = mongoose.Schema({
    title:String,
    description:String,
    ingredients:String,
    instruction:String,
    image:String
})
module.exports = mongoose.model('Receipes', receipeSchema)