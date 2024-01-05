// models/Image.js
const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    id: String,
    url: String
});

module.exports = mongoose.model('Image', imageSchema);