import { Request, Response } from 'express';

import { createErrorResponse, createSuccessResponse, createFailResponse } from 'utils/response';
import models from 'models';
import { databaseService } from '../../utils/database';

export async function payForJob(req: Request, res: Response) {
  const { job_id } = req.params;
  const t = await databaseService.transaction();
  try {
    const job = await models.Job.findByPk(job_id);
    if (!job) {
      return createFailResponse(req, res, 404, 'The job was not found');
    }

    if (req.profile.balance < job.price) {
      return createFailResponse(req, res, 400, 'This request cannot be complete due to insufficient balance');
    }

    const contract = await models.Contract.findOne({ where: { clientId: req.profile.id } });
    if (!contract) return createFailResponse(req, res, 404, 'The requested contract was not found');

    try {
      await models.Profile.update(
        {
          balance: req.profile.balance - contract.price,
        },
        { where: { id: req.profile.id } },
        { transaction: t },
      );

      await models.Profile.increment(
        {
          balance: contract.price,
        },
        { where: { id: req.profile.id } },
        { transaction: t },
      );
    } catch (error) {
      await t.commit();
      throw error;
    }

    createSuccessResponse(res, 200);
  } catch (e) {
    createErrorResponse(req, res, 500, e.message, e);
  }
}
