import { Router } from "express";
import {
    createContactController,
    deleteContactController,
    listContactByIdController,
    listContactController,
    updateContactController,
} from "../controllers/contact.controller";
import { contactExistsMiddleware } from "../middlewares/contact/contactExist.middleware";
import { userAuthenticateMiddleware } from "../middlewares/user/userAuthenticate.middleware";
import { userDataIsValidMiddleware } from "../middlewares/user/userDataIsValid.middleware";
import { contactSchema, contactUpdateSchema } from "../schemas/contact.schema";

export const contactsRoutes = Router();

contactsRoutes.post(
    "/:id",
    userDataIsValidMiddleware(contactSchema),
    userAuthenticateMiddleware,
    createContactController
);

contactsRoutes.get("", userAuthenticateMiddleware, listContactController);

contactsRoutes.get(
    "/:id",
    userAuthenticateMiddleware,
    contactExistsMiddleware,
    listContactByIdController
);

contactsRoutes.patch(
    "/:id",
    userDataIsValidMiddleware(contactUpdateSchema),
    userAuthenticateMiddleware,
    contactExistsMiddleware,
    updateContactController
);

contactsRoutes.delete(
    "/:id",
    userAuthenticateMiddleware,
    contactExistsMiddleware,
    deleteContactController
);
