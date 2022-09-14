// User Routes 

const router = require("express").Router();

const { Comment, Post, User } = require("../../models");

// get all users 
router.get("/", async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Get One user 
router.get("/:id", async (req, res) => {
  try {

    const id = req.params.id;
    const user = await User.findOne({
      attributes: {
        exclude: ["password"]
      },
      where: {
        id: id
      },
      include: [
        {
          model: Post,
          attributes: ["id", "title", "content", "date_created"]
        },
        {
          model: Comment,
          attributes: ["id", "comment", "post_id", "date_created"],
          include: {
            model: Post,
            attributes: ["title"]
          }
        }
      ]
    });
    res.json(user);

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Login User
router.post("/login", async (req, res) => {
  try {

    // find user 
    const user = await User.findOne({
      where: {
        email: req.body.email,
      }
    }).catch((err) => {
      res
        .json(err);
    });

    // check if there is a user 
    if (!user) {
      res
        .status(400)
        .json({
        message: "check email and password again.."
      });

      return;
    }

    const isValPass = await user.checkPassword(req.body.password);

    if (!isValPass) {
      res.status(400).json({ message: "incorrect pass" });
      
      return;
    }

    let userID = user.id;

     req.session.save(() => {
      
      req.session.loggedIn = true;
      req.session.userId = userID;

      res.redirect("/");

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

    const userID = newUser.id;

    req.session.save(() => {
        
      req.session.loggedIn = true;
      req.session.userId = userID;
      
      res.render("successful");

    });

  } catch (err) {
    res.status(500).json({ message: "Server Error, cannot create user..." });
  }
});

// Logout User
router.post("/logout", async (req, res) => {

  // checked if their logged in 
  if (req.session.loggedIn) {

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