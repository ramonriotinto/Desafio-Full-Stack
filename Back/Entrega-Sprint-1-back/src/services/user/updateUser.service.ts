import { IUser, IUserUpdate } from "../../interfaces/user.interface";
import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { hash } from "bcryptjs";
import { AppError } from "../../errors/app.Error";
import { respUserSchema } from "../../schemas/user.schema";

export const updateUserService = async (
    userData: IUserUpdate,
    userId: string
): Promise<IUser> => {
    const { avatar, username, email, password, telephone } = userData;

    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOneBy({
        id: userId,
    });

    if (!findUser) {
        throw new AppError("User not found", 404);
    }

    await userRepository.update(userId, {
        avatar: avatar ? avatar : findUser.avatar,
        username: username ? username : findUser.username,
        email: email ? email : findUser.email,
        password: password ? await hash(password, 10) : findUser.password,
        telephone: telephone ? telephone : findUser.telephone,
    });

    const findUserResponse = await userRepository.findOneBy({
        id: userId,
    });

    const response = await respUserSchema.validate(findUserResponse, {
        stripUnknown: true,
    });

    return response;
};
