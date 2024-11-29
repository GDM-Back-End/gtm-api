import { Router } from 'express';
import { getAllUsers, addUser } from '@modules/users/controllers/user.controller';

const userRouter = Router();

userRouter.get('/users', getAllUsers);
userRouter.post('/users', addUser);

export { userRouter };
