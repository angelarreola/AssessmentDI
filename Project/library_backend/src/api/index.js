const express = require('express');
const router = express.Router();

const { login } = require('../controllers/authController')
const { getUsers, register, updateUser, deleteUser, getUser } = require('../controllers/userController')
const { getBooks, registerBook, updateBook, deleteBook, getBook} = require('../controllers/bookController')

// Users management
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.post('/login', login)
router.post('/users/register', register)
router.put('/users/update/:id', updateUser)
router.delete('/users/delete/:id', deleteUser)


// Books management
router.get('/books', getBooks)
router.get('/book/:id', getBook)
router.post('/books/register', registerBook)
router.put('/books/update/:id', updateBook)
router.delete('/books/delete/:id', deleteBook)

module.exports = router