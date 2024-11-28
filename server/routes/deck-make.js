const express = require('express');
const router = express.Router();


router.post('/addDeck', (req, res) => {
    const { userToken, deck } = req.body;
    console.log(userToken, deck);
})