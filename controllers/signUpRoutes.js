// Sign Up Routes 

const router = require("express").Router();

// Sign Up 
router.get("/", async (req, res) => {
  try {
    res.render("signUp");
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// successfully signed in 
router.get("/success", async (req, res) => {
  try {
    res.render("successful",
      {
        loggedIn: req.session.loggedIn
      }
    );
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;