import { Response, Request, NextFunction } from 'express';
import * as service from './auth-service';

/**
 * Middleware to authorize requests in a very naive way.
 * TODO: This is the place to handle actual JWT token validation.
 */
export const authorize = (req: Request, res: Response, next: NextFunction) => {
  const username = req.params.username;

  if (!service.isAuthorized(username)) {
    return res.sendStatus(403);
  }

  next();
};
