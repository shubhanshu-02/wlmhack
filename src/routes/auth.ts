import express from 'express';
import { register, login } from '@/controllers/auth';

const router = express.Router();

enum ROUTER_URL {
  REGISTER = '/register',
  LOGIN = '/login',
}

router.post(ROUTER_URL.REGISTER, register);

//@ts-ignore
router.post(ROUTER_URL.LOGIN, login);

export default router;
