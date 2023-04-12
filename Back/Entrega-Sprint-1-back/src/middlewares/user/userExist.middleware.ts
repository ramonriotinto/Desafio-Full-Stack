import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/app.Error";

export const UserExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOne({
        where: {
            id: req.params.id,
        },
    });

    if (!findUser) {
        throw new AppError("User not found", 404);
    }

    return next();
};
