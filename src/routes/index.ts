import express from 'express';

import authRouter from './auth';

const router = express.Router();

// Mount under common prefixes
//router.use('/api', require('./api'));

enum ROUTER_URL {
  AUTH = '/auth',
}

router.use(ROUTER_URL.AUTH, authRouter);

export default router;
