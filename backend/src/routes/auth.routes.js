import express from 'express'
import { loginUser, registerUser } from '../controllers/auth.controller.js'

const authRouter = express.Router();

// auth routes
authRouter.post('/register', registerUser);
authRouter.post('/login', loginUser);

export default authRouter;