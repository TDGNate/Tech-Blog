
const sequelize = require("../config/connection");

// models 
const { Comment, Post, User} = require("../models");

// seeds 
const userSeeds = require("./users.json");
const postSeeds = require("./posts.json");
const commentSeeds = require("./comments.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userSeeds, {
    individualHooks: true,
    returning: true,
  });

  await Post.bulkCreate(postSeeds, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentSeeds, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);

};

seedDatabase();