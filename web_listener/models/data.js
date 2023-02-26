'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.model.belongsTo(models.Position);
    }
  }
  Data.init({
    id: DataTypes.UUID,
    position_id: DataTypes.UUID,
    x: DataTypes.FLOAT,
    y: DataTypes.FLOAT,
    z: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Data',
  });
  return Data;
};