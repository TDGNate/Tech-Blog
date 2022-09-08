
const sequelize = require("../config/connection");

// models 
const Comment = require("../models/comment");
const Post = require("../models/post");
const User = require("../models/user");

// seeds 
const userSeeds = require("./users.json");
const postSeeds = require("./posts.json");
const commentSeeds = require("./comments.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Event.bulkCreate(eventSeed, {
    individualHooks: true,
    returning: true,
  });

  await Admin.bulkCreate(adminSeed, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);

};