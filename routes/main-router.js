const express = require('express')
const router = express.Router()

const  {home,login} = require('../controller/request')

// const authMiddleware = require('../middleware/auth')
//get/ post requests are in reference to server

router.route('/').get(home);
// router.route('/register').post(register);
router.route('/login').post(login);
// router.route('/change-password').post(changePassword);

module.exports = router;