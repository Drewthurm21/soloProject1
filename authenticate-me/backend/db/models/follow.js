'use strict';
module.exports = (sequelize, DataTypes) => {
  const Follow = sequelize.define('Follow', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    authorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Follow.associate = function (models) {
    Follow.belongsTo(model.User, { foreignKey: 'userId' })
    Follow.belongsTo(model.User, { foreignKey: 'authorId' })
  };
  return Follow;
};