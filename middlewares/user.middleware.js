module.exports.validateCreateUser = (req, res, next) => {
  const user = req.body;
  if(req.file && !Array.isArray(req.file)) {
    user[req.file.fieldname] = req.file.path.split('public/')[1]
  }
  const errors = [];
  if (!user.name) {
    errors.push("Name is required");
  }
  if (!user.password) {
    errors.push("Password is required");
  }
  if (errors.length) {
    res.render("user/create.pug", { errors });
  } else {
    res.locals.user = user;
    next();
  }
};