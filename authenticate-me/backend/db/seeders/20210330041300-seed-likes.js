'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Likes', [
      { userId: 7, postId: 47, liked: true },
      { userId: 88, postId: 84, liked: true },
      { userId: 36, postId: 89, liked: true },
      { userId: 21, postId: 76, liked: true },
      { userId: 50, postId: 55, liked: true },
      { userId: 64, postId: 142, liked: true },
      { userId: 16, postId: 3, liked: true },
      { userId: 49, postId: 29, liked: true },
      { userId: 69, postId: 109, liked: true },
      { userId: 87, postId: 87, liked: true },
      { userId: 38, postId: 121, liked: true },
      { userId: 83, postId: 40, liked: true },
      { userId: 25, postId: 73, liked: true },
      { userId: 55, postId: 78, liked: true },
      { userId: 42, postId: 24, liked: true },
      { userId: 42, postId: 43, liked: true },
      { userId: 84, postId: 126, liked: true },
      { userId: 6, postId: 72, liked: true },
      { userId: 50, postId: 43, liked: true },
      { userId: 28, postId: 91, liked: true },
      { userId: 19, postId: 141, liked: true },
      { userId: 16, postId: 127, liked: true },
      { userId: 20, postId: 139, liked: true },
      { userId: 16, postId: 86, liked: true },
      { userId: 73, postId: 74, liked: true },
      { userId: 23, postId: 124, liked: true },
      { userId: 65, postId: 62, liked: true },
      { userId: 91, postId: 12, liked: true },
      { userId: 7, postId: 94, liked: true },
      { userId: 25, postId: 22, liked: true },
      { userId: 71, postId: 147, liked: true },
      { userId: 96, postId: 25, liked: true },
      { userId: 36, postId: 115, liked: true },
      { userId: 40, postId: 89, liked: true },
      { userId: 52, postId: 120, liked: true },
      { userId: 12, postId: 26, liked: true },
      { userId: 64, postId: 81, liked: true },
      { userId: 17, postId: 100, liked: true },
      { userId: 43, postId: 23, liked: true },
      { userId: 6, postId: 35, liked: true },
      { userId: 26, postId: 119, liked: true },
      { userId: 60, postId: 119, liked: true },
      { userId: 80, postId: 38, liked: true },
      { userId: 44, postId: 54, liked: true },
      { userId: 7, postId: 44, liked: true },
      { userId: 59, postId: 138, liked: true },
      { userId: 75, postId: 90, liked: true },
      { userId: 52, postId: 16, liked: true },
      { userId: 45, postId: 88, liked: true },
      { userId: 8, postId: 51, liked: true },
      { userId: 89, postId: 147, liked: true },
      { userId: 90, postId: 96, liked: true },
      { userId: 89, postId: 26, liked: true },
      { userId: 39, postId: 29, liked: true },
      { userId: 72, postId: 66, liked: true },
      { userId: 57, postId: 13, liked: true },
      { userId: 26, postId: 120, liked: true },
      { userId: 42, postId: 82, liked: true },
      { userId: 14, postId: 64, liked: true },
      { userId: 32, postId: 101, liked: true },
      { userId: 48, postId: 6, liked: true },
      { userId: 10, postId: 95, liked: true },
      { userId: 4, postId: 11, liked: true },
      { userId: 25, postId: 117, liked: true },
      { userId: 56, postId: 97, liked: true },
      { userId: 85, postId: 31, liked: true },
      { userId: 67, postId: 29, liked: true },
      { userId: 29, postId: 139, liked: true },
      { userId: 30, postId: 99, liked: true },
      { userId: 50, postId: 4, liked: true },
      { userId: 80, postId: 32, liked: true },
      { userId: 7, postId: 17, liked: true },
      { userId: 43, postId: 141, liked: true },
      { userId: 87, postId: 106, liked: true },
      { userId: 66, postId: 22, liked: true },
      { userId: 6, postId: 3, liked: true },
      { userId: 27, postId: 30, liked: true },
      { userId: 12, postId: 40, liked: true },
      { userId: 70, postId: 45, liked: true },
      { userId: 76, postId: 46, liked: true },
      { userId: 86, postId: 77, liked: true },
      { userId: 25, postId: 37, liked: true },
      { userId: 63, postId: 44, liked: true },
      { userId: 23, postId: 141, liked: true },
      { userId: 86, postId: 71, liked: true },
      { userId: 43, postId: 12, liked: true },
      { userId: 71, postId: 118, liked: true },
      { userId: 26, postId: 27, liked: true },
      { userId: 88, postId: 52, liked: true },
      { userId: 73, postId: 34, liked: true },
      { userId: 27, postId: 96, liked: true },
      { userId: 23, postId: 60, liked: true },
      { userId: 27, postId: 9, liked: true },
      { userId: 41, postId: 84, liked: true },
      { userId: 88, postId: 34, liked: true },
      { userId: 33, postId: 123, liked: true },
      { userId: 42, postId: 54, liked: true },
      { userId: 66, postId: 1, liked: true },
      { userId: 29, postId: 106, liked: true },
      { userId: 64, postId: 109, liked: true }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
