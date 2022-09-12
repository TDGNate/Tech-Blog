// Auth Middleware

const Auth = (req, res, next) => {
  if (!req.session.logged_in) {

  // redirect them to login page 
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = Auth;