import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity";
import { respContactSchema } from "../../schemas/contact.schema";

export const listContactIDService = async (idUser: string) => {
    const contactRepository = AppDataSource.getRepository(Contacts);

    const findContact = await contactRepository.findOneBy({ id: idUser });

    const respContact = await respContactSchema.validate(findContact, {
        stripUnknown: true,
    });

    return respContact;
};
