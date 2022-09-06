const router = require("express").Router();

// homepage 
const homeRoutes = require("./homeRoutes");

router.use("home", homeRoutes);

module.exports = router;