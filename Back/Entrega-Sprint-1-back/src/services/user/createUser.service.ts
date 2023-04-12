import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserRequest, IUserResponse } from "../../interfaces/user.interface";
import { respUserSchema } from "../../schemas/user.schema";

export const createUserService = async (
    date: IUserRequest
): Promise<IUserResponse> => {
    const userRepository = AppDataSource.getRepository(User);

    const createUser = userRepository.create(date);

    await userRepository.save(createUser);

    const resUser = await respUserSchema.validate(createUser, {
        stripUnknown: true,
    });

    return resUser;
};
