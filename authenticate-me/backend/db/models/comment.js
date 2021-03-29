'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    articleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Comment.associate = function (models) {
    Comment.belongsTo(model.User, { foreignKey: 'userId' })
    Comment.belongsTo(model.Story, { foreignKey: 'postId' })
  };
  return Comment;
};