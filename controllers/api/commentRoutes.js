const router = require("express").Router();
const Comment = require("../../models/comment");

// Comments
// get comments
router.get("/", async (req, res) => {
  try {
    const comment = await Comment.findAll();
    if (!comment) {
      res
        .status(404)
        .json({
        message: "Can't find comment"
      });
    }
    res
      .status(200)
      .json(comment);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
 });

router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create({
      comment: req.body.comment,
      username_id: req.body.username_id,
      post_id: req.body.post_id
    });

    res.json(comment);
  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;