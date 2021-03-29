'use strict';
module.exports = (sequelize, DataTypes) => {
  const Story = sequelize.define('Story', {
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 90],
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {});
  Story.associate = function (models) {
    Story.hasMany(model.Like, { foreignKey: 'postId' })
    Story.hasMany(model.Comment, { foreignKey: 'postId' })
    Story.belongsTo(model.User, { foreignKey: 'authorId' })
    Story.belongsTo(model.Category, { foreignKey: 'categoryId' })
  };
  return Story;
};