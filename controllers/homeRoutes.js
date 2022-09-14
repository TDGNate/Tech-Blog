// homepage Routes

const router = require("express").Router();
const sequelize = require ("../config/connection");

// models 

const { User, Comment, Post } = require("../models");

router.get("/", async (req, res) => {
  try {

    const postData = await Post.findAll({

      order: sequelize.literal("id DESC"),

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