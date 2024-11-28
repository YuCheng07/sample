const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


router.post('/add-deck', async(req, res) => {
    const { userToken, deckData } = req.body;
    const deckId = uuidv4().slice(0, 5);
    console.log(deckId);
    const addDeckData = await prisma.deck_list.create({ 
        data: {
            deck_id: deckId,
            user_email: 'aa@gmail.com',
            deck_name: deckData.deckName,
            deck: JSON.stringify(deckData.deck),
            deck_cover: deckData.deckCover,
            deck_description: deckData.deckDescription,
        }
     });
    res.status(200).json({ message: '已存入資料庫' });
})

module.exports = router