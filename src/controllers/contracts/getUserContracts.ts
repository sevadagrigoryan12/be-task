import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { CONTRACT_STATUS } from '../../types/enum';
import models from 'models';
import { createErrorResponse, createSuccessResponse } from '../../utils/response';

export async function getUserContracts(req: Request, res: Response) {
  try {
    const contracts = await models.Contract.findAll({
      where: {
        [Op.or]: [{ clientId: req.profile.id }, { contractorId: req.profile.id }],
        status: { [Op.not]: CONTRACT_STATUS.TERMINATED },
      },
    });
    createSuccessResponse(res, 200, contracts);
  } catch (e) {
    createErrorResponse(req, res, 500, e.message, e);
  }
}
