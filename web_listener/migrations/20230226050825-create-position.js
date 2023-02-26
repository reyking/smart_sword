'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Positions', {
      id: {
        primaryKey: true,
        type: Sequelize.UUID
      },
      sensor_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Sensors',
          key: 'id'
        }
      },
      execution_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Executions',
          key: 'id'
        }
      },
      name: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Positions');
  }
};