'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Follows', [
      { userId: 1, authorId: 43 },
      { userId: 104, authorId: 26 },
      { userId: 1, authorId: 16 },
      { userId: 104, authorId: 15 },
      { userId: 1, authorId: 72 },
      { userId: 104, authorId: 95 },
      { userId: 1, authorId: 34 },
      { userId: 104, authorId: 80 },
      { userId: 1, authorId: 30 },
      { userId: 104, authorId: 96 },
      { userId: 1, authorId: 23 },
      { userId: 104, authorId: 30 },
      { userId: 1, authorId: 54 },
      { userId: 104, authorId: 9 },
      { userId: 1, authorId: 7 },
      { userId: 104, authorId: 38 },
      { userId: 1, authorId: 89 },
      { userId: 104, authorId: 50 },
      { userId: 1, authorId: 27 },
      { userId: 104, authorId: 45 }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Follows', null, {});
  }
};
