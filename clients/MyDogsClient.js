// clients/MyDogsClient.js
const axios = require('axios');
const { apiUrl, apiKey } = require('../config');
const Breed = require('../models/Breed');
const Image = require('../models/Image');
const FavouriteImage = require('../models/FavouriteImage');

class MyDogsClient {
    constructor() {
        this.client = axios.create({
            baseURL: apiUrl,
            headers: {'x-api-key': apiKey}
        });
    }

    async GETInfoByName(name) {
        try {
            const response = await this.client.get(`/v1/breeds/search?q=${name}`);
            return new Breed(response.data[0]); // Assuming the first one is the desired result
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch breed info');
        }
    }

    async GETImageByName(name) {
        try {
            const breed = await this.GETInfoByName(name);
            const response = await this.client.get(`/v1/images/${breed.reference_image_id}`);
            return new Image(response.data);
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch image');
        }
    }

    async POSTFavTheImage(imageId) {
        const favouriteImage = new FavouriteImage({ image: imageId });
        await favouriteImage.save();
        return favouriteImage;
    }

    async DELETFavTheImage(imageId) {
        const result = await FavouriteImage.deleteOne({ image: imageId });
        return result.deletedCount > 0;
    }

    async GETAllFavImages() {
        return await FavouriteImage.find({});
    }

    async GETUrlByImageId(imageId) {
        try {
            const response = await this.client.get(`/v1/images/${imageId}`);
            return new Image(response.data);
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch image by ID');
        }
    }
}

module.exports = MyDogsClient;