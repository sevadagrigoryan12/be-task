import { Router } from 'express';
import { healthController } from 'controllers/health';
import contracts from 'routes/api/contracts';
import jobs from 'routes/api/jobs';

const router = Router();

router.use(contracts);
router.use(jobs);

/**
 * @api {get} /health Request Health information
 * @apiVersion 0.0.0
 * @apiName GetHealth
 * @apiDescription Provides health of the service.
 * @apiGroup Health
 *
 * @apiSuccess {Object} health Health of the Service.
 * @apiSuccess {String} health.status Status.
 * @apiSuccess {String} health.date Date.
 *
 * @apiError {Object} error Error description
 */
router.get('/health', healthController);

export default router;
