// Post Routes 

const router = require("express").Router();
const auth = require("../../utils/auth");

// Models 
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

      // Send back 404 page 
      res.render("404", {
        layout: "blank"
      });
      
        return;
    }

    req.session.save(() => {
      
      req.session.loggedIn = true;

      res
      .status(200)
      .json(posts);

    });

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
        attributes: ["id", "comment", "date_created"],
        include: {
          model: User,
          attributes: {
            exclude: [
              "password", "createdAt", "updatedAt"
            ]
        }}
      }
      ]
    });

    if (!posts) {

      // Send back 404 page 
      res.render("404", {
        layout: "blank"
      });
      
        return;
    }

    req.session.save(() => {
      
      req.session.loggedIn = true;

      res
      .status(200)
      .json(posts);

    });

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
 });

// create post 
router.post("/", auth, async (req, res) => {
  try {
    const posts = await Post.create({
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.userId
    });

    req.session.save(() => {
      
      req.session.loggedIn = true;

    // to reload the page after creating a new post 
      res.redirect("/dashboard");

    });

  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
});

// Update a Post 
router.put("/:id", auth, async (req, res) => {
  try {
    const posts = await Post.update(
      {
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.userId
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

    req.session.save(() => {
      
      req.session.loggedIn = true;

    // to reload the page after creating a new post 
      res.redirect("/dashboard");

    });

  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
});

// delete posts 
router.delete("/:id", auth, async (req, res) => {
  try {
    const posts = await Post.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!posts) {

      // Send back 404 page 
      res.render("404", {
        layout: "blank"
      });
      
        return;
    }

    req.session.save(() => {
      
      req.session.loggedIn = true;

      res.json(posts);

    });

  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;