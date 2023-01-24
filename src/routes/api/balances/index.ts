import { Router } from 'express';

import { depositStrategy } from '../../../controllers/balances';
import { getProfile } from '../../../middleware/getProfile';

const router = Router();

router.post(
  '/balances/deposit/:userId',
  getProfile,
  depositStrategy,
);

export default router;
