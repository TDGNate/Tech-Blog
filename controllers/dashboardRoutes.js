const router = require("express").Router();
const auth = require("../utils/auth");

// Dashboard 
router.get("/", auth, async (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;