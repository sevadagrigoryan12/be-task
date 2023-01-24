import Joi from '@hapi/joi';

export default {
  getUserContract: {
    params: Joi.object({
      id: Joi.number().required(),
    }),
  },
};
