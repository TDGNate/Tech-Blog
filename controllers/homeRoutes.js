const router = require("express").Router();
const Post = require("../models/post");

// homepage 
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();

    // const allPosts = posts.map((post) => post.get({ plain: true }));

    // res.send(allPosts);
    res.render("home");

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;