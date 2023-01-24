import { Request, Response } from 'express';
import { createErrorResponse, createSuccessResponse, createFailResponse } from 'utils/response';
import models from 'models';

export async function getContractById(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const contract = await models.Contract.findOne({ where: { id, clientId: req.profile.id } });
    if (!contract) return createFailResponse(req, res, 404, 'The requested contract was not found');
    createSuccessResponse(res, 200, contract);
  } catch (e) {
    createErrorResponse(req, res, 500, e.message, e);
  }
}
