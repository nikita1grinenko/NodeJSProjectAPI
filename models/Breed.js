// models/Breed.js
const mongoose = require('mongoose');

const heightSchema = new mongoose.Schema({
    imperial: String,
    metric: String
});

const weightSchema = new mongoose.Schema({
    imperial: String,
    metric: String
});

const breedSchema = new mongoose.Schema({
    bred_for: String,
    breed_group: String,
    id: String,
    name: String,
    temperament: String,
    life_span: String,
    alt_names: String,
    wikipedia_url: String,
    origin: String,
    country_code: String,
    reference_image_id: String,
    height: heightSchema,
    weight: weightSchema
});

module.exports = mongoose.model('Breed', breedSchema);