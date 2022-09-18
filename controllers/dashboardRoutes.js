// Dashboard Routes

const router = require("express").Router();
const auth = require("../utils/auth");

// Models 
const { Comment, Post, User} = require("../models");

router.get("/", auth, async (req, res) => {
  try {

    const userData = await User.findOne({
      where: {
        id: req.session.userId
      },
      attributes: {
        exclude: "password"
      },
      include: [
        {
          model: Post,
          attributes: {
            exclude: "user_id"
          }
        },
        {
          model: Comment,
          attributes: {
            exclude: "user_id"
          },
          include: {
            model: Post,
            include: {
              model: User,
              attributes: ["name"]
            }
          },
          attributes: {
            exclude: [
              "user_id",
              "content"
            ]
          }
        }
      ]
    });

    const user = userData.get({ plain: true });

    if (!user) {
      res.render("404", {
        layout: "blank"
      });
    }

    res.render("dashboard", {
      user,
      loggedIn: req.session.loggedIn,
    });

    // res.json(user); 


  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// get One Post 
router.get("/post/:id", auth, async (req, res) => {
  try {

    const postData = await Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        "id",
        "title",
        "content",
        "date_created"
      ],
      include: [
        {
          model: User,
          attributes: {
            exclude: ["password"]
          }
        },
        {
          model: Comment,
          attributes: [
            "comment",
            "date_created"
          ],
          include: {
            model: User,
            attributes: {
              exclude: ["password"]
            }
          }
        }
      ]
    });

    if (!postData) {

      res.render("404", {
        layout: "blank"
      });

      return;
    }

    const post = postData.get({ plain: true });  

    res.render("onePostPage", {
      post,
      loggedIn: req.session.loggedIn
    });

    // res.json(post); 

  } catch (err) {

    res.status(500).json({ message: "Server Error" });

  }
});

module.exports = router;