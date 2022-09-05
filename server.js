const path = require("path");
const express = require("express");
const routes = require("./controllers");
const session = require("express-session");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helper")
const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

// Setting 
const app = express();
const PORT = process.env.PORT || 3001;

// Creating App Session
const sess = {
  secret: "secret",

  // Configure Cookie 
  cookie: {
    maxAge: 600000, // 10 Mins
    httpOnly: true,
    secure: false,
    sameSite: "strict",
  },
  resave: false,
  saveUninitialized: true,
  
  //  Session Store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

// Using Sequelize Session 
app.use(session(sess))

const hbs = exphbs.create({ helpers })

// Handlebars 
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Passing Data in Body 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Routing 
app.use(routes);

// Listening 
sequelize.sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Now listening on http://localhost:${PORT}`);
    });
});