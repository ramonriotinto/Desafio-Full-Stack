import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { IContactResponse } from "../../interfaces/contact.interface";
import { listRespContactSchema } from "../../schemas/contact.schema";

export const listContactsService = async (): Promise<IContactResponse[]> => {
    const contactRepository = AppDataSource.getRepository(Contacts);

    const contacts = await contactRepository.find();

    const respContacts = await listRespContactSchema.validate(contacts, {
        stripUnknown: true,
    });

    return respContacts;
};
