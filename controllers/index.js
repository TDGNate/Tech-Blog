const router = require("express").Router();
const apiRoutes = require("./api");

// homepage 
const homeRoutes = require("./homeRoutes");
// dashboard
const dashboardRoutes = require("./dashboardRoutes");

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>hmmm... wrong route!</h1>");
});

module.exports = router;