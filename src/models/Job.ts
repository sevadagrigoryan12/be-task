'use strict';
import Sequelize from 'sequelize';
import { defineModel } from '../utils/database';

export default () => {
  const Job: any = defineModel(
    'Job',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(12, 2),
      },
      paid: {
        defaultValue: false,
        type: Sequelize.BOOLEAN,
      },
      paymentDate: {
        type: Sequelize.DATE,
      },
      contractId: {
        references: {
          model: 'Contract',
          key: 'id',
        },
        type: Sequelize.INTEGER,
      },
    },
    { freezeTableName: true },
  );

  Job.associate = (models: any) => {
    const { Contract } = models;
    Job.belongsTo(Contract);
  };

  return Job;
};
