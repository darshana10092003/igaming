'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      leagueId: {
        type: Sequelize.INTEGER,
        references: {
        model: "Leagues",
        key: "id"
      },
      onDelete: "CASCADE"
     },

      sportsId: {
       type: Sequelize.INTEGER,
        references: {
        model: "Sports",
        key: "id"
      } 
     },
      status: {
        type: Sequelize.STRING
      },
      startTime: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};