const router = require("express").Router();
const auth = require("../utils/auth");

// Post Model 
const Post = require("../models/post");
const User = require("../models/user");

// Dashboard 
router.get("/", auth, async (req, res) => {
  try {
    const postsData = await Post.findAll();

    const posts = postsData.map((post) => post.toJSON());

    res.render(
      "dashboard",
      { posts });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;