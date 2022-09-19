// Core API Routes 

const router = require("express").Router();

const commentRoutes = require("./commentRoutes");
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

router.use("/comment", commentRoutes);
router.use("/post", postRoutes);
router.use("/user", userRoutes);

module.exports = router;