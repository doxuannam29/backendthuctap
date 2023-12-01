const express = require("express");
const router = express.Router();
const userController = require('../controller/UserController');
const { authMidlewae, authuserMidlewae } = require("../middlewae/authuMidlewae");

router.post('/sing-up', userController.createUser)
router.post('/sing-in', userController.loginUser)
router.post('/logout', userController.logoutUser)
router.put('/update-user/:id', userController.updateUser)
router.delete('/delete-user/:id', userController.deleteUser)
router.get('/getall-user', userController.getallUser)
router.get('/get-user/:id', userController.getUser)
router.post('/refresh_token', userController.refreshTokens)

module.exports = router