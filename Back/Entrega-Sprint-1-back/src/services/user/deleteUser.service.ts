import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/app.Error";

export const deleteUserService = async (userId: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOne({
        where: {
            id: userId,
        },
    });

    if (!findUser) {
        throw new AppError("User not found", 404);
    }

    if (findUser.isActive == false) {
        throw new AppError("User is already deleted", 400);
    }

    await userRepository.update(userId, { isActive: false });

    await userRepository.softRemove(findUser!);
};
