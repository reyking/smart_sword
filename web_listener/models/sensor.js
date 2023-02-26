'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sensor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.model.belongsTo(models.Executions);
      this.model.hasMany(models.Position);
    }
  }
  Sensor.init({
    id: DataTypes.UUID,
    name: DataTypes.STRING,
    charge: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Sensor',
  });
  return Sensor;
};