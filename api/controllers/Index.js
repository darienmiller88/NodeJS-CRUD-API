const router = require("express").Router()

//Load Each controller
const usersController = require('./UserController.js');
const postsController = require('./PostController.js');

//Mount each controller
router.use("/users", usersController)
router.use("/posts", postsController)

module.exports = router