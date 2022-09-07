const Comment = require("./comment");
const Post = require("./post");
const User = require("./user");

module.exports = { User, Post, Comment };

User.hasMany(Post, {
  foreignKey: "username",
  onDelete: "CASCADE"
});

User.hasMany(Comment, {
  foreignKey: "username",
  onDelete: "CASCADE"
});

Post.hasMany(Comment, {
  foreignKey: "username",
  onDelete: "CASCADE"
});

Post.belongsTo(User, {
  foreignKey: "username",
  onDelete: "CASCADE"
});