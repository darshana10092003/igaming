'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
        allowNull: false
      },

      eventId: {   
        type: Sequelize.INTEGER,
        allowNull: false
      },

      marketId: {  
        type: Sequelize.INTEGER,
        allowNull: false
      },

      selectionId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Selections",
          key: "id"
        },
        allowNull: false
      },

      stake: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      odds: {
        type: Sequelize.FLOAT,
        allowNull: false
      },

      potentialWin: {
        type: Sequelize.FLOAT
      },

      status: {   
        type: Sequelize.ENUM("PENDING", "WIN", "LOSS", "REFUND"),
        defaultValue: "PENDING"
      },
      
      isSettled: {
       type: Sequelize.BOOLEAN,
       allowNull: false,
       defaultValue: false
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
    await queryInterface.dropTable('Bets');
  }
};