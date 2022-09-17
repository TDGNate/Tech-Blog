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
          include: { model: Post },
          attributes: {
            exclude: [
              "user_id",
              "content",
              "date_created"
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
      user
    });

    // res.json(user); 


  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;