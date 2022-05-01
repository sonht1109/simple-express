const bodyParser = require("body-parser");
const express = require("express");
const cookieParser = require("cookie-parser");

const userRoute = require("./routes/user.route");
const authRoute = require("./routes/auth.route");

const authMiddleWare = require("./middlewares/auth.middleware");

const app = express();

const PORT = 3000;

app.set("view engine", "pug");
app.set("views", "./views/");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index.pug");
});

app.use("/user", authMiddleWare.requireAuth, userRoute);
app.use("/auth", authRoute);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
