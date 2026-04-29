'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Markets',[
       // Event 1 (Soccer)
  { id: 1, name: "Match Result", eventId: 1,createdAt: new Date(), updatedAt: new Date() },
  { id: 2, name: "Both Teams To Score", eventId: 1,createdAt: new Date(), updatedAt: new Date() },

  // Event 2 (Soccer)
  { id: 3, name: "Match Result", eventId: 2,createdAt: new Date(), updatedAt: new Date() },
  { id: 4, name: "Double Chance", eventId: 2,createdAt: new Date(), updatedAt: new Date() },

  // Event 3 (Basketball)
  { id: 5, name: "Match Winner", eventId: 3 ,createdAt: new Date(), updatedAt: new Date()},
  { id: 6, name: "First Quarter Winner", eventId: 3 ,createdAt: new Date(), updatedAt: new Date()},

  // Event 4 (Tennis)
  { id: 7, name: "Match Winner", eventId: 4 ,createdAt: new Date(), updatedAt: new Date()},
  { id: 8, name: "First Set Winner", eventId: 4 ,createdAt: new Date(), updatedAt: new Date()},

  // Event 5 (Volleyball)
  { id: 9, name: "Match Winner", eventId: 5 ,createdAt: new Date(), updatedAt: new Date()},
  { id: 10, name: "First Set Winner", eventId: 5 ,createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('Markets', null, {}); 
  }
};
