const bodyParser = require("body-parser");
const express = require("express");
const userRoute = require('./routes/user.route')

const app = express();

const PORT = 3000;

app.set("view engine", "pug");
app.set("views", "./views/");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.pug");
});

app.use('/user', userRoute)

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
