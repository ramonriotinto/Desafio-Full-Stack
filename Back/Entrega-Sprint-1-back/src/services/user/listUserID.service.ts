import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

export const listUserIDService = async (idUser: string) => {
    const userRepository = AppDataSource.getRepository(User);

    const findUser = await userRepository.findOne({
        where: { id: idUser },
        relations: { contacts: true },
    });

    return findUser;
};
