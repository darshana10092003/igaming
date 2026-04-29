'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sports', [
      { id: 1, name: "Soccer", createdAt: new Date(),updatedAt: new Date() },
  { id: 2, name: "Basketball", createdAt: new Date(),updatedAt: new Date() },
  { id: 3, name: "Tennis", createdAt: new Date(),updatedAt: new Date() },
  { id: 4, name: "Volleyball", createdAt: new Date(),updatedAt: new Date() }
    ], );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sports', null, {});
  }
};