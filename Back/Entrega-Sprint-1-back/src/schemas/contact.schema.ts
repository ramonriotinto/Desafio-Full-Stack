import * as yup from "yup";
import { SchemaOf } from "yup";
import {
    IContact,
    IContactRequest,
    IContactResponse,
    IContactUpdate,
} from "../interfaces/contact.interface";

export const respContactUserSchema: SchemaOf<IContact> = yup.object().shape({
    id: yup.string().notRequired(),
    avatar: yup.string().notRequired(),
    username: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    telephone: yup.string().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
});

export const respContactSchema: SchemaOf<IContactResponse> = yup
    .object()
    .shape({
        id: yup.string().notRequired(),
        avatar: yup.string().notRequired(),
        username: yup.string().notRequired(),
        email: yup.string().email().notRequired(),
        telephone: yup.string().notRequired(),
        createdAt: yup.date().notRequired(),
        updatedAt: yup.date().notRequired(),
    });

export const listRespContactSchema = yup.array(respContactSchema);

export const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({
    avatar: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.string().required(),
});

export const contactUpdateSchema: SchemaOf<IContactUpdate> = yup
    .object()
    .shape({
        avatar: yup.string().notRequired(),
        username: yup.string().notRequired(),
        email: yup.string().email().notRequired(),
        telephone: yup.string().notRequired(),
    });
