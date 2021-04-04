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
      type: DataTypes.STRING(90),
      allowNull: false,
      validate: {
        len: [4, 90],
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
    }
  }, {});
  Story.associate = function (models) {
    Story.hasMany(models.Like, { foreignKey: 'postId' })
    Story.hasMany(models.Comment, { foreignKey: 'articleId' })
    Story.belongsTo(models.User, { foreignKey: 'authorId' })
    Story.belongsTo(models.Category, { foreignKey: 'categoryId' })
  };
  return Story;
};