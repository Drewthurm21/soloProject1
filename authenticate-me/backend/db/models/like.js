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
    Like.belongsTo(model.User, { foreignKey: 'userId' })
    Like.belongsTo(model.Story, { foreignKey: 'postId' })
  };
  return Like;
};