import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { AppError } from "../../errors/app.Error";

export const contactExistsMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const contactRepository = AppDataSource.getRepository(Contacts);

    const findContact = await contactRepository.findOne({
        where: {
            id: req.params.id,
        },
    });

    if (!findContact) {
        throw new AppError("Contact not found", 404);
    }

    return next();
};
