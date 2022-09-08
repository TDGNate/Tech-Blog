const router = require("express").Router();
const Post = require("../../models/post");

// Posts
// get posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();
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

//  create post 
router.post("/", async (req, res) => {
  try {
    const posts = await Post.create({
      title: req.body.title,
      content: req.body.content,
      username_id: req.body.username_id
    });

    res.json(posts);
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