// Login Routes 

const router = require("express").Router();

// Login 
router.get("/", async (req, res) => {
  try {
    res.render("login", {
      active: {login: true}
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;