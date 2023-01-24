'use strict';
import Sequelize from 'sequelize';
import { defineModel } from '../utils/database';

export default () => {
  const Profile: any = defineModel(
    'Profile',
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      profession: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.ENUM('client', 'contractor'),
      },
      balance: {
        type: Sequelize.DECIMAL(12, 2),
      },
    },
    { freezeTableName: true },
  );

  Profile.associate = (models: any) => {
    const { Contract } = models;
    Profile.hasMany(Contract, { as: 'contractor', foreignKey: 'contractorId' });
    Profile.hasMany(Contract, { as: 'client', foreignKey: 'clientId' });
  };

  return Profile;
};
