import { Request, Response } from 'express';

import { createErrorResponse, createSuccessResponse, createFailResponse } from 'utils/response';
import models from 'models';

export async function depositStrategy(req: Request, res: Response) {
  try {
    const jobs = await models.Job.findAll({
      where: {
        paid: false,
      },
      include: {
        model: models.Contract,
        clientId: req.profile.id,
      },
    });

    const maxAmountOfDeposit =
      (jobs.reduce((acc: number, curr: { price: number }) => acc + curr['price'], 0) * 25) / 100;

    if (req.body.amount > maxAmountOfDeposit) {
      return createFailResponse(req, res, 400, `Client can't deposit more than 25% his total of jobs to pay`);
    }

    await models.Profile.update(
      {
        balance: req.profile.balance + req.body.amount,
      },
      { where: { id: req.profile.id } },
    );

    createSuccessResponse(res, 200);
  } catch (e) {
    createErrorResponse(req, res, 500, e.message, e);
  }
}
