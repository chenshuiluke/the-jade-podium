'use strict';
module.exports = (sequelize, DataTypes) => {
  var auth = sequelize.define('auth', {
    provider_name: DataTypes.STRING,
    provider_user_id: DataTypes.STRING
  }, {
    timestamps: true,
    underscored: true
  });
  auth.associate = function(models) {
    // associations can be defined here
  };
  return auth;
};