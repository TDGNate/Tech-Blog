const Comment = require("./comment");
const Post = require("./post");
const User = require("./user");

module.exports = { User, Post, Comment };

User.hasMany(Post, {
  foreignKey: "username_id",
  onDelete: "CASCADE"
});

User.hasMany(Comment, {
  foreignKey: "username_id",
  onDelete: "CASCADE"
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE"
});

Post.belongsTo(User, {
  foreignKey: "username_id",
  onDelete: "CASCADE"
});

Comment.belongsTo(User, {
  foreignKey: "username_id"
});

Comment.belongsTo(Post, {
  foreignKey: "post_id"
});

module.exports = {
  Comment,
  Post,
  User
};