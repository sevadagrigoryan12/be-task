import { Sequelize, ModelAttributes, ModelOptions, Model } from 'sequelize';

import config from 'config/environment/service';

export const databaseService = new Sequelize({
  dialect: 'sqlite',
  storage: config.database.storage
});

export function defineModel(modelName: string, attributes: ModelAttributes, options?: ModelOptions): typeof Model {
  return databaseService.define(modelName, attributes, options);
}
