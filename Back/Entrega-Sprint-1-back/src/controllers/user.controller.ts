import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/user.interface";
import { createUserService } from "../services/user/createUser.service";
import { deleteUserService } from "../services/user/deleteUser.service";
import { listUsersService } from "../services/user/listUser.service";
import { listUserIDService } from "../services/user/listUserID.service";
import { updateUserService } from "../services/user/updateUser.service";

export const createUserController = async (req: Request, res: Response) => {
    const user: IUserRequest = req.body;
    const createUser = await createUserService(user);
    return res.status(201).json(createUser);
};

export const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService();
    return res.status(200).json(users);
};

export const listUserByIdController = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const listIDUser = await listUserIDService(userId);
    return res.status(200).json(listIDUser);
};

export const updateUserController = async (req: Request, res: Response) => {
    const userData: IUserUpdate = req.body;
    const userId = req.params.id;
    const updatedUser = await updateUserService(userData, userId);
    return res.status(200).json(updatedUser);
};

export const deleteUserController = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const deleteUser = await deleteUserService(userId);
    return res.status(204).json("Usuário Deletado");
};
