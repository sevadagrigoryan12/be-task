import { Router } from 'express';
import { validate } from 'express-validation';

import serviceParamValidation from '../../../config/params/contracts';
import { getAllContracts, getUserContract } from '../../../controllers/contracts';
import { getProfile } from '../../../middleware/getProfile';

const router = Router();

router.get(
  '/contracts/:id',
  validate(serviceParamValidation.getUserContract, {}, { abortEarly: false }),
  getProfile,
  getUserContract,
);

router.get(
  '/contracts',
  getProfile,
  getAllContracts,
);

export default router;
