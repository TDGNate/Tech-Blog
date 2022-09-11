const router = require("express").Router();

// import User Model 
const User = require("../../models/user");


// get all users 
router.get("/", async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Login User
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        email: req.body.email
      }
    });

    if (!user) {
      res.json({
        message: "check email and password again.."
      });

      return;
    }

    const isValPass = await user.checkPassword(req.body.password);

    if (!isValPass) {
      res.json({ message: "incorrect pass" });
      
      return;
    }

    req.session.save(() => {

      req.session.logged_in = true;

      res
        .json({
           message: "you're logged in!"
        });
    });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Create A User 
router.post("/register", async (req, res) => { 
  try {

    // creating a new user in database 
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    }).catch((err) => {
      res
        .json(err);
    });

    req.session.save(() => {
        
      req.session.logged_in = true;
      
    });

    res.status(200).json({message: "Successfully Created User!",newUser});

  } catch (err) {
    res.status(500).json({ message: "Server Error, cannot create user..." });
  }
});

// Logout User
router.post("/logout", async (req, res) => {

  // checked if their logged in 
  if (req.session.logged_in) {

    // if there is a session, destory it 
    req.session.destroy(() => {
      res
        .status(200)
        .json({
          message: "Session destroyed, User logged out!"
        })
        .end();
    });
  } else {

    // if there's no session, send back 404 
    res
      .status(404)
      .end();
  }
});

module.exports = router;