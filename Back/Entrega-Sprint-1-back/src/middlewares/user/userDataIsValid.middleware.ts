import { Request, Response, NextFunction } from "express";
import { AnySchema } from "yup";
import { AppError } from "../../errors/app.Error";

export const userDataIsValidMiddleware =
    (schema: AnySchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const validated = await schema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true,
            });

            req.body = validated;

            return next();
        } catch (error: any) {
            console.log(error);
            throw new AppError("Invalid Body", 409);
        }
    };
