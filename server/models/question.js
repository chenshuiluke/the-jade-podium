'use strict';
module.exports = (sequelize, DataTypes) => {
  var question = sequelize.define('question', {}, {
    underscored: true,
  });
  question.associate = function(models) {
    // associations can be defined here

    question.belongsTo(models.topic);
  };
  return question;
};