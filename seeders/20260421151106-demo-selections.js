'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Selections',[
       // Event 1 - Match Result
  { id: 1, name: "Home Win", marketId: 1, odds: 2.4 ,createdAt: new Date(), updatedAt: new Date()},
  { id: 2, name: "Draw", marketId: 1, odds: 3.1 ,createdAt: new Date(), updatedAt: new Date()},
  { id: 3, name: "Away Win", marketId: 1, odds: 2.8,createdAt: new Date(), updatedAt: new Date() },

  // Event 1 - BTTS
  { id: 4, name: "Yes", marketId: 2, odds: 1.9,createdAt: new Date(), updatedAt: new Date() },
  { id: 5, name: "No", marketId: 2, odds: 1.8 ,createdAt: new Date(), updatedAt: new Date()},

  // Event 2 - Match Result
  { id: 6, name: "Home Win", marketId: 3, odds: 2.2 ,createdAt: new Date(), updatedAt: new Date()},
  { id: 7, name: "Draw", marketId: 3, odds: 3.0 ,createdAt: new Date(), updatedAt: new Date()},
  { id: 8, name: "Away Win", marketId: 3, odds: 2.6 ,createdAt: new Date(), updatedAt: new Date()},

  // Event 2 - Double Chance
  { id: 9, name: "Home/Draw", marketId: 4, odds: 1.5,createdAt: new Date(), updatedAt: new Date() },
  { id: 10, name: "Away/Draw", marketId: 4, odds: 1.6,createdAt: new Date(), updatedAt: new Date() },

  // Basketball
  { id: 11, name: "Lakers", marketId: 5, odds: 1.8,createdAt: new Date(), updatedAt: new Date() },
  { id: 12, name: "Warriors", marketId: 5, odds: 2.0,createdAt: new Date(), updatedAt: new Date() },

  { id: 13, name: "Lakers Q1", marketId: 6, odds: 1.9 ,createdAt: new Date(), updatedAt: new Date()},
  { id: 14, name: "Warriors Q1", marketId: 6, odds: 1.9 ,createdAt: new Date(), updatedAt: new Date()},

  // Tennis
  { id: 15, name: "Djokovic", marketId: 7, odds: 1.7,createdAt: new Date(), updatedAt: new Date() },
  { id: 16, name: "Nadal", marketId: 7, odds: 2.2,createdAt: new Date(), updatedAt: new Date() },

  { id: 17, name: "Djokovic Set1", marketId: 8, odds: 1.8 ,createdAt: new Date(), updatedAt: new Date()},
  { id: 18, name: "Nadal Set1", marketId: 8, odds: 2.0 ,createdAt: new Date(), updatedAt: new Date()},

  // Volleyball
  { id: 19, name: "Brazil", marketId: 9, odds: 1.6,createdAt: new Date(), updatedAt: new Date() },
  { id: 20, name: "Italy", marketId: 9, odds: 2.3 ,createdAt: new Date(), updatedAt: new Date()},

  { id: 21, name: "Brazil Set1", marketId: 10, odds: 1.8,createdAt: new Date(), updatedAt: new Date() },
  { id: 22, name: "Italy Set1", marketId: 10, odds: 2.0 ,createdAt: new Date(), updatedAt: new Date()}
     ]); 

  },

  async down (queryInterface, Sequelize) {
            await queryInterface.bulkDelete('Selections', null, {}); 
  }
};
