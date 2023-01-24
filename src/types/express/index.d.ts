import { ALLOWED_USER_TYPES } from '../enum';

export {};

declare global {
  namespace Express {
    interface Request {
      profile: {
        id: number;
        firstName: string;
        lastName: string;
        profession: string;
        balance: number;
        type: ALLOWED_USER_TYPES;
      };
    }
  }
}
