const db = require("../db");
const shortid = require("shortid");

module.exports.getAll = (req, res) => {
  const name = req.query?.name || "";
  const users = db.get("users").value();
  res.render("user.pug", {
    users: users.filter((u) =>
      u.name.toLowerCase().includes(name.toLowerCase())
    ),
  });
};

module.exports.postCreate = (req, res) => {
  const user = req.body;
  const errors = [];
  if (!user.name) {
    errors.push("Name is required");
    res.render("user/create.pug", { errors });
  } else {
    user.id = shortid.generate();
    db.get("users").push(user).write();
    res.redirect("/user");
  }
};

module.exports.getOne = (req, res) => {
  const id = req.params.id;
  const user = db.get("users").find({ id }).value();
  res.render("user/detail", { user });
};

module.exports.create = (req, res) => {
  res.render("user/create.pug");
};
