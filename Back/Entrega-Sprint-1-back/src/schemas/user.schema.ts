import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserContactResp } from "../interfaces/contact.interface";
import {
    IUserRequest,
    IUserResponse,
    IUserUpdate,
} from "../interfaces/user.interface";

export const UserContactRespSchema: SchemaOf<IUserContactResp> = yup
    .object()
    .shape({
        id: yup.string().notRequired(),
        username: yup.string().notRequired(),
    });

export const respUserSchema: SchemaOf<IUserResponse> = yup.object().shape({
    id: yup.string().notRequired(),
    avatar: yup.string().notRequired(),
    username: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    telephone: yup.string().notRequired(),
    isActive: yup.boolean().notRequired(),
    createdAt: yup.date().notRequired(),
    updatedAt: yup.date().notRequired(),
});

export const listRespUserSchema = yup.array(respUserSchema);

export const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
    avatar: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    telephone: yup.string().required(),
});

export const updateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
    avatar: yup.string().notRequired(),
    username: yup.string().notRequired(),
    email: yup.string().email().notRequired(),
    password: yup.string().notRequired(),
    telephone: yup.string().notRequired(),
});
