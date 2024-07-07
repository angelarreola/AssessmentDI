const express = require('express');
const router = express.Router();

const { login } = require('../controllers/authController')
const { getUsers, register, updateUser, deleteUser, getUser } = require('../controllers/userController')
const { getBooks, registerBook, updateBook, deleteBook, getBook} = require('../controllers/bookController')
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/login', login)

// Users management
router.get('/user/:id', getUser)
router.post('/users/register', authMiddleware, register)
router.put('/users/update/:id', authMiddleware, updateUser)
router.delete('/users/delete/:id',authMiddleware, deleteUser)
router.get('/users', authMiddleware, getUsers)


// Books management
router.get('/book/:id', authMiddleware, getBook)
router.post('/books/register', authMiddleware, registerBook)
router.put('/books/update/:id', authMiddleware, updateBook)
router.delete('/books/delete/:id', authMiddleware, deleteBook)
router.get('/books', authMiddleware, getBooks)

module.exports = router