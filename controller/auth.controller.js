module.exports.postLogin = (req, res) => {
  const user = res.locals.user;
  if (user) {
    res.cookie("user", user.id);
    res.redirect(`/user/${user.id}`);
  } else {
    res.redirect("/auth/login");
  }
};

module.exports.login = (req, res) => {
  res.render("auth/login.pug");
};