const router = require("express").Router();
const userController = require("../controller/user.controller");
const userMiddleware = require("../middlewares/user.middleware");

router.get("/", userController.getAll);

router.get("/create", userController.create);

router.post(
  "/create",
  userMiddleware.validateCreateUser,
  userController.postCreate
);

router.get("/:id", userController.getOne);

module.exports = router;
