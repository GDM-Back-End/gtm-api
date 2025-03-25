/**
import { Request, Response } from 'express';
import { UserService } from '@modules/users/services/user.service';
import { IUser } from '@core/interfaces/user.interface';

const userService = new UserService();

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user: IUser = req.body;
    const newUser = await userService.addUser(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
*/