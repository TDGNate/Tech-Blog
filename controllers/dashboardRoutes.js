// Dashboard Routes

const router = require("express").Router();
const auth = require("../utils/auth");

// Models 
const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");

router.get("/", auth, async (req, res) => {
  try {

    // getting all post related to One User 
    const postData = await Post.findAll({
      where: {
        user_id: req.session.userId
      }
    })
      // catching any errors 
      .catch((err) => {
      res.json({message: "no post?"});
      });
    
    const posts = postData.map((post) => post.get({ plain: true }));

    // Sending back the correct posts to user
    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn,
      userName: req.session.userName,
      active: {dashboard: true}
    });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;