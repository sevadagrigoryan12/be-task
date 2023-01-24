'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Job', [
      {
        description: 'work',
        price: 200,
        ContractId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 201,
        ContractId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 202,
        ContractId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 200,
        ContractId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 200,
        ContractId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 2020,
        paid: true,
        paymentDate: '2020-08-15T19:11:26.737Z',
        ContractId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 200,
        paid: true,
        paymentDate: '2020-08-15T19:11:26.737Z',
        ContractId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 200,
        paid: true,
        paymentDate: '2020-08-16T19:11:26.737Z',
        ContractId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 200,
        paid: true,
        paymentDate: '2020-08-17T19:11:26.737Z',
        ContractId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 200,
        paid: true,
        paymentDate: '2020-08-17T19:11:26.737Z',
        ContractId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 21,
        paid: true,
        paymentDate: '2020-08-10T19:11:26.737Z',
        ContractId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 21,
        paid: true,
        paymentDate: '2020-08-15T19:11:26.737Z',
        ContractId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 121,
        paid: true,
        paymentDate: '2020-08-15T19:11:26.737Z',
        ContractId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        description: 'work',
        price: 121,
        paid: true,
        paymentDate: '2020-08-14T23:11:26.737Z',
        ContractId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    // TODO: Add reverting commands here.
  }
};
