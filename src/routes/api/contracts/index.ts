import { Router } from 'express';
import { validate } from 'express-validation';

import serviceParamValidation from '../../../config/params/contracts';
import { getContractById, getUserContracts } from '../../../controllers/contracts';
import { getProfile } from '../../../middleware/getProfile';

const router = Router();

router.get(
  '/contracts/:id',
  validate(serviceParamValidation.getUserContract, {}, { abortEarly: false }),
  getProfile,
  getContractById,
);

router.get(
  '/contracts',
  getProfile,
  getUserContracts,
);

export default router;
