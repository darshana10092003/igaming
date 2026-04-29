'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Leagues', [
      { id: 1, name: "Premier League", sportId: 1,createdAt: new Date(), updatedAt: new Date() },
  { id: 2, name: "La Liga", sportId: 1,createdAt: new Date(), updatedAt: new Date() },
  { id: 3, name: "NBA",sportId: 2,createdAt: new Date(), updatedAt: new Date() },
  { id: 4, name: "ATP Tour", sportId: 3 ,createdAt: new Date(), updatedAt: new Date()},
  { id: 5, name: "FIVB League",  sportId: 4,createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },
  

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Leagues', null, {});
  }
};



