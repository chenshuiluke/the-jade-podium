'use strict';
module.exports = (sequelize, DataTypes) => {
  var post = sequelize.define('post', {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    upvotes: DataTypes.INTEGER,
    downvotes: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  post.associate = function(models) {
    // associations can be defined here
    post.belongsTo(models.post_type);
  };
  return post;
};