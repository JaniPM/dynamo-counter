import { Response, Request } from 'express';
import * as service from './auth-service';

const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const username = req.body.username;
    await service.createUser(username);
    res.status(200).json({ username });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { createUser };
