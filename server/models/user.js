'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    user: DataTypes.STRING
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.auth);
  };
  return user;
};