const express = require('express');
const router = express.Router();

const { login } = require('../controllers/authController')
const { getUsers, register } = require('../controllers/userController')

router.post('/login', login)
router.post('/register', register)

router.get('/users', getUsers)

module.exports = router