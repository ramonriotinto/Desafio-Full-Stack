import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors/app.Error";

export const userIsOwnerMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { id, isActive } = req.user;

    if (id !== req.params.id) {
        throw new AppError("Not Authorization", 401);
    }

    if (isActive === false) {
        throw new AppError("Not Authorization", 401);
    }

    return next();
};
