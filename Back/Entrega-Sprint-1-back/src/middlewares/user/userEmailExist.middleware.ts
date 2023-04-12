import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/app.Error";

export const UserEmailExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User);
    console.log("TESTE EMAIL", req.body.email);
    const findUser = await userRepository.findOneBy({ email: req.body.email });

    if (findUser) {
        throw new AppError("Existing Email", 404);
    }

    return next();
};
