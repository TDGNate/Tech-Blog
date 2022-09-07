const router = require("express").Router();

// homepage 
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);

module.exports = router;