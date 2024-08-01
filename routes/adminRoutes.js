const express = require('express');
const router = express.Router();
const { User, Share } = require('../models');

router.post('/bulk-insert', async (req, res) => {
    try {
        console.log("im here")
        const { users, shares } = req.body;

        if (users) {
            await User.bulkCreate(users);
        }

        if (shares) {
            await Share.bulkCreate(shares);
        }

        res.status(201).json({ message: 'Data inserted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/bulk-update', async (req, res) => {
    try {
        const { users, shares } = req.body;

        if (users) {
            for (const user of users) {
                await User.update(user, { where: { id: user.id } });
            }
        }

        if (shares) {
            for (const share of shares) {
                await Share.update(share, { where: { symbol: share.symbol } });
            }
        }

        res.status(200).json({ message: 'Data updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
