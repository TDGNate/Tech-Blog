// Post Routes 

const router = require("express").Router();
const { Comment, Post, User} = require("../../models");

// Posts
// get posts
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

    if (!posts) {
      res
        .status(404)
        .json({
        message: "Can't find posts"
        });
      
        return;
    }

    res
      .status(200)
      .json(posts);
    
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});
 
// Get One Post 
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const posts = await Post.findOne({
      attributes: {
        exclude: ["password"]
      },
      where: {
        id: id
      },
      include: [{
        model: User,
        attributes: ["name"]
      },
      {
        model: Comment,
        attributes: ["id", "comment", "date_created"]
      }
      ]
    });

    if (!posts) {
      res
        .status(404)
        .json({
        message: "Can't find posts"
        });
      
        return;
    }
    res
      .status(200)
      .json(posts);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
 });

// create post 
router.post("/", async (req, res) => {
  try {
    const posts = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.userId
    });

    // to reload the page after creating a new post 
    res.redirect("/dashboard");
  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
});

// delete posts 
router.delete("/", async (req, res) => {
  try {
    const posts = await Post.destroy({
      where: {
        id: req.body.id
      }
    });

    if (!posts) {

      res
        .status(404)
        .json({
          message: "No posts to delete that matches that ID"
        });
      
        return;
    }

    res.json(posts);
  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;