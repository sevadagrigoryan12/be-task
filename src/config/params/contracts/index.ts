import Joi from '@hapi/joi';

export default {
  getUserContract: {
    query: Joi.object({
      id: Joi.number().required(),
    }),
  },
};
