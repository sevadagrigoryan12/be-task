import { Request, Response, NextFunction } from 'express';
import models from 'models';

export const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  const profile = await models.Profile.findOne({ where: { id: req.get('profile_id') || 0 } });
  if (!profile) return res.status(401).end();
  req.profile = profile;
  next();
};
