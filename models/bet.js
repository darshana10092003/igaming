'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bet extends Model {
    static associate(models) {
      Bet.belongsTo(models.User, {foreignKey:'userId'});
      Bet.belongsTo(models.Selection, {foreignKey:'selectionId'});
    }
  }
  Bet.init({
    userId: DataTypes.INTEGER,
    selectionId: DataTypes.INTEGER,
    eventId:DataTypes.INTEGER,
    marketId:DataTypes.INTEGER,
    stake: DataTypes.FLOAT,
    odds: DataTypes.FLOAT,
    potentialWin: DataTypes.FLOAT,
    status: DataTypes.STRING,
    isSettled: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Bet',
  });
  return Bet;
};