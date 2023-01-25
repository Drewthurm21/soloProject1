'use strict';
const { seedUsers } = require('../../utils/fakerSeed.js')

module.exports = {
  up: (queryInterface, Sequelize) => {

    let users = seedUsers(100)

    return queryInterface.bulkInsert('Users', users, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
