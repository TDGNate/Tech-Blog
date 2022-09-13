const router = require("express").Router();
const auth = require("../utils/auth");

// Models 
const User = require("../models/user");
const Post = require("../models/post");
const Comment = require("../models/comment");
// Dashboard 
router.get("/", auth, async (req, res) => {
  try {

    // const userData = await User.findOne({
    //   where: {
    //     id: req.session.userId
    //   },
    // });

    // const user = userData.toJSON();

    // res.render(
    //   "dashboard",
    //   {
    //     user,
    //     loggedIn: req.session.loggedIn,
    //   });

    // res.json(user);

    const postData = await Post.findAll({
      where: {
        username_id: req.session.userId
      }
    })
      .catch((err) => {
      res.json({message: "no post?"});
      });
    
    const posts = postData.map((post) => post.get({ plain: true }));
    
    // res.json(postData);

    res.render("dashboard", {
      posts,
      loggedIn: req.session.loggedIn
    });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;