require('dotenv').config();

module.exports = {
  local: {
    dialect: 'sqlite',
    storage: 'database.sqlite'
  },
  development: {
    dialect: 'sqlite',
    storage: './database.sqlite'
  },
  test: {
    dialect: 'sqlite',
    storage: 'database.sqlite'
  },
  production: {
    dialect: 'sqlite',
    storage: 'database.sqlite'
  },
};
