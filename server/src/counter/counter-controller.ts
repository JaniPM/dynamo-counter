import { Response, Request } from 'express';
import * as service from './counter-service';

const getCounters = async (req: Request, res: Response): Promise<void> => {
  try {
    const counters = await service.getCounters();
    res.status(200).json({ counters });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const increaseCounter = async (req: Request, res: Response): Promise<void> => {
  try {
    const username = req.params.username;
    const counters = await service.increaseCounter(username);
    res.status(200).json({ counters });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { getCounters, increaseCounter };
