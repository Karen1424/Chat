const messageService = require('../../service/messageService');
const router = require('express').Router();

router.get('/', (req, res) => {
    console.log(req.query);
    const result =  messageService.insert(req.query)
    res.sendFile('/home/karen/chat-app/chat_room/public/index.html');
});

module.exports = router;