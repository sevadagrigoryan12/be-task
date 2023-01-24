'use strict';
import Sequelize from 'sequelize';
import { defineModel } from '../utils/database';

export default () => {
  const Profile: any = defineModel('Profile', {
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
  });

  Profile.associate = (models: any) => {
    const { Contract } = models;
    Profile.hasMany(Contract, {as :'Contractor',foreignKey:'ContractorId'})
    Profile.hasMany(Contract, {as : 'Client', foreignKey:'ClientId'})

};

  return Profile;
};
