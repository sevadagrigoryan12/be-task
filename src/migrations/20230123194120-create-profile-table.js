'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Profile', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      profession: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.ENUM('client', 'contractor'),
      },
      balance: {
        type:Sequelize.DECIMAL(12,2)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Profile');
  },
};
