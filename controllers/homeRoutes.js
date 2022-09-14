// homepage Routes

const router = require("express").Router();

// models 
// const User = require("../models/user");
// const Comment = require("../models/comment");
// const Post = require("../models/post");

const { User, Comment, Post } = require("../models");

router.get("/", async (req, res) => {
  try {

    const postData = await Post.findAll({

      include: [{
        model: User,
        attributes: {
        exclude: "password"
        }
      },
      {
        model: Comment,
        attributes: ["comment", "date_created"],
        include: {
          model: User,
          attributes: {
            exclude: [
              "password", "createdAt", "updatedAt"
            ]
        }}
      }]
    
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

    // res.json(posts);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;