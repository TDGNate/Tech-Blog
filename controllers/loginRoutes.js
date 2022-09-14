// Login Routes 

const router = require("express").Router();

// Login 
router.get("/", async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;