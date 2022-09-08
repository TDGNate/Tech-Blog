const router = require("express").Router();

// Dashboard 
router.get("/", async (req, res) => {
  try {
    res.render("dashboard");
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;