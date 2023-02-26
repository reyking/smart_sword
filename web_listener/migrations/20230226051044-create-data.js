'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      position_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Positions',
          key: 'id'
        }
      },
      x: {
        type: Sequelize.FLOAT
      },
      y: {
        type: Sequelize.FLOAT
      },
      z: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Data');
  }
};