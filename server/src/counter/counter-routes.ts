import { Router } from 'express';
import { getCounters, increaseCounter } from './counter-controller';
import { authorize } from '../auth/auth-middleware';

const router: Router = Router();

router.get('/', getCounters);
router.put('/:username', authorize, increaseCounter);

export default router;
