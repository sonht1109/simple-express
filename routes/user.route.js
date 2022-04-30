const router = require('express').Router()
const userController = require('../controller/user.controller')

router.get("/", userController.getAll);

router.get("/create", userController.create);

router.post("/create", userController.postCreate);

router.get("/:id", userController.getOne);

module.exports = router;