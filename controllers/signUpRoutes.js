const router = require("express").Router();

// Sign Up 
router.get("/", async (req, res) => {
  try {
    res.render("signUp");
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;