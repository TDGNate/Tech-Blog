const router = require("express").Router();

const commentRoutes = require("./commentRoutes");
const postRoutes = require("./postRoutes");

router.use("/comment", commentRoutes);
router.use("/post", postRoutes);

module.exports = router;