'use strict';

module.exports = {
  up: (queryInterface, Sequelizeasd) => {
    return queryInterface.bulkInsert('Contract', [
      {
        id: 1,
        terms: 'bla bla bla',
        status: 'terminated',
        clientId: 1,
        contractorId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        terms: 'bla bla bla',
        status: 'in_progress',
        clientId: 1,
        contractorId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        terms: 'bla bla bla',
        status: 'in_progress',
        clientId: 2,
        contractorId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        terms: 'bla bla bla',
        status: 'in_progress',
        clientId: 2,
        contractorId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 5,
        terms: 'bla bla bla',
        status: 'new',
        clientId: 3,
        contractorId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        terms: 'bla bla bla',
        status: 'in_progress',
        clientId: 3,
        contractorId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        terms: 'bla bla bla',
        status: 'in_progress',
        clientId: 4,
        contractorId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        terms: 'bla bla bla',
        status: 'in_progress',
        clientId: 4,
        contractorId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        terms: 'bla bla bla',
        status: 'in_progress',
        clientId: 4,
        contractorId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    // TODO: Add reverting commands here.
  }
};
