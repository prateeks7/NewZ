import express from 'express';
import axios from 'axios';

const router = express.Router();

router.route('/').get((req, res) => {
    res.send("Get Newz API");
});


router.route('/').post(async (req, res) => {
    try {
        const response = await axios({
            method: 'GET',
            url: req.body.address+process.env.API_KEY,
        });
        res.status(200).json(response.data);
    }
    catch (err) {
        console.log(err);
    }
});

export default router;