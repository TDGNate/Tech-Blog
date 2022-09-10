const router = require("express").Router();
const apiRoutes = require("./api");

// Pages 

// homepage 
const homeRoutes = require("./homeRoutes");
// dashboard
const dashboardRoutes = require("./dashboardRoutes");
// login 
const loginRoutes = require("./loginRoutes");
// sign up 
const signUpRoutes = require("./signUpRoutes");

router.use("/", homeRoutes);
router.use("/login", loginRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/sign-up", signUpRoutes);
router.use("/api", apiRoutes);

router.use((req, res) => {
  res.send("<h1>hmmm... wrong route!</h1>");
});

module.exports = router;