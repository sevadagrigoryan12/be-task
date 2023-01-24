import { Router } from 'express';

import { getAllUnpaidJobs, payForJob } from '../../../controllers/jobs';
import { getProfile } from '../../../middleware/getProfile';

const router = Router();

router.get(
  '/jobs/unpaid',
  getProfile,
  getAllUnpaidJobs,
);

router.post(
  '/jobs/:job_id/pay',
  getProfile,
  payForJob,
);

export default router;
