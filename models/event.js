'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      Event.belongsTo(models.League, {foreignKey:'leagueId'});
      Event.hasMany(models.Market, {foreignKey:'eventId'});
    }
  }
  Event.init({
    name: DataTypes.STRING,
    leagueId: DataTypes.INTEGER,
    sportsId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    startTime: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};