import { Router } from "express";
import { getAllUsers, addUser } from "@modules/users/controllers/userController";

const userRouter = Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/users", addUser);

export default userRouter;
