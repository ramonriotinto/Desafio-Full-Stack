import AppDataSource from "../../data-source";
import { IContactUpdate } from "../../interfaces/contact.interface";
import { Contacts } from "../../entities/contact.entity";
import { AppError } from "../../errors/app.Error";
import { respContactSchema } from "../../schemas/contact.schema";

export const updateContactService = async (
    contactData: IContactUpdate,
    contactId: string
) => {
    const { avatar, username, email, telephone } = contactData;

    const contactRepository = AppDataSource.getRepository(Contacts);

    const findContact = await contactRepository.findOneBy({
        id: contactId,
    });

    if (!findContact) {
        throw new AppError("Contact not found", 404);
    }

    await contactRepository.update(contactId, {
        avatar: avatar ? avatar : findContact.avatar,
        username: username ? username : findContact.username,
        email: email ? email : findContact.email,
        telephone: telephone ? telephone : findContact.telephone,
    });

    const findContactResponse = await contactRepository.findOneBy({
        id: contactId,
    });

    const response = await respContactSchema.validate(findContactResponse, {
        stripUnknown: true,
    });

    return response;
};
