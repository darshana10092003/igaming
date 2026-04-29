'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      Transaction.belongsTo(models.User, {foreignKey:'userId'});
      Transaction.belongsTo(models.Bet, {foreignKey:'betId'});
    }
  }
  Transaction.init({
    userId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT,
    betId: DataTypes.INTEGER,
    type: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};