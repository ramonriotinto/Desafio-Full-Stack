import { IContactResponse } from "./contac.interfaces";

export interface IUser {
    id: string;
    avatar: string;
    username: string;
    email: string;
    telephone: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserRequest {
    avatar: string;
    username: string;
    email: string;
    telephone: string;
    password: string;
}

export interface IUserResponse {
    id: string;
    avatar: string;
    username: string;
    email: string;
    telephone: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    contacts: [IContactResponse];
}

export interface IUserUpdate {
    avatar?: string;
    username?: string;
    email?: string;
    password?: string;
    telephone?: string;
}
