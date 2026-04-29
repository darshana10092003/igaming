'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Events', [
        // Soccer
  { id: 1, name: "Man United vs Chelsea", leagueId: 1, status: "upcoming",createdAt: new Date(), updatedAt: new Date() },
  { id: 2, name: "Barcelona vs Real Madrid", leagueId: 2, status: "upcoming" ,createdAt: new Date(), updatedAt: new Date()},

  // Basketball
  { id: 3, name: "Lakers vs Warriors", leagueId: 3, status: "upcoming",createdAt: new Date(), updatedAt: new Date() },

  // Tennis
  { id: 4, name: "Djokovic vs Nadal", leagueId: 4, status: "upcoming",createdAt: new Date(), updatedAt: new Date() },

  // Volleyball
  { id: 5, name: "Brazil vs Italy", leagueId: 5, status: "upcoming" ,createdAt: new Date(), updatedAt: new Date()}
] 
  )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Events', null, {});
  }
};