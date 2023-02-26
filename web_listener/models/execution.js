'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Execution extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.model.hasMany(models.sensor);
    }
  }
  Execution.init({
    id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Execution',
  });
  return Execution;
};