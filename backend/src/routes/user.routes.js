import express from 'express';
import { protectRoute } from '../middleware/auth.middleware.js';
import { getUserProfile } from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/profile', protectRoute, getUserProfile);

export default userRouter