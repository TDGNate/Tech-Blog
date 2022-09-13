// Auth Middleware

const Auth = (req, res, next) => {
  if (!req.session.loggedIn) {

  // redirect them to login page 
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = Auth;