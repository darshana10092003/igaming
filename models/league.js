'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class League extends Model {
    static associate(models) {
       League.belongsTo(models.Sport, {foreignKey:'sportId'});
       League.hasMany(models.Event, {foreignKey:'leagueId'});
    }
  }
  League.init({
    name: DataTypes.STRING,
    sportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
      model: "Sports",
      key: "id"
     },
    onDelete: "CASCADE"
  }

  }, {
    sequelize,
    modelName: 'League',
  });
  return League;
};