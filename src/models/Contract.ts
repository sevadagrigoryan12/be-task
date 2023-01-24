'use strict';
import Sequelize from 'sequelize';
import { defineModel } from '../utils/database';

export default () => {
  const Contract: any = defineModel('Contract', {
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
  });

  Contract.associate = (models: any) => {
    const { Profile, Job } = models;
    Contract.belongsTo(Profile, {as: 'Contractor'})
    Contract.belongsTo(Profile, {as: 'Client'})
    Contract.hasMany(Job);
  };

  return Contract;
};
