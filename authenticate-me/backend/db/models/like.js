'use strict';
module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    userId: {
      type: DataTypes.INTEGER,
    },
    postId: {
      type: DataTypes.INTEGER,
    },
    liked: {
      type: DataTypes.BOOLEAN,
    },
  }, {});
  Like.associate = function (models) {
    Like.belongsTo(models.User, { foreignKey: 'userId' })
    Like.belongsTo(models.Story, { foreignKey: 'postId' })
  };
  return Like;
};