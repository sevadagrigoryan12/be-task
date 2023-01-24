import { Request, Response } from 'express';
import { Op } from 'sequelize';
import { CONTRACT_STATUS } from '../../types/enum';
import models from 'models';
import { createErrorResponse, createSuccessResponse } from '../../utils/response';

export async function getUserContract(req: Request, res: Response) {
  try {
    const contracts = await models.Contract.findAll({
      where: { ClientId: req.profile.id, status: { [Op.not]: CONTRACT_STATUS.TERMINATED } },
    });
    createSuccessResponse(res, 200, contracts);
  } catch (e) {
    createErrorResponse(req, res, 500, e.message, e);
  }
}
