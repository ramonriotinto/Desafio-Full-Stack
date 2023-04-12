import { Request, Response } from "express";
import {
    IContactRequest,
    IContactUpdate,
} from "../interfaces/contact.interface";
import { createContactService } from "../services/contact/createContact.service";
import { deleteContactService } from "../services/contact/deleteContact.service";
import { listContactsService } from "../services/contact/listContact.service";
import { listContactIDService } from "../services/contact/listContactID.service";
import { updateContactService } from "../services/contact/updateContact.service";

export const createContactController = async (req: Request, res: Response) => {
    const { avatar, username, telephone, email }: IContactRequest = req.body;
    const userId = req.user.id;
    const createContact = await createContactService(
        { avatar, username, telephone, email },
        userId
    );
    return res.status(201).json(createContact);
};

export const listContactController = async (req: Request, res: Response) => {
    const contacts = await listContactsService();
    return res.status(200).json(contacts);
};

export const listContactByIdController = async (
    req: Request,
    res: Response
) => {
    const contactId = req.params.id;
    const listIDContact = await listContactIDService(contactId);
    return res.status(200).json(listIDContact);
};

export const updateContactController = async (req: Request, res: Response) => {
    const contactData: IContactUpdate = req.body;
    const contactId = req.params.id;
    const updateContact = await updateContactService(contactData, contactId);
    return res.status(200).json(updateContact);
};

export const deleteContactController = async (req: Request, res: Response) => {
    const contactId = req.params.id;
    const deleteContact = await deleteContactService(contactId);
    return res.status(204).json(deleteContact);
};
