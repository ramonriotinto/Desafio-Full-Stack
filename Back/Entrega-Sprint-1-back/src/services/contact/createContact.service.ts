import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { User } from "../../entities/user.entity";
import {
    IContactRequest,
    IContactResponse,
} from "../../interfaces/contact.interface";
import { respContactSchema } from "../../schemas/contact.schema";

export const createContactService = async (
    { avatar, username, telephone, email }: IContactRequest,
    userId: string
): Promise<IContactResponse> => {
    const contactRepository = AppDataSource.getRepository(Contacts);

    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: userId });

    const createContact = contactRepository.create({
        avatar: avatar,
        username: username,
        telephone: telephone,
        email: email,
        users: user,
    });

    await contactRepository.save(createContact);

    const respContact = await respContactSchema.validate(createContact, {
        stripUnknown: true,
    });

    return respContact;
};
