import fs from 'fs';
import path from 'path';
import { databaseService } from '../utils/database';
import sequelize from 'sequelize';

const basename = path.basename(__filename);
const db: any = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return !file.startsWith('.') && file !== basename && file !== 'index.js' && ['.js', '.ts'].includes(file.slice(-3));
  })
  .forEach((file) => {
    const fileName = path.join(__dirname, file);
    const model = require(fileName).default(databaseService, sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = databaseService;
export default db;
