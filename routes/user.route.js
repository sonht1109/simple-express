const router = require("express").Router();
const userController = require("../controller/user.controller");
const userMiddleware = require("../middlewares/user.middleware");

const multer = require('multer')

const upload = multer({dest: 'public/uploads'})

router.get("/", userController.getAll);

router.get("/create", userController.create);

router.post(
  "/create",
  upload.single('avt'),
  userMiddleware.validateCreateUser,
  userController.postCreate
);

router.get("/:id", userController.getOne);

module.exports = router;
