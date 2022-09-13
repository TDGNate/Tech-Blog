const router = require("express").Router();
const Post = require("../models/post");
const User = require("../models/user");

// homepage 
router.get("/", async (req, res) => {
  try {
    const postsData = await Post.findAll({},{
      include:
      {
        model: User
      }
    });

    const posts = postsData.map((post) => post.get({
      plain: true
    }));

    res.render(
      "home",
      {
        posts,
        loggedIn: req.session.loggedIn,
    });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;