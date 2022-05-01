const db = require("../db");

module.exports.validateLogin = (req, res, next) => {
  const { name, password } = req.body;
  const errors = [];
  const user = db.get("users").find({ name, password }).value();
  if (user) {
    console.log(user);
    res.locals.user = user;
    next();
  } else {
    errors.push("Invalid user !");
    res.render("auth/login.pug", { errors });
  }
};

module.exports.requireAuth = (req, res, next) => {
  const id = req.cookies.user || undefined;
  if (!id) {
    res.redirect("/auth/login");
    return;
  }
  const user = db.get("users").find({ id }).value();
  if (!user) {
    res.redirect("/auth/login");
    return;
  }
  next();
};
