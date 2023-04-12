export interface IContact {
    id: string;
    avatar: string;
    username: string;
    email: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IContactRequest {
    avatar: string;
    username: string;
    email: string;
    telephone: string;
}

export interface IContactResponse {
    id: string;
    avatar: string;
    username: string;
    email: string;
    telephone: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IContactUpdate {
    avatar?: string;
    username?: string;
    email?: string;
    telephone?: string;
}

export interface IUserContactResp {
    id: string;
    username: string;
}
