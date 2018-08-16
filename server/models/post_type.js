'use strict';
module.exports = (sequelize, DataTypes) => {
  var post_type = sequelize.define('post_type', {
    type: DataTypes.STRING
  },{
    timestamps: true,
    underscored: true
  });
  post_type.associate = function(models) {
    // associations can be defined here
  };
  return post_type;
};