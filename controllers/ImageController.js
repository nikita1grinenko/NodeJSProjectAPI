const MyDogsClient = require('../clients/MyDogsClient');
const client = new MyDogsClient();

exports.getImageByName = async (req, res) => {
    try {
        const image = await client.GETImageByName(req.params.name);
        res.json(image);
    } catch (error) {
        res.status(500).send(error.message);
    }
};