// models/FavouriteImage.js
const mongoose = require('mongoose');

const favouriteImageSchema = new mongoose.Schema({
    image: String
});

module.exports = mongoose.model('FavouriteImage', favouriteImageSchema);