const mongoose = require('mongoose')
const Schema = mongoose.Schema
var bcrypt = require('bcrypt-nodejs')

var listSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: Array,
    price: { type: String, required: true },
    date: Date
})

module.exports = mongoose.model('List', listSchema);
// export default List;