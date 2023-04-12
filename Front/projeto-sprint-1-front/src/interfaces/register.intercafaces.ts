import { IUserRequest } from "./user.interfaces";

export interface IRegisterContextProps {
    children: React.ReactNode;
}

export interface IRegisterContext {
    sendRegister: (data: IUserRequest) => void;
}
