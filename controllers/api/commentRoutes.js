// Comment Routes 

const router = require("express").Router();
const Comment = require("../../models/comment");

// Comments
// get comments
router.get("/", async (req, res) => {
  try {

    const comment = await Comment.findAll({});

    if (!comment) {
      // Send back 404 page 
      res.render("404", {
        layout: "blank"
      });
      
        return;
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
      user_id: req.body.user_id,
      post_id: req.body.post_id
    });

    res.json(comment);
  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
});

// delete comment 
router.delete("/", async (req, res) => {
  try {
    const comment = await Comment.destroy({
      where: {
        id: req.body.id
      }
    });

    if (!comment) {

      res
        .status(404)
        .json({
          message: "No comment to delete that matches that ID"
        });
      
        return;
    }

    res.json(comment);
  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;