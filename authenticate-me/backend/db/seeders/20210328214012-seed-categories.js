'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Categories', [
      { category: 'Business' },
      { category: 'Travel' },
      { category: 'Sports' },
      { category: 'Self Improvement' },
      { category: 'Food' },
      { category: 'Music' },
      { category: 'Philosophy' },
      { category: 'Tutorial' },
      { category: 'Advice' },
      { category: 'Gaming' },
      { category: 'Education' },
      { category: 'History' },
      { category: 'Ranked Lists' },
      { category: 'Journal' },
      { category: 'Photography' },
      { category: 'Programming' },
      { category: 'Design' },
      { category: 'Home Improvement' },
      { category: 'Gardening' },
      { category: 'Art' },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Categories', null, {});
  }
};
