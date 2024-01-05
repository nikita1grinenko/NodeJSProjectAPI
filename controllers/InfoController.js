const MyDogsClient = require('../clients/MyDogsClient');
const client = new MyDogsClient();

exports.getInfoByName = async (req, res) => {
    try {
        const breed = await client.GETInfoByName(req.params.name);
        res.json(breed);
    } catch (error) {
        res.status(500).send(error.message);
    }
};