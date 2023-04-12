import AppDataSource from "../../data-source";
import { Contacts } from "../../entities/contact.entity";

export const deleteContactService = async (contactId: string) => {
    const contactRepository = AppDataSource.getRepository(Contacts);

    const findContact = await contactRepository.findOne({
        where: { id: contactId },
    });

    await contactRepository.remove(findContact);
};
