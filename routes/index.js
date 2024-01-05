// routes/index.js
const express = require('express');
const router = express.Router();
const infoController = require('../controllers/InfoController');
const imageController = require('../controllers/ImageController');
const favouriteController = require('../controllers/FavouriteController');


// Define routes
router.get('/info/:name', infoController.getInfoByName);
router.get('/image/:name', imageController.getImageByName);
router.post('/favourite', favouriteController.postFavouriteImage);
router.delete('/favourite/:imageId', favouriteController.deleteFavouriteImage);
router.get('/favourites', favouriteController.getAllFavouriteImages);
router.get('/image/url/:imageId', favouriteController.getUrlByImageId);

module.exports = router;