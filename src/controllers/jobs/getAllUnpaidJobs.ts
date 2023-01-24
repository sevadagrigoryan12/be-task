import { Request, Response } from 'express';
import { Op } from 'sequelize';

import models from 'models';
import { createErrorResponse, createSuccessResponse } from 'utils/response';
import { CONTRACT_STATUS } from 'types/enum';

export async function getAllUnpaidJobs(req: Request, res: Response) {
  try {
    const contracts = await models.Job.findAll({
      where: {
        paid: false,
      },
      include: {
        model: models.Contract,
        where: {
          status: CONTRACT_STATUS.IN_PROGRESS,
          [Op.or]: [{ clientId: req.profile.id }, { contractorId: req.profile.id }],
        },
      },
    });
    createSuccessResponse(res, 200, contracts);
  } catch (e) {
    createErrorResponse(req, res, 500, e.message, e);
  }
}
