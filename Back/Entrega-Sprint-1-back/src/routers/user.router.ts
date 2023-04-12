import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    listUserByIdController,
    listUsersController,
    updateUserController,
} from "../controllers/user.controller";
import { userAuthenticateMiddleware } from "../middlewares/user/userAuthenticate.middleware";
import { userDataIsValidMiddleware } from "../middlewares/user/userDataIsValid.middleware";
import { UserExistsMiddleware } from "../middlewares/user/userExist.middleware";
import { userIsOwnerMiddleware } from "../middlewares/user/userNotOwner.middleware";
import { updateSchema, userSchema } from "../schemas/user.schema";
import { UserEmailExistsMiddleware } from "../middlewares/user/userEmailExist.middleware";

export const userRoutes = Router();

userRoutes.post(
    "",
    userDataIsValidMiddleware(userSchema),
    UserEmailExistsMiddleware,
    createUserController
);

userRoutes.get("", userAuthenticateMiddleware, listUsersController);

userRoutes.get(
    "/:id",
    userAuthenticateMiddleware,
    UserExistsMiddleware,
    userIsOwnerMiddleware,
    listUserByIdController
);

userRoutes.patch(
    "/:id",
    userDataIsValidMiddleware(updateSchema),
    userAuthenticateMiddleware,
    UserExistsMiddleware,
    userIsOwnerMiddleware,
    updateUserController
);

userRoutes.delete(
    "/:id",
    userAuthenticateMiddleware,
    UserExistsMiddleware,
    userIsOwnerMiddleware,
    deleteUserController
);
