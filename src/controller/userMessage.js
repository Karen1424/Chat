const router = require('express').Router();

router.post('/messages', async (req, res) => {
    console.log(req);
});

module.exports = router;