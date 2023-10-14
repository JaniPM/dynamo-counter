import { Router } from 'express';
import { createUser } from './auth-controller';

const router: Router = Router();

router.post('/login', createUser);

export default router;
