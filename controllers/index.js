const router = require("express").Router();

// homepage 
const homeRoutes = require("./homeRoutes");
// dashboard
const dashboardRoutes = require("./dashboardRoutes");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;