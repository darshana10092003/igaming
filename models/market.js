'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Market extends Model {
    static associate(models) {
      Market.belongsTo(models.Event, {foreignKey:'eventId'});
      Market.hasMany(models.Selection, {foreignKey:'marketId'});
    }
  }
  Market.init({
    name: DataTypes.STRING,
    eventId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Market',
  });
  return Market;
};