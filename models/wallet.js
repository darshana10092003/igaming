'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    static associate(models) {
      Wallet.belongsTo(models.User, {foreignKey:'userId'});
    }
  }
  Wallet.init({
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
    } ,
    balance: {
        type: DataTypes.FLOAT,
        defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Wallet',
  });
  return Wallet;
};