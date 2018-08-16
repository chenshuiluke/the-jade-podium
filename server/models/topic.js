'use strict';
module.exports = (sequelize, DataTypes) => {
  var topic = sequelize.define('topic', {
    name: DataTypes.STRING
  }, {
    underscored: true,
  });
  topic.associate = function(models) {
    // associations can be defined here
  };
  return topic;
};