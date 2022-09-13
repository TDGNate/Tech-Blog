// homepage Routes

const router = require("express").Router();

// models 
const User = require("../models/user");
const Comment = require("../models/comment");
const Post = require("../models/post");

router.get("/", async (req, res) => {
  try {

    const postData = await Post.findAll({

    //   include: [
    //     {
    //       model: Comment,
    //       attributes: "comment",
    //       include: { 
    //         model: User,
    //         attributes: "name",
    //       },
    //     },
    //     {
    //       model: User,
    //       attributes: "name",
    //     }
    // ]
    
    });

    const posts = postData.map((post) =>
      post.get({ plain: true }));

    res.render(
      "home",
      {
        posts,
        loggedIn: req.session.loggedIn,
    });

    // res.json(postData);

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;