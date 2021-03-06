'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    email: DataTypes.STRING,
    
  }, {
    timestamps: true,
    underscored: true
  });
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.auth);
    user.hasMany(models.post, {
      foreignKey: 'author_id'
    });
  };
  return user;
};