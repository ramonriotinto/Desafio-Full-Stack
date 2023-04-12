import { Request, Response } from "express";
import { IUserLogin } from "../interfaces/user.interface";
import { loginUserService } from "../services/login/loginUser.service";

export const loginUserController = async (req: Request, res: Response) => {
    const loginDate: IUserLogin = req.body;
    const { findUsers, tokenUser } = await loginUserService(loginDate);
    return res.status(200).json({ findUsers, tokenUser });
};
