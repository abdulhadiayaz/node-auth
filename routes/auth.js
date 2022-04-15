const express = require('express');

const authController = require('../controllers/user');

const router = express.Router();

router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.get('/profile', authController.getProfile);

router.post('/login', authController.postLogin);

router.post('/signup', authController.postSignup);

router.post('/logout', authController.postLogout);

router.post('/deleteUser', authController.deleteUser);

module.exports = router;