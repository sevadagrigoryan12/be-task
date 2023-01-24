'use strict';

module.exports = {
  up: (queryInterface, Sequelizeasd) => {
    return queryInterface.bulkInsert('Contract', [
      {
        id: 1,
        terms: 'bla bla bla',
        status: 'terminated',
        ClientId: 1,
        ContractorId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        terms: 'bla bla bla',
        status: 'in_progress',
        ClientId: 1,
        ContractorId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        terms: 'bla bla bla',
        status: 'in_progress',
        ClientId: 2,
        ContractorId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        terms: 'bla bla bla',
        status: 'in_progress',
        ClientId: 2,
        ContractorId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        terms: 'bla bla bla',
        status: 'new',
        ClientId: 3,
        ContractorId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        terms: 'bla bla bla',
        status: 'in_progress',
        ClientId: 3,
        ContractorId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        terms: 'bla bla bla',
        status: 'in_progress',
        ClientId: 4,
        ContractorId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        terms: 'bla bla bla',
        status: 'in_progress',
        ClientId: 4,
        ContractorId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        terms: 'bla bla bla',
        status: 'in_progress',
        ClientId: 4,
        ContractorId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    // TODO: Add reverting commands here.
  }
};
