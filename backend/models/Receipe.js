const mongoose = require('mongoose')
const receipeSchema = mongoose.Schema({
    title:String,
    description:String,
    ingredients:Array,
    instruction:Array,
    image:String
})
module.exports = mongoose.model('Receipes', receipeSchema)