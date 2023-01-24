'use strict';
import Sequelize from 'sequelize';
import { defineModel } from '../utils/database';

export default () => {
  const Contract: any = defineModel(
    'Contract',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      terms: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      status: {
        type: Sequelize.ENUM('new', 'in_progress', 'terminated'),
      },
      clientId: {
        references: {
          model: 'Profile',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
      contractorId: {
        references: {
          model: 'Profile',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
    },
    { freezeTableName: true },
  );

  Contract.associate = (models: any) => {
    const { Profile, Job } = models;
    Contract.belongsTo(Profile, { as: 'contractor' });
    Contract.belongsTo(Profile, { as: 'client' });
    Contract.hasMany(Job);
  };

  return Contract;
};
