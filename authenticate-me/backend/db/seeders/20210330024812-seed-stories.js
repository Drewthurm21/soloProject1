'use strict';
const { seedStories } = require('../../utils/fakerSeed.js')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */

    let stories = seedStories(500)
    return queryInterface.bulkInsert('Stories', stories, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
