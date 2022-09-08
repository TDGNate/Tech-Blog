const router = require("express").Router();

const commentRoutes = require("./commentRoutes");

router.use("/comment", commentRoutes);

module.exports = router;