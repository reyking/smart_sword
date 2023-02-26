'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Position extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.model.belongsTo(models.Sensor);
      this.model.hasMany(models.data);
    }
  }
  Position.init({
    id: DataTypes.UUID,
    sensor_id: DataTypes.UUID,
    execution_id: DataTypes.UUID,
    name: DataTypes.STRING,
    x: DataTypes.FLOAT,
    y: DataTypes.FLOAT,
    z: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Position',
  });
  return Position;
};