const router = require("express").Router();
const auth = require("../utils/auth");

// Post Model 
const Post = require("../models/post");
const User = require("../models/user");

// Dashboard 
router.get("/", auth, async (req, res) => {
  try {
    const postData = await Post.findAll();

    const posts = postData.map((post) => 

      post.get({ plain: true })
    );

    res.render(
      "dashboard",
      {
        posts,
        loggedIn: req.session.loggedIn,
      });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;