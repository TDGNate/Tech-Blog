// Dashboard Routes

const router = require("express").Router();
const auth = require("../utils/auth");

// Models 
const { Comment, Post, User} = require("../models");
const sequelize = require("sequelize");

// Load up dashboard 
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
          order: sequelize.literal("id DESC"),
          attributes: ["id", "title", "content", "date_created", "user_id"],
        },
        {
          model: Comment,
          include: {
            model: User,
            attributes: {
              exclude: ["password"]
            }
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
      active: {dashboard: true}
    });

    // res.json(user);  


  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Page for one post
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
      loggedIn: req.session.loggedIn,
      active: {dashboard: true}
    });

    // res.json(post); 

  } catch (err) {

    res.status(500).json({ message: "Server Error" });

  }
});

// Route to Modify their Post 
router.get("/modify-post/:id", auth, async (req, res) => {

  try {

    const postData = await Post.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: User,
          attributes: [
            "name",
            "id"
          ]
        },
        {
          model: Comment,
          attributes: [
            "id",
            "comment",
            "date_created"
          ],
          include: {
            model: User,
            attributes: [
              "name",
              "id"
            ]
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

    res.render("modifyPost", {
      post,
      userId: req.session.userId,
      loggedIn: req.session.loggedIn,
      active: {dashboard: true}
    });

    // res.json(post); 

  } catch (err) {
    res.status(500).json(err);
  }
});
 
// Route to Modify their Comment 
router.get("/modify-comment/:id", auth, async (req, res) => {

  try {

    const id = req.params.id;

    const commentData = await Comment.findOne({
      where: {
        id: id
      },
      include: [
        {
         model: Post
        },
        {
          model: User
        }
      ]
    });

    if (!commentData) {

      res.render("404", {
        layout: "blank"
      });

      return;
    }

    const comment = commentData.get({ plain: true });

    res.render("modifyComment", {
      comment,
      userId: req.session.userId,
      loggedIn: req.session.loggedIn,
      active: {dashboard: true}
    });

    // res.json(comment);

  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;