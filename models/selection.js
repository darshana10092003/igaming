'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Selection extends Model {
    static associate(models) {
      Selection.belongsTo(models.Market, {foreignKey:'marketId'});
      Selection.hasMany(models.Bet, {foreignKey:'selectionId'});
    }
  }
  Selection.init({
    name: DataTypes.STRING,
    marketId: DataTypes.INTEGER,
    eventId: DataTypes.INTEGER,
    odds: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Selection',
  });
  return Selection;
};