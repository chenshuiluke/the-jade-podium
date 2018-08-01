'use strict';
module.exports = (sequelize, DataTypes) => {
  var auths = sequelize.define('auths', {
    provider_name: DataTypes.STRING,
    provider_user_id: DataTypes.STRING
  }, {});
  auths.associate = function(models) {
    // associations can be defined here
  };
  return auths;
};