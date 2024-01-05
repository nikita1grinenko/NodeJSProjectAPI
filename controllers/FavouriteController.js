// controllers/FavouriteController.js
const MyDogsClient = require('../clients/MyDogsClient');
const client = new MyDogsClient();

exports.postFavouriteImage = async (req, res) => {
    try {
        const favouriteImage = await client.POSTFavTheImage(req.body.imageId);
        res.json(favouriteImage);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.deleteFavouriteImage = async (req, res) => {
    try {
        const success = await client.DELETFavTheImage(req.params.imageId);
        if (success) {
            res.send({ message: "Image deleted from favourites" });
        } else {
            res.status(404).send({ message: "Image not found in favourites" });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getAllFavouriteImages = async (req, res) => {
    try {
        const images = await client.GETAllFavImages();
        res.json(images);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

exports.getUrlByImageId = async (req, res) => {
    try {
        const image = await client.GETUrlByImageId(req.params.imageId);
        res.json(image);
    } catch (error) {
        res.status(500).send(error.message);
    }
};