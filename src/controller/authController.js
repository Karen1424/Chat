/// Standard requires
const router = require('express').Router();
/// Local requires
const Validation = require('../validation/validation');
const userService = require('../service/userService');

router.post('/register', async (req, res) => {

    try {
        const result = await Validation.registerValidation(req.body);
        const accsessToken = await userService.createUser(result);
        res.status(200).send({AccsessToken : accsessToken});
    } catch (err) {
        res.status(400).send({Error : err.message});
    } 
});

router.post('/login', async (req, res) => {
    
    try {
        const result = await Validation.loginValidation(req.body);
        const user = await userService.selectUser(result.email, result.password);
        res.status(200).send({Message : user});
    } catch (err) {
        res.status(400).send({Error : err.message});
    } 
});

module.exports = router;