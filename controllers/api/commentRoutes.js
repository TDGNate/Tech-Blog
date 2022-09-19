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

    req.session.save(() => {
      
      req.session.loggedIn = true;

      res
      .status(200)
      .json(comment);

    });

  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
});
 
// Get One Comment 
router.get("/:id", async (req, res) => {
  try {

    const comment = await Comment.findOne({
      where: {
        id: req.params.id
      }
    });

    if (!comment) {
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
      .json(comment);

    });
    
  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
 });

// Create a Comment 
router.post("/", async (req, res) => {
  try {
    const comment = await Comment.create({
      comment: req.body.comment,
      user_id: req.body.user_id,
      post_id: req.body.post_id
    });

    req.session.save(() => {
      
      req.session.loggedIn = true;

      res.json(comment);

    });


  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
});

// Update a Comment 
router.put("/:id", async (req, res) => {
  try {
    const comment = await Comment.update(
      {
      comment: req.body.comment,
      user_id: req.body.user_id,
      post_id: req.body.post_id
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

    req.session.save(() => {
      
      req.session.loggedIn = true;

      res.json(comment);

    });


  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
});

// delete a Comment
router.delete("/:id", async (req, res) => {
  try {
    const comment = await Comment.destroy({
      where: {
        id: req.params.id
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

    req.session.save(() => {
      
      req.session.loggedIn = true;

      res.json(comment);

    });

  } catch (err) {

    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;